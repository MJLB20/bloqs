/*global $:false */
/*global document:false */
/*global SVG:false */
/*global Option:false */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
"use strict";
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
var utils = utils || {};
var connectionThreshold = 20; // px
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
utils.oppositeConnection = {
    inputs: 'output',
    output: 'inputs',
    up: 'down',
    down: 'up'
};
utils.manageConnections = function(type, bloq1Connection, bloq2Connection, bloq1, bloq2, inputID) {
    if (bloq2Connection !== undefined && bloq1Connection !== undefined) {
        if (utils.itsOver(bloq1Connection.connectorArea, bloq2Connection.connectorArea)) {
            if (bloq1Connection.type === bloq2Connection.type) { // if the type is the same --> connect
                console.log('CONNECT!');
                var deltaParent = {
                    x: bloq1Connection.connectorArea.x1 - bloq2Connection.connectorArea.x1,
                    y: bloq1Connection.connectorArea.y1 - bloq2Connection.connectorArea.y1
                };
                var deltaChild = {
                    x: bloq2Connection.connectorArea.x1 - bloq1Connection.connectorArea.x1,
                    y: bloq2Connection.connectorArea.y1 - bloq1Connection.connectorArea.y1
                };
                if (type === 'inputs' || type === 'down') { // parent is bloq1
                    //move bloq
                    bloq1.updateBloqs(bloq1, bloq2, utils.oppositeConnection[type], inputID);
                    bloq2.moveTo(bloq1.getConnectionPosition(type, bloq2, inputID));
                    bloq2.updateConnectors(deltaParent);
                    bloq1Connection.bloq = bloq2;
                    //move bloq's children
                    bloq2.moveChildren(deltaParent);
                    //put child bloq on top if it is not already: 
                    utils.bloqOnTop(bloq2);
                } else { //parent is bloq2
                    //move bloq
                    bloq1.updateBloqs(bloq2, bloq1, type, inputID);
                    bloq1.moveTo(bloq2.getConnectionPosition(utils.oppositeConnection[type], bloq1, inputID));
                    bloq1.updateConnectors(deltaChild);
                    bloq2Connection.bloq = bloq1;
                    //move bloq's children
                    bloq1.moveChildren(deltaChild);
                    //put child bloq on top if it is not already: 
                    utils.bloqOnTop(bloq1);
                }
                bloq1.resetLastDelta();
                return true;
            } else { //reject
                utils.rejectBloq(bloq1);
                bloq1.resetLastDelta();
            }
        } else {}
    }
    return false;
};
utils.itsOver = function(dragRect, staticRect) {
    if (dragRect !== undefined && staticRect !== undefined) {
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1);
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1 < staticRect.x2, dragRect.x2 > staticRect.x1, dragRect.y1 < staticRect.y2, dragRect.y2 > staticRect.y1);
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1, staticRect.x2, dragRect.x2, staticRect.x1, dragRect.y1, staticRect.y2, dragRect.y2, staticRect.y1);
        return dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1;
    } else {
        return false;
    }
};
utils.rejectBloq = function(bloq) {
    var rejectionLocation = {
        x: 50,
        y: 0
    };
    bloq.move2({
        x: rejectionLocation.x,
        y: rejectionLocation.y
    });
};

utils.bloqOnTop = function(bloq) {
    // bloq.bloqnode.parentNode.appendChild(bloq.node);
    // var child = {};
    // for (var i in bloq.relations.children) {
    //     child = bloq.relations.children[i].bloq;
    //     utils.bloqOnTop(child); //.node.parentNode.appendChild(child.node);
    // }
};
utils.getOutputBloq = function(bloq, posx, width, height) {
    var path = 'm 36,32 c -4.418,0 -8,-2.582 -8,-7 0,-4.418 3.582,-7 8,-7 l 0,14 z';
    var group = bloq.group();
    var connector = bloq.path(path).fill('#cccccc'); //.move(posx, posy);
    connector.x(posx);
    group.add(connector);
    var outputBloq = bloq.rect(width, height).fill('#cccccc').radius(4).move(posx + 8, 0);
    group.add(outputBloq);
    return group;
};
// utils.getBloqPath = function(bloq, bloqData) {
//     
//     var path = "m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 217.11582946777344 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 60 v 25 H 30 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z";
//     if (bloqData.down) {
//         // if it has a down connection, it has to have an up one
//         // lets see if it has inputs
//         if (bloqData.hasOwnProperty('inputs') && bloqData.inputs.length > 0) {
//             // deal with the inputs
//         } else {
//             // this bloq has no inputs, only top and down
//             path = 'M4.000,0.000 C4.000,0.000 321.000,0.000 321.000,0.000 C323.209,0.000 325.000,1.791 325.000,4.000 C325.000,4.000 325.000,46.000 325.000,46.000 C325.000,48.209 323.209,50.000 321.000,50.000 C321.000,50.000 4.000,50.000 4.000,50.000 C1.791,50.000 -0.000,48.209 -0.000,46.000 C-0.000,46.000 -0.000,4.000 -0.000,4.000 C-0.000,1.791 1.791,0.000 4.000,0.000 Z';
//         }
//         // deal with inner bottoms
//         // deal with inner inputs
//     } else if ((!bloqData.hasOwnProperty('down') || bloqData.down === false) && (!bloqData.hasOwnProperty('up') || bloqData.up === false)) {
//         // bloq without up or down connections
//         // this means that we have at least an output
//         if (bloqData.hasOwnProperty('inputs') && bloqData.inputs.length > 0) {
//             // deal with the inputs
//             path = 'm 0,0 H 88.04196166992188 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z';
//         } else {
//             // this bloq has no inputs
//             // absolute coordinates for path
//             utils.getOutputBloq(bloq, 0, bloq.size.width, bloq.size.height);
//             // path = 'M256,50 C256,50 12,50 12,50 C9.791,50 8,48.209 8,46 C8,46 8,33 8,33 C3.582,33 0,29.418 0,25 C0,20.582 3.582,17 8,17 C8,17 8,4 8,4 C8,1.791 9.791,0 12,0 C12,0 256,0 256,0 C258.209,0 260,1.791 260,4 C260,4 260,46 260,46 C260,48.209 258.209,50 256,50 Z';
//         }
//     } else if (bloqData.up && !bloqData.hasOwnProperty('down')) {
//         // bloq with only top
//     }
//     return path;
// };
utils.getBloqById = function(nodeId, data) {
    for (var bloqIndex in data.bloqs) {
        var bloq = data.bloqs[bloqIndex];
        if (bloq.id == nodeId) {
            return bloq;
        }
    }
    return null;
};
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function Bloq(bloqData, canvas, position, data) {
    this.bloqBody = canvas.group().move(position[0], position[1]);
    this.bloqData = bloqData;
    this.canvas = canvas;
    this.data = data;
    this.size = {
        width: 100,
        height: 50
    };
    this.delta = {
        x: 0,
        y: 0,
        lastx: 0,
        lasty: 0
    };
    this.bloqInput = {
        width: 70,
        height: 50
    };
    this.code = this.bloqData.code;
    /**
     * We store relations here, using nodes
     * @type {{parent: undefined, children: Array}}
     */
    this.relations = {
        parent: undefined,
        children: [],
        codeChildren: [],
        inputChildren: []
    };
    //Create the connectors using the bloq information
    this.createConnectors();
    // basic shape of the bloq
    this.body = this.bloqBody.rect(this.size.width, this.size.height).fill(bloqData.color).radius(4);
    this.id = this.body.node.id;
    // this.border = this.path(path).fill(bloqData.color).hide(); // give a hidden 'body' to the border path
    // this.border.stroke({
    //     color: '#e5a33b',
    //     width: 3
    // });
    this.size = {
        width: this.bloqBody.bbox().width,
        height: this.bloqBody.bbox().height
    };
    this.childrenHeight = 0;
    if (this.bloqData.hasOwnProperty('text')) {
        this.createBloqUI();
    }
    this.bloqBody.dragmove = Bloq.prototype.dragmove;
    this.bloqBody.dragend = Bloq.prototype.dragend;
    var that = this;
    this.bloqBody.getBloqObject = function() {
        return that;
    };
}
/**
 * Resize a bloq and update its down connector, if any
 * @param bloq
 * @param delta
 */
Bloq.prototype.resize = function(delta) {
    this.size.width += delta.x;
    this.size.height += delta.y;
    if (this.bloqBody.children !== undefined) {
        this.bloqBody.children()[0].size(this.size.width, this.size.height);
    } else {
        this.bloqBody.size(this.size.width, this.size.height);
    }
    // this.border.size(this.size.width, this.size.height);
    // //this.selection.size(this.size.width, this.size.height);
    //update down connector:
    if (this.connections.down !== undefined) {
        this.updateConnector(this.connections.down, {
            x: 0,
            y: delta.y
        });
    }
};
/**
 * We start dragging
 */
Bloq.prototype.dragmove = function(a) {
    //Set the dragmove flag to true because we are dragging the bloq
    this.dragmoveFlag = true;
    //Get the parent bloq to use its functions
    var bloq = this.getBloqObject();
    //move dragged bloq on top
    utils.bloqOnTop(this.bloqBody);
    // remove parent of this and child in parent:
    if (bloq.relations.parent !== undefined) {
        var parentBloq = utils.getBloqById(bloq.relations.parent, bloq.data);
        //resize UI if needed
        parentBloq.resizeUI();
        //remove child from parent and parent from child
        parentBloq.deleteChild(this.getBloqObject());
        this.getBloqObject().deleteParent(false);
    }
    //update the deltas:
    bloq.updateDeltas(a);
    //Update the bloq's connectors using the new deltas
    bloq.updateConnectors(bloq.delta);
    // move child bloqs along with this one
    bloq.moveChildren({x:bloq.delta.x, y:bloq.delta.y});
};
/**
 * We stop dragging
 */
Bloq.prototype.dragend = function() {
    //Flag used to prevent the execution of these functions when dragend is called after just a click on the bloq!
    if (this.dragmoveFlag) {
        //Get the parent bloq to use its functions
        var bloq = this.getBloqObject();
        //Initialize lastx y lasty
        bloq.resetLastDelta();
        //Check for connections:
        bloq.searchNewConnections();
        this.dragmoveFlag = false;
    }
};

Bloq.prototype.updateConnector = function(connector, delta) {
    connector.connectionPosition.x += delta.x;
    connector.connectionPosition.y += delta.y;
    connector.connectorArea.x1 += delta.x;
    connector.connectorArea.x2 += delta.x;
    connector.connectorArea.y1 += delta.y;
    connector.connectorArea.y2 += delta.y;
    if (connector.UI !== undefined) {
        connector.UI.move(connector.UI.x() + delta.x, connector.UI.y() + delta.y);
    }
    return connector;
};


/**
 * Updates de position of the connectors of a bloq (used after modifying the bloq's position)
 * @param bloq
 */
Bloq.prototype.updateConnectors = function(delta) {
    for (var type in this.connections) {
        if (this.connections[type] && type === 'inputs') {
            for (var i in this.connections[type]) {
                this.updateConnector(this.connections[type][i], delta);
            }
        } else if (this.connections[type]) {
            this.updateConnector(this.connections[type], delta);
        }
    }
};

Bloq.prototype.moveConnector = function(connection, delta) {
    //Move connector 
    connection = this.updateConnector(connection, delta);
    //If there is a bloq connected, move the bloq also
    if (connection.bloq !== undefined) {
        var bloqConnected = connection.bloq;
        bloqConnected.move2(delta);
    }
    //Update bloq's size
    this.resize(delta);
};
Bloq.prototype.resizeUI = function() {
    // if (parentBloq.bloqBody.relations.children[this.getBloqObject().id].connection === 'output') {
    //     for (var k in parentBloq.bloqBody.connections.inputs) {
    //         if (parentBloq.bloqBody.connections.inputs[k].inline === true && k === parentBloq.bloqBody.relations.children[this.getBloqObject().id].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
    //             var delta = {
    //                 x: +this.getBloqObject().size.width - parentBloq.size.width,
    //                 y: +this.getBloqObject().size.height - parentBloq.size.height
    //             };
    //             parentBloq.resize(delta);
    //             delta = {
    //                 x: this.getBloqObject().size.width - parentBloq.size.width,
    //                 y: 0
    //             };
    //             for (var i in parentBloq.UIElements) {
    //                 if (parentBloq.UIElements[i].id === parseInt(k, 10)) {
    //                     parentBloq.pushElements(parentBloq.UIElements[i], delta);
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }
};
Bloq.prototype.updateDeltas = function(a) {
    //Update the deltaX and deltaY movements
    this.delta.x = a.x - this.delta.lastx;
    this.delta.y = a.y - this.delta.lasty;
    //Update the lastx and lasty variables
    this.delta.lastx = a.x;
    this.delta.lasty = a.y;
};
Bloq.prototype.getParent = function() {
    return this.relations.parent;
};
Bloq.prototype.resetLastDelta = function() {
    this.delta.lastx = 0;
    this.delta.lasty = 0;
};
Bloq.prototype.searchNewConnections = function() {
    var a;
    for (var j in this.connections) {
        console.log('Searching connection in bloqs connection:++++++++++++++++++++++++++++++++++', j);
        for (var i in this.data.bloqs) {
            if (this.data.bloqs[i].id !== this.id) {
                if (j === 'inputs') {
                    for (var k in this.connections[j]) {
                        a = utils.manageConnections(j, this.connections[j][k], this.data.bloqs[i].connections[utils.oppositeConnection[j]], this, this.data.bloqs[i], k);
                    }
                } else if (j === 'output') {
                    for (var h in this.data.bloqs[i].connections[utils.oppositeConnection[j]]) {
                        a = utils.manageConnections(j, this.connections[j], this.data.bloqs[i].connections[utils.oppositeConnection[j]][h], this, this.data.bloqs[i], h);
                    }
                } else {
                    a = utils.manageConnections(j, this.connections[j], this.data.bloqs[i].connections[utils.oppositeConnection[j]], this, this.data.bloqs[i]);
                }
            }
        }
    }
    console.log('-----------------------------------------------------------------------');
};
///////////////////////// UTILITIES
Bloq.prototype.updateBloqs = function(parent, child, type, inputID) {
    parent.setChildren(child.id, type, inputID);
    child.setParent(parent.id);
};
Bloq.prototype.deleteParent = function(cascade) {
    if (cascade !== false) {
        var parentBloq = utils.getBloqById(this.relations.parent, this.data);
        parentBloq.bloqBody.relations.children = [];
    }
    this.relations.parent = undefined;
};
Bloq.prototype.deleteChild = function(child) {
    var i = 0;
    //remove bloq from connection definition
    if (this.relations.children[child.id] !== undefined && this.relations.children[child.id].connection === 'output') {
        for (i in this.connections.inputs) {
            if (this.connections.inputs[i].bloq !== undefined && this.connections.inputs[i].bloq.id === child.id) {
                this.connections.inputs[i].bloq = undefined;
                break;
            }
        }
    }
    //remove bloq from children 
    delete this.relations.children[child.id];
    for (i in this.relations.codeChildren) {
        if (this.relations.codeChildren[i] === child.id) {
            this.relations.codeChildren.splice(i, 1);
            break;
        }
    }
    delete this.relations.inputChildren[child.id];
    this.getChildrenHeight(true);
};
Bloq.prototype.setChildren = function(childrenId, location, inputID) {
    for (var bloqIndex in this.relations.children) {
        if (childrenId == this.relations.children[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    // if we made it so far, add a new child
    this.relations.children[childrenId] = {
        bloq: utils.getBloqById(childrenId, this.data),
        connection: location,
        inputID: inputID
    };
    for (bloqIndex in this.relations.codeChildren) {
        if (childrenId == this.relations.codeChildren[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    if (location === 'up') {
        this.relations.codeChildren.push(childrenId);
    } else {
        this.relations.inputChildren[childrenId] = {
            bloq: utils.getBloqById(childrenId, this.data),
            id: inputID
        };
    }
    this.getChildrenHeight(true);
    return true;
};
Bloq.prototype.setParent = function(parentId) {
    this.relations.parent = parentId;
    return true;
};
Bloq.prototype.getChildrenHeight = function(flag) {
    // if (flag === true) {
    //     this.childrenHeight = 0;
    // }
    // var child;
    // for (var i in this.relations.codeChildren) {
    //     child = this.relations.codeChildren[i];
    //     child = utils.getBloqById(child, this.data);
    //     this.childrenHeight += child.size.height;
    //     if (child.bloqBody.relations !== undefined && child.bloqBody.relations.codeChildren !== undefined) {
    //         child.getChildrenHeight();
    //     }
    // }
    // if (this.relations.codeChildren.length === 0) {
    //     this.childrenHeight = this.size.height;
    // }
};
/////////// CODE FUNCTIONS
Bloq.prototype.getCode = function(_function) {
    var code = this.code[_function];
    var search = '';
    var replacement = '';
    var id;
    for (var i in this.relations.inputChildren) {
        id = this.relations.inputChildren[i].id;
        id = id.substr(id.indexOf('_') + 1, id.length);
        search = '{[' + id + ']}';
        if (this.relations.inputChildren[i].bloq === 'userInput' || this.relations.inputChildren[i].bloq === 'dropdown') {
            replacement = this.relations.inputChildren[i].code;
        } else {
            replacement = this.relations.inputChildren[i].bloq.getCode(_function);
        }
        code = code.replace(new RegExp(search, 'g'), replacement);
    }
    for (i = 0; i < this.inputsNumber; i++) {
        search = '{[' + i + ']}';
        code = code.replace(new RegExp(search, 'g'), ' ');
    }
    return code;
};
// Bloq.prototype.on('click', function() {
//     // if (this.label.toLowerCase() != 'loop' && this.label.toLowerCase() != 'setup') {
//     //     // remove other borders
//     //     var canvasChilds = canvas.children();
//     //     $.each(canvasChilds, function(index) {
//     //         if (canvasChilds[index].hasOwnProperty('border')) {
//     //             // hide selection
//     //             canvasChilds[index].selection.hide();
//     //         }
//     //     });
//     //     this.selection.show();
//     // }
// });
//////////////////////// CONNECTORS FUNCTIONS
Bloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
    if (connectionType === 'up') {
        return {
            x: this.connections[connectionType].connectionPosition.x,
            y: this.connections[connectionType].connectionPosition.y - bloqToConnect.size.height
        };
    }
    if (connectionType === 'output') {
        return {
            x: this.connections[connectionType].connectionPosition.x - bloqToConnect.size.width,
            y: this.connections[connectionType].connectionPosition.y - inputID * connectionThreshold
        };
    }
    if (connectionType === 'inputs') {
        for (var k in this.connections[connectionType]) {
            //If the input is inline and there is not a bloq connected still
            if (this.connections[connectionType][k].inline === true && k === inputID && this.connections[connectionType][k].bloq === undefined) {
                var delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
                this.resize(delta);
                delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
                for (var i in this.UIElements) {
                    if (this.UIElements[i].id === parseInt(inputID, 10)) {
                        this.pushElements(this.UIElements[i], delta);
                        break;
                    }
                }
            }
        }
        return this.connections[connectionType][inputID].connectionPosition;
    }
    return this.connections[connectionType].connectionPosition;
};
Bloq.prototype.resizeStatementsInput = function() {};
Bloq.prototype.resizeParents = function(direction) {
    var parentBloq = utils.getBloqById(this.relations.parent, this.data);
    while (parentBloq.relations !== undefined && parentBloq.relations.parent !== undefined) {
        parentBloq = utils.getBloqById(parentBloq.relations.parent, this.data);
    }
    if (direction === 'up') {
        parentBloq.resizeStatementsInput({
            x: 0,
            y: -this.childrenHeight
        });
    } else {
        parentBloq.resizeStatementsInput({
            x: 0,
            y: this.childrenHeight
        });
    }
};
Bloq.prototype.createConnectors = function() {
    this.connections = {};
    if (this.bloqData.inputs) {
        this.connections.inputs = [{}];
        for (var i in this.bloqData.inputs) {
            i = parseInt(i, 10);
            this.connections.inputs[i] = {
                connectionPosition: {},
                connectorArea: {},
                type: ''
            };
            this.connections.inputs[i].connectionPosition = {
                x: this.bloqBody.x() + this.size.width,
                y: this.bloqBody.y() + i * connectionThreshold
            };
            this.connections.inputs[i].connectorArea = {
                x1: this.bloqBody.x() + this.size.width - connectionThreshold,
                x2: this.bloqBody.x() + this.size.width + connectionThreshold,
                y1: this.bloqBody.y() + i * connectionThreshold,
                y2: this.bloqBody.y() + i * connectionThreshold + connectionThreshold
            };
            this.connections.inputs[i].type = this.bloqData.inputs[i];
            this.connections.inputs[i].movedDown = false;
            //Update bloq's size
            this.resize({
                x: 0,
                y: connectionThreshold
            });
            this.connections.inputs[i].UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
                fill: getRandomColor()
            }).move(this.bloqBody.x() + this.size.width - connectionThreshold, this.bloqBody.y() + i * connectionThreshold);
        }
    }
    if (this.bloqData.output) {
        this.connections.output = {
            connectionPosition: {},
            connectorArea: {},
            type: this.bloqData.output
        };
        this.connections.output.connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y()
        };
        this.connections.output.connectorArea = {
            x1: this.bloqBody.x() - connectionThreshold,
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y(),
            y2: this.bloqBody.y() + connectionThreshold
        };
        this.connections.output.UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
            fill: '#FFCC33'
        }).move(this.bloqBody.x() - connectionThreshold, this.bloqBody.y());
    }
    if (this.bloqData.up) {
        this.connections.up = {
            connectionPosition: {},
            connectorArea: {}
        };
        this.connections.up.connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y()
        };
        this.connections.up.connectorArea = {
            x1: this.bloqBody.x(),
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y() - connectionThreshold,
            y2: this.bloqBody.y() + connectionThreshold
        };
        this.connections.up.UI = this.canvas.group().rect(connectionThreshold, connectionThreshold * 2).attr({
            fill: '#FF0000'
        }).move(this.bloqBody.x(), this.bloqBody.y() - connectionThreshold);
    }
    if (this.bloqData.down) {
        this.connections.down = {
            connectionPosition: {},
            connectorArea: {}
        };
        this.connections.down.connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y() + this.size.height
        };
        this.connections.down.connectorArea = {
            x1: this.bloqBody.x(),
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y() + this.size.height - connectionThreshold,
            y2: this.bloqBody.y() + this.size.height + connectionThreshold
        };
        this.connections.down.UI = this.canvas.group().rect(connectionThreshold, connectionThreshold * 2).attr({
            fill: '#FF0000'
        }).move(this.bloqBody.x(), this.bloqBody.y() + this.size.height - connectionThreshold);
    }
};
Bloq.prototype.addInput = function(posx, posy, type) {
    var index = 0;
    if (this.connections.inputs !== undefined) {
        index = this.connections.inputs.length;
    } else {
        this.connections.inputs = [{}];
    }
    this.connections.inputs[index] = {
        connectionPosition: {
            x: posx,
            y: posy
        },
        connectorArea: {
            x1: posx - connectionThreshold,
            x2: posx + connectionThreshold,
            y1: posy,
            y2: posy + connectionThreshold
        },
        type: type,
        inline: true,
        movedDown: false
    };
    if (posx !== undefined && posy !== undefined) {
        this.connections.inputs[index].UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
            fill: getRandomColor()
        }).move(posx - connectionThreshold, posy);
    }
    this.inputsNumber = this.connections.inputs.length;
};
////////////////////////    BLOQ UI    ////////////////////////
Bloq.prototype.pushElements = function(UIElement, delta) {
    var elements = UIElement.elementsToPush;
    for (var j in elements) {
        elements[j].bloq.x(elements[j].bloq.x() + delta.x);
        elements[j].bloq.y(elements[j].bloq.y() + delta.y);
        var connector = elements[j].connector;
        if (connector !== undefined) {
            this.moveConnector(connector, delta);
        }
    }
};
Bloq.prototype.appendUserInput = function(inputText, type, posx, posy, id) {
    var text = this.bloqBody.foreignObject(100, 100).attr({
        id: 'fobj',
        color: '#FFCC33'
    });
    text.appendChild("input", {
        id: id,
        value: inputText,
        color: '#FFCC33',
    }).move(posx, posy);
    this.UIElements.push({
        element: text,
        elementsToPush: undefined
    });
    var code;
    if (type === 'number') {
        code = document.getElementById(id).value;
    } else {
        code = '"' + document.getElementById(id).value + '"';
    }
    this.relations.inputChildren[id] = {
        id: id,
        bloq: 'userInput',
        code: code
    };
    this.addInput(undefined, undefined, type);
    document.getElementById(id).addEventListener("mousedown", function(e) {
        e.stopPropagation();
    }, false);
    var that = this;
    //Check that the input of the user is the one spected
    document.getElementById(id).addEventListener("change", function() {
        if (type === 'number') {
            if (isNaN(parseFloat(document.getElementById(id).value))) {
                //If type is number and input is not a number, remove user input. 
                //ToDo : UX warning!
                document.getElementById(id).value = '';
            } else {
                that.relations.inputChildren[id].code = document.getElementById(id).value;
            }
        } else {
            that.relations.inputChildren[id].code = '"' + document.getElementById(id).value + '"';
        }
    }, false);
};
Bloq.prototype.appendDropdownInput = function(dropdownText, type, posx, posy, id) {
    var dropdown = this.bloqBody.foreignObject(100, 100).attr({
        id: id,
        color: '#FFCC33'
    });
    var newList = document.createElement("select");
    for (var i in dropdownText) {
        var newListData = new Option(dropdownText[i].label, dropdownText[i].value);
        //Here we append that text node to our drop down list.
        newList.appendChild(newListData);
    }
    this.addInput(undefined, undefined, type);
    //Append the list to dropdown foreignobject:
    dropdown.appendChild(newList).move(posx, posy);
    this.UIElements.push({
        element: dropdown,
        elementsToPush: undefined
    });
    this.relations.inputChildren[id] = {
        id: id,
        bloq: 'userInput',
        code: newList.value
    };
    var that = this;
    newList.onchange = function() {
        that.relations.inputChildren[id].code = newList.value;
    };
    document.getElementById(id).addEventListener("mousedown", function(e) {
        e.stopPropagation();
    }, false);
};
Bloq.prototype.appendBloqInput = function(inputText, type, posx, posy, inputID) {
    //draw white (ToDo: UX) rectangle
    var bloqInput = utils.getOutputBloq(this.bloqBody, posx, this.bloqInput.width, this.bloqInput.height);
    this.addInput(this.bloqBody.x() + posx, this.bloqBody.y() + posy, type); //bloq.x()+posx + width, bloq.x()+posy + i * connectionThreshold);
    this.bloqBody.add(bloqInput);
    this.UIElements.push({
        element: bloqInput,
        elementsToPush: undefined,
        id: inputID,
        connector: this.connections.inputs[this.connections.inputs.length - 1]
    });
};
Bloq.prototype.createBloqUI = function() {
    var margin = 10;
    var posx = margin;
    var width = 0;
    var posy = margin;
    var inputID = 0;
    this.UIElements = [{}];
    var i = 0;
    var j = 0;
    for (j in this.bloqData.text) {
        for (i in this.bloqData.text[j]) {
            if (typeof(this.bloqData.text[j][i]) === typeof({})) {
                if (this.bloqData.text[j][i].input === 'userInput') {
                    this.appendUserInput(this.bloqData.text[j][i].label, this.bloqData.text[j][i].type, posx, posy, this.id + '_' + inputID);
                    inputID += 1;
                    posx += 110;
                } else if (this.bloqData.text[j][i].input === 'bloqInput') {
                    this.appendBloqInput(this.bloqData.text[j][i].label, this.bloqData.text[j][i].type, posx, posy - margin, inputID);
                    inputID += 1;
                    posx += 110;
                } else if (this.bloqData.text[j][i].input === 'dropdown') {
                    this.appendDropdownInput(this.bloqData.text[j][i].data, this.bloqData.text[j][i].type, posx, posy, this.id + '_' + inputID);
                    inputID += 1;
                    posx += 110;
                }
            } else {
                var text = this.bloqBody.text(this.bloqData.text[j][i]).font({
                    family: 'Helvetica',
                    fill: '#000',
                    size: 14
                }).move(posx, posy);
                posx += this.bloqData.text[j][i].length * 5 + 30;
                this.UIElements.push({
                    element: text,
                    elementsToPush: undefined
                });
            }
        }
        if (posx > width) {
            width = posx;
        }
        posx = margin;
        posy += 40;
    }
    this.UIElements.shift();
    //Add the elements that must be pushed
    for (i in this.UIElements) {
        this.UIElements[i].elementsToPush = [{}];
        for (j in this.UIElements) {
            if (j > i) {
                this.UIElements[i].elementsToPush.push({
                    bloq: this.UIElements[j].element,
                    connector: this.UIElements[j].connector
                });
            }
        }
        this.UIElements[i].elementsToPush.shift();
    }
    //Update bloq's size
    this.resize({
        x: width - this.size.width,
        y: posy - this.size.height
    });
};
////////////////////////    MOVE BLOQS    ////////////////////////
Bloq.prototype.moveTo = function(location) {
    this.bloqBody.x(location.x);
    this.bloqBody.y(location.y);
};
Bloq.prototype.move2 = function(delta) {
    this.bloqBody.x(this.bloqBody.x() + delta.x);
    this.bloqBody.y(this.bloqBody.y() + delta.y);
    this.updateConnectors(delta);
};


Bloq.prototype.moveChildren = function(delta) {
    for (var i in this.relations.children) {
        var child = this.relations.children[i].bloq;
        child.move2(delta);
        if (child.relations !== undefined && child.relations.children !== undefined) {
            child.moveChildren(delta);
        }
    }
};
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function OutputBloq(bloqData, canvas, position, data) {
    Bloq.call(this, bloqData, canvas, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    //Add the connector to the bloq's UI:
    var path = 'm 36,32 c -4.418,0 -8,-2.582 -8,-7 0,-4.418 3.582,-7 8,-7 l 0,14 z';
    this.bloqBody.connector = this.bloqBody.path(path).fill('#cccccc'); //.move(posx, posy);
    this.bloqBody.connector.x(-8);
    this.bloqBody.add(this.bloqBody.connector);
}
OutputBloq.prototype = Object.create(Bloq.prototype);
// OutputBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
//     // connectionType === 'inputs's
//     for (var k in bloq.connections[connectionType]) {
//         //If the input is inline and there is not a bloq connected still
//         if (bloq.connections[connectionType][k].inline === true && k === inputID && bloq.connections[connectionType][k].bloq === undefined) {
//             var delta = {
//                 x: bloqToConnect.size.width - bloq.bloqInput.width,
//                 y: bloqToConnect.size.height - bloq.bloqInput.height
//             };
//             bloq.resize(delta);
//             delta = {
//                 x: bloqToConnect.size.width - bloq.bloqInput.width,
//                 y: 0
//             };
//             for (var i in bloq.UIElements) {
//                 if (bloq.UIElements[i].id === parseInt(inputID, 10)) {
//                     utils.pushElements(bloq, bloq.UIElements[i], delta);
//                     break;
//                 }
//             }
//         }
//     }
//     return bloq.connections[connectionType][inputID].connectionPosition;
// };
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
var StatementBloq = function(bloqData, canvas, position, data) {
    Bloq.call(this, bloqData, canvas, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    this.bloqBody.dragmove = StatementBloq.prototype.dragmove;
};
StatementBloq.prototype = Object.create(Bloq.prototype);
StatementBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
    if (connectionType === 'up') {
        return {
            x: this.connections[connectionType].connectionPosition.x,
            y: this.connections[connectionType].connectionPosition.y - bloqToConnect.size.height
        };
    }
    if (connectionType === 'output') {
        return {
            x: this.connections[connectionType].connectionPosition.x - bloqToConnect.size.width,
            y: this.connections[connectionType].connectionPosition.y - inputID * connectionThreshold
        };
    }
    if (connectionType === 'inputs') {
        for (var k in this.connections[connectionType]) {
            //If the input is inline and there is not a bloq connected still
            if (this.connections[connectionType][k].inline === true && k === inputID && this.connections[connectionType][k].bloq === undefined) {
                var delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
                this.resize(delta);
                delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
                for (var i in this.UIElements) {
                    if (this.UIElements[i].id === parseInt(inputID, 10)) {
                        this.pushElements(this.UIElements[i], delta);
                        break;
                    }
                }
            }
        }
        return this.connections[connectionType][inputID].connectionPosition;
    }
    if (connectionType === 'down') {
        bloqToConnect.resizeParents('down');
    }
    return this.connections[connectionType].connectionPosition;
};
// StatementBloq.prototype.resizeUI = function(a) {};
//---------------------------------------------------------------------------
// // remove parent of this and child in parent:
//     var parentBloq = utils.getBloqById(this.relations.parent, this.data);
//     if (parentBloq.bloqBody.relations.children[this.getBloqObject().id].connection === 'up') {
//         console.log('resizing parents in StatementBloq', this.getBloqObject().childrenHeight);
//         this.getBloqObject().resizeParents('up');
//     } else if (parentBloq.bloqBody.relations.children[this.getBloqObject().id].connection === 'output') {
//         for (var k in parentBloq.bloqBody.connections.inputs) {
//             if (parentBloq.bloqBody.connections.inputs[k].inline === true && k === parentBloq.bloqBody.relations.children[this.getBloqObject().id].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
//                 var delta = {
//                     x: +this.getBloqObject().size.width - parentBloq.size.width,
//                     y: +this.getBloqObject().size.height - parentBloq.size.height
//                 };
//                 parentBloq.resize(delta);
//                 delta = {
//                     x: this.getBloqObject().size.width - parentBloq.size.width,
//                     y: 0
//                 };
//                 for (var i in parentBloq.UIElements) {
//                     if (parentBloq.UIElements[i].id === parseInt(k, 10)) {
//                         utils.pushElements(parentBloq, parentBloq.UIElements[i], delta);
//                         break;
//                     }
//                 }
//             }
//         }
//     }
/**
 * We start dragging
 */
// bloq.dragmove = function(a) {
//     bloq.dragmoveFlag = true;
//     // remove parent of this and child in parent:
//     if (bloq.relations.parent !== undefined) {
//         //move dragged bloq on top
//         utils.bloqOnTop(bloq);
//         var parentBloq = bloq.getBloqById(bloq.relations.parent);
//         if (parentBloq.relations.children[bloq.id()].connection === 'up') {
//             bloq.resizeParents('up');
//         } else if (parentBloq.relations.children[bloq.id()].connection === 'output') {
//             for (var k in parentBloq.connections.inputs) {
//                 if (parentBloq.connections.inputs[k].inline === true && k === parentBloq.relations.children[bloq.id()].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
//                     var delta = {
//                         x: -bloq.size.width + parentBloq.bloqInput.width,
//                         y: -bloq.size.height + parentBloq.bloqInput.height
//                     };
//                     parentBloq.resize(delta);
//                     delta = {
//                         x: -bloq.size.width + parentBloq.bloqInput.width,
//                         y: 0
//                     };
//                     for (var i in parentBloq.UIElements) {
//                         if (parentBloq.UIElements[i].id === parseInt(k, 10)) {
//                             utils.pushElements(parentBloq, parentBloq.UIElements[i], delta);
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//         parentBloq.deleteChild(bloq);
//         bloq.deleteParent(false);
//     }
//     //Update the deltaX and deltaY movements
//     bloq.delta.x = a.x - bloq.delta.lastx;
//     bloq.delta.y = a.y - bloq.delta.lasty;
//     //Update the lastx and lasty variables
//     bloq.delta.lastx = a.x;
//     bloq.delta.lasty = a.y;
//     //Update the bloq's connectors using the new deltas
//     bloq.connections = this.updateConnectors(bloq, bloq.delta);
//     // move child bloqs along with this one
//     utils.moveChildren(bloq, bloq.delta);
// };
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function ProjectBloq(bloqData, canvas, position, data) {
    Bloq.call(this, bloqData, canvas, position, data);
    //Down connector x position : +20 px
    this.updateConnector(this.connections.down, {
        x: 20,
        y: 0
    });
    //Add bloq's left and down UI parts
    this.bloqBody.leftPart = this.bloqBody.rect(20, 60).fill('#e2e2e2').radius(4);
    this.bloqBody.leftPart.size.width = 20;
    this.bloqBody.leftPart.size.height = 60;
    this.bloqBody.add(this.bloqBody.leftPart);
    this.bloqBody.downPart = this.bloqBody.rect(this.size.width, 20).fill(bloqData.color).radius(4);
    this.bloqBody.downPart.y(60 - 5);
    this.bloqBody.add(this.bloqBody.downPart);
    //Define bloqlabel and add the label on the bloq
    this.label = bloqData.label;
    this.bloqBody.text(bloqData.label.toUpperCase()).font({
        family: 'Helvetica',
        fill: '#fff',
        size: 14
    }).move(20, 5);
}
ProjectBloq.prototype = Object.create(Bloq.prototype);
/**
 * Resize a statements input bloq
 * @param delta
 */
ProjectBloq.prototype.resizeStatementsInput = function(delta) {
    // this.bloqBody.leftPart.size.height += delta.y;
    this.bloqBody.leftPart.height(this.bloqBody.leftPart.size.height);
    this.bloqBody.downPart.move(0, this.bloqBody.downPart.y() + delta.y);
    var diff = this.bloqBody.downPart.y() - this.bloqBody.leftPart.y();
    this.bloqBody.leftPart.height(diff);
};
// bloq.resize = bloq.resizeStatementsInput;
ProjectBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect) {
    // if (bloqToConnect.bloqBody.relations.codeChildren.length === 0) {
    //     console.log('************************************************** CHIVATO *********************************************************')
    //     bloqToConnect.childrenHeight = bloqToConnect.size.height;
    // }
    bloqToConnect.resizeParents('down');
    return {
        x: this.connections[connectionType].connectionPosition.x,
        y: this.connections[connectionType].connectionPosition.y
    };
};
/**
 * Created by jesus on 30/03/15.
 */

var getBasicBloqs = function(){

    var data = {
        setup: {
            label: 'setup',
            down: true,
            color: '#000',
            code: {setup: "", loop: "void setup (){\n"}
        },
        loop: {
            label: 'loop',
            down: true,
            color: '#000',
            code: {setup: "", loop: "void loop (){\n"}
        },
        // horizontal3Inputs: {
        //     up: true,
        //     down: true,
        //     path: '',
        //     color: '#e2e2e2',
        //     text : [ ["int:", {input : 'bloqInput',type:"int",label:"INPUT"}, "number:", {input : 'bloqInput',type:"int",label:"INPUT"}, "userInput", {input:'userInput', type:"string",label:"userInput"}] ] ,
        //     code: {setup:"trial({0},{1},{2});\n", loop:"trial({0},{1},{2});\n"}
        // },
        // basicInputDropdown: {
        //     output: 'int',
        //     color: '#e2e2e2',
        //     text:[[{input:'dropdown', type:"text",data:[{label:'ON',value:'HIGH'},{label:'OFF',value:'LOW'}]}]],
        //     code: {setup:"{0}", loop:"{0}"}
        // },
        // basicInputNumber: {
        //     output: 'int',
        //     color: '#e2e2e2',
        //     text:[["number",{input:'userInput', type:"number",label:"number"}]],
        //     code: {setup:'{0}', loop:'{0}'}
        // }
    };
    return data;


};

(function(root, undefined) {
    var data = {
        bloqs: [],
        code: {
            setup: '',
            loop: ''
        }
    };
    var field = {};
    var canvas = {};
    data.createCanvas = function(element) {
        if ($.isEmptyObject(canvas)) {
            field = SVG(element).size('100%', '100%');
            canvas = field.group().attr('class', 'bloqs-canvas');
        }
        return canvas;
    };
    data.bloqsToCode = function() {
        data.functionCode(data.bloqs.setup, 'setup');
        data.functionCode(data.bloqs.loop, 'loop');
        return data.code.setup + data.code.loop;
    };
    data.functionCode = function(bloq, _function) {
        if (bloq === data.bloqs.loop || bloq === data.bloqs.setup) {
            data.code[_function] = bloq.code.loop;
        } else {
            data.code[_function] += '   ' + bloq.getCode(_function);
        }
        if (bloq.relations.codeChildren.length > 0) {
            data.functionCode(utils.getBloqById(bloq.relations.codeChildren, data), _function);
        } else {
            data.code[_function] += '\n}\n';
        }
    };
    /**
     * Create a bloq and setup its properties and events.
     *
     * @param bloqData bloq object
     * @param canvas element to create the bloq into
     * @param position x,y position (just useful for the demo version)
     *
     * @returns Object bloq
     */
    data.createBloq = function(bloqData, canvas, position) {
        var bloq;
        if (bloqData.hasOwnProperty('output')) {
            bloq = new OutputBloq(bloqData, canvas, position, data);
        } else if (bloqData.label === 'loop') {
            bloq = new ProjectBloq(bloqData, canvas, position, data);
            data.bloqs.loop = bloq;
        } else if (bloqData.label === 'setup') {
            bloq = new ProjectBloq(bloqData, canvas, position, data);
            data.bloqs.setup = bloq;
        } else {
            bloq = new StatementBloq(bloqData, canvas, position, data);
        }
        data.bloqs.push(bloq);
        return bloq;
    };
    /**
     * Create a set of bloqs and setup its properties and events.
     *
     * @param path path to the set of JSON files defining the bloqs
     *
     * @returns array of Object bloq
     */
    data.createProjectStructure = function() {
        var bloqTypes = getBasicBloqs();
        var counter = 100;
        for (var i in bloqTypes) {
            data.bloqs[i] = new ProjectBloq(bloqTypes[i], canvas, [100, counter], data);
            counter += 100;
        }
    };
    // Base function.
    var bloqs = function() {
        return data;
    };
    // Export to the root, which is probably `window`.
    root.bloqs = bloqs;
}(this));