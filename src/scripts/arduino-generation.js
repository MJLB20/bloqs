'use strict';
(function(arduinoGeneration) {

    var INDENT_DEFAULT_CHARACTER = '    ',
        PARAMS_REGEXP = /{([^{].[^(\s]*?)}/,
        BLOQS_HARDWARE_REGEXP = /º\[([^{].*?)\.(.*?)\]/,
        BLOQS_PARAMS_REGEXP = /@{([^{].*?)\.(.*?)}/,
        BLOQS_FUNCTION_PARAMS_REGEXP = /¬{([^{].*?)\.(.*?)}/,
        CLASS_CONSTRUCTOR_REGEXP = /\${CLASS-OUTSIDE}/;


    var includes = {},
        instances = {},
        setupExtraCodeMap = {},
        setupCodeAtTheEndOfExtraCodeMap = {},
        programExtraCodeMap = {},
        programFunctionDeclarationsMap = {},
        procesingProgram,
        bloqsFunctions = {
            withoutAsterisk: function(text) {
                return text.replace('*', '');
            },
            formatPin: function(pin) {
                if (pin.indexOf('A') !== -1) {
                    pin = pin.replace(/\"/g, '');
                }
                return pin;
            },
            readPin: function(pin) {
                var result;

                if (pin.indexOf('A') !== -1) {
                    result = 'analogRead(' + pin + ')';
                } else {
                    result = 'digitalRead(' + pin + ')';
                }
                return result;
            },
            readSensor: function(sensorName, aliasesValuesHashMap, hardwareList) {
                var result;
                var sensorData,
                    i = 0;
                while (!sensorData && (i < hardwareList.components.length)) {
                    if (hardwareList.components[i].name === sensorName) {
                        sensorData = hardwareList.components[i];
                    }
                    i++;
                }
                if (sensorData) {
                    switch (sensorData.type) {
                        case 'analog':
                            result = 'analogRead(' + sensorName + ')';
                            break;
                        case 'digital':
                            result = 'digitalRead(' + sensorName + ')';
                            break;
                        case 'LineFollower':
                            result = '(float *) ' + sensorName + '.read()';
                            break;
                        case 'mkb_linefollower':
                            result = 'digitalRead(' + sensorName + '_1) + digitalRead(' + sensorName + '_2) * 2';
                            break;
                        case 'mkb_integrated_analogPinButton':
                            result = 'robot.isButtonPushed()';
                            break;
                        case 'mkb_integrated_lightsensor':
                            var pin = sensorData.pin.s || '';
                            result = 'robot.readLightSensor(' + pin + ')';
                            break;
                        default:
                            result = sensorName + '.read()';
                    }
                }


                return result || '';
            }
        };

    function getCode(arduinoMainBloqs, hardwareList) {
        //console.log('getting code', arduinoMainBloqs);
        procesingProgram = arduinoMainBloqs;
        includes = {};
        instances = {};
        setupExtraCodeMap = {};
        setupCodeAtTheEndOfExtraCodeMap = {};
        programExtraCodeMap = {};
        programFunctionDeclarationsMap = {};
        hardwareList = hardwareList || {
            components: []
        };


        var code = '';

        generateIndependentHardwareCode(hardwareList);

        var varsCode = getCodeFromBloq(arduinoMainBloqs.varsBloq, hardwareList);
        var setupCode = getCodeFromBloq(arduinoMainBloqs.setupBloq, hardwareList);
        var loopCode = getCodeFromBloq(arduinoMainBloqs.loopBloq, hardwareList);


        var prop;
        //after bloqscode to reuse the bucle to fill libraries and instance dependencies
        var includesCode = '';
        for (prop in includes) {
            includesCode += '#include <' + prop + '>\n';
        }

        var setupCodeAtTheEndOfExtraCode = '';
        for (prop in setupCodeAtTheEndOfExtraCodeMap) {
            setupCodeAtTheEndOfExtraCode += prop + '\n';
        }

        var setupExtraCode = '';
        for (prop in setupExtraCodeMap) {
            setupExtraCode += prop + '\n';
        }

        var programExtraCode = '';
        for (prop in programExtraCodeMap) {
            programExtraCode += prop + '\n';
        }

        var programFunctionDeclarations = '';
        for (prop in programFunctionDeclarationsMap) {
            programFunctionDeclarations += prop + '\n';
        }



        var instancesCode = '',
            instanceId;
        for (instanceId in instances) {
            if (instances[instanceId].arguments) {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + '(';
                for (var i = 0; i < instances[instanceId].arguments.length; i++) {
                    instancesCode += ' ' + instances[instanceId].arguments[i] + ',';
                }
                if (instances[instanceId].arguments.length > 0) {
                    instancesCode = instancesCode.slice(0, -1);
                }
                instancesCode += ');\n';
            } else if (instances[instanceId].equals) {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + ' = ' + instances[instanceId].equals + ';\n';
            } else {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + ';\n';
            }
        }


        code += '/***   Included libraries  ***/\n' + includesCode + '\n\n';
        code += '/***   Global variables and function definition  ***/';
        code += programFunctionDeclarations + '\n';
        code += instancesCode + '\n';
        code += varsCode + '\n\n';
        code += '/***   Setup  ***/' + addSetupCode(setupCode, setupExtraCode + setupCodeAtTheEndOfExtraCode) + '\n\n';
        code += '/***   Loop  ***/' + loopCode + '\n\n';
        code += programExtraCode + '\n\n';
        return code;
    }

    function addSetupCode(setupCode, setupExtraCode) {
        //after void setup(){, we add code in position 13
        var positionToAdd = 13;
        setupExtraCode = '\n' + setupExtraCode + '\n';
        return [setupCode.slice(0, positionToAdd), setupExtraCode, setupCode.slice(positionToAdd)].join('');
    }

    function findItemByProperty(searchValue, list, property) {
        var found = null,
            i = 0;
        while (!found && (i < list.length)) {
            if (list[i][property] === searchValue) {
                found = list[i];
            }
            i++;
        }
        return found;
    }

    function getTypeFromBloq(bloq) {
        var result;
        if (bloq.returnType.value) {
            result = bloq.returnType.value;
        } else {
            var contentId,
                propertyName,
                i = 0;
            switch (bloq.returnType.type) {
                case 'fromDropdown':
                case 'fromDynamicDropdown':
                    contentId = bloq.returnType.idDropdown;
                    propertyName = 'id';
                    break;
                case 'fromStaticDropdownProperty':
                    result = getTypeFromStaticDropdownProperty(bloq);
                    break;
            }

            while (!result && (i < bloq.content[0].length)) {
                if (bloq.content[0][i][propertyName] === contentId) {
                    if (bloq.content[0][i].valueType !== -1) {
                        result = bloq.content[0][i].valueType || bloq.content[0][i].value;
                    }
                }
                i++;
            }
        }
        return result || '';
    }

    function getTypeFromStaticDropdownProperty(bloq) {
        var type = '';
        var dropdownData = _.find(bloq.content[0], {
            id: bloq.returnType.idDropdown
        });
        var selectedValue = dropdownData.value;
        var optionData = _.find(dropdownData.options, {
            value: selectedValue
        });
        if (optionData.type) {
            type = optionData.type;
        }

        return type;
    }

    function searchClassName(constructorBloq) {
        //buscar el bloque actual
        //buscar el padre inmediato de tipo class y sacar
        var found;
        found = searchClassNameInBloq(constructorBloq, procesingProgram.varsBloq);

        if (!found) {
            found = searchClassNameInBloq(constructorBloq, procesingProgram.setupBloq);
        }

        if (!found) {
            found = searchClassNameInBloq(constructorBloq, procesingProgram.loopBloq);
        }

        return found;
    }

    function searchClassNameInBloq(constructorBloq, bloq) {
        var result;
        if (bloq.name === 'class') {
            if (isTheConstructorHere(constructorBloq, bloq)) {
                result = bloq.content[0][1].value;
            }
        }
        if (!result && bloq.childs) {
            var i = 0;
            while (!result && (i < bloq.childs.length)) {
                result = searchClassNameInBloq(constructorBloq, bloq.childs[i]);
                i++;
            }
        }
        return result;
    }

    function isTheConstructorHere(constructorBloq, bloq) {
        var result;
        if (constructorBloq === bloq) {
            result = true;
        } else {
            if (bloq.childs) {
                var i = 0;
                while (!result && (i < bloq.childs.length)) {
                    result = isTheConstructorHere(constructorBloq, bloq.childs[i]);
                    i++;
                }
            }
        }
        return result;
    }

    function getCodeFromBloq(bloqFullStructure, hardwareList) {
        //console.log('getting code from bloq', bloqFullStructure);
        var code;
        if (bloqFullStructure.enable) {


            var aliases = bloqFullStructure.content[0],
                childs = bloqFullStructure.childs,
                childsCode = '',
                aliasesValuesHashMap = {},
                matchAliasOnInstance;

            if (bloqFullStructure.arduino.includes) {
                for (var i = 0; i < bloqFullStructure.arduino.includes.length; i++) {
                    includes[bloqFullStructure.arduino.includes[i]] = true;
                }
            }

            if (aliases) {
                for (var i = 0; i < aliases.length; i++) {
                    if (aliases[i].id) {
                        aliasesValuesHashMap[aliases[i].id] = {
                            value: aliases[i].value || ''
                        };
                    } else if (aliases[i].bloqInputId) {
                        aliasesValuesHashMap[aliases[i].bloqInputId] = {};
                        if (aliases[i].value) {
                            aliasesValuesHashMap[aliases[i].bloqInputId].value = getCodeFromBloq(aliases[i].value, hardwareList) || '';

                            if (aliases[i].value.returnType) {
                                aliasesValuesHashMap[aliases[i].bloqInputId].returnType = getTypeFromBloq(aliases[i].value);
                            }
                        } else {
                            aliasesValuesHashMap[aliases[i].bloqInputId].value = '';
                            aliasesValuesHashMap[aliases[i].bloqInputId].returnType = '';
                        }
                    }
                }
            }
            if (childs) {
                for (var i = 0; i < childs.length; i++) {
                    childsCode += getCodeFromBloq(childs[i], hardwareList);
                }
                aliasesValuesHashMap.STATEMENTS = {
                    value: childsCode
                };
            }

            if (bloqFullStructure.arduino.needInstanceOf) {
                var tempInstanceName,
                    tempInstanceId;

                for (var i = 0; i < bloqFullStructure.arduino.needInstanceOf.length; i++) {
                    addInstance(bloqFullStructure.arduino.needInstanceOf[i], aliasesValuesHashMap, hardwareList);
                }
            }


            if (bloqFullStructure.arduino.setupExtraCode) {
                setupExtraCodeMap[processCode(bloqFullStructure.arduino.setupExtraCode, aliasesValuesHashMap, hardwareList)] = true;
            }

            if (bloqFullStructure.arduino.setupCodeAtTheEndOfExtraCode) {
                setupCodeAtTheEndOfExtraCodeMap[processCode(bloqFullStructure.arduino.setupCodeAtTheEndOfExtraCode, aliasesValuesHashMap, hardwareList)] = true;
            }

            if (bloqFullStructure.arduino.extraFunctionCode) {
                programFunctionDeclarationsMap[bloqFullStructure.arduino.extraFunctionCode] = true;
            }

            if (bloqFullStructure.name === 'constructorClass') {
                var parentClassName = searchClassName(bloqFullStructure);
                bloqFullStructure.arduino.code = bloqFullStructure.arduino.code.replace(CLASS_CONSTRUCTOR_REGEXP, parentClassName);
            }


            if (bloqFullStructure.arduino.conditional) {
                code = bloqFullStructure.arduino.conditional.code[aliasesValuesHashMap[bloqFullStructure.arduino.conditional.aliasId].value];
            } else {
                code = bloqFullStructure.arduino.code;
            }
            code = code || '';

            code = processCode(code, aliasesValuesHashMap, hardwareList);

            if (bloqFullStructure.type !== 'output') {
                code += '\n';
            }
        } else {
            code = '';
        }

        return code;
    }

    function processCode(code, aliasesValuesHashMap, hardwareList) {
        var match;

        //Especial @
        match = BLOQS_PARAMS_REGEXP.exec(code);
        while (match) {
            //console.log('match!', match);
            //console.log(aliasesValuesHashMap[match[1]]);
            code = code.replace(match[0], aliasesValuesHashMap[match[1]][match[2]]);
            match = BLOQS_PARAMS_REGEXP.exec(code);
        }

        //execute function on code parts ¬
        match = BLOQS_FUNCTION_PARAMS_REGEXP.exec(code);
        while (match) {
            //console.log('match!', match);
            //console.log(aliasesValuesHashMap[match[1]]);
            code = code.replace(match[0], bloqsFunctions[match[2]](aliasesValuesHashMap[match[1]].value, aliasesValuesHashMap, hardwareList));
            match = BLOQS_FUNCTION_PARAMS_REGEXP.exec(code);
        }

        //searchGroups
        match = PARAMS_REGEXP.exec(code);
        while (match) {
            if (aliasesValuesHashMap[match[1]]) {
                code = code.replace(match[0], aliasesValuesHashMap[match[1]].value);
            } else {
                code = code.replace(match[0], '<no element>');
            }

            match = PARAMS_REGEXP.exec(code);
        }

        //hardware vars

        match = BLOQS_HARDWARE_REGEXP.exec(code);
        var tempHardwareData;
        while (match) {
            if (hardwareList && hardwareList.components) {
                tempHardwareData = findItemByProperty(match[1], hardwareList.components, 'name');
                code = code.replace(match[0], accessNestedPropertyByString(tempHardwareData, match[2]));
            } else {
                code = code.replace(match[0], '<no hardware>');
            }

            match = BLOQS_HARDWARE_REGEXP.exec(code);
        }


        return code;
    }

    function accessNestedPropertyByString(object, nestedKey) {
        var properties = nestedKey.split('.');
        var result = JSON.parse(JSON.stringify(object));
        for (var i = 0; i < properties.length; i++) {
            if (result) {
                result = result[properties[i]];
            }
        }
        return result;
    }

    function getBoardLibraryName(board) {
        var result;
        switch (board) {
            case 'mcore':
                result = 'BitbloqMCore';
                break;
            case 'meorion':
                result = 'BitbloqOrion';
                break;
            case 'meauriga':
                result = 'BitbloqMBotRanger';
                break;
            default:
                console.log('bloqs::BoardWithoutLibrary');
        }
        return result;
    }

    function generateIndependentHardwareCode(hardwareList) {

        var tempSetupExtraCode,
            tempInstanceOf,
            tempIncludes,
            tempProgramExtraCode,
            tempProgramFunctionDeclaration,
            makeblockBoardLibrary = getBoardLibraryName(hardwareList.board);

        switch (hardwareList.board) {
            case 'mcore':
                includes['BitbloqMBot.h'] = true;
                addInstance({
                    name: 'robot',
                    type: 'BitbloqMBot'
                }, {}, hardwareList);
                setupCodeAtTheEndOfExtraCodeMap['robot.setup();'] = true;
                break;
            case 'meorion':
                includes['BitbloqMStarter.h'] = true;
                addInstance({
                    name: 'robot',
                    type: 'BitbloqMStarter'
                }, {}, hardwareList);
                setupCodeAtTheEndOfExtraCodeMap['robot.setup();'] = true;
                break;
            case 'meauriga':
                includes['BitbloqMBotRanger.h'] = true;
                addInstance({
                    name: 'robot',
                    type: 'BitbloqMBotRanger'
                }, {}, hardwareList);
                setupCodeAtTheEndOfExtraCodeMap['robot.setup();'] = true;
                break;
        }

        if (hardwareList.components) {
            for (var i = 0; i < hardwareList.components.length; i++) {
                if (!hardwareList.components[i].integratedComponent) {


                    tempSetupExtraCode = null;
                    tempInstanceOf = null;
                    tempProgramExtraCode = null;
                    tempProgramFunctionDeclaration = null;
                    tempIncludes = [];
                    //console.log('hardwareList');
                    //console.log(hardwareList);

                    switch (hardwareList.components[i].uuid) {
                        case 'led':
                        case 'buzz':
                            tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + ', OUTPUT);';
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'const int',
                                equals: hardwareList.components[i].pin.s
                            };
                            break;
                        case 'button':
                        case 'analogButton':
                        case 'GroveShieldButton':
                        case 'limitswitch':
                        case 'pot':
                        case 'ldrs':
                        case 'sound':
                        case 'irs':
                            tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + ', INPUT);';
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'const int',
                                equals: hardwareList.components[i].pin.s
                            };
                            break;

                        case 'bt':
                        case 'sp':
                            tempIncludes = ['BitbloqSoftwareSerial.h'];
                            tempSetupExtraCode = hardwareList.components[i].name + '.begin(' + hardwareList.components[i].baudRate + ');';
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'bqSoftwareSerial',
                                arguments: [
                                    hardwareList.components[i].pin.rx || 0,
                                    hardwareList.components[i].pin.tx || 1,
                                    hardwareList.components[i].baudRate
                                ]
                            };
                            break;
                        case 'buttons':
                            tempIncludes = ['BitbloqButtonPad.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'ButtonPad',
                                arguments: [
                                    hardwareList.components[i].pin.s
                                ]
                            };
                            break;
                        case 'encoder':
                            tempIncludes = ['BitbloqEncoder.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'Encoder',
                                arguments: [
                                    'encoderUpdaterWrapper',
                                    hardwareList.components[i].pin.k,
                                    hardwareList.components[i].pin.sa,
                                    hardwareList.components[i].pin.sb
                                ]
                            };
                            tempProgramFunctionDeclaration = 'void encoderUpdaterWrapper();';
                            tempProgramExtraCode = 'void encoderUpdaterWrapper() {\n' + hardwareList.components[i].name + '.update();\n}';
                            break;
                        case 'joystick':
                            tempIncludes = ['BitbloqJoystick.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'Joystick',
                                arguments: [
                                    hardwareList.components[i].pin.x,
                                    hardwareList.components[i].pin.y,
                                    hardwareList.components[i].pin.k
                                ]
                            };
                            break;
                        case 'lcd':
                            tempIncludes = ['Wire.h', 'BitbloqLiquidCrystal.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'LiquidCrystal',
                                arguments: [
                                    '0'
                                ]
                            };
                            tempSetupExtraCode = hardwareList.components[i].name + '.begin(16, 2);' + hardwareList.components[i].name + '.clear();';
                            break;
                        case 'RGBled':
                            tempIncludes = ['BitbloqRGB.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'ZumRGB',
                                arguments: [
                                    hardwareList.components[i].pin.r,
                                    hardwareList.components[i].pin.g,
                                    hardwareList.components[i].pin.b
                                ]
                            };
                            break;
                        case 'rtc':
                            tempIncludes = ['Wire.h', 'BitbloqRTC.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'RTC_DS1307'
                            };
                            break;
                        case 'hts221':
                            tempIncludes = ['Wire.h', 'BitbloqHTS221.h', 'HTS221_Registers.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'HTS221'
                            };
                            tempSetupExtraCode = 'Wire.begin();\n' + hardwareList.components[i].name + '.begin();';
                            break;
                        case 'us':
                            tempIncludes = ['BitbloqUS.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'US',
                                arguments: [
                                    hardwareList.components[i].pin.trigger,
                                    hardwareList.components[i].pin.echo
                                ]
                            };
                            break;
                        case 'servo':
                        case 'servocont':
                            if (hardwareList.components[i].oscillator && (hardwareList.components[i].oscillator !== 'false')) {
                                tempIncludes = ['Servo.h', 'Wire.h', 'BitbloqOscillator.h'];
                                tempInstanceOf = {
                                    name: hardwareList.components[i].name,
                                    type: 'Oscillator'
                                };
                            } else {
                                tempIncludes = ['Servo.h'];
                                tempInstanceOf = {
                                    name: hardwareList.components[i].name,
                                    type: 'Servo'
                                };
                            }
                            tempSetupExtraCode = hardwareList.components[i].name + '.attach(' + hardwareList.components[i].pin.s + ');';
                            break;
                        case 'irs2':
                            tempIncludes = ['BitbloqLineFollower.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'LineFollower',
                                arguments: [
                                    hardwareList.components[i].pin.s1,
                                    hardwareList.components[i].pin.s2
                                ]
                            };
                            break;
                        case 'mkb_ultrasound':
                            tempIncludes = ['BitbloqUS.h'];
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'BitbloqUltrasound',
                                arguments: [
                                    makeblockBoardLibrary + '::ports[' + hardwareList.components[i].pin.s + '][2]',
                                    makeblockBoardLibrary + '::ports[' + hardwareList.components[i].pin.s + '][2]'
                                ]
                            };
                            setupCodeAtTheEndOfExtraCodeMap[hardwareList.components[i].name + '.setup();'] = true;
                            break;
                        case 'mkb_linefollower':

                            tempInstanceOf = {
                                name: hardwareList.components[i].name + '_1',
                                type: 'const int',
                                equals: makeblockBoardLibrary + '::ports[' + hardwareList.components[i].pin.s + '][1]'
                            };
                            tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + '_1 , INPUT);';

                            addInstance(tempInstanceOf, {}, hardwareList);
                            setupExtraCodeMap[tempSetupExtraCode] = true;

                            tempInstanceOf = {
                                name: hardwareList.components[i].name + '_2',
                                type: 'const int',
                                equals: makeblockBoardLibrary + '::ports[' + hardwareList.components[i].pin.s + '][2]'
                            };
                            tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + '_2 , INPUT);';
                            break;
                        case 'mkb_lightsensor':
                            tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + ', INPUT);';
                            tempInstanceOf = {
                                name: hardwareList.components[i].name,
                                type: 'const int',
                                equals: makeblockBoardLibrary + '::ports[' + hardwareList.components[i].pin.s + '][2]'
                            };
                            break;
                    }

                    if (tempInstanceOf) {
                        addInstance(tempInstanceOf, {}, hardwareList);
                    }

                    if (tempSetupExtraCode) {
                        setupExtraCodeMap[tempSetupExtraCode] = true;
                    }

                    if (tempProgramExtraCode) {
                        programExtraCodeMap[tempProgramExtraCode] = true;
                    }

                    if (tempProgramFunctionDeclaration) {
                        programFunctionDeclarationsMap[tempProgramFunctionDeclaration] = true;
                    }

                    for (var j = 0; j < tempIncludes.length; j++) {
                        includes[tempIncludes[j]] = true;
                    }
                }
            }
        }
    }

    function addInstance(needInstanceOf, aliasesValuesHashMap, hardwareList) {
        var tempInstanceName = needInstanceOf.name;
        tempInstanceName = processCode(tempInstanceName, aliasesValuesHashMap, hardwareList);

        if (needInstanceOf.arguments) {
            for (var i = 0; i < needInstanceOf.arguments.length; i++) {
                needInstanceOf.arguments[i] = processCode(needInstanceOf.arguments[i], aliasesValuesHashMap, hardwareList);
            }
        }


        var tempInstanceId = tempInstanceName + String(needInstanceOf.arguments || '');

        instances[tempInstanceId] = {
            equals: processCode(needInstanceOf.equals, aliasesValuesHashMap, hardwareList),
            type: needInstanceOf.type,
            name: needInstanceOf.name,
            realName: tempInstanceName,
            arguments: needInstanceOf.arguments
        };
    }

    arduinoGeneration.getCode = getCode;

    return arduinoGeneration;

})(window.arduinoGeneration = window.arduinoGeneration || {}, undefined);