'use strict';

(function(bloqsLanguages) {
        var texts = {"ca-ES":{"bloq-zowi-mouth-tongueOut":"somriure amb llengua","bloq-zowi-mouth-confused":"cara confosa","bloq-zowi-mouth-bigSurprise":"cara sorpresa","bloq-zowi-distance":"Zowi, mesura la distància","bloq-zowi-sound":"Zowi, escolta","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristesa","bloq-zowi-sounds-happy":"felicitat","bloq-zowi-sounds-sleeping":"somni","bloq-zowi-sounds-cuddly":"mim","bloq-zowi-sounds-confused":"confusió","bloq-zowi-movements-shakeLeg":"mou les cames","bloq-zowi-sounds-fart1":"un pet","bloq-zowi-movements-speed-medium":"mitjana","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"Interrompre el bucle","bloq-code-writeYourCode":"Escriu el teu propi codi","bloq-comment-comment":"Comentari //","bloq-convert-convert":"Converteix","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binari","bloq-serial-receiver-receive":"Rep","bloq-serial-send-send":"Envia ","bloq-serial-send-print":"Sense salt de línia ","bloq-serial-send-println":"Amb salt de línia","bloq-buzzer-advance-sound":"Fes sonar el brunzidor ","bloq-buzzer-advance-note":"amb la nota ","bloq-buzzer-advance-for":"durant ","bloq-buzzer-advance-ms":"Ms","bloq-digital-read-advanced-readpin":"Llegeix el pin digital","bloq-analog-read-advanced-readpin":"Llegeix el pin analògic","bloq-continuous-servo-start-advanced-turn":"Gira el servo ","bloq-continuous-servo-start-advanced-direction":"en sentit ","bloq-continuous-servo-start-advanced-clockwise":"de les agulles del rellotge ","bloq-continuous-servo-start-advanced-counterclockwise":"Antihorari ","bloq-continuous-servo-stop-advanced-stop":"Atura el servo ","bloq-lcd-turn-on-off-advanced-turnon":"Encén ","bloq-lcd-turn-on-off-advanced-turnoff":"Apaga ","bloq-lcd-turn-on-off-advanced-lcdLigth":"el llum de l'LCD","bloq-lcd-clear":"Esborra el contingut de l'LCD","bloq-lcd-writte-advanced-write":"Escriu ","bloq-lcd-writte-advanced-inLCD":"a l 'LCD","bloq-lcd-writte-advanced-inPosition":"començant en la posició (columna, fila)","bloq-led-advanced-turnon":"Encén","bloq-led-advanced-turnoff":"Apaga","bloq-led-advanced-theLED":"el LED ","bloq-oscillator-advanced-oscillate":"Fes oscil·lar el servo ","bloq-oscillator-advanced-around":"al voltant de ","bloq-oscillator-advanced-amplitude":"amb amplitud ","bloq-oscillator-advanced-speed":"amb velocitat ","bloq-oscillator-start-advanced-oscillator":"Reprodueix l'oscil·lador","bloq-oscillator-stop-advanced-stop":"Atura l'oscil·lador","bloq-pin-read-advanced-readpin":"Llegeix el pin ","bloq-pin-writte-advanced-writepin":"Escriu al pin ","bloq-pin-writte-advanced-data":"la dada","bloq-read-advanced-read":"Llegeix","bloq-servo-advanced-move":"Mou","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"graus","bloq-buzzer-sound":"Fes sonar el brunzidor","bloq-buzzer-note":"amb la nota","bloq-buzzer-for":"durant","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Fes girar el servo","bloq-continuous-servo-start-direction":"en sentit","bloq-continuous-servo-start-clockwise":"horari","bloq-continuous-servo-start-counterclockwise":"Antihorari","bloq-continuous-servo-stop-stop":"Atura el servo","bloq-lcd-turn-on-off-turnon":"Encén","bloq-lcd-turn-on-off-turnoff":"Apaga","bloq-lcd-turn-on-off-lcdLigth":"la llum de l'LCD","bloq-lcd-writte-write":"Escriu","bloq-lcd-writte-inLCD":"a l'LCD","bloq-led-turnon":"Encendre","bloq-led-turnoff":"Apagar","bloq-led-theLED":"El LED","bloq-oscillator-oscillate":"Fes oscil·lar el servo ","bloq-oscillator-around":"al voltant de","bloq-oscillator-amplitude":"amb amplitud","bloq-oscillator-speed":"amb velocitat","bloq-oscillator-times":"vegades","bloq-oscillator-start-oscillator":"Reprodueix l'oscil·lador","bloq-oscillator-stop-stop":"Atura l'oscil·lador","bloq-read-read":"Llegeix","bloq-servo-move":"Mou","bloq-servo-to":"a","bloq-servo-degrees":"graus","bloq-case-ifSameTo":"si és igual a","bloq-case-exec":"executa:","bloq-case-default-inOtherCase":"en un altre cas, executa:","bloq-continue-continue":"Continua amb la següent interació del bucle ","bloq-else-else":"en cas contrari, executa:","bloq-else-if-if":"en canvi, si ","bloq-else-if-else":"executa:","bloq-for-count":"Compta amb","bloq-for-from":"des de","bloq-for-to":"fins a","bloq-for-add":"sumant","bloq-for-subtract":"restant","bloq-for-exec":"executa:","bloq-if-if":"Si","bloq-if-exec":"executa:","bloq-switch-check":"Comprova quin és el valor de ","bloq-wait-wait":"Espera","bloq-while-while":"Mentre","bloq-while-exec":"executa:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Text","bloq-argument-bool":"Booleà","bloq-invoke-function-exec":"Executa","bloq-invoke-return-function-exec":"Executa","bloq-invoke-function-args":"amb els arguments següents:","bloq-return-return":"Retorna","bloq-return-function-declare":"Declara la funció","bloq-return-function-return":"Retorna","bloq-return-function-with-arguments-declare":"Declara la funció","bloq-return-function-with-arguments-count":"amb els arguments següents:","bloq-return-function-with-arguments-return":"Retorna","bloq-void-function-declare":"Declara la funció","bloq-void-function-with-arguments-declare":"Declara la funció","bloq-void-function-with-arguments-count":"amb els arguments següents:","bloq-boolArray-advanced-arraySize":"Array amb mida","bloq-boolArray-advanced-boolType":"i tipus bool","bloq-boolArray-arraySize":"Array amb mida","bloq-boolArray-boolType":"I tipus bool","bloq-boolean-true":"Veritable","bloq-boolean-false":"Fals","bloq-logic-operations-and":"i","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Crea el programa que s'executarà contínuament després del Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indica què vols que s'executi a l' inici del programa i només una única vegada.","bloq-var-header":"Variables globals, funcions i classes","bloq-var-description":"Defineix els valors que utilitzaràs a Setup i Loop.També pots crear funcions per agrupar blocs.","bloq-numberArray-advanced-arraySize":"Array amb mida","bloq-numberArray-advanced-type":"i tipus","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"sencer","bloq-map-map":"Mapejar","bloq-map-value":"valor entre [0 -","bloq-map-advanced-map":"Mapejar","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Arrel quadrada","bloq-math-operations-abs":"Valor absolut","bloq-numberArray-arraySize":"Array amb mida","bloq-numberArray-floatType":" i tipus float","bloq-random-random":"Aleatori entre","bloq-random-and":"i","bloq-stringArray-advanced-arraySize":"Array amb mida","bloq-stringArray-advanced-type":"i tipus","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longitud","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array amb mida","bloq-stringArray-stringType":"i tipus text ","bloq-string-create-create":"Crea text amb ","bloq-hw-variable-advanced-variable":"Variable (components)","bloq-sw-variable-advanced-variable":"Variable (codi)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declara variable","bloq-declare-variable-declare-type":"amb tipus","bloq-declare-variable-declare-type-int":"sencer","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"text","bloq-declare-variable-declare-type-char":"caràcter","bloq-declare-variable-declare-type-bool":"valor lògic","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caràcter","bloq-lcd-default":"Hola!","bloq-comment-default":"Escriu un comentari","bloq-functions-default":"Nom","bloq-wait-ms":"ms","drag-bloq":"Arrossega un bloc fins aquí per començar el teu programa","bloq-invoke-class-function-class":"de l'objecte","bloq-invoke-arguments-class":"Crea un objecte de la classe","bloq-invoke-arguments-class-name":"amb el nom","bloq-invoke-arguments-args":"amb els arguments següents","bloq-invoke-class-return-function-exec":"Executa la funció","bloq-invoke-class-function-exec":"Executa la funció","bloq-invoke-class-function-args":"amb els arguments següents","bloq-invoke-class-return-function-args-exec":"Executa la funció","bloq-invoke-class-return-function-args-class":"de l'objecte","bloq-invoke-class-return-function-args-args":"amb els arguments següents","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor que utilitza els arguments següents","bloq-invoke-class":"Crea un objecte de la classe","bloq-invoke-class-name":"amb el nom","bloq-class":"Declara la classe","bloq-class-default":"Nom","bloq-class-from":"de","bloq-class-inheritance-type":"heretant de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variables i funcions públiques:","bloq-protected":"Variables i funcions protegides:","bloq-private":"Variables i funcions privades:","bloq-include-lib-exec":"Incloure la llibreria","bloq-pin-analog-write":"Escriure al pin analògic","bloq-pin-digital-write":"Escriure al pin digital","bloq-pin-analog-write-data":"la dada","bloq-pin-digital-write-data":"la dada","bloq-zowi-movements":"Zowi,","bloq-zowi-movements-walk":"camina","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"fes el moonwalker","bloq-zowi-movements-height-crusaito":"fes el pas creuat","bloq-zowi-movements-height-flapping":"agita't","bloq-zowi-movements-shakeleg":"mou les cames","bloq-zowi-movements-bend":"inclina't","bloq-zowi-movements-forward":"endavant","bloq-zowi-movements-backward":"enrere","bloq-zowi-movements-left":"esquerra","bloq-zowi-movements-right":"dreta","bloq-zowi-movements-speed":"vegades a una velocitat de","bloq-zowi-mouth":"Zowi, dibuixa una","bloq-zowi-mouth-mouth":"a la teva boca","bloq-zowi-mouth-smile":"somriure","bloq-zowi-mouth-sad":"cara trista","bloq-zowi-mouth-happy":"cara alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"endavant","bloq-zowi-movements-height-backward":"enrere","bloq-zowi-movements-height-left":"esquerra","bloq-zowi-movements-height-right":"dreta","bloq-zowi-movements-height-speed":"vegades a una velocitat de","bloq-zowi-movements-height-height":"i una alçada","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"mitjana","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"puja i baixa","bloq-zowi-movements-no-dir-swing":"balanceja't","bloq-zowi-movements-no-dir-tiptoeSwing":"balanceja't de puntetes","bloq-zowi-movements-no-dir-jitter":"tremola","bloq-zowi-movements-no-dir-ascendingTurn":"gira mentre puges","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"vegades a una velocitat de","bloq-zowi-movements-no-dir-height":"i una alçada","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"mitjana","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Zowi: canta","bloq-hts221-humidity":"Llegeix la humitat del sensor","bloq-hts221-temperature":"Llegeix la temperatura del sensor","bloq-rgbLed-fade-red":"amb un valor de vermell de","bloq-enable-interrupt":"Executa la funció","bloq-enable-interrupt-rising":"canviï de 0 a 1","bloq-enable-interrupt-falling":"canviï de 1 a 0","bloq-enable-interrupt-change":"canviï","bloq-enable-interrupt-pin":"quan l'entrada del pin","bloq-rgbLed-green":", un valor de verd de","bloq-rgbLed-fade":"Crea un degradat en el LED RGB","bloq-rgbLed-red":"amb un valor de vermell de","bloq-rtc-init":"Actualitzar data i hora del rellotge","bloq-rtc-month":"el mes","bloq-rtc-using-advanced":"actual fent servir el rellotge","bloq-rtc-year":"l'any","bloq-rtc-day":"el dia","bloq-rtc-hour":"l'hora","bloq-rtc-minute":"el minut","bloq-rtc-second":"el segon","bloq-rtc-time":"hora","bloq-rtc-using":"actual fent servir el rellotge","bloq-rtc-advanced":"Obtenir","bloq-rtc":"Obtenir la","default-var-name-rtc":"rellotge_temps_real","bloq-rtc-date":"data","default-var-name-sound":"Sensor_so","bloq-rgbLed-blue":"i un valor de blau de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Encén el LED RGB","bloq-rgbLed-fade-blue":"i un valor de blau de","bloq-rgbLed-fade-green":", un valor de verd de","bloq-rgbLed-simple":"Encén el LED RGB","bloq-rgbLed-simple-color":"amb color","bloq-rgbLed-simple-red":"vermell","bloq-rgbLed-simple-green":"verd","bloq-rgbLed-simple-blue":"blau","bloq-zowi-gestures":"Zowi, fes l'animació de","bloq-zowi-gestures-ZowiHappy":"Feliç","bloq-zowi-gestures-ZowiSuperHappy":"Súper Feliç","bloq-zowi-gestures-ZowiSad":"Trist","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confús","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Enfadat","bloq-zowi-gestures-ZowiFretful":"Inquiet","bloq-zowi-gestures-ZowiMagic":"Màgia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"Victòria!!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"vegades","bloq-zowi-movements-simple-walk":"camina","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"mou les cames","bloq-zowi-movements-simple-bend":"inclina't","bloq-zowi-movements-simple-moonwalker":"fes el moonwalker","bloq-zowi-movements-simple-crusaito":"fes el pas creuat","bloq-zowi-movements-simple-flapping":"agita't","bloq-zowi-movements-simple-updown":"puja i baixa","bloq-zowi-movements-simple-swing":"balanceja't","bloq-zowi-movements-simple-tiptoeSwing":"balanceja't de puntetes","bloq-zowi-movements-simple-jitter":"tremola","bloq-zowi-movements-simple-ascendingTurn":"gira mentre puges","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Zowi, descansa","bloq-millis":"Obtenir temps d'execució","bloq-random-seed":"Inicialitza el generador de números aleatoris","bloq-rgbLed-simple-white":"blanc","bloq-rgbLed-simple-yellow":"groc","bloq-rgbLed-simple-orange":"taronja","bloq-rgbLed-simple-dark-green":"verd fosc","bloq-rgbLed-simple-dark-blue":"blau fosc","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Sencer","bloq-argument-char":"Caràcter","bloq-zowi-buttons":"botó","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"de Zowi","bloq-zowi-if-distance":"Si detecta una distància","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"major","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"cm, executa:","bloq-zowi-if-buttons":"Si premo el botó","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", executa:","bloq-zowi-if-sound":"Si escolta un soroll, executa:","bloq-evolution-rest":"Descansa","bloq-evolution-movements-simple":"Mou-te cap a","bloq-evolution-movements-simple-fordward":"endavant","bloq-evolution-movements-simple-backward":"enrere","bloq-evolution-movements-simple-right":"dreta","bloq-evolution-movements-simple-left":"esquerra","bloq-evolution-distance":"Mesura la distància","bloq-evolution-if-distance":"Si detecta una distància","bloq-evolution-if-distance-less":"inferior","bloq-evolution-if-distance-more":"superior","bloq-evolution-if-distance-than":"a","bloq-evolution-if-distance-then":"Centímetres, executa","bloq-evolution-light":"Mesura la llum","bloq-evolution-light-left":"esquerra","bloq-evolution-light-right":"dreta","bloq-evolution-line":"Detecta la línia","bloq-evolution-line-left":"esquerra","bloq-evolution-line-right":"dreta","bloq-evolution-head":"Mira cap a","bloq-evolution-head-left":"esquerra","bloq-evolution-head-right":"dreta","bloq-evolution-head-center":"endavant","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Toca la nota","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durant","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Mira","bloq-evolution-head-advance-deg":"graus a","bloq-evolution-head-advance-left":"l’esquerra","bloq-evolution-head-advance-right":"dreta","bloq-shield-stepper-steps":"Gira stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 i 2","bloq-shield-stepper-steps-degdir":"Graus en sentit","bloq-shield-stepper-steps-CW":"horari","bloq-shield-stepper-steps-CCW":"antihorari","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Si detecta la línia","bloq-evolution-if-line-white":"blanca","bloq-evolution-if-line-black":"negra","bloq-evolution-if-line-and":"a l’esquerra i","bloq-evolution-if-line-then":"a la dreta, executa:","bloq-evolution-if-light":"Si veu llum","bloq-evolution-if-light-and":"a l’esquerra i","bloq-evolution-if-light-then":"a la dreta, executa:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"mitja","bloq-evolution-if-light-low":"baixa","bloq-shield-stepper-steps-advanced":"Gira stepper motor","bloq-shield-stepper-steps-advanced-degdir":"Graus en sentit","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Gira el motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"en sentit","bloq-shield-DCmotor-spin-CW":"horari","bloq-shield-DCmotor-spin-CCW":"antihorari","bloq-shield-DCmotor-spin-at":"al","bloq-shield-DCmotor-spin-speed":"% del seu Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Gira el motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"en sentit","bloq-shield-DCmotor-spinMotor-advanced-at":"al","bloq-shield-DCmotor-spinMotor-advanced-speed":"% del seu Vmax","bloq-shield-DCmotor-stop":"Atura el motor","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Atura el motor","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Posició inicial","bloq-zowi-gestures-v1":"Fes l'animació de","bloq-zowi-gestures-ZowiHappy-v1":"Feliç","bloq-zowi-gestures-ZowiSuperHappy-v1":"Superfeliç","bloq-zowi-gestures-ZowiSad-v1":"Trist","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confós","bloq-zowi-gestures-ZowiLove-v1":"Enamorat","bloq-zowi-gestures-ZowiAngry-v1":"Enfadat","bloq-zowi-gestures-ZowiFretful-v1":"Inquiet","bloq-zowi-gestures-ZowiVictory-v1":"Victòria!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", fes:","bloq-zowi-if-distance-then-v1":"cm, fes:","bloq-zowi-if-sound-v1":"Si sents un soroll, fes:","bloq-zowi-mouth-v1":"Mostra una","bloq-zowi-movements-simple-walk-v1":"Camina","bloq-zowi-movements-simple-turn-v1":"Gira","bloq-zowi-movements-simple-shakeLeg-v1":"Mou la cama","bloq-zowi-movements-simple-bend-v1":"Inclina't","bloq-zowi-movements-simple-moonwalker-v1":"Fes el moonwalker","bloq-zowi-movements-simple-crusaito-v1":"Fes el pas creuat","bloq-zowi-movements-simple-flapping-v1":"Agita't","bloq-zowi-movements-simple-updown-v1":"Puja i baixa","bloq-zowi-movements-simple-swing-v1":"Balanceja't","bloq-zowi-movements-simple-tiptoeSwing-v1":"Balanceja't de puntetes","bloq-zowi-movements-simple-jitter-v1":"Tremola","bloq-zowi-movements-simple-ascendingTurn-v1":"Gira mentre puges","bloq-zowi-movements-simple-jump-v1":"Salta","bloq-zowi-sounds-v1":"Fes el so de","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"mesura la distància","bloq-zowi-sound-v1":"escolta amb atenció","bloq-zowi-movements-front":"Camina","bloq-zowi-movements-front-forward":"endavant","bloq-zowi-movements-front-backward":"enrere","bloq-zowi-movements-front-speed":"vegades a una velocitat","bloq-zowi-movements-front-speed-small":"baixa","bloq-zowi-movements-front-speed-medium":"mitja","bloq-zowi-movements-front-speed-high":"alta","bloq-zowi-movements-sides-turn":"Gira","bloq-zowi-movements-sides-shakeLeg":"Mou la cama","bloq-zowi-movements-sides-bend":"Inclina't","bloq-zowi-movements-sides-left":"esquerra","bloq-zowi-movements-sides-right":"dreta","bloq-zowi-movements-sides-speed":"vegades a una velocitat","bloq-zowi-movements-sides-speed-small":"baixa","bloq-zowi-movements-sides-speed-medium":"mitja","bloq-zowi-movements-sides-speed-high":"alta","bloq-zowi-movements-height-sides-moonwalker":"Fes el moonwalker","bloq-zowi-movements-height-sides-crusaito":"Fes el pas creuat","bloq-zowi-movements-height-sides-left":"esquerra","bloq-zowi-movements-height-sides-right":"dreta","bloq-zowi-movements-height-sides-speed":"vegades a una velocitat","bloq-zowi-movements-height-sides-speed-small":"baixa","bloq-zowi-movements-height-sides-speed-medium":"mitja","bloq-zowi-movements-height-sides-speed-high":"alta","bloq-zowi-movements-height-sides-height":"i una alçada","bloq-zowi-movements-height-sides-small":"baixa","bloq-zowi-movements-height-sides-medium":"mitja","bloq-zowi-movements-height-sides-big":"alta","bloq-num-conversion":"converteix","bloq-num-conversion-to":"a","bloq-num-conversion-int":"enter","bloq-num-conversion-float":"decimal","bloq-name-default":"Nom","bloq-declare-array":"Declara la variable array","bloq-declare-array-size":"de la mida","bloq-declare-array-type":"i de tipus","bloq-servo-detach":"Desconnecta el servo","bloq-servo-attach":"Connecta el servo","bloq-hts221":"Llegeix la","bloq-hts221-read-temperature":"temperatura","bloq-hts221-read-humidity":"humitat","bloq-hts221-sensor":"del sensor","bloq-PTsensor":"Llegeix","bloq-PTsensor-pressure":"la pressió","bloq-PTsensor-temperature":"la temperatura","bloq-PTsensor-altitude":"l’altitud","bloq-PTsensor-sensor":"del sensor","bloq-PTsensor-calibration":"Defineix la pressió del nivell del mar en","bloq-PTsensor-calibration-sensor":"Pa al sensor","bloq-rgbLed-off":"Apaga el LED RGB","bloq-pin-analog-write-V1":"Escriu al pin digital","bloq-pin-analog-write-data-V1":"el valor analògic","bloq-buzzer-do-#":"Do#","bloq-buzzer-re-#":"Re#","bloq-buzzer-fa-#":"Fa#","bloq-buzzer-sol-#":"Sol#","bloq-buzzer-la-#":"La#","bloq-serial-receiver-receive-number":"Rep el número","bloq-declare-array-declare":"Declara l’array","bloq-declare-array-declare-type":"de tipus","bloq-declare-array-declare-size":"i mida","bloq-pin-digital-write-data-V1":"el valor digital","bloq-round-advanced-roundto":"Arrodoneix cap","bloq-round-advanced-floor":"amunt","bloq-round-advanced-ceil":"avall","bloq-round-advanced-round":"el més proper","bloq-round-advanced-thenumber":"el número","bloq-rtc-date-2":"any/mes/dia","bloq-rtc-time-2":"hora:minut:segon","bloq-pinlevel-high":"Alt","bloq-pinlevel-low":"Baix","suggested":"Suggerits","bloq-viewer":"Envia les dades al visor","bloq-mbot-buzzer-note":"Fes sonar la nota","bloq-mbot-buzzer-for":"durant","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Obtén la distància (cm) de l’ultrasons al","bloq-mbot-port-1":"port 1","bloq-mbot-port-2":"port 2","bloq-mbot-port-3":"port 3","bloq-mbot-port-4":"port 4","bloq-mbot-getbuttonstatus":"Llegeix l’estat del botó","bloq-mbot-getlightsensor":"Llegeix el sensor de llum","bloq-mbot-linefollower-text":"Obtén la informació del sensor d’infraroigs al","bloq-mbot-move-forward":"Avança","bloq-mbot-move-backward":"Retrocedeix","bloq-mbot-move-turnleft":"Gira a l'esquerra","bloq-mbot-move-turnright":"Gira a la dreta","bloq-mbot-move-speed":"a una velocitat","bloq-mbot-move-speed-fast":"molt ràpida","bloq-mbot-move-speed-normal":"normal","bloq-mbot-move-speed-slow":"lenta","bloq-mbot-setled-set":"Estableix","bloq-mbot-led-all":"tots els leds","bloq-mbot-led-right":"el led dret","bloq-mbot-led-left":"el led esquerra","bloq-mbot-setled-colormix":"amb aquesta barreja de colors:","bloq-mbot-setled-green":"verd:","bloq-mbot-setled-red":"vermell:","bloq-mbot-setled-blue":"blau:","bloq-mbot-stop":"Atura el robot","bloq-mbot-turnoffled-off":"Apaga","bloq-mbot-buzzer-advanced-play":"Fes sonar la nota","bloq-mbot-move-advanced-speed":"a una velocitat","bloq-mbot-setled-advanced-set":"Estableix","bloq-mbot-setled-advanced-colormix":"amb aquesta barreja de colors:","bloq-mbot-setled-advanced-red":"vermell:","bloq-mbot-setled-advanced-green":"verd:","bloq-mbot-setled-advanced-blue":"blau:","bloq-mbot-buzzer-advanced-for":"durant","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Repeteix","bloq-magicfor-times":"vegades","bloq-phone-sounds":"Emet el so","bloq-phone-sounds-device":"al dispositiu","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"bass","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Mostra a la pantalla","bloq-phone-receive":"Rep dades per veu o text","bloq-phone-toggle-light":"Parpelleja amb una freqüència de","bloq-phone-toggle-units":"segons","bloq-phone-turnon-light":"Encén la llanterna amb una intensitat del","bloq-phone-turnoff-light":"Apaga la llanterna","bloq-twitter-config":"Configura l'aplicació de Twitter","bloq-mbot-port-5":"port 5","bloq-mbot-port-6":"port 6","bloq-mbot-port-7":"port 7","bloq-mbot-port-8":"port 8","bloq-mbot-port-9":"port 9","bloq-mbot-port-10":"port 10","bloq-send-tweet":"Envia el tweet","bloq-common-ms":"ms","bloq-common-every":"cada","bloq-common-playnote":"Fes sonar la nota","bloq-common-for":"durant","bloq-phone-read":"Llegeix en","bloq-phone-lacceleration":"l’acceleració lineal a l’eix","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Envia pel port sèrie","bloq-zowicomponent-serial-receive":"Rep pel port sèrie","bloq-zowicomponent-serial-receive-int":"Rep el número pel port sèrie","bloq-phone-gyroscope":"el giroscopi a l'eix","bloq-phone-is":"està","bloq-phone-covered":"tapat","bloq-phone-not-covered":"no tapat","bloq-phone-acceleration":"l’acceleració a l’eix","bloq-phone-gravity":"l’acceleració de la gravetat a l’eix","bloq-phone-light":"la llum ambient","bloq-phone-magnetic":"el camp magnètic a l'eix","bloq-phone-sounds-meow-v1":"miau","bloq-phone-sounds-joke-v1":"burla","bloq-value":"Llegeix el valor del","bloq-phone-orientation-azimuth":"azimut","bloq-phone-orientation-roll":"roll","bloq-phone-orientation-pitch":"pitch","bloq-zowi-mouth-custom":"Dibuixa a la teva boca seguint aquesta sèrie de números:","bloq-phone-screen":"a la pantalla de","bloq-phone-light-intensity":"amb una intensitat del","bloq-from-device":"des del","bloq-the":"El","bloq-phone-axis":"a l’eix","bloq-phone-of":"del","bloq-stop-buzzer":"Atura el brunzidor","bloq-buzzer-without-pause":"sense pausa","lateraldisplacement-moveto":"Moure’s lateralment cap a","right":"la dreta","left":"l’esquerra","steps":"passos","forward":"Avança","backward":"Retrocedeix","turn-right":"Gira a la dreta","turn-left":"Gira a l'esquerra","stop":"atura","benddown":"Ajup-te","rotate":"Rota","rotate-grades-foot":"° sobre el peu","upstairs":"Puja escales.","can-move-to":"Pot moure’s a ","move-to":"Desplaça’t a","open":"Obre","close":"Tanca","the-clamp":"La pinça","move-joint":"Mou l’articulació","degrees":"graus","move-for":"durant","roll-to":"Roda cap a la","read-sensor":"Llegeix el sensor","ms-at-speed-of":"ms a una velocitat de","bloq-mbot-getdistance":"Obtén la distància de l’ultrasons","in":"en","inches":"polzades","if":"Si","bloq-mbot-somethingnear-operation-near":"es detecta un obstacle a prop","bloq-mbot-somethingnear-operation-faraway":"es detecta un obstacle lluny","bloq-mbot-somethingnear-operation-nodetect":"no es detecta cap obstacle","with-the":"amb el","bloq-mbot-ifthereisalotoflight-alot":"es detecta molta llum","bloq-mbot-ifthereisalotoflight-low":"es detecta poca llum","bloq-mbot-ifthereisalotoflight-operation-nodetect":"no es detecta llum","bloq-mbot-iffollowlines-if":"Si detecta","bloq-mbot-iffollowlines-and":"Al sensor esquerre i","bloq-mbot-iffollowlines-withsensor":"al sensor dret del","white":"blanc","black":"negre"},"de-DE":{"bloq-zowi-mouth-tongueOut":"Lächeln mit herausgestreckter Zunge","bloq-zowi-mouth-confused":"Irritiertes Gesicht","bloq-zowi-mouth-bigSurprise":"Überraschtes Gesicht","bloq-zowi-distance":"Zowi, miss die Distanz","bloq-zowi-sound":"Zowi, hör aufmerksam zu","bloq-zowi-sounds-OhOoh":"Oh Oh","bloq-zowi-sounds-surprise":"Überraschtsein","bloq-zowi-sounds-sad":"Traurigsein","bloq-zowi-sounds-happy":"Glücklichsein","bloq-zowi-sounds-sleeping":"Schläfrigkeit","bloq-zowi-sounds-cuddly":"Streicheln","bloq-zowi-sounds-confused":"Verwirrung","bloq-zowi-movements-shakeLeg":"bewege das Bein","bloq-zowi-sounds-fart1":"einem Pups","bloq-zowi-movements-speed-medium":"mittleren","bloq-zowi-movements-speed-small":"niedrigen","bloq-zowi-movements-speed-high":"hohen","bloq-break-stopLoop":"Endlosschleife unterbrechen","bloq-code-writeYourCode":"Schreibe deinen eigenen Code","bloq-comment-comment":"Kommentar //","bloq-convert-convert":"Umwandeln","bloq-convert-to":"in","bloq-convert-dec":"Dezimalzahl","bloq-convert-hex":"Hexadezimalzahl","bloq-convert-oct":"Oktalzahl","bloq-convert-bin":"Binärzahl","bloq-serial-receiver-receive":"Empfangen","bloq-serial-send-send":"Senden","bloq-serial-send-print":"Ohne Zeilenumbruch","bloq-serial-send-println":"Mit Zeilenumbruch","bloq-buzzer-advance-sound":"Den Summer erklingen lassen","bloq-buzzer-advance-note":"mit dem Ton","bloq-buzzer-advance-for":"lang","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Den digitalen Pin auslesen","bloq-analog-read-advanced-readpin":"Den analogen Pin auslesen","bloq-continuous-servo-start-advanced-turn":"Servo drehen","bloq-continuous-servo-start-advanced-direction":"in Richtung","bloq-continuous-servo-start-advanced-clockwise":"Im Uhrzeigersinn","bloq-continuous-servo-start-advanced-counterclockwise":"Entgegen des Uhrzeigersinns","bloq-continuous-servo-stop-advanced-stop":"Servo anhalten","bloq-lcd-turn-on-off-advanced-turnon":"Einschalten","bloq-lcd-turn-on-off-advanced-turnoff":"Ausschalten","bloq-lcd-turn-on-off-advanced-lcdLigth":"Das Licht der LCD-Anzeige","bloq-lcd-clear":"Den Inhalt der LCD-Anzeige löschen","bloq-lcd-writte-advanced-write":"Schreiben","bloq-lcd-writte-advanced-inLCD":"auf der LCD-Anzeige","bloq-lcd-writte-advanced-inPosition":"ab der Position (Spalte, Zeile)","bloq-led-advanced-turnon":"Einschalten","bloq-led-advanced-turnoff":"Ausschalten","bloq-led-advanced-theLED":"Die LED","bloq-oscillator-advanced-oscillate":"Servo schwenken","bloq-oscillator-advanced-around":"ungefähr","bloq-oscillator-advanced-amplitude":"mit Amplitude","bloq-oscillator-advanced-speed":"mit Geschwindigkeit","bloq-oscillator-start-advanced-oscillator":"Oszillator starten","bloq-oscillator-stop-advanced-stop":"Oszillator anhalten","bloq-pin-read-advanced-readpin":"Pin auslesen","bloq-pin-writte-advanced-writepin":"Auf dem Pin schreiben","bloq-pin-writte-advanced-data":"den Wert","bloq-read-advanced-read":"Lesen","bloq-servo-advanced-move":"Bewegen","bloq-servo-advanced-to":"um","bloq-servo-advanced-degrees":"Grad","bloq-buzzer-sound":"Den Summer erklingen lassen","bloq-buzzer-note":"mit dem Ton","bloq-buzzer-for":"lang","bloq-buzzer-ms":"ms","bloq-buzzer-do":"C","bloq-buzzer-re":"D","bloq-buzzer-mi":"E","bloq-buzzer-fa":"F","bloq-buzzer-sol":"G","bloq-buzzer-la":"A","bloq-buzzer-si":"H","bloq-continuous-servo-start-turn":"Servo drehen","bloq-continuous-servo-start-direction":"in Richtung","bloq-continuous-servo-start-clockwise":"Im Uhrzeigersinn","bloq-continuous-servo-start-counterclockwise":"Entgegen des Uhrzeigersinns","bloq-continuous-servo-stop-stop":"Servo anhalten","bloq-lcd-turn-on-off-turnon":"Einschalten","bloq-lcd-turn-on-off-turnoff":"Ausschalten","bloq-lcd-turn-on-off-lcdLigth":"Das Licht der LCD-Anzeige","bloq-lcd-writte-write":"Schreiben","bloq-lcd-writte-inLCD":"auf der LCD-Anzeige","bloq-led-turnon":"Einschalten","bloq-led-turnoff":"Ausschalten","bloq-led-theLED":"Die LED","bloq-oscillator-oscillate":"Servo schwenken","bloq-oscillator-around":"ungefähr","bloq-oscillator-amplitude":"mit Amplitude","bloq-oscillator-speed":"mit Geschwindigkeit","bloq-oscillator-times":"Mal","bloq-oscillator-start-oscillator":"Oszillator starten","bloq-oscillator-stop-stop":"Oszillator anhalten","bloq-read-read":"Lesen","bloq-servo-move":"Bewegen","bloq-servo-to":"um","bloq-servo-degrees":"Grad","bloq-case-ifSameTo":"wenn gleich wie","bloq-case-exec":"ausführen:","bloq-case-default-inOtherCase":"andernfalls, ausführen:","bloq-continue-continue":"Mit der nächsten Iteration der Schleife fortfahren","bloq-else-else":"im gegenteiligen Fall, ausführen:","bloq-else-if-if":"ansonsten, wenn","bloq-else-if-else":"ausführen:","bloq-for-count":"Rechnen mit","bloq-for-from":"von","bloq-for-to":"bis","bloq-for-add":"addieren","bloq-for-subtract":"subtrahieren","bloq-for-exec":"ausführen:","bloq-if-if":"Wenn","bloq-if-exec":"ausführen:","bloq-switch-check":"Den Wert überprüfen von","bloq-wait-wait":"Warten","bloq-while-while":"Solange","bloq-while-exec":"ausführen:","bloq-argument-var":"Variable","bloq-argument-float":"Dezimalzahl","bloq-argument-string":"Text","bloq-argument-bool":"Boolesch","bloq-invoke-function-exec":"Ausführen","bloq-invoke-return-function-exec":"Ausführen","bloq-invoke-function-args":"mit den folgenden Argumenten:","bloq-return-return":"Ausgeben","bloq-return-function-declare":"Funktion deklarieren","bloq-return-function-return":"Ausgeben","bloq-return-function-with-arguments-declare":"Funktion deklarieren","bloq-return-function-with-arguments-count":"mit den folgenden Argumenten:","bloq-return-function-with-arguments-return":"Ausgeben","bloq-void-function-declare":"Funktion deklarieren","bloq-void-function-with-arguments-declare":"Funktion deklarieren","bloq-void-function-with-arguments-count":"mit den folgenden Argumenten:","bloq-boolArray-advanced-arraySize":"Array-Größe","bloq-boolArray-advanced-boolType":"und Typ Bool","bloq-boolArray-arraySize":"Array-Größe","bloq-boolArray-boolType":"und Typ Bool","bloq-boolean-true":"Wahr","bloq-boolean-false":"Falsch","bloq-logic-operations-and":"und","bloq-logic-operations-or":"oder","bloq-not-not":"nicht","bloq-loop-header":"Hauptschleife (Loop)","bloq-loop-description":"Erstelle das Programm, das nach dem Setup dauerhaft ausgeführt werden soll.","bloq-setup-header":"Initialanweisungen (Setup)","bloq-setup-description":"Gib an, welche Aktion nach dem Programmstart ausgeführt werden soll.","bloq-var-header":"Globale Variablen, Funktionen und Klassen","bloq-var-description":" Gib die Werte an, die du beim Setup und beim Loop verwenden wirst. Du kannst auch Funktionen erstellen, um Blöcke zu gruppieren.","bloq-numberArray-advanced-arraySize":"Array-Größe","bloq-numberArray-advanced-type":"und Typ","bloq-numberArray-advanced-float":"Dezimalzahl","bloq-numberArray-advanced-int":"ganze Zahl","bloq-map-map":"Map","bloq-map-value":"Wert zwischen [0 -","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"von [","bloq-map-advanced-and":"] bis [","bloq-math-operations-sqrt":"Quadratwurzel","bloq-math-operations-abs":"Absoluter Wert","bloq-numberArray-arraySize":"Array-Größe","bloq-numberArray-floatType":" und Float-Type","bloq-random-random":"Zufallswert zwischen","bloq-random-and":"und","bloq-stringArray-advanced-arraySize":"Array-Größe","bloq-stringArray-advanced-type":"und Typ","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Länge","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array-Größe","bloq-stringArray-stringType":"und Typ Text","bloq-string-create-create":"Text erstellen mit","bloq-hw-variable-advanced-variable":"Variable (Komponenten)","bloq-sw-variable-advanced-variable":"Variable (Code)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Variable bestimmen","bloq-declare-variable-declare-type":"mit Typ","bloq-declare-variable-declare-type-int":"ganze Zahl","bloq-declare-variable-declare-type-float":"Dezimalzahl","bloq-declare-variable-declare-type-text":"Text","bloq-declare-variable-declare-type-char":"Zeichen","bloq-declare-variable-declare-type-bool":"logischer Wert","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Zeichen","bloq-lcd-default":"Hallo!","bloq-comment-default":"Schreibe einen Kommentar","bloq-functions-default":"Name","bloq-wait-ms":"ms","drag-bloq":"Ziehe einen Block hierher, um mit dem Programm zu beginnen","bloq-invoke-class-function-class":"des Objektes","bloq-invoke-arguments-class":"Erstelle ein Objekt der Klasse ","bloq-invoke-arguments-class-name":"mit dem Namen","bloq-invoke-arguments-args":"mit den folgenden Argumenten","bloq-invoke-class-return-function-exec":"Die Funktion ausführen","bloq-invoke-class-function-exec":"Die Funktion ausführen","bloq-invoke-class-function-args":"mit den folgenden Argumenten","bloq-invoke-class-return-function-args-exec":"Die Funktion ausführen","bloq-invoke-class-return-function-args-class":"des Objektes","bloq-invoke-class-return-function-args-args":"mit den folgenden Argumenten","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor, der die folgenden Argumente verwendet","bloq-invoke-class":"Erstelle ein Objekt der Klasse ","bloq-invoke-class-name":"mit dem Namen","bloq-class":"Klasse deklarieren","bloq-class-default":"Name","bloq-class-from":"von","bloq-class-inheritance-type":"vererben als","bloq-class-inheritance-public":"öffentlich","bloq-class-inheritance-protected":"geschützt","bloq-class-inheritance-private":"privat","bloq-public":"Variablen und öffentliche Funktionen:","bloq-protected":"Variablen und geschützte Funktionen:","bloq-private":"Variablen und private Funktionen:","bloq-include-lib-exec":"Die Bibliothek einfügen","bloq-pin-analog-write":"Auf dem analogen Pin schreiben","bloq-pin-digital-write":"Auf dem digitalen Pin schreiben","bloq-pin-analog-write-data":"den Wert","bloq-pin-digital-write-data":"den Wert","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"geh","bloq-zowi-movements-turn":"dreh dich","bloq-zowi-movements-height-moonwalker":"tanz den Moonwalker","bloq-zowi-movements-height-crusaito":"tanz den Kreuzschritt","bloq-zowi-movements-height-flapping":"zappel","bloq-zowi-movements-shakeleg":"bewege die Beine","bloq-zowi-movements-bend":"beuge dich","bloq-zowi-movements-forward":"vor","bloq-zowi-movements-backward":"zurück","bloq-zowi-movements-left":"links","bloq-zowi-movements-right":"rechts","bloq-zowi-movements-speed":"Mal mit einer Geschwindigkeit von","bloq-zowi-mouth":"Zowi, zeichne ein","bloq-zowi-mouth-mouth":"auf deine Lippen","bloq-zowi-mouth-smile":"Lächeln","bloq-zowi-mouth-sad":"trauriges Gesicht","bloq-zowi-mouth-happy":"fröhliches Gesicht","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"vor","bloq-zowi-movements-height-backward":"zurück","bloq-zowi-movements-height-left":"links","bloq-zowi-movements-height-right":"rechts","bloq-zowi-movements-height-speed":"Mal mit der Geschwindigkeit von","bloq-zowi-movements-height-height":"und einer ... Höhe ","bloq-zowi-movements-height-big":"hohen","bloq-zowi-movements-height-medium":"mittleren","bloq-zowi-movements-height-small":"niedrigen","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"bewege dich auf und ab","bloq-zowi-movements-no-dir-swing":"wippe","bloq-zowi-movements-no-dir-tiptoeSwing":"wippe auf Zehenspitzen","bloq-zowi-movements-no-dir-jitter":"schüttle dich","bloq-zowi-movements-no-dir-ascendingTurn":"kreise beim Aufwärtsbewegen","bloq-zowi-movements-no-dir-jump":"spring","bloq-zowi-movements-no-dir-speed":"Mal mit einer Geschwindigkeit von","bloq-zowi-movements-no-dir-height":"und einer ... Höhe","bloq-zowi-movements-no-dir-big":"hohen","bloq-zowi-movements-no-dir-medium":"mittleren","bloq-zowi-movements-no-dir-small":"niedrigen","bloq-zowi-sounds":"Zowi, mach das Geräusch von","bloq-hts221-humidity":"Feuchtigkeitssensor auslesen","bloq-hts221-temperature":"Temperatur des Sensors auslesen","bloq-rgbLed-fade-red":"mit einem Rotwert von","bloq-enable-interrupt":"Die Funktion ausführen","bloq-enable-interrupt-rising":"von 0 zu 1 wechseln","bloq-enable-interrupt-falling":"von 1 zu 0 wechseln","bloq-enable-interrupt-change":"wechseln","bloq-enable-interrupt-pin":"wenn der Eingang des Pins","bloq-rgbLed-green":", einem Grünwert von","bloq-rgbLed-fade":"Fließenden Übergang bei der RGB-LED erzeugen","bloq-rgbLed-red":"mit einem Rotwert von","bloq-rtc-init":"Datum und Uhrzeit der Uhr aktualisieren","bloq-rtc-month":"aktueller Monat","bloq-rtc-using-advanced":"unter Verwendung der Uhr","bloq-rtc-year":"Jahr","bloq-rtc-day":"Tag","bloq-rtc-hour":"Stunde","bloq-rtc-minute":"Minute","bloq-rtc-second":"Sekunde","bloq-rtc-time":"aktuelle Uhrzeit","bloq-rtc-using":"unter Verwendung der Uhr","bloq-rtc-advanced":"Abrufen","bloq-rtc":"Abrufen:","default-var-name-rtc":"reloj_tiempo_real","bloq-rtc-date":"Datum","default-var-name-sound":"Sensor_sonido","bloq-rgbLed-blue":"blaue LED","default-var-name-RGBled":"RGB-LED","bloq-rgbLed":"RGB-LED einschalten","bloq-rgbLed-fade-blue":"und einem Blauwert von","bloq-rgbLed-fade-green":", einem Grünwert von","bloq-rgbLed-simple":"RGB-LED einschalten","bloq-rgbLed-simple-color":"in der Farbe","bloq-rgbLed-simple-red":"Rot","bloq-rgbLed-simple-green":"Grün","bloq-rgbLed-simple-blue":"Blau","bloq-zowi-gestures":"Zowi, zeige dich","bloq-zowi-gestures-ZowiHappy":"Glücklich","bloq-zowi-gestures-ZowiSuperHappy":"Überglücklich","bloq-zowi-gestures-ZowiSad":"Traurig","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"pedoPrrr","bloq-zowi-gestures-ZowiConfused":"Durcheinander","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Verärgert","bloq-zowi-gestures-ZowiFretful":"Unruhig","bloq-zowi-gestures-ZowiMagic":"Magie","bloq-zowi-gestures-ZowiWave":"Welle","bloq-zowi-gestures-ZowiVictory":"Sieg!!!","bloq-zowi-gestures-ZowiFail":"Spiel vorbei...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"Mal","bloq-zowi-movements-simple-walk":"geh","bloq-zowi-movements-simple-turn":"dreh dich","bloq-zowi-movements-simple-shakeLeg":"bewege das Bein","bloq-zowi-movements-simple-bend":"beuge dich","bloq-zowi-movements-simple-moonwalker":"tanz den Moonwalker","bloq-zowi-movements-simple-crusaito":"tanz den Criss-cross","bloq-zowi-movements-simple-flapping":"zapple","bloq-zowi-movements-simple-updown":"bewege dich auf und ab","bloq-zowi-movements-simple-swing":"wippe","bloq-zowi-movements-simple-tiptoeSwing":"wippe auf Zehenspitzen","bloq-zowi-movements-simple-jitter":"schüttle dich","bloq-zowi-movements-simple-ascendingTurn":"kreise beim Aufwärtsbewegen","bloq-zowi-movements-simple-jump":"spring","bloq-zowi-rest":"Zowi, ruh dich aus","bloq-millis":"Ausführungszeit abrufen","bloq-random-seed":"Zufallszahlengenerator starten","bloq-rgbLed-simple-white":"weiß","bloq-rgbLed-simple-yellow":"gelb","bloq-rgbLed-simple-orange":"orange","bloq-rgbLed-simple-dark-green":"dunkelgrün","bloq-rgbLed-simple-dark-blue":"dunkelblau","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Ganze Zahl","bloq-argument-char":"Zeichen","bloq-zowi-buttons":"Taster","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"von Zowi","bloq-zowi-if-distance":"Wenn ein Abstand erkannt wird","bloq-zowi-if-distance-less":"kleinerer","bloq-zowi-if-distance-more":"größerer","bloq-zowi-if-distance-than":"als","bloq-zowi-if-distance-then":"cm, führe Folgendes aus:","bloq-zowi-if-buttons":"Wenn ich die Taste drücke","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", führe Folgendes aus:","bloq-zowi-if-sound":"Wenn er ein Geräusch hört, führt er Folgendes aus:","bloq-evolution-rest":"Ruh dich aus","bloq-evolution-movements-simple":"Bewege dich","bloq-evolution-movements-simple-fordward":"vorwärts","bloq-evolution-movements-simple-backward":"rückwärts","bloq-evolution-movements-simple-right":"rechts","bloq-evolution-movements-simple-left":"links","bloq-evolution-distance":"Miss den Abstand","bloq-evolution-if-distance":"Wenn ein Abstand erkannt wird","bloq-evolution-if-distance-less":"kleinerer","bloq-evolution-if-distance-more":"größerer","bloq-evolution-if-distance-than":"als","bloq-evolution-if-distance-then":"cm, führe Folgendes aus:","bloq-evolution-light":"Miss das Licht","bloq-evolution-light-left":"links","bloq-evolution-light-right":"rechts","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Erfasse die Linie","bloq-evolution-line-left":"links","bloq-evolution-line-right":"rechts","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Schau nach","bloq-evolution-head-left":"links","bloq-evolution-head-right":"rechts","bloq-evolution-head-center":"vorwärts","bloq-evolution-buzzer-do":"C","bloq-evolution-buzzer":"Spiel die Note","bloq-evolution-buzzer-re":"D","bloq-evolution-buzzer-mi":"E","bloq-evolution-buzzer-fa":"F","bloq-evolution-buzzer-sol":"G","bloq-evolution-buzzer-la":"A","bloq-evolution-buzzer-si":"H","bloq-evolution-buzzer-for":"lang","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Schau","bloq-evolution-head-advance-deg":"Grad nach","bloq-evolution-head-advance-left":"links","bloq-evolution-head-advance-right":"rechts","bloq-shield-stepper-steps":"Drehe Schrittmotor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 und 2","bloq-shield-stepper-steps-degdir":"Grad","bloq-shield-stepper-steps-CW":"im Uhrzeigersinn","bloq-shield-stepper-steps-CCW":"gegen den Uhrzeigersinn","bloq-shield-stepper-steps-at":"um","bloq-shield-stepper-steps-rpm":"U/min","bloq-evolution-if-line":"Wenn die Linie erkannt wird","bloq-evolution-if-line-white":"weiß","bloq-evolution-if-line-black":"schwarz","bloq-evolution-if-line-and":"links und","bloq-evolution-if-line-then":"rechts, führe Folgendes aus:","bloq-evolution-if-light":"Wenn Licht gesehen wird,","bloq-evolution-if-light-and":"links und","bloq-evolution-if-light-then":"rechts, führe Folgendes aus:","bloq-evolution-if-light-high":"hohen","bloq-evolution-if-light-medium":"mittleren","bloq-evolution-if-light-low":"niedrigen","bloq-shield-stepper-steps-advanced":"Drehe Schrittmotor","bloq-shield-stepper-steps-advanced-degdir":"Grad","bloq-shield-stepper-steps-advanced-at":"um","bloq-shield-stepper-steps-advanced-rpm":"U/min","bloq-shield-DCmotor-spin":"Drehe Motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"in Richtung","bloq-shield-DCmotor-spin-CW":"im Uhrzeigersinn","bloq-shield-DCmotor-spin-CCW":"gegen den Uhrzeigersinn","bloq-shield-DCmotor-spin-at":"mit","bloq-shield-DCmotor-spin-speed":"% der Maximalgeschwindigkeit","bloq-shield-DCmotor-spinMotor-advanced":"Drehe Motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"in Richtung","bloq-shield-DCmotor-spinMotor-advanced-at":"mit","bloq-shield-DCmotor-spinMotor-advanced-speed":"% der Maximalgeschwindigkeit","bloq-shield-DCmotor-stop":"Motor stoppen","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Motor stoppen","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Ausgangsposition","bloq-zowi-gestures-v1":"Zeige dich","bloq-zowi-gestures-ZowiHappy-v1":"Glücklich","bloq-zowi-gestures-ZowiSuperHappy-v1":"Überglücklich","bloq-zowi-gestures-ZowiSad-v1":"Traurig","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Durcheinander","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Verärgert","bloq-zowi-gestures-ZowiFretful-v1":"Unruhig","bloq-zowi-gestures-ZowiVictory-v1":"Sieg!!!","bloq-zowi-gestures-ZowiFail-v1":"Spiel vorbei...","bloq-zowi-if-buttons-then-v1":", mach:","bloq-zowi-if-distance-then-v1":"cm, mach:","bloq-zowi-if-sound-v1":"Wenn du ein Geräusch hörst mach:","bloq-zowi-mouth-v1":"Zeige ein","bloq-zowi-movements-simple-walk-v1":"geh","bloq-zowi-movements-simple-turn-v1":"dreh dich","bloq-zowi-movements-simple-shakeLeg-v1":"bewege das Bein","bloq-zowi-movements-simple-bend-v1":"beuge dich","bloq-zowi-movements-simple-moonwalker-v1":"tanz den Moonwalker","bloq-zowi-movements-simple-crusaito-v1":"tanz den Criss-Cross","bloq-zowi-movements-simple-flapping-v1":"zapple","bloq-zowi-movements-simple-updown-v1":"bewege dich auf und ab","bloq-zowi-movements-simple-swing-v1":"wippe","bloq-zowi-movements-simple-tiptoeSwing-v1":"wippe auf Zehenspitzen","bloq-zowi-movements-simple-jitter-v1":"schüttle dich","bloq-zowi-movements-simple-ascendingTurn-v1":"kreise beim Aufwärtsbewegen","bloq-zowi-movements-simple-jump-v1":"spring","bloq-zowi-sounds-v1":"Mach das Geräusch","bloq-zowi-sounds-fart1-v1":"Prrr","bloq-zowi-distance-v1":"Miss den Abstand","bloq-zowi-sound-v1":"Hör aufmerksam zu","bloq-zowi-movements-front":"geh","bloq-zowi-movements-front-forward":"vorwärts","bloq-zowi-movements-front-backward":"rückwärts","bloq-zowi-movements-front-speed":"Mal mit einer Geschwindigkeit ","bloq-zowi-movements-front-speed-small":"niedrigen","bloq-zowi-movements-front-speed-medium":"mittleren","bloq-zowi-movements-front-speed-high":"hohen","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"dreh dich","bloq-zowi-movements-sides-shakeLeg":"bewege das Bein","bloq-zowi-movements-sides-bend":"beuge dich","bloq-zowi-movements-sides-left":"links","bloq-zowi-movements-sides-right":"rechts","bloq-zowi-movements-sides-speed":"Mal mit einer Geschwindigkeit ","bloq-zowi-movements-sides-speed-small":"niedrigen","bloq-zowi-movements-sides-speed-medium":"mittleren","bloq-zowi-movements-sides-speed-high":"hohen","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"tanz den Moonwalker","bloq-zowi-movements-height-sides-crusaito":"tanz den Criss-Cross","bloq-zowi-movements-height-sides-left":"links","bloq-zowi-movements-height-sides-right":"rechts","bloq-zowi-movements-height-sides-speed":"Mal mit einer Geschwindigkeit","bloq-zowi-movements-height-sides-speed-small":"niedrigen","bloq-zowi-movements-height-sides-speed-medium":"mittleren","bloq-zowi-movements-height-sides-speed-high":"hohen","bloq-zowi-movements-height-sides-height":"und einer Höhe","bloq-zowi-movements-height-sides-small":"niedrigen","bloq-zowi-movements-height-sides-medium":"mittleren","bloq-zowi-movements-height-sides-big":"großen","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"umwandeln","bloq-num-conversion-to":"um","bloq-num-conversion-int":"ganze Zahl","bloq-num-conversion-float":"Dezimalzahl","bloq-name-default":"Name","bloq-declare-array":"Array-Variable bestimmen","bloq-declare-array-size":"mit der Größe","bloq-declare-array-type":"vom Typ","bloq-servo-detach":"Servo trennen","bloq-servo-attach":"Servo verbinden","bloq-hts221":"auslesen","bloq-hts221-read-temperature":"Temperatur","bloq-hts221-read-humidity":"Feuchtigkeit","bloq-hts221-sensor":"des Sensors","bloq-PTsensor":"auslesen","bloq-PTsensor-pressure":"Luftdruck","bloq-PTsensor-temperature":"Temperatur","bloq-PTsensor-altitude":"Höhe","bloq-PTsensor-sensor":"des Sensors","bloq-PTsensor-calibration":"Luftdruck auf Meereshöhe bei","bloq-PTsensor-calibration-sensor":"Pa am Sensor","bloq-rgbLed-off":"RGB-LED ausschalten","bloq-pin-analog-write-V1":"Auf dem digitalen Pin schreiben","bloq-pin-analog-write-data-V1":"Den analogen Wert","bloq-buzzer-do-#":"C#","bloq-buzzer-re-#":"D#","bloq-buzzer-fa-#":"F#","bloq-buzzer-sol-#":"G#","bloq-buzzer-la-#":"A#","bloq-serial-receiver-receive-number":"Zahl erhalten","bloq-declare-array-declare":"Array bestimmen","bloq-declare-array-declare-type":"vom Typ","bloq-declare-array-declare-size":"mit der Größe","bloq-pin-digital-write-data-V1":"der digitale Wert","bloq-round-advanced-roundto":"Aufrunden ","bloq-round-advanced-floor":"nach unten","bloq-round-advanced-ceil":"nach oben","bloq-round-advanced-round":"der/die nächstliegendste","bloq-round-advanced-thenumber":"die Zahl.","bloq-rtc-date-2":"Jahr/Monat/Tag","bloq-rtc-time-2":"Stunde:Minute:Sekunde","bloq-pinlevel-high":"Hoch","bloq-pinlevel-low":"Niedrig","suggested":"Vorschläge","bloq-viewer":"Daten an die Anzeige senden","bloq-mbot-buzzer-note":"Die Note ... ... ... ... erklingen lassen","bloq-mbot-buzzer-for":"... lang","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Die Entfernung (cm) des Ultraschallsensors über .... erhalten","bloq-mbot-port-1":"Port 1","bloq-mbot-port-2":"Port 2","bloq-mbot-port-3":"Port 3","bloq-mbot-port-4":"Port 4","bloq-mbot-getbuttonstatus":"Status der Taste auslesen","bloq-mbot-getlightsensor":"Lichtsensor auslesen","bloq-mbot-linefollower-text":"Information des Infrarotsensors über ... erhalten","bloq-mbot-move-forward":"Vor","bloq-mbot-move-backward":"Zurück","bloq-mbot-move-turnleft":"Nach links drehen","bloq-mbot-move-turnright":"Nach rechts drehen","bloq-mbot-move-speed":"Mit einer .... Geschwindigkeit","bloq-mbot-move-speed-fast":"sehr schnellen","bloq-mbot-move-speed-normal":"normalen","bloq-mbot-move-speed-slow":"langsamen","bloq-mbot-setled-set":"einrichten","bloq-mbot-led-all":"Alle LEDs","bloq-mbot-led-right":"Die rechte LED","bloq-mbot-led-left":"Die linke LED","bloq-mbot-setled-colormix":"mit dieser Farbkombination:","bloq-mbot-setled-green":"grün:","bloq-mbot-setled-red":"rot:","bloq-mbot-setled-blue":"blau:","bloq-mbot-stop":"Den Roboter anhalten","bloq-mbot-turnoffled-off":"Ausschalten","bloq-mbot-buzzer-advanced-play":"Die Note ... ... ... ... erklingen lassen","bloq-mbot-move-advanced-speed":"Mit einer .... Geschwindigkeit","bloq-mbot-setled-advanced-set":"einrichten","bloq-mbot-setled-advanced-colormix":"mit dieser Farbkombination:","bloq-mbot-setled-advanced-red":"rot:","bloq-mbot-setled-advanced-green":"grün:","bloq-mbot-setled-advanced-blue":"blau:","bloq-mbot-buzzer-advanced-for":"... lang","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Wiederholen","bloq-magicfor-times":"Mal","bloq-phone-sounds":"Ton erzeugen","bloq-phone-sounds-device":"im Gerät","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"bass","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Auf dem Display anzeigen","bloq-phone-receive":"Daten als Sprache oder Text erhalten","bloq-phone-toggle-light":"Mit einer Frequenz von .... blinken","bloq-phone-toggle-units":"Sekunden","bloq-phone-turnon-light":"Die Taschenlampe mit einer Intensität von ... einschalten","bloq-phone-turnoff-light":"Die Taschenlampe ausschalten","bloq-twitter-config":"Die App Twitter konfigurieren","bloq-mbot-port-5":"Port 5","bloq-mbot-port-6":"Port 6","bloq-mbot-port-7":"Port 7","bloq-mbot-port-8":"Port 8","bloq-mbot-port-9":"Port 9","bloq-mbot-port-10":"Port 10","bloq-send-tweet":"Tweet senden","bloq-common-ms":"ms","bloq-common-every":"alle","bloq-common-playnote":"Die Note ... ... ... ... erklingen lassen","bloq-common-for":"lang","bloq-phone-read":"In ... lesen","bloq-phone-lacceleration":"die lineare Beschleunigung in der Achse","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Über den seriellen Port senden","bloq-zowicomponent-serial-receive":"Über den seriellen Port empfangen","bloq-zowicomponent-serial-receive-int":"Zahl über den seriellen Port empfangen","bloq-phone-gyroscope":"Das Gyroskop in der Achse","bloq-phone-is":"ist ","bloq-phone-covered":"verdeckt","bloq-phone-not-covered":"nicht verdeckt","bloq-phone-acceleration":"die Beschleunigung in der Achse","bloq-phone-gravity":"die Erdbeschleunigung in der Achse","bloq-phone-light":"das Umgebungslicht","bloq-phone-magnetic":"das Magnetfeld in der Achse","bloq-phone-sounds-meow-v1":"Miao","bloq-phone-sounds-joke-v1":"Auslachen","bloq-value":"Den Wert des x auslesen","bloq-phone-orientation-azimuth":"Azimuth","bloq-phone-orientation-roll":"roll","bloq-phone-orientation-pitch":"pitch","bloq-zowi-mouth-custom":"Zeichne auf deinem Mund nach dieser Zahlenreihe:","bloq-phone-screen":"auf dem Bildschirm von","bloq-phone-light-intensity":"mit einer Intensität von","bloq-from-device":"von dem","bloq-the":"der","bloq-phone-axis":"auf der Achse","bloq-phone-of":"des","bloq-stop-buzzer":"Den Summer stoppen","bloq-buzzer-without-pause":"Ohne Unterbrechung","lateraldisplacement-moveto":"Seitlich nach x bewegen","right":"rechts","left":"links","steps":"Schritte","forward":"Vor","backward":"Zurück","turn-right":"Nach rechts drehen","turn-left":"Nach links drehen","stop":"anhalten","benddown":"sich bücken","rotate":"sich drehen","rotate-grades-foot":"° auf dem x Fuß","upstairs":"Treppensteigen","can-move-to":"Kann er sich nach x bewegen? ","move-to":"sich bewegen nach","open":"Öffnen","close":"Schließen","the-clamp":"Die Klammer","move-joint":"Das Gelenk bewegen","degrees":"Grad","move-for":"... lang","roll-to":"Nach x rollen","read-sensor":"Den Sensor auslesen","ms-at-speed-of":"ms mit einer Geschwindigkeit von","bloq-mbot-getdistance":"Die Entfernung des Ultraschallsensors erhalten","in":"in","inches":"Zoll","if":"Wenn","bloq-mbot-somethingnear-operation-near":"ein Hindernis in der Nähe erkannt wird","bloq-mbot-somethingnear-operation-faraway":"ein Hindernis in der Ferne erkannt wird","bloq-mbot-somethingnear-operation-nodetect":"kein Hindernis erkannt wird","with-the":"mit dem","bloq-mbot-ifthereisalotoflight-alot":"viel Licht erkannt wird","bloq-mbot-ifthereisalotoflight-low":"wenig Licht erkannt wird","bloq-mbot-ifthereisalotoflight-operation-nodetect":"Kein Licht erkannt wird","bloq-mbot-iffollowlines-if":"Wenn x erkannt wird","bloq-mbot-iffollowlines-and":"im linken Sensor und","bloq-mbot-iffollowlines-withsensor":"im rechten Sensor des","white":"weiß","black":"schwarz"},"en-GB":{"bloq-zowi-mouth-tongueOut":"smile with tongue out","bloq-zowi-mouth-confused":"confused face","bloq-zowi-mouth-bigSurprise":"surprised face","bloq-zowi-distance":"Zowi, measure the distance","bloq-zowi-sound":"Zowi, listen carefully","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"surprise","bloq-zowi-sounds-sad":"sadness","bloq-zowi-sounds-happy":"happiness","bloq-zowi-sounds-sleeping":"sleepiness","bloq-zowi-sounds-cuddly":"cuddle","bloq-zowi-sounds-confused":"confusion","bloq-zowi-movements-shakeLeg":"move leg ","bloq-zowi-sounds-fart1":"fart","bloq-zowi-movements-speed-medium":"medium","bloq-zowi-movements-speed-small":"low","bloq-zowi-movements-speed-high":"high","bloq-break-stopLoop":"Break out of the loop","bloq-code-writeYourCode":"Create your own code","bloq-comment-comment":"Comment //","bloq-convert-convert":"Convert","bloq-convert-to":"to","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binary","bloq-serial-receiver-receive":"Receive","bloq-serial-send-send":"Send","bloq-serial-send-print":"Without line break","bloq-serial-send-println":"With line break","bloq-buzzer-advance-sound":"Sound the buzzer","bloq-buzzer-advance-note":"with the note","bloq-buzzer-advance-for":"for","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Read digital pin","bloq-analog-read-advanced-readpin":"Read analogue pin","bloq-continuous-servo-start-advanced-turn":"Rotate servo","bloq-continuous-servo-start-advanced-direction":"direction","bloq-continuous-servo-start-advanced-clockwise":"clockwise","bloq-continuous-servo-start-advanced-counterclockwise":"anti-clockwise","bloq-continuous-servo-stop-advanced-stop":"Stop servo","bloq-lcd-turn-on-off-advanced-turnon":"Switch on","bloq-lcd-turn-on-off-advanced-turnoff":"Switch off","bloq-lcd-turn-on-off-advanced-lcdLigth":"the LCD light","bloq-lcd-clear":"Clear content of the LCD","bloq-lcd-writte-advanced-write":"Write","bloq-lcd-writte-advanced-inLCD":"on the LCD","bloq-lcd-writte-advanced-inPosition":"starting at position (column, row)","bloq-led-advanced-turnon":"Switch on","bloq-led-advanced-turnoff":"Switch off","bloq-led-advanced-theLED":"the LED","bloq-oscillator-advanced-oscillate":"Oscillate servo","bloq-oscillator-advanced-around":"around","bloq-oscillator-advanced-amplitude":"with amplitude","bloq-oscillator-advanced-speed":"with speed","bloq-oscillator-start-advanced-oscillator":"Oscillator","bloq-oscillator-stop-advanced-stop":"Stop oscillator","bloq-pin-read-advanced-readpin":"Read the pin","bloq-pin-writte-advanced-writepin":"Write on the pin","bloq-pin-writte-advanced-data":"the data","bloq-read-advanced-read":"Read","bloq-servo-advanced-move":"Move","bloq-servo-advanced-to":"to","bloq-servo-advanced-degrees":"degrees","bloq-buzzer-sound":"Sound the buzzer","bloq-buzzer-note":"with the note","bloq-buzzer-for":"for","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Rotate servo","bloq-continuous-servo-start-direction":"direction","bloq-continuous-servo-start-clockwise":"clockwise","bloq-continuous-servo-start-counterclockwise":"anti-clockwise","bloq-continuous-servo-stop-stop":"Stop servo","bloq-lcd-turn-on-off-turnon":"Switch on","bloq-lcd-turn-on-off-turnoff":"Switch off","bloq-lcd-turn-on-off-lcdLigth":"the LCD light","bloq-lcd-writte-write":"Write","bloq-lcd-writte-inLCD":"on the LCD","bloq-led-turnon":"Switch on","bloq-led-turnoff":"Switch off","bloq-led-theLED":"the LED","bloq-oscillator-oscillate":"Oscillate servo","bloq-oscillator-around":"around","bloq-oscillator-amplitude":"with amplitude","bloq-oscillator-speed":"with speed","bloq-oscillator-times":"times","bloq-oscillator-start-oscillator":"Start oscillator","bloq-oscillator-stop-stop":"Stop oscillator","bloq-read-read":"Read","bloq-servo-move":"Move","bloq-servo-to":"to","bloq-servo-degrees":"degrees","bloq-case-ifSameTo":"if equal to","bloq-case-exec":"do:","bloq-case-default-inOtherCase":"default, do:","bloq-continue-continue":"Continue with next iteration of the loop","bloq-else-else":"else, do:","bloq-else-if-if":"else if","bloq-else-if-else":"do:","bloq-for-count":"Count with","bloq-for-from":"from","bloq-for-to":"until","bloq-for-add":"adding","bloq-for-subtract":"subtracting","bloq-for-exec":"do:","bloq-if-if":"If","bloq-if-exec":"do:","bloq-switch-check":"Check the value of","bloq-wait-wait":"Wait","bloq-while-while":"While","bloq-while-exec":"do:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Text","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Do","bloq-invoke-return-function-exec":"Do","bloq-invoke-function-args":"with the following parameters:","bloq-return-return":"Return","bloq-return-function-declare":"Declare function","bloq-return-function-return":"Return","bloq-return-function-with-arguments-declare":"Declare function","bloq-return-function-with-arguments-count":"counting with","bloq-return-function-with-arguments-return":"Return","bloq-void-function-declare":"Declare function","bloq-void-function-with-arguments-declare":"Declare function","bloq-void-function-with-arguments-count":"counting with","bloq-boolArray-advanced-arraySize":"Array with size","bloq-boolArray-advanced-boolType":"and bool type","bloq-boolArray-arraySize":"Array with size","bloq-boolArray-boolType":"and bool type","bloq-boolean-true":"True","bloq-boolean-false":"False","bloq-logic-operations-and":"and","bloq-logic-operations-or":"or","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Create the program to be executed continuously after the Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indicate the action to be executed once when the program starts.","bloq-var-header":"Global variables, functions and classes","bloq-var-description":" Define the values that you will use in Setup and Loop, you can also make functions for grouping blocks together.","bloq-numberArray-advanced-arraySize":"Array with size","bloq-numberArray-advanced-type":"and type","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"integer","bloq-map-map":"Map","bloq-map-value":"value between [0 -","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"from [","bloq-map-advanced-and":"] to [","bloq-math-operations-sqrt":"Square root","bloq-math-operations-abs":"Absolute value","bloq-numberArray-arraySize":"Array with size","bloq-numberArray-floatType":" and float type","bloq-random-random":"Random between","bloq-random-and":"and","bloq-stringArray-advanced-arraySize":"Array with size","bloq-stringArray-advanced-type":"and type","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Length","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array with size","bloq-stringArray-stringType":"and text type","bloq-string-create-create":"Create text with","bloq-hw-variable-advanced-variable":"Variable (components)","bloq-sw-variable-advanced-variable":"Variable (components)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declare variable","bloq-declare-variable-declare-type":"with type","bloq-declare-variable-declare-type-int":"integer","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"text","bloq-declare-variable-declare-type-char":"character","bloq-declare-variable-declare-type-bool":"boolean","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Character","bloq-lcd-default":"Hi!","bloq-comment-default":"Type a comment","bloq-functions-default":"Name","bloq-wait-ms":"ms","drag-bloq":"Drag a block here to start your program","bloq-invoke-class-function-class":"of the object","bloq-invoke-arguments-class":"Create an object of the class","bloq-invoke-arguments-class-name":"with the name","bloq-invoke-arguments-args":"with the following arguments","bloq-invoke-class-return-function-exec":"Execute the function","bloq-invoke-class-function-exec":"Execute the function","bloq-invoke-class-function-args":"with the following arguments","bloq-invoke-class-return-function-args-exec":"Execute the function","bloq-invoke-class-return-function-args-class":"of the object","bloq-invoke-class-return-function-args-args":"with the following arguments","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor that uses the following arguments","bloq-invoke-class":"Create an object of the class","bloq-invoke-class-name":"with the name","bloq-class":"Declare the class","bloq-class-default":"Name","bloq-class-from":"of","bloq-class-inheritance-type":"inherit ","bloq-class-inheritance-public":"public","bloq-class-inheritance-protected":"protected","bloq-class-inheritance-private":"private","bloq-public":"Public variables and functions:","bloq-protected":"Protected variables and functions:","bloq-private":"Private variables and functions:","bloq-include-lib-exec":"Include the library","bloq-pin-analog-write":"Write on the analogue pin","bloq-pin-digital-write":"Write on the digital pin","bloq-pin-analog-write-data":"the data","bloq-pin-digital-write-data":"the data","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"walk","bloq-zowi-movements-turn":"turn","bloq-zowi-movements-height-moonwalker":"moonwalk","bloq-zowi-movements-height-crusaito":"cross-step","bloq-zowi-movements-height-flapping":"flap","bloq-zowi-movements-shakeleg":"shake your legs","bloq-zowi-movements-bend":"bend","bloq-zowi-movements-forward":"forward","bloq-zowi-movements-backward":"backward","bloq-zowi-movements-left":"left","bloq-zowi-movements-right":"right","bloq-zowi-movements-speed":"steps with a","bloq-zowi-mouth":"Zowi, draw a","bloq-zowi-mouth-mouth":"on your mouth","bloq-zowi-mouth-smile":"smile","bloq-zowi-mouth-sad":"sad face","bloq-zowi-mouth-happy":"happy face","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"forward","bloq-zowi-movements-height-backward":"backward","bloq-zowi-movements-height-left":"left","bloq-zowi-movements-height-right":"right","bloq-zowi-movements-height-speed":"times with a","bloq-zowi-movements-height-height":"speed and a","bloq-zowi-movements-height-big":"high","bloq-zowi-movements-height-medium":"medium","bloq-zowi-movements-height-small":"low","bloq-zowi-movements-no-dir":"Zowi,","bloq-zowi-movements-no-dir-updown":"go up and down","bloq-zowi-movements-no-dir-swing":"swing","bloq-zowi-movements-no-dir-tiptoeSwing":"swing on tiptoes","bloq-zowi-movements-no-dir-jitter":"jitter","bloq-zowi-movements-no-dir-ascendingTurn":"ascending turn","bloq-zowi-movements-no-dir-jump":"jump","bloq-zowi-movements-no-dir-speed":"times with a","bloq-zowi-movements-no-dir-height":"speed and a","bloq-zowi-movements-no-dir-big":"high","bloq-zowi-movements-no-dir-medium":"medium","bloq-zowi-movements-no-dir-small":"low","bloq-zowi-sounds":"Zowi, make this sound:","bloq-hts221-humidity":"Read humidity of the sensor","bloq-hts221-temperature":"Read temperature of the sensor","bloq-rgbLed-fade-red":"with a red value of","bloq-enable-interrupt":"Execute the function","bloq-enable-interrupt-rising":"change from 0 to 1","bloq-enable-interrupt-falling":"change from 1 to 0","bloq-enable-interrupt-change":"change","bloq-enable-interrupt-pin":"when the pin input","bloq-rgbLed-green":", a green value of","bloq-rgbLed-fade":"Create a gradient on the RBG LED","bloq-rgbLed-red":"with a red value of","bloq-rtc-init":"Update time and date of the clock","bloq-rtc-month":"month","bloq-rtc-using-advanced":"currently used by clock","bloq-rtc-year":"year","bloq-rtc-day":"day","bloq-rtc-hour":"hour","bloq-rtc-minute":"minute","bloq-rtc-second":"second","bloq-rtc-time":"hour","bloq-rtc-using":"currently used by clock","bloq-rtc-advanced":"Get","bloq-rtc":"Get the","default-var-name-rtc":"real_time_clock","bloq-rtc-date":"date","default-var-name-sound":"sound_sensor","bloq-rgbLed-blue":"and a blue value of","default-var-name-RGBled":"RGB_LED","bloq-rgbLed":"Light up the RGB LED","bloq-rgbLed-fade-blue":"and a blue value of","bloq-rgbLed-fade-green":", a green value of","bloq-rgbLed-simple":"Light up the RGB LED","bloq-rgbLed-simple-color":"in","bloq-rgbLed-simple-red":"red","bloq-rgbLed-simple-green":"green","bloq-rgbLed-simple-blue":"blue","bloq-zowi-gestures":"Zowi, show","bloq-zowi-gestures-ZowiHappy":"happy","bloq-zowi-gestures-ZowiSuperHappy":"super happy","bloq-zowi-gestures-ZowiSad":"sad","bloq-zowi-gestures-ZowiSleeping":"sleepy","bloq-zowi-gestures-ZowiFart":"fart","bloq-zowi-gestures-ZowiConfused":"confused","bloq-zowi-gestures-ZowiLove":"in love","bloq-zowi-gestures-ZowiAngry":"angry","bloq-zowi-gestures-ZowiFretful":"anxious","bloq-zowi-gestures-ZowiMagic":"magic","bloq-zowi-gestures-ZowiWave":"wave","bloq-zowi-gestures-ZowiVictory":"victory","bloq-zowi-gestures-ZowiFail":"defeat","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"times","bloq-zowi-movements-simple-walk":"walk","bloq-zowi-movements-simple-turn":"turn","bloq-zowi-movements-simple-shakeLeg":"move leg","bloq-zowi-movements-simple-bend":"bend","bloq-zowi-movements-simple-moonwalker":"moonwalk","bloq-zowi-movements-simple-crusaito":"cross-step","bloq-zowi-movements-simple-flapping":"flap","bloq-zowi-movements-simple-updown":"go up and down","bloq-zowi-movements-simple-swing":"swing","bloq-zowi-movements-simple-tiptoeSwing":"swing on tiptoes","bloq-zowi-movements-simple-jitter":"jitter","bloq-zowi-movements-simple-ascendingTurn":"ascending turn","bloq-zowi-movements-simple-jump":"jump","bloq-zowi-rest":"Zowi, rest","bloq-millis":"Get execution time","bloq-random-seed":"Start random number generator","bloq-rgbLed-simple-white":"white","bloq-rgbLed-simple-yellow":"yellow","bloq-rgbLed-simple-orange":"orange","bloq-rgbLed-simple-dark-green":"dark green","bloq-rgbLed-simple-dark-blue":"dark blue","bloq-rgbLed-simple-pink":"pink","bloq-argument-int":"Integer","bloq-argument-char":"Character","bloq-zowi-buttons":"button","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"of Zowi","bloq-zowi-if-distance":"If it detects a distance","bloq-zowi-if-distance-less":"of less","bloq-zowi-if-distance-more":"of more","bloq-zowi-if-distance-than":"than","bloq-zowi-if-distance-then":"centimetres, it will do this:","bloq-zowi-if-buttons":"If I press button","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", do:","bloq-zowi-if-sound":"If it hears a noise, it will do this:","bloq-evolution-rest":"Stop robot","bloq-evolution-movements-simple":"Move","bloq-evolution-movements-simple-fordward":"forward","bloq-evolution-movements-simple-backward":"backward","bloq-evolution-movements-simple-right":"right","bloq-evolution-movements-simple-left":"left","bloq-evolution-distance":"Measure the distance","bloq-evolution-if-distance":"If it detects a distance","bloq-evolution-if-distance-less":"of less","bloq-evolution-if-distance-more":"of more","bloq-evolution-if-distance-than":"than","bloq-evolution-if-distance-then":"centimetres, it will do this:","bloq-evolution-light":"Measure the light","bloq-evolution-light-left":"left","bloq-evolution-light-right":"right","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Detect the line","bloq-evolution-line-left":"left","bloq-evolution-line-right":"right","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Look","bloq-evolution-head-left":"left","bloq-evolution-head-right":"right","bloq-evolution-head-center":"forward","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Touch the note","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"for","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Look","bloq-evolution-head-advance-deg":"degrees","bloq-evolution-head-advance-left":"left","bloq-evolution-head-advance-right":"right","bloq-shield-stepper-steps":"Turn the stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 and 2","bloq-shield-stepper-steps-degdir":"degrees","bloq-shield-stepper-steps-CW":"clockwise","bloq-shield-stepper-steps-CCW":"anti-clockwise","bloq-shield-stepper-steps-at":"at","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"If the line detected is","bloq-evolution-if-line-white":"white","bloq-evolution-if-line-black":"black","bloq-evolution-if-line-and":"on the left and","bloq-evolution-if-line-then":"on the right, it will do this:","bloq-evolution-if-light":"If it sees light","bloq-evolution-if-light-and":"on the left and","bloq-evolution-if-light-then":"on the right, it will do this:","bloq-evolution-if-light-high":"high","bloq-evolution-if-light-medium":"medium","bloq-evolution-if-light-low":"low","bloq-shield-stepper-steps-advanced":"Turn the stepper motor","bloq-shield-stepper-steps-advanced-degdir":"degrees","bloq-shield-stepper-steps-advanced-at":"at","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Turn the motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"direction","bloq-shield-DCmotor-spin-CW":"clockwise","bloq-shield-DCmotor-spin-CCW":"anti-clockwise","bloq-shield-DCmotor-spin-at":"at","bloq-shield-DCmotor-spin-speed":"% Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Turn the motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"direction","bloq-shield-DCmotor-spinMotor-advanced-at":"at","bloq-shield-DCmotor-spinMotor-advanced-speed":"% Vmax","bloq-shield-DCmotor-stop":"Stop the motor","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Stop the motor","bloq-zowi-movements-endtext":"speed","bloq-zowi-movements-height-endtext":"height","bloq-zowi-movements-no-dir-endtext":"height","bloq-zowi-rest-v1":"Start position","bloq-zowi-gestures-v1":"Make this animation:","bloq-zowi-gestures-ZowiHappy-v1":"Happy","bloq-zowi-gestures-ZowiSuperHappy-v1":"Super Happy","bloq-zowi-gestures-ZowiSad-v1":"Sad","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confused","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Angry","bloq-zowi-gestures-ZowiFretful-v1":"Anxious","bloq-zowi-gestures-ZowiVictory-v1":"Victory","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", do:","bloq-zowi-if-distance-then-v1":"cm, do:","bloq-zowi-if-sound-v1":"If Zowi hears a sound, do:","bloq-zowi-mouth-v1":"Show a:","bloq-zowi-movements-simple-walk-v1":"Walk","bloq-zowi-movements-simple-turn-v1":"Turn","bloq-zowi-movements-simple-shakeLeg-v1":"Move leg","bloq-zowi-movements-simple-bend-v1":"Bend","bloq-zowi-movements-simple-moonwalker-v1":"Moonwalk","bloq-zowi-movements-simple-crusaito-v1":"Criss-cross","bloq-zowi-movements-simple-flapping-v1":"Shake","bloq-zowi-movements-simple-updown-v1":"Go up and down","bloq-zowi-movements-simple-swing-v1":"Swing","bloq-zowi-movements-simple-tiptoeSwing-v1":"Swing on tiptoes","bloq-zowi-movements-simple-jitter-v1":"Tremble","bloq-zowi-movements-simple-ascendingTurn-v1":"Ascending turn","bloq-zowi-movements-simple-jump-v1":"Jump","bloq-zowi-sounds-v1":"Make this sound:","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"measure the distance","bloq-zowi-sound-v1":"listen carefully","bloq-zowi-movements-front":"Walk","bloq-zowi-movements-front-forward":"forward","bloq-zowi-movements-front-backward":"backward","bloq-zowi-movements-front-speed":"times at this speed:","bloq-zowi-movements-front-speed-small":"low","bloq-zowi-movements-front-speed-medium":"medium","bloq-zowi-movements-front-speed-high":"high","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"Turn","bloq-zowi-movements-sides-shakeLeg":"Move leg","bloq-zowi-movements-sides-bend":"Bend","bloq-zowi-movements-sides-left":"left","bloq-zowi-movements-sides-right":"right","bloq-zowi-movements-sides-speed":"times at this speed:","bloq-zowi-movements-sides-speed-small":"low","bloq-zowi-movements-sides-speed-medium":"medium","bloq-zowi-movements-sides-speed-high":"high","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"Moonwalk","bloq-zowi-movements-height-sides-crusaito":"Criss-cross","bloq-zowi-movements-height-sides-left":"left","bloq-zowi-movements-height-sides-right":"right","bloq-zowi-movements-height-sides-speed":"times at this speed:","bloq-zowi-movements-height-sides-speed-small":"low","bloq-zowi-movements-height-sides-speed-medium":"medium","bloq-zowi-movements-height-sides-speed-high":"high","bloq-zowi-movements-height-sides-height":"and a height","bloq-zowi-movements-height-sides-small":"low","bloq-zowi-movements-height-sides-medium":"medium","bloq-zowi-movements-height-sides-big":"high","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"convert","bloq-num-conversion-to":"to","bloq-num-conversion-int":"integer","bloq-num-conversion-float":"decimal","bloq-name-default":"Name","bloq-declare-array":"Declare array variable","bloq-declare-array-size":"with size","bloq-declare-array-type":"and type","bloq-servo-detach":"Detach servo","bloq-servo-attach":"Attach servo","bloq-hts221":"Read","bloq-hts221-read-temperature":"temperature","bloq-hts221-read-humidity":"humidity","bloq-hts221-sensor":"of the sensor","bloq-PTsensor":"Read","bloq-PTsensor-pressure":"pressure","bloq-PTsensor-temperature":"temperature","bloq-PTsensor-altitude":"altitude","bloq-PTsensor-sensor":"of the sensor","bloq-PTsensor-calibration":"Define the pressure at sea level to","bloq-PTsensor-calibration-sensor":"Pa in the sensor","bloq-rgbLed-off":"Turn off the RGB LED","bloq-pin-analog-write-V1":"Write on the pin","bloq-pin-analog-write-data-V1":"the analogical value","bloq-buzzer-do-#":"C#","bloq-buzzer-re-#":"D#","bloq-buzzer-fa-#":"F#","bloq-buzzer-sol-#":"G#","bloq-buzzer-la-#":"A#","bloq-serial-receiver-receive-number":"Receive number","bloq-declare-array-declare":"Declare array","bloq-declare-array-declare-type":"of type","bloq-declare-array-declare-size":"and size","bloq-pin-digital-write-data-V1":"digital value","bloq-round-advanced-roundto":"Round up","bloq-round-advanced-floor":"down","bloq-round-advanced-ceil":"up","bloq-round-advanced-round":"nearest","bloq-round-advanced-thenumber":"number","bloq-rtc-date-2":"year/month/day","bloq-rtc-time-2":"hour:minutes:seconds","bloq-pinlevel-high":"High","bloq-pinlevel-low":"Low","suggested":"Suggested","bloq-viewer":"Send data to the Viewer","bloq-mbot-buzzer-note":"Play the note","bloq-mbot-buzzer-for":"for","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Get ultrasound sensor distance (cm) on","bloq-mbot-port-1":"port 1","bloq-mbot-port-2":"port 2","bloq-mbot-port-3":"port 3","bloq-mbot-port-4":"port 4","bloq-mbot-getbuttonstatus":"Read button status","bloq-mbot-getlightsensor":"Read light sensor","bloq-mbot-linefollower-text":"Get infrared sensor data on","bloq-mbot-move-forward":"Forward","bloq-mbot-move-backward":"backward","bloq-mbot-move-turnleft":"turn left","bloq-mbot-move-turnright":"turn right","bloq-mbot-move-speed":"at speed","bloq-mbot-move-speed-fast":"fast","bloq-mbot-move-speed-normal":"normal","bloq-mbot-move-speed-slow":"slow","bloq-mbot-setled-set":"Set","bloq-mbot-led-all":"all LED","bloq-mbot-led-right":"right LED","bloq-mbot-led-left":"left LED","bloq-mbot-setled-colormix":"with this color value","bloq-mbot-setled-green":"green:","bloq-mbot-setled-red":"red:","bloq-mbot-setled-blue":"blue:","bloq-mbot-stop":"Stop robot","bloq-mbot-turnoffled-off":"Switch off","bloq-mbot-buzzer-advanced-play":"play the note","bloq-mbot-move-advanced-speed":"at speed","bloq-mbot-setled-advanced-set":"Set","bloq-mbot-setled-advanced-colormix":"with this color value","bloq-mbot-setled-advanced-red":"red:","bloq-mbot-setled-advanced-green":"green:","bloq-mbot-setled-advanced-blue":"blue:","bloq-mbot-buzzer-advanced-for":"for","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Repeat","bloq-magicfor-times":"times","bloq-phone-sounds":"Emit sound","bloq-phone-sounds-device":"in the device","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"bass","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Show on screen","bloq-phone-receive":"Receive data by voice or text","bloq-phone-toggle-light":"Blink at a frequency of","bloq-phone-toggle-units":"seconds","bloq-phone-turnon-light":"Turn on torch with an intensity of","bloq-phone-turnoff-light":"Turn off torch","bloq-twitter-config":"Set up the Twitter application","bloq-mbot-port-5":"port 5","bloq-mbot-port-6":"port 6","bloq-mbot-port-7":"port 7","bloq-mbot-port-8":"port 8","bloq-mbot-port-9":"port 9","bloq-mbot-port-10":"port 10","bloq-send-tweet":"Send tweet","bloq-common-ms":"ms","bloq-common-every":"every","bloq-common-playnote":"Play the note","bloq-common-for":"for","bloq-phone-read":"Read from","bloq-phone-lacceleration":"the lineal acceleration on the axis","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Send via serial port","bloq-zowicomponent-serial-receive":"Receive via serial port","bloq-zowicomponent-serial-receive-int":"Receive int via serial port","bloq-phone-gyroscope":"the gyroscope on the axis","bloq-phone-is":"is","bloq-phone-covered":"covered","bloq-phone-not-covered":"not covered","bloq-phone-acceleration":"the acceleration on the axis","bloq-phone-gravity":"the acceleration of gravity on the axis","bloq-phone-light":"the ambient light","bloq-phone-magnetic":"the magnetic field on the axis","bloq-phone-sounds-meow-v1":"meow","bloq-phone-sounds-joke-v1":"joke","bloq-value":"Read the value of","bloq-phone-orientation-azimuth":"azimuth","bloq-phone-orientation-roll":"roll","bloq-phone-orientation-pitch":"pitch","bloq-zowi-mouth-custom":"Draw in your mouth Following this series of numbers:","bloq-phone-screen":"on the screen of","bloq-phone-light-intensity":"with an intensity of","bloq-from-device":"from the","bloq-the":"the","bloq-phone-axis":"in the axis","bloq-phone-of":"of the","bloq-stop-buzzer":"Stop the buzzer","bloq-buzzer-without-pause":"without pause","lateraldisplacement-moveto":"Move to the","right":"right","left":"left","steps":"steps","forward":"Forward","backward":"Backward","turn-right":"Turn right","turn-left":"Turn left","stop":"stop","benddown":"Bend down","rotate":"Rotate","rotate-grades-foot":"º on the foot","upstairs":"Upstairs","can-move-to":"cam move to","move-to":"move to","open":"Open","close":"Close","the-clamp":"clamp","move-joint":"Move the joint","degrees":"degrees","move-for":"for","roll-to":"Roll to","read-sensor":"Read sensor","ms-at-speed-of":"ms at speed of","bloq-mbot-getdistance":"Get ultrasound sensor distance","in":"in","inches":"inches","if":"If","bloq-mbot-somethingnear-operation-near":"a nearby obstacle has been detected","bloq-mbot-somethingnear-operation-faraway":"a distant obstacle has been detected","bloq-mbot-somethingnear-operation-nodetect":"no obstacles detected","with-the":"with the","bloq-mbot-ifthereisalotoflight-alot":"there is a lot of light","bloq-mbot-ifthereisalotoflight-low":"low light is detected","bloq-mbot-ifthereisalotoflight-operation-nodetect":"no light is detected","bloq-mbot-iffollowlines-if":"if detect","bloq-mbot-iffollowlines-and":"in the left sensor and","bloq-mbot-iffollowlines-withsensor":"in the right sensor from","white":"white","black":"black"},"es-ES":{"bloq-zowi-mouth-tongueOut":"sonrisa con lengua","bloq-zowi-mouth-confused":"cara confundida","bloq-zowi-mouth-bigSurprise":"cara sorprendida","bloq-zowi-distance":"Zowi, mide la distancia","bloq-zowi-sound":"Zowi, escucha con atención","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidad","bloq-zowi-sounds-sleeping":"sueño","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusión","bloq-zowi-movements-shakeLeg":"mueve la pierna","bloq-zowi-sounds-fart1":"un pedo","bloq-zowi-movements-speed-medium":"media","bloq-zowi-movements-speed-small":"baja","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"Interrumpir el bucle","bloq-code-writeYourCode":"Escribe tu propio código","bloq-comment-comment":"Comentario //","bloq-convert-convert":"Convertir","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Recibir","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sin salto de línea","bloq-serial-send-println":"Con salto de línea","bloq-buzzer-advance-sound":"Sonar el zumbador","bloq-buzzer-advance-note":"con la nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Leer pin digital","bloq-analog-read-advanced-readpin":"Leer pin analógico","bloq-continuous-servo-start-advanced-turn":"Girar servo","bloq-continuous-servo-start-advanced-direction":"en sentido","bloq-continuous-servo-start-advanced-clockwise":"horario","bloq-continuous-servo-start-advanced-counterclockwise":"antihorario","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Encender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"la luz del LCD","bloq-lcd-clear":"Borrar el contenido del LCD","bloq-lcd-writte-advanced-write":"Escribir","bloq-lcd-writte-advanced-inLCD":"en el LCD","bloq-lcd-writte-advanced-inPosition":"empezando en la posición (columna, fila)","bloq-led-advanced-turnon":"Encender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"el LED","bloq-oscillator-advanced-oscillate":"Oscilar servo","bloq-oscillator-advanced-around":"alrededor de","bloq-oscillator-advanced-amplitude":"con amplitud","bloq-oscillator-advanced-speed":"con velocidad","bloq-oscillator-start-advanced-oscillator":"Reproducir oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador","bloq-pin-read-advanced-readpin":"Leer el pin","bloq-pin-writte-advanced-writepin":"Escribir en el pin","bloq-pin-writte-advanced-data":"el dato","bloq-read-advanced-read":"Leer","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"grados","bloq-buzzer-sound":"Sonar el zumbador","bloq-buzzer-note":"con la nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Girar servo","bloq-continuous-servo-start-direction":"en sentido","bloq-continuous-servo-start-clockwise":"horario","bloq-continuous-servo-start-counterclockwise":"antihorario","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Encender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"la luz del LCD","bloq-lcd-writte-write":"Escribir","bloq-lcd-writte-inLCD":"en el LCD","bloq-led-turnon":"Encender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"el LED","bloq-oscillator-oscillate":"Oscilar servo","bloq-oscillator-around":"alrededor de","bloq-oscillator-amplitude":"con amplitud","bloq-oscillator-speed":"con velocidad","bloq-oscillator-times":"veces","bloq-oscillator-start-oscillator":"Reproducir oscilador","bloq-oscillator-stop-stop":"Parar oscilador","bloq-read-read":"Leer","bloq-servo-move":"Mover","bloq-servo-to":"a","bloq-servo-degrees":"grados","bloq-case-ifSameTo":"si es igual a","bloq-case-exec":"ejecutar:","bloq-case-default-inOtherCase":"en otro caso, ejecutar:","bloq-continue-continue":"Continuar con la siguiente iteracción del bucle","bloq-else-else":"de lo contrario, ejecutar:","bloq-else-if-if":"en cambio, si","bloq-else-if-else":"ejecutar:","bloq-for-count":"Contar con","bloq-for-from":"desde","bloq-for-to":"hasta","bloq-for-add":"sumando","bloq-for-subtract":"restando","bloq-for-exec":"ejecutar:","bloq-if-if":"Si","bloq-if-exec":"ejecutar:","bloq-switch-check":"Comprobar cuál es el valor de","bloq-wait-wait":"Esperar","bloq-while-while":"Mientras","bloq-while-exec":"ejecutar:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Ejecutar","bloq-invoke-return-function-exec":"Ejecutar","bloq-invoke-function-args":"con los siguientes argumentos :","bloq-return-return":"Devuelve","bloq-return-function-declare":"Declarar función","bloq-return-function-return":"Devuelve","bloq-return-function-with-arguments-declare":"Declarar función","bloq-return-function-with-arguments-count":"con los siguientes argumentos :","bloq-return-function-with-arguments-return":"Devuelve","bloq-void-function-declare":"Declarar función","bloq-void-function-with-arguments-declare":"Declarar función","bloq-void-function-with-arguments-count":"con los siguientes argumentos :","bloq-boolArray-advanced-arraySize":"Array con tamaño","bloq-boolArray-advanced-boolType":"y tipo bool","bloq-boolArray-arraySize":"Array con tamaño","bloq-boolArray-boolType":"y tipo bool","bloq-boolean-true":"Verdadero","bloq-boolean-false":"Falso","bloq-logic-operations-and":"y","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Bucle principal (Loop)","bloq-loop-description":"Crea el programa que se va a ejecutar continuamente después del Setup.","bloq-setup-header":"Instrucciones iniciales (Setup)","bloq-setup-description":"Indica lo que quieres que se ejecute una única vez al inicio del programa.","bloq-var-header":"Variables globales, funciones y clases","bloq-var-description":" Define los valores que vas a utilizar en Setup y Loop, también puedes hacer funciones para agrupar bloques.","bloq-numberArray-advanced-arraySize":"Array con tamaño","bloq-numberArray-advanced-type":"y tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"entero","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0 -","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Raíz cuadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Array con tamaño","bloq-numberArray-floatType":" y tipo decimal","bloq-random-random":"Aleatorio entre","bloq-random-and":"y","bloq-stringArray-advanced-arraySize":"Array con tamaño","bloq-stringArray-advanced-type":"y tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longitud","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Array con tamaño","bloq-stringArray-stringType":"y tipo texto","bloq-string-create-create":"Crear texto con","bloq-hw-variable-advanced-variable":"Variable (componentes)","bloq-sw-variable-advanced-variable":"Variable (código)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declarar variable","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"entero","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"texto","bloq-declare-variable-declare-type-char":"carácter","bloq-declare-variable-declare-type-bool":"valor lógico","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Carácter","bloq-lcd-default":"Hola","bloq-comment-default":"Escribe un comentario","bloq-functions-default":"Nombre","bloq-wait-ms":"ms","drag-bloq":"Arrastra un bloque aquí para empezar tu programa","bloq-invoke-class-function-class":"del objeto","bloq-invoke-arguments-class":"Crear un objeto de la clase","bloq-invoke-arguments-class-name":"con el nombre","bloq-invoke-arguments-args":"con los siguientes argumentos","bloq-invoke-class-return-function-exec":"Ejecutar la función","bloq-invoke-class-function-exec":"Ejecutar la función","bloq-invoke-class-function-args":"con los siguientes argumentos","bloq-invoke-class-return-function-args-exec":"Ejecutar la función","bloq-invoke-class-return-function-args-class":"del objeto","bloq-invoke-class-return-function-args-args":"con los siguientes argumentos","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor que usa los siguientes argumentos","bloq-invoke-class":"Crear un objeto de la clase","bloq-invoke-class-name":"con el nombre","bloq-class":"Declarar clase","bloq-class-default":"Nombre","bloq-class-from":"de","bloq-class-inheritance-type":"heredando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variables y funciones públicas :","bloq-protected":"Variables y funciones protegidas :","bloq-private":"Variables y funciones privadas :","bloq-include-lib-exec":"Incluir la librería","bloq-pin-analog-write":"Escribir en el pin analógico","bloq-pin-digital-write":"Escribir en el pin digital","bloq-pin-analog-write-data":"el dato","bloq-pin-digital-write-data":"el dato","bloq-zowi-movements":"Zowi,","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"haz el moonwalker","bloq-zowi-movements-height-crusaito":"haz el paso cruzado","bloq-zowi-movements-height-flapping":"agítate","bloq-zowi-movements-shakeleg":"mueve las piernas","bloq-zowi-movements-bend":"inclínate","bloq-zowi-movements-forward":"adelante","bloq-zowi-movements-backward":"atrás","bloq-zowi-movements-left":"izquierda","bloq-zowi-movements-right":"derecha","bloq-zowi-movements-speed":"veces con una velocidad","bloq-zowi-mouth":"Zowi, dibuja una","bloq-zowi-mouth-mouth":"en tu boca","bloq-zowi-mouth-smile":"sonrisa","bloq-zowi-mouth-sad":"cara triste","bloq-zowi-mouth-happy":"cara alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"adelante","bloq-zowi-movements-height-backward":"atrás","bloq-zowi-movements-height-left":"izquierda","bloq-zowi-movements-height-right":"derecha","bloq-zowi-movements-height-speed":"veces con una velocidad","bloq-zowi-movements-height-height":"y una altura","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"baja","bloq-zowi-movements-no-dir":"Zowi,","bloq-zowi-movements-no-dir-updown":"sube y baja","bloq-zowi-movements-no-dir-swing":"balancéate","bloq-zowi-movements-no-dir-tiptoeSwing":"balancéate de puntillas","bloq-zowi-movements-no-dir-jitter":"tiembla","bloq-zowi-movements-no-dir-ascendingTurn":"gira mientras subes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"veces con una velocidad","bloq-zowi-movements-no-dir-height":"y una altura","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"baja","bloq-zowi-sounds":"Zowi, haz el sonido de","bloq-hts221-humidity":"Leer la humedad del sensor","bloq-hts221-temperature":"Leer la temperatura del sensor","bloq-rgbLed-fade-red":"con un valor de rojo de","bloq-enable-interrupt":"Ejecutar la función","bloq-enable-interrupt-rising":"cambie de 0 a 1","bloq-enable-interrupt-falling":"cambie de 1 a 0","bloq-enable-interrupt-change":"cambie","bloq-enable-interrupt-pin":"cuando la entrada del pin","bloq-rgbLed-green":", un valor de verde de","bloq-rgbLed-fade":"Crear un degradado en el LED RGB","bloq-rgbLed-red":"con un valor de rojo de","bloq-rtc-init":"Actualizar fecha y hora del reloj","bloq-rtc-month":"el mes","bloq-rtc-using-advanced":"actual usando el reloj","bloq-rtc-year":"el año","bloq-rtc-day":"el día","bloq-rtc-hour":"la hora","bloq-rtc-minute":"el minuto","bloq-rtc-second":"el segundo","bloq-rtc-time":"hora","bloq-rtc-using":"actual usando el reloj","bloq-rtc-advanced":"Obtener","bloq-rtc":"Obtener la","default-var-name-rtc":"reloj_tiempo_real","bloq-rtc-date":"fecha","default-var-name-sound":"Sensor_sonido","bloq-rgbLed-blue":"y un valor de azul de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Encender el LED RGB","bloq-rgbLed-fade-blue":"y un valor de azul de","bloq-rgbLed-fade-green":", un valor de verde de","bloq-rgbLed-simple":"Encender el LED RGB","bloq-rgbLed-simple-color":"con color","bloq-rgbLed-simple-red":"rojo","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"azul","bloq-zowi-gestures":"Zowi, haz la animación de","bloq-zowi-gestures-ZowiHappy":"Feliz","bloq-zowi-gestures-ZowiSuperHappy":"Súper Feliz","bloq-zowi-gestures-ZowiSad":"Triste","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confuso","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Enfadado","bloq-zowi-gestures-ZowiFretful":"Inquieto","bloq-zowi-gestures-ZowiMagic":"Magia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"¡¡Victoria!!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"veces","bloq-zowi-movements-simple-walk":"anda","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"mueve la pierna","bloq-zowi-movements-simple-bend":"inclínate","bloq-zowi-movements-simple-moonwalker":"haz el moonwalker","bloq-zowi-movements-simple-crusaito":"haz el paso cruzado","bloq-zowi-movements-simple-flapping":"agítate","bloq-zowi-movements-simple-updown":"sube y baja","bloq-zowi-movements-simple-swing":"balancéate","bloq-zowi-movements-simple-tiptoeSwing":"balancéate de puntillas","bloq-zowi-movements-simple-jitter":"tiembla","bloq-zowi-movements-simple-ascendingTurn":"gira mientras subes","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Zowi, descansa","bloq-millis":"Obtener tiempo de ejecución","bloq-random-seed":"Inicializar el generador de números aleatorios","bloq-rgbLed-simple-white":"blanco","bloq-rgbLed-simple-yellow":"amarillo","bloq-rgbLed-simple-orange":"naranja","bloq-rgbLed-simple-dark-green":"verde oscuro","bloq-rgbLed-simple-dark-blue":"azul oscuro","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Entero","bloq-argument-char":"Carácter","bloq-zowi-buttons":"botón","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"de Zowi","bloq-zowi-if-distance":"Si detecta una distancia","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"mayor","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"cm, ejecuta:","bloq-zowi-if-buttons":"Si pulso el botón","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", ejecuta:","bloq-zowi-if-sound":"Si escucha un ruido, ejecuta:","bloq-evolution-rest":"Detener robot","bloq-evolution-movements-simple":"Muévete hacia","bloq-evolution-movements-simple-fordward":"adelante","bloq-evolution-movements-simple-backward":"atrás","bloq-evolution-movements-simple-right":"derecha","bloq-evolution-movements-simple-left":"izquierda","bloq-evolution-distance":"Mide la distancia","bloq-evolution-if-distance":"Si detecta una distancia","bloq-evolution-if-distance-less":"menor","bloq-evolution-if-distance-more":"mayor","bloq-evolution-if-distance-than":"que","bloq-evolution-if-distance-then":"cm, ejecuta:","bloq-evolution-light":"Mide la luz","bloq-evolution-light-left":"izquierda","bloq-evolution-light-right":"derecha","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Detecta la línea","bloq-evolution-line-left":"izquierda","bloq-evolution-line-right":"derecha","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Mira hacia","bloq-evolution-head-left":"izquierda","bloq-evolution-head-right":"derecha","bloq-evolution-head-center":"adelante","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Toca la nota","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durante","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Mira","bloq-evolution-head-advance-deg":"grados hacia la","bloq-evolution-head-advance-left":"izquierda","bloq-evolution-head-advance-right":"derecha","bloq-shield-stepper-steps":"Girar stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 y 2","bloq-shield-stepper-steps-degdir":"grados en sentido","bloq-shield-stepper-steps-CW":"horario","bloq-shield-stepper-steps-CCW":"antihorario","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Si detecta línea","bloq-evolution-if-line-white":"blanca","bloq-evolution-if-line-black":"negra","bloq-evolution-if-line-and":"en la izquierda y","bloq-evolution-if-line-then":"en la derecha, ejecuta:","bloq-evolution-if-light":"Si ve luz","bloq-evolution-if-light-and":"en la izquierda y","bloq-evolution-if-light-then":"en la derecha, ejecuta:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"media","bloq-evolution-if-light-low":"baja","bloq-shield-stepper-steps-advanced":"Girar stepper motor","bloq-shield-stepper-steps-advanced-degdir":"grados en sentido","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Girar motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"en sentido","bloq-shield-DCmotor-spin-CW":"horario","bloq-shield-DCmotor-spin-CCW":"antihorario","bloq-shield-DCmotor-spin-at":"al","bloq-shield-DCmotor-spin-speed":"% de su Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Girar motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"en sentido","bloq-shield-DCmotor-spinMotor-advanced-at":"al","bloq-shield-DCmotor-spinMotor-advanced-speed":"% de su Vmax","bloq-shield-DCmotor-stop":"Parar motor","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Parar motor","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Posición inicial","bloq-zowi-gestures-v1":"Haz la animación de","bloq-zowi-gestures-ZowiHappy-v1":"Feliz","bloq-zowi-gestures-ZowiSuperHappy-v1":"Súper Feliz","bloq-zowi-gestures-ZowiSad-v1":"Triste","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confuso","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Enfadado","bloq-zowi-gestures-ZowiFretful-v1":"Inquieto","bloq-zowi-gestures-ZowiVictory-v1":"¡¡Victoria!!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", haz:","bloq-zowi-if-distance-then-v1":"cm, haz:","bloq-zowi-if-sound-v1":"Si escucha un ruido, haz:","bloq-zowi-mouth-v1":"Muestra una","bloq-zowi-movements-simple-walk-v1":"Anda","bloq-zowi-movements-simple-turn-v1":"Gira","bloq-zowi-movements-simple-shakeLeg-v1":"Mueve la pierna","bloq-zowi-movements-simple-bend-v1":"Inclínate","bloq-zowi-movements-simple-moonwalker-v1":"Haz el moonwalker","bloq-zowi-movements-simple-crusaito-v1":"Haz el paso cruzado","bloq-zowi-movements-simple-flapping-v1":"Agítate","bloq-zowi-movements-simple-updown-v1":"Sube y baja","bloq-zowi-movements-simple-swing-v1":"Balancéate","bloq-zowi-movements-simple-tiptoeSwing-v1":"Balancéate de puntillas","bloq-zowi-movements-simple-jitter-v1":"Tiembla","bloq-zowi-movements-simple-ascendingTurn-v1":"Gira mientras subes","bloq-zowi-movements-simple-jump-v1":"Salta","bloq-zowi-sounds-v1":"Haz el sonido de","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"mide la distancia","bloq-zowi-sound-v1":"escucha con atención","bloq-zowi-movements-front":"Anda","bloq-zowi-movements-front-forward":"adelante","bloq-zowi-movements-front-backward":"atrás","bloq-zowi-movements-front-speed":"veces con una velocidad","bloq-zowi-movements-front-speed-small":"baja","bloq-zowi-movements-front-speed-medium":"media","bloq-zowi-movements-front-speed-high":"alta","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"Gira","bloq-zowi-movements-sides-shakeLeg":"Mueve la pierna","bloq-zowi-movements-sides-bend":"Inclínate","bloq-zowi-movements-sides-left":"izquierda","bloq-zowi-movements-sides-right":"derecha","bloq-zowi-movements-sides-speed":"veces con una velocidad","bloq-zowi-movements-sides-speed-small":"baja","bloq-zowi-movements-sides-speed-medium":"media","bloq-zowi-movements-sides-speed-high":"alta","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"Haz el moonwalker","bloq-zowi-movements-height-sides-crusaito":"Haz el paso cruzado","bloq-zowi-movements-height-sides-left":"izquierda","bloq-zowi-movements-height-sides-right":"derecha","bloq-zowi-movements-height-sides-speed":"veces con una velocidad","bloq-zowi-movements-height-sides-speed-small":"baja","bloq-zowi-movements-height-sides-speed-medium":"media","bloq-zowi-movements-height-sides-speed-high":"alta","bloq-zowi-movements-height-sides-height":"y una altura","bloq-zowi-movements-height-sides-small":"baja","bloq-zowi-movements-height-sides-medium":"media","bloq-zowi-movements-height-sides-big":"alta","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"convertir","bloq-num-conversion-to":"a","bloq-num-conversion-int":"entero","bloq-num-conversion-float":"decimal","bloq-name-default":"Nombre","bloq-declare-array":"Declarar variable array","bloq-declare-array-size":"con tamaño","bloq-declare-array-type":"y tipo","bloq-servo-detach":"Desconectar servo","bloq-servo-attach":"Conectar servo","bloq-hts221":"Leer la","bloq-hts221-read-temperature":"temperatura","bloq-hts221-read-humidity":"humedad","bloq-hts221-sensor":"del sensor","bloq-PTsensor":"Leer la","bloq-PTsensor-pressure":"presión","bloq-PTsensor-temperature":"temperatura","bloq-PTsensor-altitude":"altitud","bloq-PTsensor-sensor":"del sensor","bloq-PTsensor-calibration":"Definir la presión a nivel del mar a","bloq-PTsensor-calibration-sensor":"Pa en el sensor","bloq-rgbLed-off":"Apagar el LED RGB","bloq-pin-analog-write-V1":"Escribir en el pin digital","bloq-pin-analog-write-data-V1":"el valor analógico","bloq-buzzer-do-#":"Do#","bloq-buzzer-re-#":"Re#","bloq-buzzer-fa-#":"Fa#","bloq-buzzer-sol-#":"Sol#","bloq-buzzer-la-#":"La#","bloq-serial-receiver-receive-number":"Recibir número","bloq-declare-array-declare":"Declarar array","bloq-declare-array-declare-type":"de tipo","bloq-declare-array-declare-size":"y tamaño","bloq-pin-digital-write-data-V1":"el valor digital","bloq-round-advanced-roundto":"Redondear hacia","bloq-round-advanced-floor":"abajo","bloq-round-advanced-ceil":"arriba","bloq-round-advanced-round":"el más cercano","bloq-round-advanced-thenumber":"el número","bloq-rtc-date-2":"año/mes/día","bloq-rtc-time-2":"hora:minuto:segundo","bloq-pinlevel-high":"Alto","bloq-pinlevel-low":"Bajo","suggested":"Sugeridos","bloq-viewer":"Enviar datos al visor","bloq-mbot-buzzer-note":"Hacer sonar la nota","bloq-mbot-buzzer-for":"durante","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Obtener la distancia (cm) del ultrasonidos en el","bloq-mbot-port-1":"puerto 1","bloq-mbot-port-2":"puerto 2","bloq-mbot-port-3":"puerto 3","bloq-mbot-port-4":"puerto 4","bloq-mbot-getbuttonstatus":"Leer estado del botón","bloq-mbot-getlightsensor":"Leer el sensor de luz","bloq-mbot-linefollower-text":"Obtener la información del sensor de infrarrojos en el","bloq-mbot-move-forward":"Avanzar","bloq-mbot-move-backward":"Retroceder","bloq-mbot-move-turnleft":"Girar a la izquierda","bloq-mbot-move-turnright":"Girar a la derecha","bloq-mbot-move-speed":"a una velocidad","bloq-mbot-move-speed-fast":"muy rápida","bloq-mbot-move-speed-normal":"normal","bloq-mbot-move-speed-slow":"lenta","bloq-mbot-setled-set":"Establecer","bloq-mbot-led-all":"todos los leds","bloq-mbot-led-right":"el led derecho","bloq-mbot-led-left":"el led izquierdo","bloq-mbot-setled-colormix":"con esta mezcla de colores:","bloq-mbot-setled-green":"verde:","bloq-mbot-setled-red":"rojo:","bloq-mbot-setled-blue":"azul:","bloq-mbot-stop":"Detener robot","bloq-mbot-turnoffled-off":"Apagar","bloq-mbot-buzzer-advanced-play":"Hacer sonar la nota","bloq-mbot-move-advanced-speed":"a una velocidad","bloq-mbot-setled-advanced-set":"Establecer","bloq-mbot-setled-advanced-colormix":"con esta mezcla de colores:","bloq-mbot-setled-advanced-red":"rojo:","bloq-mbot-setled-advanced-green":"verde:","bloq-mbot-setled-advanced-blue":"azul:","bloq-mbot-buzzer-advanced-for":"durante","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Repetir","bloq-magicfor-times":"veces","bloq-phone-sounds":"Emitir sonido","bloq-phone-sounds-device":"en el dispositivo","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"bass","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Mostrar","bloq-phone-receive":"Recibe datos por voz o texto del","bloq-phone-toggle-light":"Parpadea con una frecuencia de","bloq-phone-toggle-units":"segundos","bloq-phone-turnon-light":"Enciende la linterna del","bloq-phone-turnoff-light":"Apaga la linterna del","bloq-twitter-config":"Configurar las credenciales de Twitter","bloq-mbot-port-5":"puerto 5","bloq-mbot-port-6":"puerto 6","bloq-mbot-port-7":"puerto 7","bloq-mbot-port-8":"puerto 8","bloq-mbot-port-9":"puerto 9","bloq-mbot-port-10":"puerto 10","bloq-send-tweet":"Envía tweet con","bloq-common-ms":"ms","bloq-common-every":"cada","bloq-common-playnote":"Hacer sonar la nota","bloq-common-for":"durante","bloq-phone-read":"Leer en el","bloq-phone-lacceleration":"la aceleración lineal","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Enviar por puerto serie","bloq-zowicomponent-serial-receive":"Recibir por el puerto serie","bloq-zowicomponent-serial-receive-int":"Recibir número por el puerto serie","bloq-phone-gyroscope":"Leer el giroscopio en el eje","bloq-phone-is":"está","bloq-phone-covered":"tapado","bloq-phone-not-covered":"no tapado","bloq-phone-acceleration":"la aceleración","bloq-phone-gravity":"la aceleración de la gravedad","bloq-phone-light":"Leer la luz ambiente del","bloq-phone-magnetic":"Leer el campo magnético en el eje","bloq-phone-sounds-meow-v1":"miau","bloq-phone-sounds-joke-v1":"burla","bloq-value":"Leer el valor del","bloq-phone-orientation-azimuth":"azimut","bloq-phone-orientation-roll":"roll","bloq-phone-orientation-pitch":"pitch","bloq-zowi-mouth-custom":"Dibuja en tu boca siguiendo esta serie de números:","bloq-phone-screen":"en la pantalla de","bloq-phone-light-intensity":"con una intensidad del","bloq-from-device":"desde el","bloq-the":"El","bloq-phone-axis":"en el eje","bloq-phone-of":"del","bloq-stop-buzzer":"Detener el zumbador","bloq-buzzer-without-pause":"sin pausa","lateraldisplacement-moveto":"Moverse lateralmente hacia la","right":"derecha","left":"izquierda","steps":"pasos","forward":"Avanzar","backward":"Retroceder","turn-right":"Girar a la derecha","turn-left":"Girar a la izquierda","stop":"detener","benddown":"Agacharse","rotate":"Rotar","rotate-grades-foot":"° sobre el pie","upstairs":"Subir escaleras.","can-move-to":"¿Puede moverse a ","move-to":"Desplazarse a","open":"Abrir","close":"Cerrar","the-clamp":"la pinza","move-joint":"Mover la articulación","degrees":"grados","move-for":"durante","roll-to":"Rodar hacia la","read-sensor":"Leer sensor","ms-at-speed-of":"ms a una velocidad de","bloq-mbot-getdistance":"Obtener la distancia del ultrasonidos","in":"en","inches":"pulgadas","if":"Si","bloq-mbot-somethingnear-operation-near":"se detecta un obstáculo cerca","bloq-mbot-somethingnear-operation-faraway":"se detecta un obstáculo lejos","bloq-mbot-somethingnear-operation-nodetect":"no se detecta un obstáculo","with-the":"con el","bloq-mbot-ifthereisalotoflight-alot":"se detecta mucha luz","bloq-mbot-ifthereisalotoflight-low":"se detecta poca luz","bloq-mbot-ifthereisalotoflight-operation-nodetect":"no se detecta luz","bloq-mbot-iffollowlines-if":"Si detecta","bloq-mbot-iffollowlines-and":"en el sensor izquierdo y","bloq-mbot-iffollowlines-withsensor":"en el sensor derecho del","white":"blanco","black":"negro","no-suggested":"No hay bloques sugeridos."},"eu-ES":{"bloq-zowi-mouth-tongueOut":"irribarra mingainarekin","bloq-zowi-mouth-confused":"nahaste aurpegia","bloq-zowi-mouth-bigSurprise":"sorpresa aurpegia","bloq-zowi-distance":"Zowi, neurtu distantzia","bloq-zowi-sound":"Zowi, adi entzun","bloq-zowi-sounds-OhOoh":"o-ooo","bloq-zowi-sounds-surprise":"ustekabea","bloq-zowi-sounds-sad":"tristura","bloq-zowi-sounds-happy":"zoriontasuna","bloq-zowi-sounds-sleeping":"logura","bloq-zowi-sounds-cuddly":"maitagarri","bloq-zowi-sounds-confused":"nahasketa","bloq-zowi-movements-shakeLeg":"mugitu hanka","bloq-zowi-sounds-fart1":"puzker bat","bloq-zowi-movements-speed-medium":"ertaina","bloq-zowi-movements-speed-small":"baxua","bloq-zowi-movements-speed-high":"altua","bloq-break-stopLoop":"Begizta eten","bloq-code-writeYourCode":"Idatzi zure kodea","bloq-comment-comment":"Iruzkina //","bloq-convert-convert":"Bihurtu","bloq-convert-to":"hauxe","bloq-convert-dec":"Hamartarra","bloq-convert-hex":"Hamaseitarra","bloq-convert-oct":"Zortzitarra","bloq-convert-bin":"Bitarra","bloq-serial-receiver-receive":"Jaso","bloq-serial-send-send":"Bidali","bloq-serial-send-print":"Lerro-jauzi gabe","bloq-serial-send-println":"Lerro-jauziarekin","bloq-buzzer-advance-sound":"Burrunbagailua jo","bloq-buzzer-advance-note":"nota honekin","bloq-buzzer-advance-for":"iraupen honekin","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Irakurri pin digitala","bloq-analog-read-advanced-readpin":"Irakurri pin analogikoa","bloq-continuous-servo-start-advanced-turn":"Serboa biratu","bloq-continuous-servo-start-advanced-direction":"noranzko honetan","bloq-continuous-servo-start-advanced-clockwise":"erlojuaren orratzen alde","bloq-continuous-servo-start-advanced-counterclockwise":"erlojuaren orratzen aurka","bloq-continuous-servo-stop-advanced-stop":"Gelditu serboa","bloq-lcd-turn-on-off-advanced-turnon":"Piztu","bloq-lcd-turn-on-off-advanced-turnoff":"Itzali","bloq-lcd-turn-on-off-advanced-lcdLigth":"LCDaren argia","bloq-lcd-clear":"Ezabatu LCDaren edukia","bloq-lcd-writte-advanced-write":"Idatzi","bloq-lcd-writte-advanced-inLCD":"LCDan","bloq-lcd-writte-advanced-inPosition":"posizio honetatik hasita (zutabea, errenkada)","bloq-led-advanced-turnon":"Piztu","bloq-led-advanced-turnoff":"Itzali","bloq-led-advanced-theLED":"LED argia","bloq-oscillator-advanced-oscillate":"Oszilatu serboa","bloq-oscillator-advanced-around":"honen inguruan","bloq-oscillator-advanced-amplitude":"anplitude honekin","bloq-oscillator-advanced-speed":"abiadura honekin","bloq-oscillator-start-advanced-oscillator":"Oszilagailua","bloq-oscillator-stop-advanced-stop":"Gelditu oszilagailua","bloq-pin-read-advanced-readpin":"Irakurri pin-a","bloq-pin-writte-advanced-writepin":"Idatzi pin-a","bloq-pin-writte-advanced-data":"datua","bloq-read-advanced-read":"Irakurri","bloq-servo-advanced-move":"Mugitu","bloq-servo-advanced-to":"hona","bloq-servo-advanced-degrees":"gradu","bloq-buzzer-sound":"Burrunbagailua jo","bloq-buzzer-note":"nota honekin","bloq-buzzer-for":"iraupen honekin","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Biratu serboa","bloq-continuous-servo-start-direction":"noranzko honekin","bloq-continuous-servo-start-clockwise":"erlojuaren orratzen alde","bloq-continuous-servo-start-counterclockwise":"erlojuaren orratzen aurka","bloq-continuous-servo-stop-stop":"Gelditu serboa","bloq-lcd-turn-on-off-turnon":"Piztu","bloq-lcd-turn-on-off-turnoff":"Itzali","bloq-lcd-turn-on-off-lcdLigth":"LCDko argia","bloq-lcd-writte-write":"Idatzi","bloq-lcd-writte-inLCD":"LCDan","bloq-led-turnon":"Piztu","bloq-led-turnoff":"Itzali","bloq-led-theLED":"LED argia","bloq-oscillator-oscillate":"Oszilatu serboa","bloq-oscillator-around":"hauen artean","bloq-oscillator-amplitude":"anplitude honekin","bloq-oscillator-speed":"abiadura honekin","bloq-oscillator-times":"aldiz","bloq-oscillator-start-oscillator":"Erreproduzitu oszilagailua","bloq-oscillator-stop-stop":"Gelditu oszilagailua","bloq-read-read":"Irakurri","bloq-servo-move":"Mugitu","bloq-servo-to":"hona:","bloq-servo-degrees":"gradu","bloq-case-ifSameTo":"baldin eta hau bada:","bloq-case-exec":"exekutatu","bloq-case-default-inOtherCase":"Bestela, exekutatu:","bloq-continue-continue":"Begiztaren hurrengo ekintzarekin jarraitu","bloq-else-else":"Bestela, exekutatu:","bloq-else-if-if":"Aldiz, baldin eta","bloq-else-if-else":"bada, exekutatu","bloq-for-count":"Zenbatu","bloq-for-from":"hemendik","bloq-for-to":"hona","bloq-for-add":"gehitzen","bloq-for-subtract":"kentzen","bloq-for-exec":"eta exekutatu","bloq-if-if":"Baldin eta","bloq-if-exec":"bada, exekutatu","bloq-switch-check":"Honen balioa egiaztatu","bloq-wait-wait":"Itxaron","bloq-while-while":" ","bloq-while-exec":"den bitartean, exekutatu","bloq-argument-var":"Aldagaia","bloq-argument-float":"Hamartarra","bloq-argument-string":"Testua","bloq-argument-bool":"Boolearra","bloq-invoke-function-exec":"Exekutatu","bloq-invoke-return-function-exec":"Exekutatu","bloq-invoke-function-args":"hurrengo argumentuekin:","bloq-return-return":"Itzultzen du","bloq-return-function-declare":"Funtzioa erazagutu","bloq-return-function-return":"Itzultzen du","bloq-return-function-with-arguments-declare":"Funtzioa erazagutu","bloq-return-function-with-arguments-count":"argumentu hauekin:","bloq-return-function-with-arguments-return":"Itzultzen du","bloq-void-function-declare":"Funtzioa erazagutu","bloq-void-function-with-arguments-declare":"Funtzioa erazagutu","bloq-void-function-with-arguments-count":"argumentu hauekin:","bloq-boolArray-advanced-arraySize":"Tamaina honetako array-a","bloq-boolArray-advanced-boolType":"eta boolearra","bloq-boolArray-arraySize":"Tamaina honetako array-a","bloq-boolArray-boolType":"eta boolearra","bloq-boolean-true":"Egia","bloq-boolean-false":"Gezurra","bloq-logic-operations-and":"eta","bloq-logic-operations-or":"edo","bloq-not-not":"ez","bloq-loop-header":"Begizta nagusia (Loop)","bloq-loop-description":"Setup-aren ondoren jarraian exekutatuko den programa sortzen du.","bloq-setup-header":"Hasierako aginduak (Setup)","bloq-setup-description":"Programaren hasieran eta behin bakarrik exekutatzea nahi duzuna adierazten du.","bloq-var-header":"Aldagai orokorrak, funtzioak eta klaseak","bloq-var-description":" Setup eta Loop eremuetan erabiliko dituzun balioak zehazten ditu eta blokeak multzokatzeko funtzioak ere egin ditzakezu.","bloq-numberArray-advanced-arraySize":"Honako tamaina duen array-a","bloq-numberArray-advanced-type":"eta honako motakoa","bloq-numberArray-advanced-float":"hamartarra","bloq-numberArray-advanced-int":"osoa","bloq-map-map":"Mapeatu","bloq-map-value":"balio hauen artean: [0 -","bloq-map-advanced-map":"Mapeatu","bloq-map-advanced-value":"honetatik hasita [","bloq-map-advanced-and":"] honera arte [","bloq-math-operations-sqrt":"Erro karratua","bloq-math-operations-abs":"Balio absolutua","bloq-numberArray-arraySize":"Honako tamaina duen array-a","bloq-numberArray-floatType":"eta float motakoa","bloq-random-random":"Balio hauen artean ausazkoa","bloq-random-and":"eta","bloq-stringArray-advanced-arraySize":"Honako tamaina duen array-a","bloq-stringArray-advanced-type":"eta honako motakoa","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Luzera","bloq-string-string":"Testua","bloq-stringArray-arraySize":"Honako tamaina duen array-a","bloq-stringArray-stringType":"eta testu motakoa","bloq-string-create-create":"Testua sortu honekin","bloq-hw-variable-advanced-variable":"Aldagaia (osagaiak)","bloq-sw-variable-advanced-variable":"Aldagaia (kodea)","bloq-array-variable-variable":"Aldagaia","bloq-declare-variable-declare":"Aldagaia erazagutu","bloq-declare-variable-declare-type":"motarekin","bloq-declare-variable-declare-type-int":"osoa","bloq-declare-variable-declare-type-float":"hamartarra","bloq-declare-variable-declare-type-text":"testua","bloq-declare-variable-declare-type-char":"karakterea","bloq-declare-variable-declare-type-bool":"balio logikoa","bloq-select-variable-variable":"Aldagaia","bloq-set-variableArray-variable":"Aldagaia","bloq-set-variable-variable":"Aldagaia","bloq-char":"Karakterea","bloq-lcd-default":"Kaixo!","bloq-comment-default":"Idatzi iruzkina","bloq-functions-default":"Izena","bloq-wait-ms":"ms","drag-bloq":"Arrasta ezazu bloke bat hona programa hasteko","bloq-invoke-class-function-class":"objektuaren","bloq-invoke-arguments-class":"motako objektu bat sortu","bloq-invoke-arguments-class-name":"izenarekin","bloq-invoke-arguments-args":"hurrengo argumentuekin","bloq-invoke-class-return-function-exec":"Exekutatu funtzioa","bloq-invoke-class-function-exec":"Exekutatu funtzioa","bloq-invoke-class-function-args":"hurrengo argumentuekin","bloq-invoke-class-return-function-args-exec":"Exekutatu funtzioa","bloq-invoke-class-return-function-args-class":"objektuaren","bloq-invoke-class-return-function-args-args":"hurrengo argumentuekin","bloq-set-class-variable-variable":"Aldagaia","bloq-set-class-variableArray-variable":"Aldagaia","bloq-select-class-variable-variable":"Aldagaia","bloq-array-class-variable-variable":"Aldagaia","bloq-constructor":"Eraikitzailea","bloq-constructor-arguments":"Hurrengo argumentuak erabiltzen dituen eraikitzailea","bloq-invoke-class":"motako objektu bat sortu","bloq-invoke-class-name":"izenarekin","bloq-class":"klasea erazagutu","bloq-class-default":"Izena","bloq-class-from":"eremuan","bloq-class-inheritance-type":"honela oinordetzen","bloq-class-inheritance-public":"publikoa","bloq-class-inheritance-protected":"babestua","bloq-class-inheritance-private":"pribatua","bloq-public":"Aldagai eta funtzio publikoak:","bloq-protected":"Aldagai eta funtzio babestuak:","bloq-private":"Aldagai eta funtzio pribatuak:","bloq-include-lib-exec":"Gehitu liburutegia","bloq-pin-analog-write":"Idatzi pin analogikoan","bloq-pin-digital-write":"Idatzi pin digitalean","bloq-pin-analog-write-data":"datua","bloq-pin-digital-write-data":"datua","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"ibili","bloq-zowi-movements-turn":"biratu","bloq-zowi-movements-height-moonwalker":"moonwalker-a egin","bloq-zowi-movements-height-crusaito":"eman pauso gurutzatua","bloq-zowi-movements-height-flapping":"eragin","bloq-zowi-movements-shakeleg":"mugitu hankak","bloq-zowi-movements-bend":"makurtu","bloq-zowi-movements-forward":"aurrera","bloq-zowi-movements-backward":"atzera","bloq-zowi-movements-left":"ezkerra","bloq-zowi-movements-right":"eskuina","bloq-zowi-movements-speed":"aldiz abiadura honetan","bloq-zowi-mouth":"Zowi, irudikatu","bloq-zowi-mouth-mouth":"zure ahoan","bloq-zowi-mouth-smile":"irribarrea","bloq-zowi-mouth-sad":"aurpegi tristea","bloq-zowi-mouth-happy":"aurpegi alaia","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"aurrera","bloq-zowi-movements-height-backward":"atzera","bloq-zowi-movements-height-left":"ezkerra","bloq-zowi-movements-height-right":"eskuina","bloq-zowi-movements-height-speed":"aldiz abiadura honetan","bloq-zowi-movements-height-height":"eta altura bat","bloq-zowi-movements-height-big":"altua","bloq-zowi-movements-height-medium":"ertaina","bloq-zowi-movements-height-small":"baxua","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"igo eta jaitsi","bloq-zowi-movements-no-dir-swing":"kulunkatu","bloq-zowi-movements-no-dir-tiptoeSwing":"kulunkatu oin-puntetan","bloq-zowi-movements-no-dir-jitter":"egin dar-dar","bloq-zowi-movements-no-dir-ascendingTurn":"bira egin igotzen zaren bitartean","bloq-zowi-movements-no-dir-jump":"salto egin ","bloq-zowi-movements-no-dir-speed":"aldiz abiadura honekin","bloq-zowi-movements-no-dir-height":"eta altura bat","bloq-zowi-movements-no-dir-big":"altua","bloq-zowi-movements-no-dir-medium":"ertaina","bloq-zowi-movements-no-dir-small":"baxua","bloq-zowi-sounds":"Zowi, soinu hau egin","bloq-hts221-humidity":"Sentsorearen hezetasuna irakurri","bloq-hts221-temperature":"Sentsorearen tenperatura irakurri","bloq-rgbLed-fade-red":"gorriaren kolore honekin","bloq-enable-interrupt":"Ondorengo funtzioa exekutatu","bloq-enable-interrupt-rising":"0tik 1era aldatu","bloq-enable-interrupt-falling":"1etik 0ra aldatu","bloq-enable-interrupt-change":"aldatzen denean","bloq-enable-interrupt-pin":"pin-aren sarrera","bloq-rgbLed-green":", berdearen balio honekin","bloq-rgbLed-fade":"RGB LEDan kolorea moteldu","bloq-rgbLed-red":"gorriaren balio honekin","bloq-rtc-init":"Erlojuko data eta ordua eguneratu","bloq-rtc-month":"hilabetea","bloq-rtc-using-advanced":"unekoa erlojua erabiliz","bloq-rtc-year":"urtea","bloq-rtc-day":"eguna","bloq-rtc-hour":"ordua","bloq-rtc-minute":"minutua","bloq-rtc-second":"segundoa","bloq-rtc-time":"ordua","bloq-rtc-using":"unekoa erlojua erabiliz","bloq-rtc-advanced":"Lortu","bloq-rtc":"Lortu","default-var-name-rtc":"erlojua_denbora_erreala","bloq-rtc-date":"data","default-var-name-sound":"Soinu_sentsorea","bloq-rgbLed-blue":"eta urdinaren balio honekin","default-var-name-RGBled":"RGB_LEDa","bloq-rgbLed":"RGB LEDa piztu","bloq-rgbLed-fade-blue":"eta urdinaren balio honekin","bloq-rgbLed-fade-green":", berdearen balio honekin","bloq-rgbLed-simple":"RGB LEDa piztu","bloq-rgbLed-simple-color":"kolore honekin","bloq-rgbLed-simple-red":"gorria","bloq-rgbLed-simple-green":"berdea","bloq-rgbLed-simple-blue":"urdina","bloq-zowi-gestures":"Zowi, adierazi emozio hau","bloq-zowi-gestures-ZowiHappy":"zoriontasuna","bloq-zowi-gestures-ZowiSuperHappy":"izugarrizko zoriontasuna","bloq-zowi-gestures-ZowiSad":"tristura","bloq-zowi-gestures-ZowiSleeping":"logura","bloq-zowi-gestures-ZowiFart":"puzkerra","bloq-zowi-gestures-ZowiConfused":"nahasketa","bloq-zowi-gestures-ZowiLove":"maitasuna","bloq-zowi-gestures-ZowiAngry":"haserrea","bloq-zowi-gestures-ZowiFretful":"kezka","bloq-zowi-gestures-ZowiMagic":"magia","bloq-zowi-gestures-ZowiWave":"olatua","bloq-zowi-gestures-ZowiVictory":"garaipena","bloq-zowi-gestures-ZowiFail":"porrota","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"aldiz","bloq-zowi-movements-simple-walk":"ibili","bloq-zowi-movements-simple-turn":"biratu","bloq-zowi-movements-simple-shakeLeg":"hanka mugitu","bloq-zowi-movements-simple-bend":"makurtu","bloq-zowi-movements-simple-moonwalker":"moonwalker-a egin","bloq-zowi-movements-simple-crusaito":"eman pauso gurutzatua","bloq-zowi-movements-simple-flapping":"eragin zure gorputza","bloq-zowi-movements-simple-updown":"igo eta jaitsi","bloq-zowi-movements-simple-swing":"kulunkatu","bloq-zowi-movements-simple-tiptoeSwing":"kulunkatu oin-puntetan","bloq-zowi-movements-simple-jitter":"egin dar-dar","bloq-zowi-movements-simple-ascendingTurn":"bira egin igotzen zaren bitartean","bloq-zowi-movements-simple-jump":"salto egin ","bloq-zowi-rest":"Zowi, deskantsatu","bloq-millis":"Betetze denbora lortu","bloq-random-seed":"Ausazko zenbakien sorgailua abiarazi","bloq-rgbLed-simple-white":"zuria","bloq-rgbLed-simple-yellow":"horia","bloq-rgbLed-simple-orange":"laranja","bloq-rgbLed-simple-dark-green":"berde iluna","bloq-rgbLed-simple-dark-blue":"urdin iluna","bloq-rgbLed-simple-pink":"arrosa","bloq-argument-int":"Osoa","bloq-argument-char":"Karakterea","bloq-zowi-buttons":"botoia","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"Zowi-rena","bloq-zowi-if-distance":"Distantzia","bloq-zowi-if-distance-less":"txikiagoa","bloq-zowi-if-distance-more":"handiagoa","bloq-zowi-if-distance-than":"baino","bloq-zowi-if-distance-then":"zentimetro baino, hauxe exekutatzen du:","bloq-zowi-if-buttons":"Botoia sakatzen badut","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":"botoia sakatzen badut, hauxe exekutatzen du:","bloq-zowi-if-sound":"Soinu bat entzuten badu, hauxe exekutatzen du:","bloq-evolution-rest":"Atseden hartu","bloq-evolution-movements-simple":"Mugi zaitez","bloq-evolution-movements-simple-fordward":"aurrera","bloq-evolution-movements-simple-backward":"atzera","bloq-evolution-movements-simple-right":"eskuina","bloq-evolution-movements-simple-left":"ezkerra","bloq-evolution-distance":"Distantzia neurtzen du","bloq-evolution-if-distance":"Distantzia","bloq-evolution-if-distance-less":"txikiagoa","bloq-evolution-if-distance-more":"handiagoa","bloq-evolution-if-distance-than":"baino","bloq-evolution-if-distance-then":"zentimetro baino, hauxe exekutatzen du:","bloq-evolution-light":"Argia neurtzen du","bloq-evolution-light-left":"ezkerra","bloq-evolution-light-right":"eskuina","bloq-evolution-line":"Lerroa detektatzen du","bloq-evolution-line-left":"ezkerra","bloq-evolution-line-right":"eskuina","bloq-evolution-head":"Hona begiratzen du","bloq-evolution-head-left":"ezkerra","bloq-evolution-head-right":"eskuina","bloq-evolution-head-center":"aurrera","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Nota jotzen du","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"segunduz","bloq-evolution-buzzer-ms":"ms-tan","bloq-evolution-head-advance":"Begira","bloq-evolution-head-advance-deg":"gradu hona begiratzen du","bloq-evolution-head-advance-left":"ezkerra","bloq-evolution-head-advance-right":"eskuina","bloq-shield-stepper-steps":"Stepper motorra biratu","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 eta 2","bloq-shield-stepper-steps-degdir":"gradu","bloq-shield-stepper-steps-CW":"erloju-orratzen noranzkoan","bloq-shield-stepper-steps-CCW":"erloju-orratzen kontrako noranzkoan","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm-ko abiadurarekin","bloq-evolution-if-line":"Lerro","bloq-evolution-if-line-white":"zuria","bloq-evolution-if-line-black":"beltza","bloq-evolution-if-line-and":"ezkerrean eta","bloq-evolution-if-line-then":"eskuinean, hauxe exekutatzen du:","bloq-evolution-if-light":"Argia ikusten badu","bloq-evolution-if-light-and":"ezkerrean eta","bloq-evolution-if-light-then":"eskuinean, hauxe exekutatzen du:","bloq-evolution-if-light-high":"altua","bloq-evolution-if-light-medium":"ertaina","bloq-evolution-if-light-low":"baxua","bloq-shield-stepper-steps-advanced":"Stepper motorra biratu","bloq-shield-stepper-steps-advanced-degdir":"gradu","bloq-shield-stepper-steps-advanced-at":"noranzkoan","bloq-shield-stepper-steps-advanced-rpm":"rpm-ko abiadurarekin","bloq-shield-DCmotor-spin":"Motorra biratu","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-CW":"erloju-orratzen noranzkoan","bloq-shield-DCmotor-spin-CCW":"erloju-orratzen kontrako noranzkoan","bloq-shield-DCmotor-spin-at":"Vmax-aren","bloq-shield-DCmotor-spin-speed":"% x-(e)an","bloq-shield-DCmotor-spinMotor-advanced":"Motorra biratu","bloq-shield-DCmotor-spinMotor-advanced-at":"Vmax-aren","bloq-shield-DCmotor-spinMotor-advanced-speed":"% x-(e)an","bloq-shield-DCmotor-stop":"Motorra gelditu","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Motorra gelditu","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Hasierako kokapena","bloq-zowi-gestures-v1":"Egin ezazu honen animazioa","bloq-zowi-gestures-ZowiHappy-v1":"Alai","bloq-zowi-gestures-ZowiSuperHappy-v1":"Zeharo alai","bloq-zowi-gestures-ZowiSad-v1":"Goibel","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Harrituta","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Haserretuta","bloq-zowi-gestures-ZowiFretful-v1":"Urduri","bloq-zowi-gestures-ZowiVictory-v1":"Txapeldun!!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", egin hau:","bloq-zowi-if-distance-then-v1":"cm, egin hau:","bloq-zowi-if-sound-v1":"Soinu bat entzuten badu, egin hau:","bloq-zowi-mouth-v1":"Hauxe erakusten du","bloq-zowi-movements-simple-walk-v1":"Dabil","bloq-zowi-movements-simple-turn-v1":"Biratu egiten du","bloq-zowi-movements-simple-shakeLeg-v1":"Hanka mugitzen du","bloq-zowi-movements-simple-bend-v1":"Makurtu","bloq-zowi-movements-simple-moonwalker-v1":"Moonwalker-a egin","bloq-zowi-movements-simple-crusaito-v1":"Eman pauso gurutzatua","bloq-zowi-movements-simple-flapping-v1":"Eragin","bloq-zowi-movements-simple-updown-v1":"Igo eta jaitsi","bloq-zowi-movements-simple-swing-v1":"Kulunkatu","bloq-zowi-movements-simple-tiptoeSwing-v1":"Kulunkatu oin-puntetan","bloq-zowi-movements-simple-jitter-v1":"Egin dar-dar","bloq-zowi-movements-simple-ascendingTurn-v1":"Bira egin igotzen zaren bitartean","bloq-zowi-movements-simple-jump-v1":"Salto egin","bloq-zowi-sounds-v1":"Egin soinu hau","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"distantzia neurtu","bloq-zowi-sound-v1":"entzun arretaz","bloq-zowi-movements-front":"Dabil","bloq-zowi-movements-front-forward":"aurrera","bloq-zowi-movements-front-backward":"atzera","bloq-zowi-movements-front-speed":"aldiz abiadura honetan","bloq-zowi-movements-front-speed-small":"baxua","bloq-zowi-movements-front-speed-medium":"ertaina","bloq-zowi-movements-front-speed-high":"altua","bloq-zowi-movements-sides-turn":"Biratu egiten du","bloq-zowi-movements-sides-shakeLeg":"Hanka mugitzen du","bloq-zowi-movements-sides-bend":"Makurtu","bloq-zowi-movements-sides-left":"ezkerra","bloq-zowi-movements-sides-right":"eskuina","bloq-zowi-movements-sides-speed":"aldiz abiadura honetan","bloq-zowi-movements-sides-speed-small":"baxua","bloq-zowi-movements-sides-speed-medium":"ertaina","bloq-zowi-movements-sides-speed-high":"altua","bloq-zowi-movements-height-sides-moonwalker":"Moonwalker-a egin","bloq-zowi-movements-height-sides-crusaito":"Eman pauso gurutzatua","bloq-zowi-movements-height-sides-left":"ezkerra","bloq-zowi-movements-height-sides-right":"eskuina","bloq-zowi-movements-height-sides-speed":"aldiz abiadura honetan","bloq-zowi-movements-height-sides-speed-small":"baxua","bloq-zowi-movements-height-sides-speed-medium":"ertaina","bloq-zowi-movements-height-sides-speed-high":"altua","bloq-zowi-movements-height-sides-height":"eta altuera honetan","bloq-zowi-movements-height-sides-small":"baxua","bloq-zowi-movements-height-sides-medium":"ertaina","bloq-zowi-movements-height-sides-big":"altua","bloq-num-conversion":"bihurtu","bloq-num-conversion-to":"neurri honetara","bloq-num-conversion-int":"osoa","bloq-num-conversion-float":"hamartarra","bloq-name-default":"Izena","bloq-mbot-buzzer-ms":"ms","bloq-mbot-buzzer-advanced-ms":"ms","bloq-common-ms":"ms"},"fr-FR":{"bloq-zowi-mouth-tongueOut":"sourire avec la langue","bloq-zowi-mouth-confused":"visage confus","bloq-zowi-mouth-bigSurprise":"visage surpris","bloq-zowi-distance":"Mesure la distance","bloq-zowi-sound":"Écoute","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"surprise","bloq-zowi-sounds-sad":"tristesse","bloq-zowi-sounds-happy":"joie","bloq-zowi-sounds-sleeping":"sommeil","bloq-zowi-sounds-cuddly":"câlin","bloq-zowi-sounds-confused":"confusion","bloq-zowi-movements-shakeLeg":"bouge les jambes","bloq-zowi-sounds-fart1":"un pet","bloq-zowi-movements-speed-medium":"moyenne","bloq-zowi-movements-speed-small":"faible","bloq-zowi-movements-speed-high":"élevée","bloq-break-stopLoop":"Interrompre la boucle","bloq-code-writeYourCode":"Écris ton propre code","bloq-comment-comment":"Commentaire //","bloq-convert-convert":"Convertir","bloq-convert-to":"En","bloq-convert-dec":"Décimal","bloq-convert-hex":"Hexadécimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binaire","bloq-serial-receiver-receive":"Recevoir","bloq-serial-send-send":"Envoyer","bloq-serial-send-print":"Sans saut de ligne","bloq-serial-send-println":"Avec saut de ligne","bloq-buzzer-advance-sound":"Activer le buzzer","bloq-buzzer-advance-note":"avec la note","bloq-buzzer-advance-for":"pendant","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Lire broche numérique","bloq-analog-read-advanced-readpin":"Lire broche analogique","bloq-continuous-servo-start-advanced-turn":"Faire tourner le servo","bloq-continuous-servo-start-advanced-direction":"dans le sens","bloq-continuous-servo-start-advanced-clockwise":"des aiguilles d’une montre","bloq-continuous-servo-start-advanced-counterclockwise":"contraire des aiguilles d’une montre","bloq-continuous-servo-stop-advanced-stop":"Arrêter le servo","bloq-lcd-turn-on-off-advanced-turnon":"Allumer","bloq-lcd-turn-on-off-advanced-turnoff":"Éteindre","bloq-lcd-turn-on-off-advanced-lcdLigth":"le rétroéclairage de l’écran LCD","bloq-lcd-clear":"Effacer l'écran LCD","bloq-lcd-writte-advanced-write":"Écrire","bloq-lcd-writte-advanced-inLCD":"sur l’écran LCD","bloq-lcd-writte-advanced-inPosition":"à partir de (colonne, ligne)","bloq-led-advanced-turnon":"Allumer","bloq-led-advanced-turnoff":"Éteindre","bloq-led-advanced-theLED":"la LED","bloq-oscillator-advanced-oscillate":"Faire osciller le servo","bloq-oscillator-advanced-around":"autour de","bloq-oscillator-advanced-amplitude":"avec une amplitude de","bloq-oscillator-advanced-speed":"avec une vitesse de","bloq-oscillator-start-advanced-oscillator":"Réactiver l’oscillateur","bloq-oscillator-stop-advanced-stop":"Arrêter l’oscillateur","bloq-pin-read-advanced-readpin":"Lire la broche","bloq-pin-writte-advanced-writepin":"Écrire dans la broche","bloq-pin-writte-advanced-data":"la donnée","bloq-read-advanced-read":"Lire","bloq-servo-advanced-move":"Tourner","bloq-servo-advanced-to":"de","bloq-servo-advanced-degrees":"degrés","bloq-buzzer-sound":"Activer le buzzer","bloq-buzzer-note":"avec la note","bloq-buzzer-for":"pendant","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Ré","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Faire tourner le servo","bloq-continuous-servo-start-direction":"dans le sens","bloq-continuous-servo-start-clockwise":"des aiguilles d’une montre","bloq-continuous-servo-start-counterclockwise":"contraire des aiguilles d’une montre","bloq-continuous-servo-stop-stop":"Arrêter le servo","bloq-lcd-turn-on-off-turnon":"Allumer","bloq-lcd-turn-on-off-turnoff":"Éteindre","bloq-lcd-turn-on-off-lcdLigth":"le rétroéclairage de l’écran LCD","bloq-lcd-writte-write":"Écrire","bloq-lcd-writte-inLCD":"sur l’écran LCD","bloq-led-turnon":"Allumer","bloq-led-turnoff":"Éteindre","bloq-led-theLED":"la LED","bloq-oscillator-oscillate":"Faire osciller le servo","bloq-oscillator-around":"autour de","bloq-oscillator-amplitude":"avec une amplitude de","bloq-oscillator-speed":"avec une vitesse de","bloq-oscillator-times":"fois","bloq-oscillator-start-oscillator":"Réactiver l’oscillateur","bloq-oscillator-stop-stop":"Arrêter l’oscillateur","bloq-read-read":"Lire","bloq-servo-move":"Tourner","bloq-servo-to":"de","bloq-servo-degrees":"degrés","bloq-case-ifSameTo":"si égal à","bloq-case-exec":"exécuter","bloq-case-default-inOtherCase":"si autre cas, exécuter","bloq-continue-continue":"Continuer avec l’itération suivante de la boucle","bloq-else-else":"sinon, exécuter","bloq-else-if-if":"ou bien, si","bloq-else-if-else":"exécuter","bloq-for-count":"Compter avec","bloq-for-from":"de","bloq-for-to":"à","bloq-for-add":"additionner","bloq-for-subtract":"soustraire","bloq-for-exec":"exécuter","bloq-if-if":"Si","bloq-if-exec":"exécuter","bloq-switch-check":"Vérifier quelle est la valeur de","bloq-wait-wait":"Attendre","bloq-while-while":"Tant que","bloq-while-exec":"exécuter","bloq-argument-var":"Variable","bloq-argument-float":"Décimal","bloq-argument-string":"Texte","bloq-argument-bool":"Booléen","bloq-invoke-function-exec":"Exécuter","bloq-invoke-return-function-exec":"Exécuter","bloq-invoke-function-args":"avec les paramètres suivants :","bloq-return-return":"Renvoyer","bloq-return-function-declare":"Déclarer fonction","bloq-return-function-return":"Renvoyer","bloq-return-function-with-arguments-declare":"Déclarer fonction","bloq-return-function-with-arguments-count":"avec les paramètres suivants :","bloq-return-function-with-arguments-return":"Renvoyer","bloq-void-function-declare":"Déclarer fonction","bloq-void-function-with-arguments-declare":"Déclarer fonction","bloq-void-function-with-arguments-count":"avec les paramètres suivants :","bloq-boolArray-advanced-arraySize":"Tableau de taille","bloq-boolArray-advanced-boolType":"et de type booléen","bloq-boolArray-arraySize":"Tableau de taille","bloq-boolArray-boolType":"et de type booléen","bloq-boolean-true":"Vrai","bloq-boolean-false":"Faux","bloq-logic-operations-and":"et","bloq-logic-operations-or":"ou","bloq-not-not":"pas","bloq-loop-header":"Boucle (Loop)","bloq-loop-description":"Crée le programme qui va s’exécuter en boucle après le lancement (Setup).","bloq-setup-header":"Instructions de départ (Setup)","bloq-setup-description":"Indique ce que tu veux exécuter au lancement du programme et seulement une fois.","bloq-var-header":"Variables globales et fonctions","bloq-var-description":"Définis les valeurs que tu vas utiliser dans les instructions de départ (Setup) et la boucle (Loop). Tu peux également faire des fonctions pour regrouper des blocs.","bloq-numberArray-advanced-arraySize":"Tableau de taille","bloq-numberArray-advanced-type":"et de type","bloq-numberArray-advanced-float":"décimal","bloq-numberArray-advanced-int":"entier","bloq-map-map":"Échelonner","bloq-map-value":"valeur entre [0 -","bloq-map-advanced-map":"Échelonner","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] à [","bloq-math-operations-sqrt":"Racine carrée","bloq-math-operations-abs":"Valeur absolue","bloq-numberArray-arraySize":"Tableau de taille","bloq-numberArray-floatType":" et de type float","bloq-random-random":"Aléatoire entre","bloq-random-and":"et","bloq-stringArray-advanced-arraySize":"Tableau de taille","bloq-stringArray-advanced-type":"et de type","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longueur","bloq-string-string":"Texte","bloq-stringArray-arraySize":"Tableau de taille","bloq-stringArray-stringType":"et de type texte","bloq-string-create-create":"Créer texte avec","bloq-hw-variable-advanced-variable":"Variable (composants)","bloq-sw-variable-advanced-variable":"Variable (composants)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Déclarer variable","bloq-declare-variable-declare-type":"de type","bloq-declare-variable-declare-type-int":"entier","bloq-declare-variable-declare-type-float":"décimal","bloq-declare-variable-declare-type-text":"texte","bloq-declare-variable-declare-type-char":"caractère","bloq-declare-variable-declare-type-bool":"valeur logique","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caractère","bloq-lcd-default":"Bonjour !","bloq-comment-default":"Écris un commentaire","bloq-functions-default":"Nom","bloq-wait-ms":"ms","drag-bloq":"Fais glisser un bloc ici pour débuter ton programme","bloq-invoke-class-function-class":"de l'objet","bloq-invoke-arguments-class":"Créer un objet de la classe","bloq-invoke-arguments-class-name":"avec le nom","bloq-invoke-arguments-args":"avec les paramètres suivants","bloq-invoke-class-return-function-exec":"Exécuter la fonction","bloq-invoke-class-function-exec":"Exécuter la fonction","bloq-invoke-class-function-args":"avec les paramètres suivants","bloq-invoke-class-return-function-args-exec":"Exécuter la fonction","bloq-invoke-class-return-function-args-class":"de l'objet","bloq-invoke-class-return-function-args-args":"avec les paramètres suivants","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructeur","bloq-constructor-arguments":"Constructeur utilisant les paramètres suivants","bloq-invoke-class":"Créer un objet de la classe","bloq-invoke-class-name":"avec le nom","bloq-class":"Déclarer classe","bloq-class-default":"Nom","bloq-class-from":"de","bloq-class-inheritance-type":"héritant de manière","bloq-class-inheritance-public":"publique","bloq-class-inheritance-protected":"protégée","bloq-class-inheritance-private":"privée","bloq-public":"Variables et fonctions publiques :","bloq-protected":"Variables et fonctions protégées :","bloq-private":"Variables et fonctions privées :","bloq-include-lib-exec":"Inclure la bibliothèque","bloq-pin-analog-write":"Écrire dans la broche analogique","bloq-pin-digital-write":"Écrire dans la broche numérique","bloq-pin-analog-write-data":"la donnée","bloq-pin-digital-write-data":"la donnée","bloq-zowi-movements":"Zowi :","bloq-zowi-movements-walk":"marche","bloq-zowi-movements-turn":"tourne","bloq-zowi-movements-height-moonwalker":"fais le moonwalk","bloq-zowi-movements-height-crusaito":"fais le pas croisé","bloq-zowi-movements-height-flapping":"remue","bloq-zowi-movements-shakeleg":"bouge les jambes","bloq-zowi-movements-bend":"penche-toi","bloq-zowi-movements-forward":"en avant","bloq-zowi-movements-backward":"en arrière","bloq-zowi-movements-left":"à gauche","bloq-zowi-movements-right":"à droite","bloq-zowi-movements-speed":"fois à une vitesse de","bloq-zowi-mouth":"Dessine une","bloq-zowi-mouth-mouth":"sur ta bouche","bloq-zowi-mouth-smile":"sourire","bloq-zowi-mouth-sad":"visage triste","bloq-zowi-mouth-happy":"visage joyeux","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"en avant","bloq-zowi-movements-height-backward":"en arrière","bloq-zowi-movements-height-left":"à gauche","bloq-zowi-movements-height-right":"à droite","bloq-zowi-movements-height-speed":"fois à une vitesse de","bloq-zowi-movements-height-height":"et à une hauteur","bloq-zowi-movements-height-big":"élevée","bloq-zowi-movements-height-medium":"moyenne","bloq-zowi-movements-height-small":"faible","bloq-zowi-movements-no-dir":"Zowi :","bloq-zowi-movements-no-dir-updown":"monte et descends","bloq-zowi-movements-no-dir-swing":"balance-toi","bloq-zowi-movements-no-dir-tiptoeSwing":"balance-toi sur la pointe des pieds","bloq-zowi-movements-no-dir-jitter":"tremble","bloq-zowi-movements-no-dir-ascendingTurn":"tourne quand tu montes","bloq-zowi-movements-no-dir-jump":"saute","bloq-zowi-movements-no-dir-speed":"fois à une vitesse de","bloq-zowi-movements-no-dir-height":"et à une hauteur","bloq-zowi-movements-no-dir-big":"élevée","bloq-zowi-movements-no-dir-medium":"moyenne","bloq-zowi-movements-no-dir-small":"faible","bloq-zowi-sounds":"Fais le son de","bloq-hts221-humidity":"Lire le capteur d’humidité","bloq-hts221-temperature":"Lire le capteur de température","bloq-rgbLed-fade-red":"avec une valeur rouge de","bloq-enable-interrupt":"Exécuter la fonction","bloq-enable-interrupt-rising":"passe de 0 à 1","bloq-enable-interrupt-falling":"passe de 1 à 0","bloq-enable-interrupt-change":"passe","bloq-enable-interrupt-pin":"quand l'entrée de la broche","bloq-rgbLed-green":", une valeur verte de","bloq-rgbLed-fade":"Créer un dégradé sur la LED RGB","bloq-rgbLed-red":"avec une valeur rouge de","bloq-rtc-init":"Mettre à jour l’heure et la date de l’horloge","bloq-rtc-month":"le mois","bloq-rtc-using-advanced":"actuel en utilisant l’horloge","bloq-rtc-year":"l'année","bloq-rtc-day":"le jour","bloq-rtc-hour":"l’heure","bloq-rtc-minute":"la minute","bloq-rtc-second":"la seconde","bloq-rtc-time":"heure","bloq-rtc-using":"actuel en utilisant l’horloge","bloq-rtc-advanced":"Obtenir","bloq-rtc":"Obtenir la","default-var-name-rtc":"horloge_temps_réel","bloq-rtc-date":"date","default-var-name-sound":"capteur_son","bloq-rgbLed-blue":"et une valeur bleue de","default-var-name-RGBled":"LED_RGB","bloq-rgbLed":"Allumer la LED RGB","bloq-rgbLed-fade-blue":"et une valeur bleue de","bloq-rgbLed-fade-green":", une valeur verte de","bloq-rgbLed-simple":"Allumer la LED RGB","bloq-rgbLed-simple-color":"avec couleur","bloq-rgbLed-simple-red":"rouge","bloq-rgbLed-simple-green":"vert","bloq-rgbLed-simple-blue":"bleu","bloq-zowi-gestures":"Fais l’expression suivante","bloq-zowi-gestures-ZowiHappy":"Heureux","bloq-zowi-gestures-ZowiSuperHappy":"Super Heureux","bloq-zowi-gestures-ZowiSad":"Triste","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confus","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Fâché","bloq-zowi-gestures-ZowiFretful":"Inquiet","bloq-zowi-gestures-ZowiMagic":"Magie","bloq-zowi-gestures-ZowiWave":"Onde","bloq-zowi-gestures-ZowiVictory":"Victoire !!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"fois","bloq-zowi-movements-simple-walk":"marche","bloq-zowi-movements-simple-turn":"tourne","bloq-zowi-movements-simple-shakeLeg":"bouge les jambes","bloq-zowi-movements-simple-bend":"penche-toi","bloq-zowi-movements-simple-moonwalker":"fais le moonwalk","bloq-zowi-movements-simple-crusaito":"fais le pas croisé","bloq-zowi-movements-simple-flapping":"remue","bloq-zowi-movements-simple-updown":"monte et descends","bloq-zowi-movements-simple-swing":"balance-toi","bloq-zowi-movements-simple-tiptoeSwing":"balance-toi sur la pointe des pieds","bloq-zowi-movements-simple-jitter":"tremble","bloq-zowi-movements-simple-ascendingTurn":"tourne quand tu montes","bloq-zowi-movements-simple-jump":"saute","bloq-zowi-rest":"repose-toi","bloq-millis":"Obtenir le temps d’exécution","bloq-random-seed":"Démarrer le générateur de nombres aléatoires","bloq-rgbLed-simple-white":"blanc","bloq-rgbLed-simple-yellow":"jaune","bloq-rgbLed-simple-orange":"orange","bloq-rgbLed-simple-dark-green":"vert foncé","bloq-rgbLed-simple-dark-blue":"bleu foncé","bloq-rgbLed-simple-pink":"rose","bloq-argument-int":"Entier","bloq-argument-char":"Caractère","bloq-zowi-buttons":"bouton","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"de Zowi","bloq-zowi-if-distance":"S’il détecte une distance","bloq-zowi-if-distance-less":"inférieure","bloq-zowi-if-distance-more":"supérieure","bloq-zowi-if-distance-than":"à","bloq-zowi-if-distance-then":"centimètres, exécuter :","bloq-zowi-if-buttons":"Si j'appuie sur le bouton","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", exécuter :","bloq-zowi-if-sound":"S’il entend un bruit, exécuter :","bloq-evolution-rest":"repose-toi","bloq-evolution-movements-simple":"Déplace-toi","bloq-evolution-movements-simple-fordward":"en avant","bloq-evolution-movements-simple-backward":"en arrière","bloq-evolution-movements-simple-right":"vers la droite","bloq-evolution-movements-simple-left":"vers la gauche","bloq-evolution-distance":"Mesure la distance","bloq-evolution-if-distance":"S’il détecte une distance","bloq-evolution-if-distance-less":"inférieure","bloq-evolution-if-distance-more":"supérieure","bloq-evolution-if-distance-than":"à","bloq-evolution-if-distance-then":"centimètres, exécuter :","bloq-evolution-light":"Mesure la lumière de","bloq-evolution-light-left":"gauche","bloq-evolution-light-right":"droite","bloq-evolution-line":"Détecte la ligne","bloq-evolution-line-left":"à gauche","bloq-evolution-line-right":"à droite","bloq-evolution-head":"Regarde","bloq-evolution-head-left":"à gauche","bloq-evolution-head-right":"à droite","bloq-evolution-head-center":"en avant","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Appuie sur la note","bloq-evolution-buzzer-re":"Ré","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"pendant","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Regarde","bloq-evolution-head-advance-deg":"degrés vers","bloq-evolution-head-advance-left":"la gauche","bloq-evolution-head-advance-right":"la droite","bloq-shield-stepper-steps":"Tourner le moteur pas à pas","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 et 2","bloq-shield-stepper-steps-degdir":"degrés dans le sens","bloq-shield-stepper-steps-CW":"des aiguilles d’une montre","bloq-shield-stepper-steps-CCW":"contraire des aiguilles d’une montre","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"S’il détecte une ligne","bloq-evolution-if-line-white":"blanche","bloq-evolution-if-line-black":"noire","bloq-evolution-if-line-and":"sur la gauche et","bloq-evolution-if-line-then":"sur la droite, exécuter :","bloq-evolution-if-light":"S'il voit de la lumière","bloq-evolution-if-light-and":"sur la gauche et","bloq-evolution-if-light-then":"sur la droite, exécuter :","bloq-evolution-if-light-high":"élevée","bloq-evolution-if-light-medium":"moyenne","bloq-evolution-if-light-low":"faible","bloq-shield-stepper-steps-advanced":"Tourner le moteur pas à pas","bloq-shield-stepper-steps-advanced-degdir":"degrés dans le sens","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Tourner le moteur","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"dans le sens","bloq-shield-DCmotor-spin-CW":"des aiguilles d’une montre","bloq-shield-DCmotor-spin-CCW":"contraire des aiguilles d’une montre","bloq-shield-DCmotor-spin-at":"au","bloq-shield-DCmotor-spin-speed":"% de sa vitesse maximum","bloq-shield-DCmotor-spinMotor-advanced":"Tourner le moteur","bloq-shield-DCmotor-spinMotor-advanced-direction":"dans le sens","bloq-shield-DCmotor-spinMotor-advanced-at":"au","bloq-shield-DCmotor-spinMotor-advanced-speed":"% de sa vitesse maximum","bloq-shield-DCmotor-stop":"Arrêter le moteur","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Arrêter le moteur","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Position initiale","bloq-zowi-gestures-v1":"Fais l’expression suivante","bloq-zowi-gestures-ZowiHappy-v1":"Heureux","bloq-zowi-gestures-ZowiSuperHappy-v1":"Super Heureux","bloq-zowi-gestures-ZowiSad-v1":"Triste","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confus","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Fâché","bloq-zowi-gestures-ZowiFretful-v1":"Inquiet","bloq-zowi-gestures-ZowiVictory-v1":"Victoire !!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", fais :","bloq-zowi-if-distance-then-v1":"cm, fais :","bloq-zowi-if-sound-v1":"S’il entend un bruit, fais :","bloq-zowi-mouth-v1":"Montre une","bloq-zowi-movements-simple-walk-v1":"Marche","bloq-zowi-movements-simple-turn-v1":"Tourne","bloq-zowi-movements-simple-shakeLeg-v1":"Bouge les jambes","bloq-zowi-movements-simple-bend-v1":"Penche-toi","bloq-zowi-movements-simple-moonwalker-v1":"Fais le moonwalk","bloq-zowi-movements-simple-crusaito-v1":"Fais le pas croisé","bloq-zowi-movements-simple-flapping-v1":"Remue","bloq-zowi-movements-simple-updown-v1":"Monte et descends","bloq-zowi-movements-simple-swing-v1":"Balance-toi","bloq-zowi-movements-simple-tiptoeSwing-v1":"Balance-toi sur la pointe des pieds","bloq-zowi-movements-simple-jitter-v1":"Tremble","bloq-zowi-movements-simple-ascendingTurn-v1":"Tourne quand tu montes","bloq-zowi-movements-simple-jump-v1":"Saute","bloq-zowi-sounds-v1":"Fais le son de","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"mesure la distance","bloq-zowi-sound-v1":"écoute avec attention","bloq-zowi-movements-front":"Marche","bloq-zowi-movements-front-forward":"en avant","bloq-zowi-movements-front-backward":"en arrière","bloq-zowi-movements-front-speed":"fois à une vitesse","bloq-zowi-movements-front-speed-small":"faible","bloq-zowi-movements-front-speed-medium":"moyenne","bloq-zowi-movements-front-speed-high":"élevée","bloq-zowi-movements-sides-turn":"Tourne","bloq-zowi-movements-sides-shakeLeg":"Bouge les jambes","bloq-zowi-movements-sides-bend":"Penche-toi","bloq-zowi-movements-sides-left":"gauche","bloq-zowi-movements-sides-right":"droite","bloq-zowi-movements-sides-speed":"fois à une vitesse","bloq-zowi-movements-sides-speed-small":"faible","bloq-zowi-movements-sides-speed-medium":"moyenne","bloq-zowi-movements-sides-speed-high":"élevée","bloq-zowi-movements-height-sides-moonwalker":"Fais le moonwalk","bloq-zowi-movements-height-sides-crusaito":"Fais le pas croisé","bloq-zowi-movements-height-sides-left":"gauche","bloq-zowi-movements-height-sides-right":"droite","bloq-zowi-movements-height-sides-speed":"fois à une vitesse","bloq-zowi-movements-height-sides-speed-small":"faible","bloq-zowi-movements-height-sides-speed-medium":"moyenne","bloq-zowi-movements-height-sides-speed-high":"élevée","bloq-zowi-movements-height-sides-height":"et à une hauteur","bloq-zowi-movements-height-sides-small":"faible","bloq-zowi-movements-height-sides-medium":"moyenne","bloq-zowi-movements-height-sides-big":"élevée","bloq-num-conversion":"convertir","bloq-num-conversion-to":"a","bloq-num-conversion-int":"entier","bloq-num-conversion-float":"décimal","bloq-name-default":"Nom","bloq-declare-array":"Déclarer un ensemble de variables","bloq-declare-array-size":"avec la taille","bloq-declare-array-type":"et le type","bloq-servo-detach":"Débrancher le servo","bloq-servo-attach":"Connecter le servo","bloq-hts221":"Lire la","bloq-hts221-read-temperature":"température","bloq-hts221-read-humidity":"humidité","bloq-hts221-sensor":"du capteur","bloq-PTsensor":"Lire la","bloq-PTsensor-pressure":"pression","bloq-PTsensor-temperature":"température","bloq-PTsensor-altitude":"altitude","bloq-PTsensor-sensor":"du capteur","bloq-PTsensor-calibration":"Définir la pression au niveau de la mer à","bloq-PTsensor-calibration-sensor":"Pa dans le capteur","bloq-rgbLed-off":"Éteindre la LED RGB","bloq-pin-analog-write-V1":"Écrire dans la broche numérique","bloq-pin-analog-write-data-V1":"la valeur analogique","bloq-buzzer-do-#":"Do","bloq-buzzer-re-#":"Ré","bloq-buzzer-fa-#":"Fa","bloq-buzzer-sol-#":"Sol","bloq-buzzer-la-#":"La","bloq-serial-receiver-receive-number":"Recevoir le numéro","bloq-declare-array-declare":"Déclarer un ensemble","bloq-declare-array-declare-type":"de type","bloq-declare-array-declare-size":"et de taille","bloq-pin-digital-write-data-V1":"la valeur numérique","bloq-round-advanced-roundto":"Arrondir à","bloq-round-advanced-floor":"en haut","bloq-round-advanced-ceil":"en bas","bloq-round-advanced-round":"le plus proche","bloq-round-advanced-thenumber":"le nombre","bloq-rtc-date-2":"année/mois/jour","bloq-rtc-time-2":"heures:minutes:secondes","bloq-pinlevel-high":"Elevé","bloq-pinlevel-low":"Faible","suggested":"Suggestions","bloq-viewer":"Envoyer les données vers le viseur","bloq-mbot-buzzer-note":"Faire retentit la sonnerie","bloq-mbot-buzzer-for":"pendant","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Obtenir la distance (en cm) des ultrasons dans le","bloq-mbot-port-1":"port 1","bloq-mbot-port-2":"port 2","bloq-mbot-port-3":"port 3","bloq-mbot-port-4":"port 4","bloq-mbot-getbuttonstatus":"Lire l'état du bouton","bloq-mbot-getlightsensor":"Lire le du capteur de luminosité","bloq-mbot-linefollower-text":"Obtenir les informations du capteur d'infrarouges dans le","bloq-mbot-move-forward":"Avancer","bloq-mbot-move-backward":"Reculer","bloq-mbot-move-turnleft":"Tourner à gauche","bloq-mbot-move-turnright":"Tourner à droite","bloq-mbot-move-speed":"à une vitesse","bloq-mbot-move-speed-fast":"très rapide","bloq-mbot-move-speed-normal":"normale","bloq-mbot-move-speed-slow":"lente","bloq-mbot-setled-set":"Etablir","bloq-mbot-led-all":"toutes les led","bloq-mbot-led-right":"la led droite","bloq-mbot-led-left":"la led gauche","bloq-mbot-setled-colormix":"avec ce mélange de couleurs :","bloq-mbot-setled-green":"vert :","bloq-mbot-setled-red":"rouge :","bloq-mbot-setled-blue":"bleu :","bloq-mbot-stop":"Arrêter le robot","bloq-mbot-turnoffled-off":"Eteindre","bloq-mbot-buzzer-advanced-play":"Faire retentit la sonnerie","bloq-mbot-move-advanced-speed":"à une vitesse","bloq-mbot-setled-advanced-set":"Etablir","bloq-mbot-setled-advanced-colormix":"avec ce mélange de couleurs :","bloq-mbot-setled-advanced-red":"rouge :","bloq-mbot-setled-advanced-green":"vert :","bloq-mbot-setled-advanced-blue":"bleu :","bloq-mbot-buzzer-advanced-for":"pendant","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Répéter","bloq-magicfor-times":"fois","bloq-phone-sounds":"Emettre un son","bloq-phone-sounds-device":"dans l'appareil","bloq-phone-sounds-ambient-v1":"ambiant","bloq-phone-sounds-bass-v1":"basse","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"caisse claire","bloq-phone-write-show":"Afficher à l'écran","bloq-phone-receive":"Recevoir les données oralement ou par textos","bloq-phone-toggle-light":"Cligner des yeux à une fréquence de","bloq-phone-toggle-units":"secondes","bloq-phone-turnon-light":"Allumer la lampe à une intensité","bloq-phone-turnoff-light":"Eteindre la lampe","bloq-twitter-config":"Configurer l'application Twitter","bloq-mbot-port-5":"port 5","bloq-mbot-port-6":"port 6","bloq-mbot-port-7":"port 7","bloq-mbot-port-8":"port 8","bloq-mbot-port-9":"port 9","bloq-mbot-port-10":"port 10","bloq-send-tweet":"Envoyer un tweet","bloq-common-ms":"ms","bloq-common-every":"chaque","bloq-common-playnote":"Faire retentit la sonnerie","bloq-common-for":"pendant","bloq-phone-read":"Lire dans","bloq-phone-lacceleration":"l'accélération linéraire sur l'axe","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Envoyer via port série","bloq-zowicomponent-serial-receive":"Recevoir via port série","bloq-zowicomponent-serial-receive-int":"Recevoir le numéro via port série","bloq-phone-gyroscope":"le giroscope sur l'axe","bloq-phone-is":"est","bloq-phone-covered":"fermé","bloq-phone-not-covered":"pas fermé","bloq-phone-acceleration":"l'accélération sur l'axe","bloq-phone-gravity":"l'accélération de la gravité sur l'axe","bloq-phone-light":"la lumière ambiante","bloq-phone-magnetic":"le champ magnétique sur l'axe","bloq-phone-sounds-meow-v1":"miaou","bloq-phone-sounds-joke-v1":"se moque","bloq-value":"Lire la valeur de","bloq-phone-orientation-azimuth":"azimut","bloq-phone-orientation-roll":"rouleau","bloq-phone-orientation-pitch":"tonalité","bloq-zowi-mouth-custom":"Dessinez sur votre bouche en suivant cette série de numéros :","bloq-phone-screen":"dans l'écran de","bloq-phone-light-intensity":"avec une intensité du","bloq-from-device":"depuis le","bloq-the":"Il","bloq-phone-axis":"dans l'axe","bloq-phone-of":"de","bloq-stop-buzzer":"Arrêter le buzzer","bloq-buzzer-without-pause":"sans pause","lateraldisplacement-moveto":"Se déplacer latéralement vers la","right":"droite","left":"gauche","steps":"pas","forward":"Avancer","backward":"Reculer","turn-right":"Tourner à droite","turn-left":"Tourner à gauche","stop":"arrêter","benddown":"S'accroupir","rotate":"Pivoter","rotate-grades-foot":"° sur le pied","upstairs":"Monter les escaliers.","can-move-to":"Vous pouvez vous déplacer vers ","move-to":"Se déplacer vers","open":"Ouvrir","close":"Fermer","the-clamp":"la pince","move-joint":"Bouger l'articulation","degrees":"degrés","move-for":"pendant","roll-to":"Tourner vers la","read-sensor":"Lire le capteur","ms-at-speed-of":"ms à une vitesse de","bloq-mbot-getdistance":"Obtenir la distance des ultrasons","in":"en","inches":"pouces","if":"Si","bloq-mbot-somethingnear-operation-near":"un obstacle proche est détecté","bloq-mbot-somethingnear-operation-faraway":"un obstacle éloigné est détecté","bloq-mbot-somethingnear-operation-nodetect":"aucun obstacle n'est détecté","with-the":"avec le","bloq-mbot-ifthereisalotoflight-alot":"une grande quantité de lumière est détectée","bloq-mbot-ifthereisalotoflight-low":"une petite quantité de lumière est détectée","bloq-mbot-ifthereisalotoflight-operation-nodetect":"aucune lumière n'est détectée","bloq-mbot-iffollowlines-if":"S'il détecte","bloq-mbot-iffollowlines-and":"dans le capteur de gauche et","bloq-mbot-iffollowlines-withsensor":"dans le capteur de droite du","white":"blanc","black":"noir"},"gl":{"bloq-zowi-mouth-tongueOut":"sorriso con lingua","bloq-zowi-mouth-confused":"escara confundida","bloq-zowi-mouth-bigSurprise":"cara sorprendida","bloq-zowi-distance":"Zowi: mide a distancia","bloq-zowi-sound":"Zowi, escoita con atención","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidade","bloq-zowi-sounds-sleeping":"soño","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusión","bloq-zowi-movements-shakeLeg":"move a perna","bloq-zowi-sounds-fart1":"un peido","bloq-zowi-movements-speed-medium":"media","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"interrumpir o bucle","bloq-code-writeYourCode":"Escribe teu propio código","bloq-comment-comment":"Comentario //","bloq-convert-convert":"Converter","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Recibir","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sen salto de línea","bloq-serial-send-println":"Con salto de línea","bloq-buzzer-advance-sound":"Soar o zumbador","bloq-buzzer-advance-note":"con a nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Ler pin dixital","bloq-analog-read-advanced-readpin":"Ler pin analóxico","bloq-continuous-servo-start-advanced-turn":"Virar servo","bloq-continuous-servo-start-advanced-direction":"en sentido","bloq-continuous-servo-start-advanced-clockwise":"horario","bloq-continuous-servo-start-advanced-counterclockwise":"antihorario ","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Acender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"a luz do LCD","bloq-lcd-clear":"Borrar o contido do LCD ","bloq-lcd-writte-advanced-write":"Escribir","bloq-lcd-writte-advanced-inLCD":"no LCD","bloq-lcd-writte-advanced-inPosition":"empezando na posición (columna, fila)","bloq-led-advanced-turnon":"Acender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"o LED","bloq-oscillator-advanced-oscillate":"Oscilar servo ","bloq-oscillator-advanced-around":"ao redor de","bloq-oscillator-advanced-amplitude":"con amplitude","bloq-oscillator-advanced-speed":"con velocidade","bloq-oscillator-start-advanced-oscillator":"Reproducir oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador ","bloq-pin-read-advanced-readpin":"Ler o pin","bloq-pin-writte-advanced-writepin":"Escribir no pin","bloq-pin-writte-advanced-data":"o dato","bloq-read-advanced-read":"Ler","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"graos","bloq-buzzer-sound":"Soar o zumbador","bloq-buzzer-note":"con a nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Virar servo","bloq-continuous-servo-start-direction":"no sentido","bloq-continuous-servo-start-clockwise":"horario","bloq-continuous-servo-start-counterclockwise":"antihorario","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Acender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"a luz do LCD","bloq-lcd-writte-write":"Escribir","bloq-lcd-writte-inLCD":"no LCD","bloq-led-turnon":"Acender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"o LED","bloq-oscillator-oscillate":"Oscilar servo ","bloq-oscillator-around":"ao redor de","bloq-oscillator-amplitude":"con amplitude","bloq-oscillator-speed":"con velocidade","bloq-oscillator-times":"veces","bloq-oscillator-start-oscillator":"Reproducir oscilador","bloq-oscillator-stop-stop":"Parar oscilador ","bloq-read-read":"Ler","bloq-servo-move":"Mover","bloq-servo-to":"a","bloq-servo-degrees":"graos","bloq-case-ifSameTo":"si é igual a","bloq-case-exec":"executar:","bloq-case-default-inOtherCase":"en outro caso, executar:","bloq-continue-continue":"Continuar coa seguinte iteracción do bucle","bloq-else-else":"pola contra, executar:","bloq-else-if-if":"en cambio, si","bloq-else-if-else":"executar:","bloq-for-count":"Contar con ","bloq-for-from":"desde","bloq-for-to":"cara a","bloq-for-add":"sumando","bloq-for-subtract":"restando","bloq-for-exec":"executar:","bloq-if-if":"Si","bloq-if-exec":"executar:","bloq-switch-check":"Comprobar cál é o valor de ","bloq-wait-wait":"Esperar","bloq-while-while":"Mentras","bloq-while-exec":"executar:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Executar","bloq-invoke-return-function-exec":"Executar","bloq-invoke-function-args":"cos seguintes argumentos:","bloq-return-return":"Devolve","bloq-return-function-declare":"Declarar función","bloq-return-function-return":"Devolve","bloq-return-function-with-arguments-declare":"Declarar función","bloq-return-function-with-arguments-count":"cos seguintes argumentos:","bloq-return-function-with-arguments-return":"Devolve","bloq-void-function-declare":"Declarar función","bloq-void-function-with-arguments-declare":"Declarar función","bloq-void-function-with-arguments-count":"cos seguintes argumentos","bloq-boolArray-advanced-arraySize":"Array con tamaño","bloq-boolArray-advanced-boolType":"e tipo bool","bloq-boolArray-arraySize":"Array con tamaño","bloq-boolArray-boolType":"e tipo bool","bloq-boolean-true":"Verdadeiro","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"ou","bloq-not-not":"not","bloq-loop-header":"Bucle principal (Loop)","bloq-loop-description":"Crea o programa que se vai a executar continuamente despois do Setup.","bloq-setup-header":"Instrucións iniciais (Setup)","bloq-setup-description":"Indica o que queres que se execute unha única vez ao comezo do programa.","bloq-var-header":"Variables globais, funcións e clases","bloq-var-description":" Define os valores que vas utilizar en Setup e Loop, también podes facer funcións para agrupar bloques.","bloq-numberArray-advanced-arraySize":"Array con tamaño ","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"enteiro","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0 -","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Raíz cadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Array con tamaño","bloq-numberArray-floatType":"e tipo float","bloq-random-random":"Aleatorio entre","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Array con tamaño","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lonxitude","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Array con tamaño","bloq-stringArray-stringType":"e tipo texto","bloq-string-create-create":"Crear texto con","bloq-hw-variable-advanced-variable":"Variable (compoñentes)","bloq-sw-variable-advanced-variable":"Variable (código)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declarar variable","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"enteiro","bloq-declare-variable-declare-type-float":"Decimal","bloq-declare-variable-declare-type-text":"Texto","bloq-declare-variable-declare-type-char":"caracter","bloq-declare-variable-declare-type-bool":"valor lóxico","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caracter","bloq-lcd-default":"¡Ola!","bloq-comment-default":"Escribe un comentario ","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Arrastra un bloque aquí para empezar o teu programa","bloq-invoke-class-function-class":"do obxecto","bloq-invoke-arguments-class":"Crear un obxecto da clase","bloq-invoke-arguments-class-name":"con o nome","bloq-invoke-arguments-args":"cos seguintes argumentos","bloq-invoke-class-return-function-exec":"Executar a función","bloq-invoke-class-function-exec":"Executar a función","bloq-invoke-class-function-args":"cos seguintes argumentos","bloq-invoke-class-return-function-args-exec":"Executar a función","bloq-invoke-class-return-function-args-class":"do obxecto","bloq-invoke-class-return-function-args-args":"cos seguintes argumentos","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Construtor que usa os seguintes argumentos","bloq-invoke-class":"Crear un obxecto da clase","bloq-invoke-class-name":"con o nome","bloq-class":"Declarar clase","bloq-class-default":"Nome","bloq-class-from":"de","bloq-class-inheritance-type":"herdando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protexida","bloq-class-inheritance-private":"privada","bloq-public":"Variables e funcións públicas :","bloq-protected":"Variables e funcións protexidas:","bloq-private":"Variables e funcións privadas:","bloq-include-lib-exec":"ncluir a libraría","bloq-pin-analog-write":"Escribir no pin analóxico","bloq-pin-digital-write":"Escribir no pin dixital","bloq-pin-analog-write-data":"o dato","bloq-pin-digital-write-data":"o dato","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"xira","bloq-zowi-movements-height-moonwalker":"fai o moonwalker","bloq-zowi-movements-height-crusaito":"fai o paso cruzado","bloq-zowi-movements-height-flapping":"axítate","bloq-zowi-movements-shakeleg":"move as pernas","bloq-zowi-movements-bend":"inclínate","bloq-zowi-movements-forward":"adiante","bloq-zowi-movements-backward":"atrás","bloq-zowi-movements-left":"esquerda","bloq-zowi-movements-right":"dereita","bloq-zowi-movements-speed":"veces cunha velocidade","bloq-zowi-mouth":"Zowi: dibuxa unha","bloq-zowi-mouth-mouth":"na tua boca","bloq-zowi-mouth-smile":"sorriso","bloq-zowi-mouth-sad":"faciana triste","bloq-zowi-mouth-happy":"faciana alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"adiante","bloq-zowi-movements-height-backward":"atrás","bloq-zowi-movements-height-left":"esquerda","bloq-zowi-movements-height-right":"dereita","bloq-zowi-movements-height-speed":"veces cunha velocidade","bloq-zowi-movements-height-height":"e unha altura","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sube e baixa","bloq-zowi-movements-no-dir-swing":"balancéate","bloq-zowi-movements-no-dir-tiptoeSwing":"balancéate na punta dos pés.","bloq-zowi-movements-no-dir-jitter":"treme","bloq-zowi-movements-no-dir-ascendingTurn":"xira mentres sobes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"veces cunha velocidade","bloq-zowi-movements-no-dir-height":"e unha altura","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Zowi, fai o son de","bloq-hts221-humidity":"Ler a humidade do sensor","bloq-hts221-temperature":"Ler a temperatura do sensor","bloq-rgbLed-fade-red":"con un valor de vermello de","bloq-enable-interrupt":"Executar a función","bloq-enable-interrupt-rising":"cambie de 0 a 1","bloq-enable-interrupt-falling":"cambie de 1 a 0","bloq-enable-interrupt-change":"cambie","bloq-enable-interrupt-pin":"cando a entrada do pin","bloq-rgbLed-green":", un valor de verde de","bloq-rgbLed-fade":"Crear un degradado no LED RGB","bloq-rgbLed-red":"cun valor de vermello de","bloq-rtc-init":"Actualizar data e hora do reloxo","bloq-rtc-month":"o mes","bloq-rtc-using-advanced":"actual usando o reloxo","bloq-rtc-year":"o ano","bloq-rtc-day":"o día","bloq-rtc-hour":"a hora","bloq-rtc-minute":"o minuto","bloq-rtc-second":"o segundo","bloq-rtc-time":"hora","bloq-rtc-using":"actual usando o reloxo","bloq-rtc-advanced":"Obter","bloq-rtc":"Obter a","default-var-name-rtc":"reloxo_tempo_real","bloq-rtc-date":"data","default-var-name-sound":"Sensor_son","bloq-rgbLed-blue":"e un valor de azul de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Acender o LED RGB","bloq-rgbLed-fade-blue":"e un valor de azul de","bloq-rgbLed-fade-green":", un valor de verde de","bloq-rgbLed-simple":"Acender o LED RGB","bloq-rgbLed-simple-color":"con cor","bloq-rgbLed-simple-red":"vermello","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"azul","bloq-zowi-gestures":"Zowi, mostra emoción de","bloq-zowi-gestures-ZowiHappy":"felicidade","bloq-zowi-gestures-ZowiSuperHappy":"moita felicidade","bloq-zowi-gestures-ZowiSad":"tristeza","bloq-zowi-gestures-ZowiSleeping":"soño","bloq-zowi-gestures-ZowiFart":"peido","bloq-zowi-gestures-ZowiConfused":"confusión","bloq-zowi-gestures-ZowiLove":"amor","bloq-zowi-gestures-ZowiAngry":"enfado","bloq-zowi-gestures-ZowiFretful":"preocupación","bloq-zowi-gestures-ZowiMagic":"máxia","bloq-zowi-gestures-ZowiWave":"Ola","bloq-zowi-gestures-ZowiVictory":"vitoria","bloq-zowi-gestures-ZowiFail":"derrota","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"veces","bloq-zowi-movements-simple-walk":"anda","bloq-zowi-movements-simple-turn":"xira","bloq-zowi-movements-simple-shakeLeg":"move a perna","bloq-zowi-movements-simple-bend":"inclínate","bloq-zowi-movements-simple-moonwalker":"fai o moonwalker","bloq-zowi-movements-simple-crusaito":"fai o paso cruzado","bloq-zowi-movements-simple-flapping":"axítate","bloq-zowi-movements-simple-updown":"sube e baixa","bloq-zowi-movements-simple-swing":"balancéate","bloq-zowi-movements-simple-tiptoeSwing":"balancéate na punta dos pés.","bloq-zowi-movements-simple-jitter":"treme","bloq-zowi-movements-simple-ascendingTurn":"xira mentres sobes","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Zowi, descansa","bloq-millis":"Obter tempo de execución","bloq-random-seed":"Inicializar o xerador de números aleatorios","bloq-rgbLed-simple-white":"branco","bloq-rgbLed-simple-yellow":"amarelo","bloq-rgbLed-simple-orange":"laranxa","bloq-rgbLed-simple-dark-green":"verde escuro","bloq-rgbLed-simple-dark-blue":"azul escuro","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Enteiro","bloq-argument-char":"Carácter","bloq-zowi-buttons":"botón","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"de Zowi","bloq-zowi-if-distance":"Se detecta unha distancia","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"maior","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"centímetros, executa:","bloq-zowi-if-buttons":"Se pulso o botón","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", executa:","bloq-zowi-if-sound":"Se escoita un ruído, executa:","bloq-evolution-rest":"Descansa","bloq-evolution-movements-simple":"Móvete cara","bloq-evolution-movements-simple-fordward":"adiante","bloq-evolution-movements-simple-backward":"atrás","bloq-evolution-movements-simple-right":"dereita","bloq-evolution-movements-simple-left":"esquerda","bloq-evolution-distance":"Mide a distancia","bloq-evolution-if-distance":"Se detecta unha distancia","bloq-evolution-if-distance-less":"menor","bloq-evolution-if-distance-more":"maior","bloq-evolution-if-distance-than":"que","bloq-evolution-if-distance-then":"centímetros, executa:","bloq-evolution-light":"Mide a luz","bloq-evolution-light-left":"esquerda","bloq-evolution-light-right":"dereita","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Detecta a liña","bloq-evolution-line-left":"esquerda","bloq-evolution-line-right":"dereita","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Mira cara","bloq-evolution-head-left":"esquerda","bloq-evolution-head-right":"dereita","bloq-evolution-head-center":"adiante","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Toca a nota","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durante","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Mira","bloq-evolution-head-advance-deg":"grados cara á","bloq-evolution-head-advance-left":"esquerda","bloq-evolution-head-advance-right":"dereita","bloq-shield-stepper-steps":"Virar stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 e 2","bloq-shield-stepper-steps-degdir":"graos en sentido","bloq-shield-stepper-steps-CW":"horario","bloq-shield-stepper-steps-CCW":"antihorario","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Se detecta liña","bloq-evolution-if-line-white":"branca","bloq-evolution-if-line-black":"negra","bloq-evolution-if-line-and":"na esquerda e","bloq-evolution-if-line-then":"na dereita, executa:","bloq-evolution-if-light":"Se ve luz","bloq-evolution-if-light-and":"na esquerda e","bloq-evolution-if-light-then":"na dereita, executa:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"media","bloq-evolution-if-light-low":"baixa","bloq-shield-stepper-steps-advanced":"Virar stepper motor","bloq-shield-stepper-steps-advanced-degdir":"graos en sentido","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Virar motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"en sentido","bloq-shield-DCmotor-spin-CW":"horario","bloq-shield-DCmotor-spin-CCW":"antihorario","bloq-shield-DCmotor-spin-at":"ao ","bloq-shield-DCmotor-spin-speed":"% do seu Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Virar motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"en sentido","bloq-shield-DCmotor-spinMotor-advanced-at":"ao","bloq-shield-DCmotor-spinMotor-advanced-speed":"% do seu Vmax","bloq-shield-DCmotor-stop":"Parar motor","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Parar motor","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Posición inicial","bloq-zowi-gestures-v1":"Fai a animación de ","bloq-zowi-gestures-ZowiHappy-v1":"Feliz","bloq-zowi-gestures-ZowiSuperHappy-v1":"Super Feliz","bloq-zowi-gestures-ZowiSad-v1":"Triste","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confuso","bloq-zowi-gestures-ZowiLove-v1":"Amor","bloq-zowi-gestures-ZowiAngry-v1":"Enfadado","bloq-zowi-gestures-ZowiFretful-v1":"Inquieto","bloq-zowi-gestures-ZowiVictory-v1":"Vitoria!!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", fai:","bloq-zowi-if-distance-then-v1":"cm, fai:","bloq-zowi-if-sound-v1":"Se escoita un ruído, fai:","bloq-zowi-mouth-v1":"Mostra unha","bloq-zowi-movements-simple-walk-v1":"Anda","bloq-zowi-movements-simple-turn-v1":"Xira","bloq-zowi-movements-simple-shakeLeg-v1":"Move a perna","bloq-zowi-movements-simple-bend-v1":"Inclínache","bloq-zowi-movements-simple-moonwalker-v1":"Fai o moonwalker","bloq-zowi-movements-simple-crusaito-v1":"Fai o paso cruzado","bloq-zowi-movements-simple-flapping-v1":"Axítate","bloq-zowi-movements-simple-updown-v1":"Sube e baixa","bloq-zowi-movements-simple-swing-v1":"Balánzate","bloq-zowi-movements-simple-tiptoeSwing-v1":"Balánzate no bico dos pés","bloq-zowi-movements-simple-jitter-v1":"Treme","bloq-zowi-movements-simple-ascendingTurn-v1":"Vira mentres sobes","bloq-zowi-movements-simple-jump-v1":"Salta","bloq-zowi-sounds-v1":"Fai o son de ","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"mide a distancia","bloq-zowi-sound-v1":"escoita con atención","bloq-zowi-movements-front":"Anda","bloq-zowi-movements-front-forward":"adiante","bloq-zowi-movements-front-backward":"atrás","bloq-zowi-movements-front-speed":"veces cunha velocidade","bloq-zowi-movements-front-speed-small":"baixa","bloq-zowi-movements-front-speed-medium":"media","bloq-zowi-movements-front-speed-high":"alta","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"Xira","bloq-zowi-movements-sides-shakeLeg":"Move a perna","bloq-zowi-movements-sides-bend":"Inclínache","bloq-zowi-movements-sides-left":"esquerda","bloq-zowi-movements-sides-right":"dereita","bloq-zowi-movements-sides-speed":"veces cunha velocidade","bloq-zowi-movements-sides-speed-small":"baixa","bloq-zowi-movements-sides-speed-medium":"media","bloq-zowi-movements-sides-speed-high":"alta","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"Fai o moonwalker","bloq-zowi-movements-height-sides-crusaito":"Fai o paso cruzado","bloq-zowi-movements-height-sides-left":"esquerda","bloq-zowi-movements-height-sides-right":"dereita","bloq-zowi-movements-height-sides-speed":"veces cunha velocidade","bloq-zowi-movements-height-sides-speed-small":"baixa","bloq-zowi-movements-height-sides-speed-medium":"media","bloq-zowi-movements-height-sides-speed-high":"alta","bloq-zowi-movements-height-sides-height":"e unha altura","bloq-zowi-movements-height-sides-small":"baixa","bloq-zowi-movements-height-sides-medium":"media","bloq-zowi-movements-height-sides-big":"alta","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"converter","bloq-num-conversion-to":"a","bloq-num-conversion-int":"enteiro","bloq-num-conversion-float":"decimal","bloq-name-default":"Nome","bloq-declare-array":"Declarar variable array","bloq-declare-array-size":"con tamaño","bloq-declare-array-type":"e tipo","bloq-servo-detach":"Desconectar servo","bloq-servo-attach":"Conectar servo","bloq-hts221":"Leer a","bloq-hts221-read-temperature":"temperatura","bloq-hts221-read-humidity":"humedade","bloq-hts221-sensor":"do sensor","bloq-PTsensor":"Leer a","bloq-PTsensor-pressure":"presión","bloq-PTsensor-temperature":"temperatura","bloq-PTsensor-altitude":"altitude","bloq-PTsensor-sensor":"do sensor","bloq-PTsensor-calibration":"Definir a presión a nivel do mar a","bloq-PTsensor-calibration-sensor":"Pa no sensor","bloq-rgbLed-off":"Apagar o LED RGB","bloq-pin-analog-write-V1":"Escribir no pin dixital","bloq-pin-analog-write-data-V1":"o valor analóxico","bloq-buzzer-do-#":"Do#","bloq-buzzer-re-#":"Re#","bloq-buzzer-fa-#":"Fa#","bloq-buzzer-sol-#":"Sool#","bloq-buzzer-la-#":"La#","bloq-serial-receiver-receive-number":"Recibir número","bloq-declare-array-declare":"Declarar array","bloq-declare-array-declare-type":"o tipo","bloq-declare-array-declare-size":"o tamaño","bloq-pin-digital-write-data-V1":"o valor dixital","bloq-round-advanced-roundto":"Redondear cara a","bloq-round-advanced-floor":"abaixo","bloq-round-advanced-ceil":"arriba","bloq-round-advanced-round":"o máis próximo","bloq-round-advanced-thenumber":"o número","bloq-mbot-buzzer-ms":"ms","bloq-mbot-buzzer-advanced-ms":"ms","bloq-common-ms":"ms"},"it-IT":{"bloq-zowi-mouth-tongueOut":"sorriso con la lingua","bloq-zowi-mouth-confused":"faccia confusa","bloq-zowi-mouth-bigSurprise":"faccia sorpresa","bloq-zowi-distance":"Misura la distanza","bloq-zowi-sound":"Ascolta","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristezza","bloq-zowi-sounds-happy":"felicità","bloq-zowi-sounds-sleeping":"sonno","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusione","bloq-zowi-movements-shakeLeg":"muove la gamba","bloq-zowi-sounds-fart1":"una pernacchia","bloq-zowi-movements-speed-medium":"media ","bloq-zowi-movements-speed-small":"bassa","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"Interrompi il bucle","bloq-code-writeYourCode":"Scrivi il tuo codice","bloq-comment-comment":"Commento //","bloq-convert-convert":"Converti","bloq-convert-to":"A","bloq-convert-dec":"Decimale","bloq-convert-hex":"Esadecimale","bloq-convert-oct":"Ottale","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Ricevi","bloq-serial-send-send":"Invia","bloq-serial-send-print":"Senza salto di riga","bloq-serial-send-println":"Con salto di riga","bloq-buzzer-advance-sound":"Suona cicalino","bloq-buzzer-advance-note":"con la nota","bloq-buzzer-advance-for":"per","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Leggi pin digitale","bloq-analog-read-advanced-readpin":"Leggi pin analogico","bloq-continuous-servo-start-advanced-turn":"Gira servo","bloq-continuous-servo-start-advanced-direction":"in senso","bloq-continuous-servo-start-advanced-clockwise":"orario","bloq-continuous-servo-start-advanced-counterclockwise":"antiorario","bloq-continuous-servo-stop-advanced-stop":"Ferma servo","bloq-lcd-turn-on-off-advanced-turnon":"Accendi","bloq-lcd-turn-on-off-advanced-turnoff":"Spegni","bloq-lcd-turn-on-off-advanced-lcdLigth":"la luce del LCD","bloq-lcd-clear":"Cancella il contenuto dell'LCD","bloq-lcd-writte-advanced-write":"Scrivi","bloq-lcd-writte-advanced-inLCD":"nel LCD","bloq-lcd-writte-advanced-inPosition":"cominciando dalla posizione (colonna, riga)","bloq-led-advanced-turnon":"Accendi","bloq-led-advanced-turnoff":"Spegni","bloq-led-advanced-theLED":"il LED","bloq-oscillator-advanced-oscillate":"Attiva oscillazione servo","bloq-oscillator-advanced-around":"a circa","bloq-oscillator-advanced-amplitude":"con ampiezza","bloq-oscillator-advanced-speed":"con velocità","bloq-oscillator-start-advanced-oscillator":"Riproduci oscillatore","bloq-oscillator-stop-advanced-stop":"Ferma oscillatore","bloq-pin-read-advanced-readpin":"Leggi il pin","bloq-pin-writte-advanced-writepin":"Scrivi nel pin","bloq-pin-writte-advanced-data":"il dato","bloq-read-advanced-read":"Leggi","bloq-servo-advanced-move":"Sposta","bloq-servo-advanced-to":"in","bloq-servo-advanced-degrees":"gradi","bloq-buzzer-sound":"Suona cicalino","bloq-buzzer-note":"con la nota","bloq-buzzer-for":"per","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Gira servo","bloq-continuous-servo-start-direction":"in senso","bloq-continuous-servo-start-clockwise":"orario","bloq-continuous-servo-start-counterclockwise":"antiorario","bloq-continuous-servo-stop-stop":"Ferma servo","bloq-lcd-turn-on-off-turnon":"Accendi","bloq-lcd-turn-on-off-turnoff":"Spegni","bloq-lcd-turn-on-off-lcdLigth":"la luce del LCD","bloq-lcd-writte-write":"Scrivi","bloq-lcd-writte-inLCD":"nel LCD","bloq-led-turnon":"Accendi","bloq-led-turnoff":"Spegni","bloq-led-theLED":"il LED","bloq-oscillator-oscillate":"Attiva oscillazione servo","bloq-oscillator-around":"a circa","bloq-oscillator-amplitude":"con ampiezza","bloq-oscillator-speed":"con velocità","bloq-oscillator-times":"volte","bloq-oscillator-start-oscillator":"Riproduci oscillatore","bloq-oscillator-stop-stop":"Ferma oscillatore","bloq-read-read":"Leggi","bloq-servo-move":"Sposta","bloq-servo-to":"in","bloq-servo-degrees":"gradi","bloq-case-ifSameTo":"se è uguale a","bloq-case-exec":"esegui","bloq-case-default-inOtherCase":"altrimenti, esegui","bloq-continue-continue":" con la seguente interazione del bucle","bloq-else-else":"altrimenti, esegui","bloq-else-if-if":"invece, se","bloq-else-if-else":"esegui","bloq-for-count":"Conta su","bloq-for-from":"da","bloq-for-to":"fino a","bloq-for-add":"sommando","bloq-for-subtract":"rimanendo","bloq-for-exec":"esegui","bloq-if-if":"Se","bloq-if-exec":"esegui","bloq-switch-check":"Verifica qual è il valore di","bloq-wait-wait":"Attendi","bloq-while-while":"Mentre","bloq-while-exec":"esegui","bloq-argument-var":"Variabile","bloq-argument-float":"Decimale","bloq-argument-string":"Testo","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Esegui","bloq-invoke-return-function-exec":"Esegui","bloq-invoke-function-args":"con i seguenti argomenti:","bloq-return-return":"Restituisci","bloq-return-function-declare":"Dichiara funzione","bloq-return-function-return":"Restituisci","bloq-return-function-with-arguments-declare":"Dichiara funzione","bloq-return-function-with-arguments-count":"contando su","bloq-return-function-with-arguments-return":"Restituisci","bloq-void-function-declare":"Dichiara funzione","bloq-void-function-with-arguments-declare":"Dichiara funzione","bloq-void-function-with-arguments-count":"contando su","bloq-boolArray-advanced-arraySize":"Array di dimensioni","bloq-boolArray-advanced-boolType":"e tipo bool","bloq-boolArray-arraySize":"Array di dimensioni","bloq-boolArray-boolType":"e tipo bool","bloq-boolean-true":"Vero","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Crea il programma da eseguire continuamente dopo il Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indica, per una sola volta, cosa desideri eseguire all'avvio del programma.","bloq-var-header":"Variabili globali e funzioni","bloq-var-description":" Definisce i valori che utilizzerai in Setup e Loop; puoi utilizzare anche funzioni per raggruppare blocchi.","bloq-numberArray-advanced-arraySize":"Array di dimensioni","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimale","bloq-numberArray-advanced-int":"intero","bloq-map-map":"Mappa","bloq-map-value":"valore tra [0 -","bloq-map-advanced-map":"Mappa","bloq-map-advanced-value":"da [","bloq-map-advanced-and":" a [","bloq-math-operations-sqrt":"Radice quadrata","bloq-math-operations-abs":"Valore assoluto","bloq-numberArray-arraySize":"Array di dimensioni","bloq-numberArray-floatType":" e tipo float","bloq-random-random":"Aleatorio tra","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Array di dimensioni","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lunghezza","bloq-string-string":"Testo","bloq-stringArray-arraySize":"Array di dimensioni","bloq-stringArray-stringType":"e tipo testo","bloq-string-create-create":"Creare testo con","bloq-hw-variable-advanced-variable":"Variabile (componenti)","bloq-sw-variable-advanced-variable":"Variabile (componenti)","bloq-array-variable-variable":"Variabile","bloq-declare-variable-declare":"Dichiara variabile","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"intero","bloq-declare-variable-declare-type-float":"decimale","bloq-declare-variable-declare-type-text":"testo","bloq-declare-variable-declare-type-char":"carattere","bloq-declare-variable-declare-type-bool":"valore logico","bloq-select-variable-variable":"Variabile","bloq-set-variableArray-variable":"Variabile","bloq-set-variable-variable":"Variabil","bloq-char":"Carattere","bloq-lcd-default":"Ciao!","bloq-comment-default":"Lascia un commento","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Trascina un blocco qui per cominciare a programmare","bloq-invoke-class-function-class":"l'oggetto","bloq-invoke-arguments-class":"Crea un oggetto della classe","bloq-invoke-arguments-class-name":"con il nome","bloq-invoke-arguments-args":"con i seguenti argomenti","bloq-invoke-class-return-function-exec":"Esegui la funzione","bloq-invoke-class-function-exec":"Esegui la funzione","bloq-invoke-class-function-args":"con i seguenti argomenti","bloq-invoke-class-return-function-args-exec":"Esegui la funzione","bloq-invoke-class-return-function-args-class":"l'oggetto","bloq-invoke-class-return-function-args-args":"con i seguenti argomenti","bloq-set-class-variable-variable":"Variabile","bloq-set-class-variableArray-variable":"Variabile","bloq-select-class-variable-variable":"Variabile","bloq-array-class-variable-variable":"Variabile","bloq-constructor":"Costruttore","bloq-constructor-arguments":"Costruttore che usa i seguenti argomenti","bloq-invoke-class":"Crea un oggetto della classe","bloq-invoke-class-name":"con il nome","bloq-class":"Dichiara classe","bloq-class-default":"Nome","bloq-class-from":"di","bloq-class-inheritance-type":"eredita in modalità","bloq-class-inheritance-public":"pubblica","bloq-class-inheritance-protected":"protetta","bloq-class-inheritance-private":"privata","bloq-public":"Variabili e funzioni pubbliche:","bloq-protected":"Variabili e funzioni protette:","bloq-private":"Variabili e funzioni private:","bloq-include-lib-exec":"Includi la libreria","bloq-pin-analog-write":"Scrivi nel pin analogico","bloq-pin-digital-write":"Scrivi nel pin digitale","bloq-pin-analog-write-data":"il dato","bloq-pin-digital-write-data":"il dato","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"procedi","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"fai il moonwalker","bloq-zowi-movements-height-crusaito":"fai il passo incrociato","bloq-zowi-movements-height-flapping":"agitati","bloq-zowi-movements-shakeleg":"muovi le gambe","bloq-zowi-movements-bend":"inclinati","bloq-zowi-movements-forward":"avanti","bloq-zowi-movements-backward":"indietro","bloq-zowi-movements-left":"sinistra","bloq-zowi-movements-right":"destra","bloq-zowi-movements-speed":"volte con una velocità di","bloq-zowi-mouth":"Disegna un","bloq-zowi-mouth-mouth":"sulla bocca","bloq-zowi-mouth-smile":"sorriso","bloq-zowi-mouth-sad":"faccia triste","bloq-zowi-mouth-happy":"faccia allegra","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"avanti","bloq-zowi-movements-height-backward":"indietro","bloq-zowi-movements-height-left":"sinistra","bloq-zowi-movements-height-right":"destra","bloq-zowi-movements-height-speed":"volte con una velocità di","bloq-zowi-movements-height-height":"e un'altezza","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"bassa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sali e scendi","bloq-zowi-movements-no-dir-swing":"tienti in equilibrio","bloq-zowi-movements-no-dir-tiptoeSwing":"tienti in equilibrio sulle punte","bloq-zowi-movements-no-dir-jitter":"tremola","bloq-zowi-movements-no-dir-ascendingTurn":"gira mentre sali","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"volte con una velocità di","bloq-zowi-movements-no-dir-height":"e un'altezza","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"bassa","bloq-zowi-sounds":"Fai il suono di","bloq-hts221-humidity":"Leggere l'umidità del sensore","bloq-hts221-temperature":"Leggere la temperatura del sensore","bloq-rgbLed-fade-red":"con un valore di rosso pari a","bloq-enable-interrupt":"Eseguire la funzione","bloq-enable-interrupt-rising":"cambia da 0 a 1","bloq-enable-interrupt-falling":"cambia da 1 a 0","bloq-enable-interrupt-change":"cambia","bloq-enable-interrupt-pin":"quando si inserisce il pin","bloq-rgbLed-green":", un valore di verde pari a","bloq-rgbLed-fade":"Creare una sfumatura nel LED RGB","bloq-rgbLed-red":"con un valore di rosso pari a","bloq-rtc-init":"Aggiornare data e ora dell'orologio","bloq-rtc-month":"il mese","bloq-rtc-using-advanced":"attuale usando l'orologio","bloq-rtc-year":"l'anno","bloq-rtc-day":"il giorno","bloq-rtc-hour":"l'ora","bloq-rtc-minute":"il minuto","bloq-rtc-second":"il secondo","bloq-rtc-time":"ora","bloq-rtc-using":"attuale usando l'orologio","bloq-rtc-advanced":"Ottenere","bloq-rtc":"Ottenere la","default-var-name-rtc":"orologio_tempo_reale","bloq-rtc-date":"data","default-var-name-sound":"Sensore_audio","bloq-rgbLed-blue":"e un valore di blu pari a","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Accendere il LED RGB","bloq-rgbLed-fade-blue":"e un valore di blu pari a","bloq-rgbLed-fade-green":", un valore di verde pari a","bloq-rgbLed-simple":"Accendere il LED RGB","bloq-rgbLed-simple-color":"con colore","bloq-rgbLed-simple-red":"rosso","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"blu","bloq-zowi-gestures":"Fai l'animazione di","bloq-zowi-gestures-ZowiHappy":"Felice","bloq-zowi-gestures-ZowiSuperHappy":"Molto felice","bloq-zowi-gestures-ZowiSad":"Triste","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confuso","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Arrabbiato","bloq-zowi-gestures-ZowiFretful":"Inquieto","bloq-zowi-gestures-ZowiMagic":"Magia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"Vittoria!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"volte","bloq-zowi-movements-simple-walk":"cammina","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"muovi la gamba","bloq-zowi-movements-simple-bend":"inclinati","bloq-zowi-movements-simple-moonwalker":"fai il moonwalker","bloq-zowi-movements-simple-crusaito":"fai il passo incrociato","bloq-zowi-movements-simple-flapping":"agitati","bloq-zowi-movements-simple-updown":"sali e scendi","bloq-zowi-movements-simple-swing":"tienti in equilibrio","bloq-zowi-movements-simple-tiptoeSwing":"tienti in equilibrio sulle punte","bloq-zowi-movements-simple-jitter":"tremola","bloq-zowi-movements-simple-ascendingTurn":"gira mentre sali","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Riposa","bloq-millis":"Ottieni tempo di esecuzione","bloq-random-seed":"Inizializza il generatore di numeri aleatori","bloq-rgbLed-simple-white":"bianco","bloq-rgbLed-simple-yellow":"giallo","bloq-rgbLed-simple-orange":"arancione","bloq-rgbLed-simple-dark-green":"verde scuro","bloq-rgbLed-simple-dark-blue":"blu scuro","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Intero","bloq-argument-char":"Carattere","bloq-zowi-buttons":"pulsante","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"di Zowi","bloq-zowi-if-distance":"Se rileva una distanza","bloq-zowi-if-distance-less":"minore","bloq-zowi-if-distance-more":"maggiore","bloq-zowi-if-distance-than":"di","bloq-zowi-if-distance-then":"centimetri, esegue:","bloq-zowi-if-buttons":"Se premo il pulsante","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", esegue:","bloq-zowi-if-sound":"Se sente un rumore, esegue:","bloq-evolution-rest":"Riposa","bloq-evolution-movements-simple":"Muoviti","bloq-evolution-movements-simple-fordward":"in avanti","bloq-evolution-movements-simple-backward":"indietro","bloq-evolution-movements-simple-right":"destra","bloq-evolution-movements-simple-left":"sinistra","bloq-evolution-distance":"Misura la distanza","bloq-evolution-if-distance":"Se rileva una distanza","bloq-evolution-if-distance-less":"minore","bloq-evolution-if-distance-more":"maggiore","bloq-evolution-if-distance-than":"di","bloq-evolution-if-distance-then":"centimetri, esegue:","bloq-evolution-light":"Misura la luce","bloq-evolution-light-left":"sinistra","bloq-evolution-light-right":"destra","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Rileva la linea","bloq-evolution-line-left":"sinistra","bloq-evolution-line-right":"destra","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Guarda verso","bloq-evolution-head-left":"sinistra","bloq-evolution-head-right":"destra","bloq-evolution-head-center":"in avanti","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Suona la nota","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durante","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Guarda","bloq-evolution-head-advance-deg":"gradi verso","bloq-evolution-head-advance-left":"sinistra","bloq-evolution-head-advance-right":"destra","bloq-shield-stepper-steps":"Girare stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 e 2","bloq-shield-stepper-steps-degdir":"gradi in senso","bloq-shield-stepper-steps-CW":"orario","bloq-shield-stepper-steps-CCW":"antiorario","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Se rileva linea","bloq-evolution-if-line-white":"bianca","bloq-evolution-if-line-black":"nera","bloq-evolution-if-line-and":"a sinistra e","bloq-evolution-if-line-then":"a destra, esegue:","bloq-evolution-if-light":"Se vede una luce","bloq-evolution-if-light-and":"a sinistra e","bloq-evolution-if-light-then":"a destra, esegue:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"media","bloq-evolution-if-light-low":"bassa","bloq-shield-stepper-steps-advanced":"Gira motore passo-passo","bloq-shield-stepper-steps-advanced-degdir":"gradi in senso","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Gira motore","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"in senso","bloq-shield-DCmotor-spin-CW":"orario","bloq-shield-DCmotor-spin-CCW":"antiorario","bloq-shield-DCmotor-spin-at":"al","bloq-shield-DCmotor-spin-speed":"% della sua Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Gira motore","bloq-shield-DCmotor-spinMotor-advanced-direction":"in senso","bloq-shield-DCmotor-spinMotor-advanced-at":"al","bloq-shield-DCmotor-spinMotor-advanced-speed":"% della sua Vmax","bloq-shield-DCmotor-stop":"Ferma motore","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Ferma motore","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Posizione iniziale","bloq-zowi-gestures-v1":"Fai l'animazione di","bloq-zowi-gestures-ZowiHappy-v1":"Felice","bloq-zowi-gestures-ZowiSuperHappy-v1":"Felicissimo","bloq-zowi-gestures-ZowiSad-v1":"Triste","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confuso","bloq-zowi-gestures-ZowiLove-v1":"Innamorato","bloq-zowi-gestures-ZowiAngry-v1":"Arrabbiato","bloq-zowi-gestures-ZowiFretful-v1":"Agitato","bloq-zowi-gestures-ZowiVictory-v1":"Vittoria!","bloq-zowi-gestures-ZowiFail-v1":"Game over...","bloq-zowi-if-buttons-then-v1":", fai:","bloq-zowi-if-distance-then-v1":"cm, fai:","bloq-zowi-if-sound-v1":"Se ascolti un rumore, fai:","bloq-zowi-mouth-v1":"Mostra un","bloq-zowi-movements-simple-walk-v1":"Cammina","bloq-zowi-movements-simple-turn-v1":"Gira","bloq-zowi-movements-simple-shakeLeg-v1":"Muovi la gamba","bloq-zowi-movements-simple-bend-v1":"Inclinati","bloq-zowi-movements-simple-moonwalker-v1":"Fai il moonwalk","bloq-zowi-movements-simple-crusaito-v1":"Fai il passo incrociato","bloq-zowi-movements-simple-flapping-v1":"Scuotiti","bloq-zowi-movements-simple-updown-v1":"Sali e scendi","bloq-zowi-movements-simple-swing-v1":"Dondolati","bloq-zowi-movements-simple-tiptoeSwing-v1":"Dondolati in punta di piedi","bloq-zowi-movements-simple-jitter-v1":"Trema","bloq-zowi-movements-simple-ascendingTurn-v1":"Gira mentre sali","bloq-zowi-movements-simple-jump-v1":"Salta","bloq-zowi-sounds-v1":"Fai il suono di","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"misura la distanza","bloq-zowi-sound-v1":"ascolta con attenzione","bloq-zowi-movements-front":"Cammina","bloq-zowi-movements-front-forward":"in avanti","bloq-zowi-movements-front-backward":"indietro","bloq-zowi-movements-front-speed":"volte con una velocità","bloq-zowi-movements-front-speed-small":"bassa","bloq-zowi-movements-front-speed-medium":"media","bloq-zowi-movements-front-speed-high":"alta","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"Gira","bloq-zowi-movements-sides-shakeLeg":"Muovi la gamba","bloq-zowi-movements-sides-bend":"Inclinati","bloq-zowi-movements-sides-left":"sinistra","bloq-zowi-movements-sides-right":"destra","bloq-zowi-movements-sides-speed":"volte con una velocità","bloq-zowi-movements-sides-speed-small":"bassa","bloq-zowi-movements-sides-speed-medium":"media","bloq-zowi-movements-sides-speed-high":"alta","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"Fai il moonwalk","bloq-zowi-movements-height-sides-crusaito":"Fai il passo incrociato","bloq-zowi-movements-height-sides-left":"sinistra","bloq-zowi-movements-height-sides-right":"destra","bloq-zowi-movements-height-sides-speed":"volte con una velocità","bloq-zowi-movements-height-sides-speed-small":"bassa","bloq-zowi-movements-height-sides-speed-medium":"media","bloq-zowi-movements-height-sides-speed-high":"alta","bloq-zowi-movements-height-sides-height":"e un’altezza","bloq-zowi-movements-height-sides-small":"bassa","bloq-zowi-movements-height-sides-medium":"media","bloq-zowi-movements-height-sides-big":"alta","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"converti","bloq-num-conversion-to":"a","bloq-num-conversion-int":"intero","bloq-num-conversion-float":"decimale","bloq-name-default":"Nome","bloq-declare-array":"Dichiara variabile array","bloq-declare-array-size":"con dimensioni","bloq-declare-array-type":"e tipo","bloq-servo-detach":"Scollega servo","bloq-servo-attach":"Collega servo","bloq-hts221":"Leggi la","bloq-hts221-read-temperature":"temperatura","bloq-hts221-read-humidity":"umidità","bloq-hts221-sensor":"del sensore","bloq-PTsensor":"Leggi la","bloq-PTsensor-pressure":"pressione","bloq-PTsensor-temperature":"temperatura","bloq-PTsensor-altitude":"altitudine","bloq-PTsensor-sensor":"del sensore","bloq-PTsensor-calibration":"Definisci la pressione a livello del mare a","bloq-PTsensor-calibration-sensor":"Pa nel sensore","bloq-rgbLed-off":"Spegni il LED RGB","bloq-pin-analog-write-V1":"Scrivi nel PIN digitale","bloq-pin-analog-write-data-V1":"il valore analogico","bloq-buzzer-do-#":"Do#","bloq-buzzer-re-#":"Re#","bloq-buzzer-fa-#":"Fa#","bloq-buzzer-sol-#":"Sol#","bloq-buzzer-la-#":"La#","bloq-serial-receiver-receive-number":"Ricevi numero","bloq-declare-array-declare":"Dichiara array","bloq-declare-array-declare-type":"di tipo","bloq-declare-array-declare-size":"e dimensioni","bloq-pin-digital-write-data-V1":"Il valore digitale","bloq-round-advanced-roundto":"Arrotondare per","bloq-round-advanced-floor":"difetto","bloq-round-advanced-ceil":"eccesso","bloq-round-advanced-round":"il più vicino","bloq-round-advanced-thenumber":"il numero","bloq-rtc-date-2":"anno/mese/giorno","bloq-rtc-time-2":"ora:minuto:secondo","bloq-pinlevel-high":"High","bloq-pinlevel-low":"Low","suggested":"Suggeriti","bloq-viewer":"Invia dati al mirino","bloq-mbot-buzzer-note":"Fai suonare la nota","bloq-mbot-buzzer-for":"per","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Ottieni la distanza (cm) degli ultrasuoni nella","bloq-mbot-port-1":"porta 1","bloq-mbot-port-2":"porta 2","bloq-mbot-port-3":"porta 3","bloq-mbot-port-4":"porta 4","bloq-mbot-getbuttonstatus":"Leggi stato del pulsante","bloq-mbot-getlightsensor":"Leggi il sensore della luce","bloq-mbot-linefollower-text":"Ottieni informazioni del sensore degli infrarossi nella","bloq-mbot-move-forward":"Avanti","bloq-mbot-move-backward":"Indietro","bloq-mbot-move-turnleft":"Gira a sinistra","bloq-mbot-move-turnright":"Gira a destra","bloq-mbot-move-speed":"a una velocità","bloq-mbot-move-speed-fast":"molto rapida","bloq-mbot-move-speed-normal":"normale","bloq-mbot-move-speed-slow":"lenta","bloq-mbot-setled-set":"Definisci","bloq-mbot-led-all":"tutti i LED","bloq-mbot-led-right":"il LED destro","bloq-mbot-led-left":"il LED sinistro","bloq-mbot-setled-colormix":"con questa miscela di colori:","bloq-mbot-setled-green":"verde:","bloq-mbot-setled-red":"rosso:","bloq-mbot-setled-blue":"blu:","bloq-mbot-stop":"Ferma robot","bloq-mbot-turnoffled-off":"Spegni","bloq-mbot-buzzer-advanced-play":"Fai suonare la nota","bloq-mbot-move-advanced-speed":"a una velocità","bloq-mbot-setled-advanced-set":"Definisci","bloq-mbot-setled-advanced-colormix":"con questa miscela di colori:","bloq-mbot-setled-advanced-red":"rosso:","bloq-mbot-setled-advanced-green":"verde:","bloq-mbot-setled-advanced-blue":"blu:","bloq-mbot-buzzer-advanced-for":"per","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Ripeti","bloq-magicfor-times":"volte","bloq-phone-sounds":"Emetti suono","bloq-phone-sounds-device":"sul dispositivo","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"bass","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Mostra sullo schermo","bloq-phone-receive":"Ricevi dati a voce o mediante testo","bloq-phone-toggle-light":"Lampeggia con una frequenza di","bloq-phone-toggle-units":"secondi","bloq-phone-turnon-light":"Accendi torcia con un’intensità del","bloq-phone-turnoff-light":"Spegni torcia","bloq-twitter-config":"Configura l’applicazione di Twitter","bloq-mbot-port-5":"porta 5","bloq-mbot-port-6":"porta 6","bloq-mbot-port-7":"porta 7","bloq-mbot-port-8":"porta 8","bloq-mbot-port-9":"porta 9","bloq-mbot-port-10":"porta 10","bloq-send-tweet":"Invia tweet","bloq-common-ms":"ms","bloq-common-every":"ogni","bloq-common-playnote":"Fai suonare la nota","bloq-common-for":"per","bloq-phone-read":"Leggi sul","bloq-phone-lacceleration":"l’accelerazione lineare sull’asse","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Invia mediante porta seriale","bloq-zowicomponent-serial-receive":"Ricevi mediante porta seriale","bloq-zowicomponent-serial-receive-int":"Ricevi numero mediante porta seriale","bloq-phone-gyroscope":"il giroscopio sull’asse","bloq-phone-is":"è","bloq-phone-covered":"coperto","bloq-phone-not-covered":"scoperto","bloq-phone-acceleration":"l’accelerazione sull’asse","bloq-phone-gravity":"l’accelerazione della gravità sull’asse","bloq-phone-light":"la luce ambientale","bloq-phone-magnetic":"il campo magnetico sull’asse","backward":"indietro"},"nl-NL":{"bloq-zowi-mouth-tongueOut":"lach met de tong naar buiten","bloq-zowi-mouth-confused":"verward gezicht","bloq-zowi-mouth-bigSurprise":"verrast gezicht","bloq-zowi-distance":"Zowi, meet de afstand","bloq-zowi-sound":"Zowi, luister aandachtig","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"verrassing","bloq-zowi-sounds-sad":"verdrietig","bloq-zowi-sounds-happy":"geluk","bloq-zowi-sounds-sleeping":"slaperigheid","bloq-zowi-sounds-cuddly":"knuffelen","bloq-zowi-sounds-confused":"verwarring","bloq-zowi-movements-shakeLeg":"beweeg been ","bloq-zowi-sounds-fart1":"windje","bloq-zowi-movements-speed-medium":"medium","bloq-zowi-movements-speed-small":"laag","bloq-zowi-movements-speed-high":"hoog","bloq-break-stopLoop":"Verbreek de loop","bloq-code-writeYourCode":"Maak je eigen code","bloq-comment-comment":"Opmerking //","bloq-convert-convert":"Converteren","bloq-convert-to":"naar","bloq-convert-dec":"Decimaal","bloq-convert-hex":"Hexadecimaal","bloq-convert-oct":"Octaal","bloq-convert-bin":"Binair","bloq-serial-receiver-receive":"Ontvangen","bloq-serial-send-send":"Zenden","bloq-serial-send-print":"Zonder regeleinde","bloq-serial-send-println":"Met regeleinde","bloq-buzzer-advance-sound":"Laat de zoemer klinken","bloq-buzzer-advance-note":"met de opmerking","bloq-buzzer-advance-for":"voor","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Lees digitale pin","bloq-analog-read-advanced-readpin":"Lees analoge pin","bloq-continuous-servo-start-advanced-turn":"Roteer servo","bloq-continuous-servo-start-advanced-direction":"richting","bloq-continuous-servo-start-advanced-clockwise":"met de klok mee","bloq-continuous-servo-start-advanced-counterclockwise":"tegen de klok in","bloq-continuous-servo-stop-advanced-stop":"Stop servo","bloq-lcd-turn-on-off-advanced-turnon":"Inschakelen","bloq-lcd-turn-on-off-advanced-turnoff":"Uitschakelen","bloq-lcd-turn-on-off-advanced-lcdLigth":"Het LCD-licht","bloq-lcd-clear":"Verwijder de inhoud van de LCD","bloq-lcd-writte-advanced-write":"Schrijven","bloq-lcd-writte-advanced-inLCD":"op het LCD","bloq-lcd-writte-advanced-inPosition":"start op positie (kolom, rij)","bloq-led-advanced-turnon":"Inschakelen","bloq-led-advanced-turnoff":"Uitschakelen","bloq-led-advanced-theLED":"Het LED","bloq-oscillator-advanced-oscillate":"Schommelen servo","bloq-oscillator-advanced-around":"rondom","bloq-oscillator-advanced-amplitude":"met groote","bloq-oscillator-advanced-speed":"met snelheid","bloq-oscillator-start-advanced-oscillator":"Start oscillator","bloq-oscillator-stop-advanced-stop":"Stop oscillator","bloq-pin-read-advanced-readpin":"Lees de pin","bloq-pin-writte-advanced-writepin":"Schrijf naar de pin","bloq-pin-writte-advanced-data":"de data","bloq-read-advanced-read":"Lezen","bloq-servo-advanced-move":"Verplaats","bloq-servo-advanced-to":"naar","bloq-servo-advanced-degrees":"graden","bloq-buzzer-sound":"Laat de zoemer klinken","bloq-buzzer-note":"met de opmerking","bloq-buzzer-for":"voor","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Als","bloq-continuous-servo-start-turn":"Roteren servo","bloq-continuous-servo-start-direction":"richting","bloq-continuous-servo-start-clockwise":"met de klok mee","bloq-continuous-servo-start-counterclockwise":"tegen de klok in","bloq-continuous-servo-stop-stop":"Stop servo","bloq-lcd-turn-on-off-turnon":"Inschakelen","bloq-lcd-turn-on-off-turnoff":"Uitschakelen","bloq-lcd-turn-on-off-lcdLigth":"het LCD-licht","bloq-lcd-writte-write":"Schrijven","bloq-lcd-writte-inLCD":"op het LCD","bloq-led-turnon":"Inschakelen","bloq-led-turnoff":"Uitschakelen","bloq-led-theLED":"het LED","bloq-oscillator-oscillate":"Schommelen servo","bloq-oscillator-around":"rondom","bloq-oscillator-amplitude":"met groote","bloq-oscillator-speed":"met snelheid","bloq-oscillator-times":"tijd","bloq-oscillator-start-oscillator":"Start oscillator","bloq-oscillator-stop-stop":"Stop oscillator","bloq-read-read":"Lezen","bloq-servo-move":"Verplaats","bloq-servo-to":"naar","bloq-servo-degrees":"graden","bloq-case-ifSameTo":"indien gelijk aan","bloq-case-exec":"doe","bloq-case-default-inOtherCase":"anders, doe","bloq-continue-continue":"Ga verder met volgende herhaling van de loop","bloq-else-else":"anders als, doe","bloq-else-if-if":"anders als","bloq-else-if-else":"doe","bloq-for-count":"Tellen met","bloq-for-from":"van","bloq-for-to":"tot","bloq-for-add":"toevoegen","bloq-for-subtract":"aftrekken","bloq-for-exec":"doe","bloq-if-if":"Als","bloq-if-exec":"doe","bloq-switch-check":"Controleer de waarde van","bloq-wait-wait":"Wacht","bloq-while-while":"Gedurende","bloq-while-exec":"doe","bloq-argument-var":"Variabele","bloq-argument-float":"Decimaal","bloq-argument-string":"Tekst","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Doe","bloq-invoke-return-function-exec":"Doe","bloq-invoke-function-args":"met de volgende parameters:","bloq-return-return":"Keer terug","bloq-return-function-declare":"Definieer functie","bloq-return-function-return":"Keer terug","bloq-return-function-with-arguments-declare":"Definieer functie","bloq-return-function-with-arguments-count":"tellen met","bloq-return-function-with-arguments-return":"Keer terug","bloq-void-function-declare":"Definieer functie","bloq-void-function-with-arguments-declare":"Definieer functie","bloq-void-function-with-arguments-count":"tellen met","bloq-boolArray-advanced-arraySize":"Rangschikken op grootte","bloq-boolArray-advanced-boolType":"en bool type","bloq-boolArray-arraySize":"Rangschikken op grootte","bloq-boolArray-boolType":"en bool type","bloq-boolean-true":"Waar","bloq-boolean-false":"Niet waar","bloq-logic-operations-and":"en","bloq-logic-operations-or":"of","bloq-not-not":"niet","bloq-loop-header":"Loop","bloq-loop-description":"Maak het programma zodanig dat deze na de Setup continu wordt uitgevoerd.","bloq-setup-header":"Setup","bloq-setup-description":"Geef aan welke actie eenmalig na het starten van het programma moet worden uitgevoerd.","bloq-var-header":"Globale variabelen en functies","bloq-var-description":" Definieer de waarden die je zult gebruiken in Setup en Loop. Je kunt functies maken om blokken te groeperen.","bloq-numberArray-advanced-arraySize":"Rangschikken op grootte","bloq-numberArray-advanced-type":"en type","bloq-numberArray-advanced-float":"decimaal","bloq-numberArray-advanced-int":"geheel","bloq-map-map":"Map","bloq-map-value":"waarde tussen [0 -","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"van [","bloq-map-advanced-and":"] tot [","bloq-math-operations-sqrt":"Wortel","bloq-math-operations-abs":"Absolute waarde","bloq-numberArray-arraySize":"Rangschikken op grootte","bloq-numberArray-floatType":" en float type","bloq-random-random":"Willekeurig tussen","bloq-random-and":"en","bloq-stringArray-advanced-arraySize":"Rangschikken op grootte","bloq-stringArray-advanced-type":"en type","bloq-stringArray-advanced-string":"rij","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lengte","bloq-string-string":"Tekst","bloq-stringArray-arraySize":"Rangschikken op grootte","bloq-stringArray-stringType":"en tekst type","bloq-string-create-create":"Maak tekst met","bloq-hw-variable-advanced-variable":"Variabele (componenten)","bloq-sw-variable-advanced-variable":"Variabele (componenten)","bloq-array-variable-variable":"Variabele","bloq-declare-variable-declare":"Definieer variable","bloq-declare-variable-declare-type":"met type","bloq-declare-variable-declare-type-int":"integer","bloq-declare-variable-declare-type-float":"decimaal","bloq-declare-variable-declare-type-text":"tekst","bloq-declare-variable-declare-type-char":"karakter","bloq-declare-variable-declare-type-bool":"boolean","bloq-select-variable-variable":"Variabele","bloq-set-variableArray-variable":"Variabele","bloq-set-variable-variable":"Variabele","bloq-char":"Karakter","bloq-lcd-default":"Hi!","bloq-comment-default":"Typeen opmerking","bloq-functions-default":"Naam","bloq-wait-ms":"ms","drag-bloq":"Sleep een blok  om te starten met je programma","bloq-invoke-class-function-class":"van het object","bloq-invoke-arguments-class":"Maak een object van ","bloq-invoke-arguments-class-name":"met de naam","bloq-invoke-arguments-args":"met de volgende argumenten","bloq-invoke-class-return-function-exec":"Voer de functie uit","bloq-invoke-class-function-exec":"Voer de functie uit","bloq-invoke-class-function-args":"met de volgende argumenten","bloq-invoke-class-return-function-args-exec":"Voer de functie uit","bloq-invoke-class-return-function-args-class":"van het object","bloq-invoke-class-return-function-args-args":"met de volgende argumenten","bloq-set-class-variable-variable":"Variabele","bloq-set-class-variableArray-variable":"Variabele","bloq-select-class-variable-variable":"Variabele","bloq-array-class-variable-variable":"Variabele","bloq-constructor":"Bouwer","bloq-constructor-arguments":" die de volgende argumenten gebruikt","bloq-invoke-class":"Maak een object van ","bloq-invoke-class-name":"met de naam","bloq-class":"Declareer de ","bloq-class-default":"Naam","bloq-class-from":"van","bloq-class-inheritance-type":"overerving ","bloq-class-inheritance-public":"openbaar","bloq-class-inheritance-protected":"beschermd","bloq-class-inheritance-private":"privé","bloq-public":" variabelen en functies:","bloq-protected":"Beschermd variabelen en functies:","bloq-private":"variabelen en functies:","bloq-include-lib-exec":"Omvat de bibliotheek","bloq-pin-analog-write":"Schrijf de analoge pin","bloq-pin-digital-write":"Schrijf de digitale pin","bloq-pin-analog-write-data":"de datum","bloq-pin-digital-write-data":"de datum","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"loop","bloq-zowi-movements-turn":"draai","bloq-zowi-movements-height-moonwalker":" de moonwalk","bloq-zowi-movements-height-crusaito":"kruispas","bloq-zowi-movements-height-flapping":"klapper","bloq-zowi-movements-shakeleg":"schud je benen","bloq-zowi-movements-bend":"buig","bloq-zowi-movements-forward":"voorwaarts","bloq-zowi-movements-backward":"achterwaarts","bloq-zowi-movements-left":"links","bloq-zowi-movements-right":"rechts","bloq-zowi-movements-speed":"stapjes met een snelheid van","bloq-zowi-mouth":"Zowi: teken een","bloq-zowi-mouth-mouth":"op je mond","bloq-zowi-mouth-smile":"lach","bloq-zowi-mouth-sad":"sip gezicht","bloq-zowi-mouth-happy":"blij gezicht","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"voorwaarts","bloq-zowi-movements-height-backward":"achterwaarts","bloq-zowi-movements-height-left":"links","bloq-zowi-movements-height-right":"rechts","bloq-zowi-movements-height-speed":"stapjes met een snelheid van","bloq-zowi-movements-height-height":"en hoogte","bloq-zowi-movements-height-big":"hoog","bloq-zowi-movements-height-medium":"medium","bloq-zowi-movements-height-small":"laag","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"ga op en neer","bloq-zowi-movements-no-dir-swing":"zwaaien","bloq-zowi-movements-no-dir-tiptoeSwing":"zwaaien op de tenen","bloq-zowi-movements-no-dir-jitter":"schudden","bloq-zowi-movements-no-dir-ascendingTurn":"draai tijdens het omhoog gaan","bloq-zowi-movements-no-dir-jump":"spring","bloq-zowi-movements-no-dir-speed":" met een snelheid van","bloq-zowi-movements-no-dir-height":"en hoogte","bloq-zowi-movements-no-dir-big":"hoog","bloq-zowi-movements-no-dir-medium":"medium","bloq-zowi-movements-no-dir-small":"laag","bloq-zowi-sounds":"Zowi: zing","bloq-hts221-humidity":"Lees vochtigheid van de sensor","bloq-hts221-temperature":"Lees temperatuur van de sensor","bloq-rgbLed-fade-red":"met een rode waarde van","bloq-enable-interrupt":"Voer de functie uit","bloq-enable-interrupt-rising":"verander van 0 naar 1","bloq-enable-interrupt-falling":"verander van 1 naar 0","bloq-enable-interrupt-change":"verander","bloq-enable-interrupt-pin":"wanneer de pin input","bloq-rgbLed-green":", een groene waarde van","bloq-rgbLed-fade":"Creëer een kleurovergang op de RBG LED","bloq-rgbLed-red":"met een rode waarde van","bloq-rtc-init":"Update tijd en datum van de klok","bloq-rtc-month":"maand","bloq-rtc-using-advanced":"momenteel gebruikt door klok","bloq-rtc-year":"jaar","bloq-rtc-day":"dag","bloq-rtc-hour":"uur","bloq-rtc-minute":"minuut","bloq-rtc-second":"seconde","bloq-rtc-time":"uur","bloq-rtc-using":"momenteel gebruikt door klok","bloq-rtc-advanced":"Krijg","bloq-rtc":"Krijg de","default-var-name-rtc":"real_time_klok","bloq-rtc-date":"datum","default-var-name-sound":"geluidssensor","bloq-rgbLed-blue":"en een blauwe waarde van","default-var-name-RGBled":"RGB_LED","bloq-rgbLed":"Licht de RGB LED op","bloq-rgbLed-fade-blue":"en een blauwe waarde van","bloq-rgbLed-fade-green":", een groene waarde van","bloq-rgbLed-simple":"Licht de RGB LED op","bloq-rgbLed-simple-color":"in","bloq-rgbLed-simple-red":"rood","bloq-rgbLed-simple-green":"groen","bloq-rgbLed-simple-blue":"blauw","bloq-zowi-gestures":"Zowi, toon","bloq-zowi-gestures-ZowiHappy":"blij","bloq-zowi-gestures-ZowiSuperHappy":"super blij","bloq-zowi-gestures-ZowiSad":"verdrietig","bloq-zowi-gestures-ZowiSleeping":"slaperig","bloq-zowi-gestures-ZowiFart":"windje","bloq-zowi-gestures-ZowiConfused":"in de war","bloq-zowi-gestures-ZowiLove":"verliefd","bloq-zowi-gestures-ZowiAngry":"boos","bloq-zowi-gestures-ZowiFretful":"angstig","bloq-zowi-gestures-ZowiMagic":"magie","bloq-zowi-gestures-ZowiWave":"zwaai","bloq-zowi-gestures-ZowiVictory":"overwinning","bloq-zowi-gestures-ZowiFail":"nederlaag","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"tijd","bloq-zowi-movements-simple-walk":"loop","bloq-zowi-movements-simple-turn":"draai","bloq-zowi-movements-simple-shakeLeg":"beweeg been","bloq-zowi-movements-simple-bend":"buigen","bloq-zowi-movements-simple-moonwalker":"moonwalk","bloq-zowi-movements-simple-crusaito":"kruispas","bloq-zowi-movements-simple-flapping":"Klapper","bloq-zowi-movements-simple-updown":"ga op en neer","bloq-zowi-movements-simple-swing":"beweeg je heen en weer","bloq-zowi-movements-simple-tiptoeSwing":"beweeg je heen en weer op je tenen","bloq-zowi-movements-simple-jitter":"wiebelen","bloq-zowi-movements-simple-ascendingTurn":"draai terwijl je omhoog komt","bloq-zowi-movements-simple-jump":"spring","bloq-zowi-rest":"Zowi, rust","bloq-millis":"Krijg uitvoeringstijd","bloq-random-seed":"Start generator willekeurig getal","bloq-rgbLed-simple-white":"wit","bloq-rgbLed-simple-yellow":"geel","bloq-rgbLed-simple-orange":"oranje","bloq-rgbLed-simple-dark-green":"donkergroen","bloq-rgbLed-simple-dark-blue":"donkerblauw","bloq-rgbLed-simple-pink":"roze","bloq-argument-int":"Integer","bloq-argument-char":"Karakter","bloq-zowi-buttons":"drukknop","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-if-distance":"Als het een afstand detecteert","bloq-zowi-if-distance-less":"of minder","bloq-zowi-if-distance-more":"of meer","bloq-zowi-if-distance-than":"dan","bloq-zowi-if-distance-then":"centimeter, zal het dit doen:","bloq-zowi-if-buttons":"Als de I druk op de knop","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", doe:","bloq-zowi-if-sound":"Als het een geluid hoort, dan zal het dit doen:","bloq-evolution-rest":"Rust","bloq-evolution-movements-simple":"Beweeg","bloq-evolution-movements-simple-fordward":"vooruit","bloq-evolution-movements-simple-backward":"achteruit","bloq-evolution-movements-simple-right":"rechts","bloq-evolution-movements-simple-left":"links","bloq-evolution-distance":"Meet de afstand","bloq-evolution-if-distance":"Als het een afstand detecteert","bloq-evolution-if-distance-less":"of minder","bloq-evolution-if-distance-more":"of meer","bloq-evolution-if-distance-than":"dan","bloq-evolution-if-distance-then":"centimeter, dan zal het dit doen:","bloq-evolution-light":"Meet het licht","bloq-evolution-light-left":"links","bloq-evolution-light-right":"rechts","bloq-evolution-line":"Detecteer de lijn","bloq-evolution-line-left":"links","bloq-evolution-line-right":"rechts","bloq-evolution-head":"Kijk","bloq-evolution-head-left":"links","bloq-evolution-head-right":"rechts","bloq-evolution-head-center":"vooruit","bloq-evolution-buzzer-do":"Doe","bloq-evolution-buzzer":"Geef de noot","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Ti","bloq-evolution-buzzer-for":"voor","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Kijk","bloq-evolution-head-advance-deg":"graden","bloq-evolution-head-advance-left":"links","bloq-evolution-head-advance-right":"rechts","bloq-shield-stepper-steps":"Draai de stappenmotor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 en 2","bloq-shield-stepper-steps-degdir":"graden","bloq-shield-stepper-steps-CW":"rechtsom","bloq-shield-stepper-steps-CCW":"linksom","bloq-shield-stepper-steps-at":"op","bloq-shield-stepper-steps-rpm":"tpm","bloq-evolution-if-line":"Als de lijn gedetecteerd is","bloq-evolution-if-line-white":"wit","bloq-evolution-if-line-black":"zwart","bloq-evolution-if-line-and":"op de linker en","bloq-evolution-if-line-then":"op de rechter, zal het dit doen:","bloq-evolution-if-light":"Als het licht ziet","bloq-evolution-if-light-and":"op de linker en","bloq-evolution-if-light-then":"op de rechter, zal het dit gaan doen:","bloq-evolution-if-light-high":"hoog","bloq-evolution-if-light-medium":"medium","bloq-evolution-if-light-low":"laag","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-if-buttons-then-v1":", doe:","bloq-zowi-if-distance-then-v1":"cm, doe:","bloq-zowi-if-sound-v1":"Als Zowi een geluid hoort, doe:","bloq-num-conversion":"converteer","bloq-num-conversion-to":"naar","bloq-num-conversion-int":"integer","bloq-num-conversion-float":"decimaal","bloq-name-default":"Naam","bloq-mbot-buzzer-ms":"ms","bloq-mbot-buzzer-advanced-ms":"ms","bloq-common-ms":"ms"},"pt-PT":{"bloq-zowi-mouth-tongueOut":"sorriso com lingua","bloq-zowi-mouth-confused":"cara confusa","bloq-zowi-mouth-bigSurprise":"cara surpreendida","bloq-zowi-distance":"Zowi, mede a distância","bloq-zowi-sound":"Zowi, escuta","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"surpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidade","bloq-zowi-sounds-sleeping":"sono","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusão","bloq-zowi-movements-shakeLeg":"mexe as pernas","bloq-zowi-sounds-fart1":"um peido","bloq-zowi-movements-speed-medium":"média","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"elevada","bloq-break-stopLoop":"Interromper o ciclo","bloq-code-writeYourCode":"Escrever o seu próprio código","bloq-comment-comment":"Comentário //","bloq-convert-convert":"Converter","bloq-convert-to":"Em","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binário","bloq-serial-receiver-receive":"Receber","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sem quebra de linha","bloq-serial-send-println":"Com quebra de linha","bloq-buzzer-advance-sound":"Soar o besouro","bloq-buzzer-advance-note":"com a nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Ler pino digital","bloq-analog-read-advanced-readpin":"Ler pino analógico","bloq-continuous-servo-start-advanced-turn":"Rodar servo","bloq-continuous-servo-start-advanced-direction":"no sentido","bloq-continuous-servo-start-advanced-clockwise":"horário","bloq-continuous-servo-start-advanced-counterclockwise":"anti-horário","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Acender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"a luz do LCD","bloq-lcd-clear":"Apagar o conteúdo do LCD","bloq-lcd-writte-advanced-write":"Escrever","bloq-lcd-writte-advanced-inLCD":"no LCD","bloq-lcd-writte-advanced-inPosition":"começando pela posição (coluna, fila)","bloq-led-advanced-turnon":"Acender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"o LED","bloq-oscillator-advanced-oscillate":"Oscilar servo","bloq-oscillator-advanced-around":"à volta","bloq-oscillator-advanced-amplitude":"com amplitude","bloq-oscillator-advanced-speed":"com velocidade","bloq-oscillator-start-advanced-oscillator":"Iniciar oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador","bloq-pin-read-advanced-readpin":"Ler o pino","bloq-pin-writte-advanced-writepin":"Escrever no pino","bloq-pin-writte-advanced-data":"os dados","bloq-read-advanced-read":"Ler","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"para","bloq-servo-advanced-degrees":"graus","bloq-buzzer-sound":"Soar o besouro","bloq-buzzer-note":"com a nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Dó","bloq-buzzer-re":"Ré","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fá","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"Lá","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Rodar servo","bloq-continuous-servo-start-direction":"no sentido","bloq-continuous-servo-start-clockwise":"horário","bloq-continuous-servo-start-counterclockwise":"anti-horário","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Acender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"a luz do LCD","bloq-lcd-writte-write":"Escrever","bloq-lcd-writte-inLCD":"no LCD","bloq-led-turnon":"Acender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"o LED","bloq-oscillator-oscillate":"Oscilar servo","bloq-oscillator-around":"à volta","bloq-oscillator-amplitude":"com amplitude","bloq-oscillator-speed":"com velocidade","bloq-oscillator-times":"vezes","bloq-oscillator-start-oscillator":"Iniciar oscilador","bloq-oscillator-stop-stop":"Parar oscilador","bloq-read-read":"Ler","bloq-servo-move":"Mover","bloq-servo-to":"para","bloq-servo-degrees":"graus","bloq-case-ifSameTo":"se é igual a","bloq-case-exec":"executar","bloq-case-default-inOtherCase":"em outro caso, executar:","bloq-continue-continue":"Continuar com a próxima iteração do ciclo","bloq-else-else":"senão, executar:","bloq-else-if-if":"senão, se","bloq-else-if-else":"executar","bloq-for-count":"Contar com","bloq-for-from":"desde","bloq-for-to":"até","bloq-for-add":"adicionar","bloq-for-subtract":"subtrair","bloq-for-exec":"executar:","bloq-if-if":"Se","bloq-if-exec":"executar:","bloq-switch-check":"Verificar o valor de","bloq-wait-wait":"Esperar","bloq-while-while":"Enquanto","bloq-while-exec":"executar:","bloq-argument-var":"Variável","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boleano","bloq-invoke-function-exec":"Do","bloq-invoke-return-function-exec":"Do","bloq-invoke-function-args":"com os seguintes argumentos:","bloq-return-return":"Devolve","bloq-return-function-declare":"Declarar Função","bloq-return-function-return":"Devolve","bloq-return-function-with-arguments-declare":"Declarar Função","bloq-return-function-with-arguments-count":"com os seguintes arumentos","bloq-return-function-with-arguments-return":"Devolve","bloq-void-function-declare":"Declarar função","bloq-void-function-with-arguments-declare":"Declarar Função","bloq-void-function-with-arguments-count":"contar com","bloq-boolArray-advanced-arraySize":"Matriz do tamanho","bloq-boolArray-advanced-boolType":"e tipo boleano","bloq-boolArray-arraySize":"Matriz do tamanho","bloq-boolArray-boolType":"e tipo boleano","bloq-boolean-true":"Verdadeiro","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"ou","bloq-not-not":"não","bloq-loop-header":"Ciclo","bloq-loop-description":"Crie o programa a ser continuamente executado depois da Configuração.","bloq-setup-header":"Configuração","bloq-setup-description":"Indique o que pretende que seja executado ao iniciar o programa e apenas uma única vez.","bloq-var-header":"Variáveis e funções globais","bloq-var-description":" Defina os valores que vai utilizar na Configuração e Ciclo; também pode criar funções para agrupar blocos.","bloq-numberArray-advanced-arraySize":"Matriz do tamanho","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"inteiro","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0 -","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":" a [","bloq-math-operations-sqrt":"Raiz quadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Matriz do tamanho","bloq-numberArray-floatType":" e tipo float","bloq-random-random":"Aleatório entre","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Matriz do tamanho","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Length","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Matriz do tamanho","bloq-stringArray-stringType":"e tipo texto","bloq-string-create-create":"Criar texto com","bloq-hw-variable-advanced-variable":"Variável (componentes)","bloq-sw-variable-advanced-variable":"Variável (componentes)","bloq-array-variable-variable":"Variável","bloq-declare-variable-declare":"Declarar variável","bloq-declare-variable-declare-type":"com tipo","bloq-declare-variable-declare-type-int":"inteiro","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"texto","bloq-declare-variable-declare-type-char":"carácter","bloq-declare-variable-declare-type-bool":"valor lógico","bloq-select-variable-variable":"Variável","bloq-set-variableArray-variable":"Variável","bloq-set-variable-variable":"Variável","bloq-char":"Carácter","bloq-lcd-default":"Olá!","bloq-comment-default":"Escreve um comentário","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Arrasta um bloco até aqui para começar o teu programa","bloq-invoke-class-function-class":"do objeto","bloq-invoke-arguments-class":"Criar um objeto da classe","bloq-invoke-arguments-class-name":"com o nome","bloq-invoke-arguments-args":"com os seguintes argumentos","bloq-invoke-class-return-function-exec":"Executar a função","bloq-invoke-class-function-exec":"Executar a função","bloq-invoke-class-function-args":"com os seguintes argumentos","bloq-invoke-class-return-function-args-exec":"Executar a função","bloq-invoke-class-return-function-args-class":"do objeto","bloq-invoke-class-return-function-args-args":"com os seguintes argumentos","bloq-set-class-variable-variable":"Variável","bloq-set-class-variableArray-variable":"Variável","bloq-select-class-variable-variable":"Variável","bloq-array-class-variable-variable":"Variável","bloq-constructor":"Construtor","bloq-constructor-arguments":"Construtor que utiliza os seguintes argumentos","bloq-invoke-class":"Criar um objeto da classe","bloq-invoke-class-name":"com o nome","bloq-class":"Declarar classe","bloq-class-default":"Nome","bloq-class-from":"de","bloq-class-inheritance-type":"herdando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variáveis e funções públicas:","bloq-protected":"Variáveis e funções protegidas:","bloq-private":"Variáveis e funções privadas:","bloq-include-lib-exec":"Incluir a biblioteca","bloq-pin-analog-write":"Escrever no pino analógico","bloq-pin-digital-write":"Escrever no pino digital","bloq-pin-analog-write-data":"o dado","bloq-pin-digital-write-data":"o dado","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"faz o moonwalker","bloq-zowi-movements-height-crusaito":"faz o passo cruzado","bloq-zowi-movements-height-flapping":"agita-te","bloq-zowi-movements-shakeleg":"mexe as pernas","bloq-zowi-movements-bend":"inclina-te","bloq-zowi-movements-forward":"para a frente","bloq-zowi-movements-backward":"para trás","bloq-zowi-movements-left":"esquerda","bloq-zowi-movements-right":"direita","bloq-zowi-movements-speed":"vezes com uma velocidade de","bloq-zowi-mouth":"Desenha um","bloq-zowi-mouth-mouth":"na tua boca","bloq-zowi-mouth-smile":"sorriso","bloq-zowi-mouth-sad":"cara triste","bloq-zowi-mouth-happy":"cara alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"para a frente","bloq-zowi-movements-height-backward":"para trás","bloq-zowi-movements-height-left":"esquerda","bloq-zowi-movements-height-right":"direita","bloq-zowi-movements-height-speed":"vezes com uma velocidade de","bloq-zowi-movements-height-height":"e uma altura","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"média","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sobe e desce","bloq-zowi-movements-no-dir-swing":"equilibra-te","bloq-zowi-movements-no-dir-tiptoeSwing":"equilibra-te em bicos dos pés","bloq-zowi-movements-no-dir-jitter":"treme","bloq-zowi-movements-no-dir-ascendingTurn":"gira enquanto sobes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"vezes com uma velocidade de","bloq-zowi-movements-no-dir-height":"e uma altura","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"média","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Faz o som de","bloq-hts221-humidity":"Ler a humidade do sensor","bloq-hts221-temperature":"Ler a temperatura do sensor","bloq-rgbLed-fade-red":"com um valor de vermelho de","bloq-enable-interrupt":"Executar a função","bloq-enable-interrupt-rising":"mude de 0 a 1","bloq-enable-interrupt-falling":"mude de 1 a 0","bloq-enable-interrupt-change":"mude","bloq-enable-interrupt-pin":"quando a entrada do pin","bloq-rgbLed-green":", um valor de verde de","bloq-rgbLed-fade":"Criar um gradiente no LED RGB","bloq-rgbLed-red":"com um valor de vermelho de","bloq-rtc-init":"Atualizar data e hora do relógio","bloq-rtc-month":"o mês","bloq-rtc-using-advanced":"atual utilizando o relógio","bloq-rtc-year":"o ano","bloq-rtc-day":"o dia","bloq-rtc-hour":"a hora","bloq-rtc-minute":"o minuto","bloq-rtc-second":"o segundo","bloq-rtc-time":"hora","bloq-rtc-using":"atual utilizando o relógio","bloq-rtc-advanced":"Obter","bloq-rtc":"Obter a","default-var-name-rtc":"relógio_tempo_real","bloq-rtc-date":"data","default-var-name-sound":"Sensor_som","bloq-rgbLed-blue":"e um valor de azul de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Acender o LED RGB","bloq-rgbLed-fade-blue":"e um valor de azul de","bloq-rgbLed-fade-green":", um valor de verde de","bloq-rgbLed-simple":"Acender o LED RGB","bloq-rgbLed-simple-color":"com cor","bloq-rgbLed-simple-red":"vermelho","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"azul","bloq-zowi-gestures":"Faz a animação de","bloq-zowi-gestures-ZowiHappy":"Feliz","bloq-zowi-gestures-ZowiSuperHappy":"Super Feliz","bloq-zowi-gestures-ZowiSad":"Triste","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confuso","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Chateado","bloq-zowi-gestures-ZowiFretful":"Inquieto","bloq-zowi-gestures-ZowiMagic":"Magia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"Vitória!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"vezes","bloq-zowi-movements-simple-walk":"anda","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"move a perna","bloq-zowi-movements-simple-bend":"inclina-te","bloq-zowi-movements-simple-moonwalker":"faz o moonwalk","bloq-zowi-movements-simple-crusaito":"faz o passo cruzado","bloq-zowi-movements-simple-flapping":"agita-te","bloq-zowi-movements-simple-updown":"sobe e desce","bloq-zowi-movements-simple-swing":"equilibra-te","bloq-zowi-movements-simple-tiptoeSwing":"equilibra-te em bicos dos pés","bloq-zowi-movements-simple-jitter":"treme","bloq-zowi-movements-simple-ascendingTurn":"gira enquanto sobes","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"descansa","bloq-millis":"Obter tempo de execução","bloq-random-seed":"Iniciar o gerador de números aleatórios","bloq-rgbLed-simple-white":"branco","bloq-rgbLed-simple-yellow":"amarelo","bloq-rgbLed-simple-orange":"laranja","bloq-rgbLed-simple-dark-green":"verde escuro","bloq-rgbLed-simple-dark-blue":"azul escuro","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Inteiro","bloq-argument-char":"Caráter","bloq-zowi-buttons":"botão","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"do Zowi","bloq-zowi-if-distance":"Se deteta uma distância","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"maior","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"centímetros, executa:","bloq-zowi-if-buttons":"Se primo o botão","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", executa","bloq-zowi-if-sound":"Se escuta um ruído, executa:","bloq-evolution-rest":"Descansa","bloq-evolution-movements-simple":"Move-te para","bloq-evolution-movements-simple-fordward":"frente","bloq-evolution-movements-simple-backward":"trás","bloq-evolution-movements-simple-right":"direita","bloq-evolution-movements-simple-left":"esquerda","bloq-evolution-distance":"Mede a distância","bloq-evolution-if-distance":"Se deteta uma distância","bloq-evolution-if-distance-less":"menor","bloq-evolution-if-distance-more":"maior","bloq-evolution-if-distance-than":"que","bloq-evolution-if-distance-then":"centímetros, executa:","bloq-evolution-light":"Mede a luz","bloq-evolution-light-left":"esquerda","bloq-evolution-light-right":"direita","bloq-evolution-line":"Deteta a linha","bloq-evolution-line-left":"esquerda","bloq-evolution-line-right":"direita","bloq-evolution-head":"Olha para","bloq-evolution-head-left":"esquerda","bloq-evolution-head-right":"direita","bloq-evolution-head-center":"frente","bloq-evolution-buzzer-do":"Dó","bloq-evolution-buzzer":"Toca a nota","bloq-evolution-buzzer-re":"Ré","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fá","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"Lá","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durante","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Olha","bloq-evolution-head-advance-deg":"graus para","bloq-evolution-head-advance-left":"esquerda","bloq-evolution-head-advance-right":"direita","bloq-shield-stepper-steps":"Girar stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 e 2","bloq-shield-stepper-steps-degdir":"graus em sentido","bloq-shield-stepper-steps-CW":"horário","bloq-shield-stepper-steps-CCW":"anti-horário","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Se deteta a linha","bloq-evolution-if-line-white":"branca","bloq-evolution-if-line-black":"negra","bloq-evolution-if-line-and":"à esquerda","bloq-evolution-if-line-then":"à direita, executa:","bloq-evolution-if-light":"Se vê luz","bloq-evolution-if-light-and":"à esquerda","bloq-evolution-if-light-then":"à direita, executa:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"média","bloq-evolution-if-light-low":"baixa","bloq-shield-stepper-steps-advanced":"Girar stepper motor","bloq-shield-stepper-steps-advanced-degdir":"graus em sentido","bloq-shield-stepper-steps-advanced-at":"a","bloq-shield-stepper-steps-advanced-rpm":"rpm","bloq-shield-DCmotor-spin":"Girar motor","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"em sentido","bloq-shield-DCmotor-spin-CW":"horário","bloq-shield-DCmotor-spin-CCW":"anti-horário","bloq-shield-DCmotor-spin-at":"à","bloq-shield-DCmotor-spin-speed":"% da sua Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Girar motor","bloq-shield-DCmotor-spinMotor-advanced-direction":"em sentido","bloq-shield-DCmotor-spinMotor-advanced-at":"à","bloq-shield-DCmotor-spinMotor-advanced-speed":"% da sua Vmax","bloq-shield-DCmotor-stop":"Parar motor","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Parar motor","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Posição inicial","bloq-zowi-gestures-v1":"Faz a animação de","bloq-zowi-gestures-ZowiHappy-v1":"Feliz","bloq-zowi-gestures-ZowiSuperHappy-v1":"Super Feliz","bloq-zowi-gestures-ZowiSad-v1":"Triste","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Confuso","bloq-zowi-gestures-ZowiLove-v1":"Love","bloq-zowi-gestures-ZowiAngry-v1":"Chateado","bloq-zowi-gestures-ZowiFretful-v1":"Inquieto","bloq-zowi-gestures-ZowiVictory-v1":"Vitória!","bloq-zowi-gestures-ZowiFail-v1":"Game Over...","bloq-zowi-if-buttons-then-v1":", faz:","bloq-zowi-if-distance-then-v1":"cm, faz:","bloq-zowi-if-sound-v1":"Se escuta um ruído, faz:","bloq-zowi-mouth-v1":"Mostra uma","bloq-zowi-movements-simple-walk-v1":"Anda","bloq-zowi-movements-simple-turn-v1":"Gira","bloq-zowi-movements-simple-shakeLeg-v1":"Move a perna","bloq-zowi-movements-simple-bend-v1":"Inclina-te","bloq-zowi-movements-simple-moonwalker-v1":"Faz o moonwalk","bloq-zowi-movements-simple-crusaito-v1":"Faz o passo cruzado","bloq-zowi-movements-simple-flapping-v1":"Agita-te","bloq-zowi-movements-simple-updown-v1":"Sobe e desce","bloq-zowi-movements-simple-swing-v1":"Equilibra-te","bloq-zowi-movements-simple-tiptoeSwing-v1":"Equilibra-te em bicos dos pés","bloq-zowi-movements-simple-jitter-v1":"Treme","bloq-zowi-movements-simple-ascendingTurn-v1":"Gira enquanto sobes","bloq-zowi-movements-simple-jump-v1":"Salta","bloq-zowi-sounds-v1":"Faz o som de","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"mede a distância","bloq-zowi-sound-v1":"escuta com atenção","bloq-zowi-movements-front":"Anda","bloq-zowi-movements-front-forward":"frente","bloq-zowi-movements-front-backward":"trás","bloq-zowi-movements-front-speed":"vezes com uma velocidade de","bloq-zowi-movements-front-speed-small":"baixa","bloq-zowi-movements-front-speed-medium":"média","bloq-zowi-movements-front-speed-high":"alta","bloq-zowi-movements-sides-turn":"Gira","bloq-zowi-movements-sides-shakeLeg":"Move a perna","bloq-zowi-movements-sides-bend":"Inclina-te","bloq-zowi-movements-sides-left":"esquerda","bloq-zowi-movements-sides-right":"direita","bloq-zowi-movements-sides-speed":"vezes com uma velocidade de","bloq-zowi-movements-sides-speed-small":"baixa","bloq-zowi-movements-sides-speed-medium":"média","bloq-zowi-movements-sides-speed-high":"alta","bloq-zowi-movements-height-sides-moonwalker":"Faz o moonwalk","bloq-zowi-movements-height-sides-crusaito":"Faz o passo cruzado","bloq-zowi-movements-height-sides-left":"esquerda","bloq-zowi-movements-height-sides-right":"direita","bloq-zowi-movements-height-sides-speed":"vezes com uma velocidade de","bloq-zowi-movements-height-sides-speed-small":"baixa","bloq-zowi-movements-height-sides-speed-medium":"média","bloq-zowi-movements-height-sides-speed-high":"alta","bloq-zowi-movements-height-sides-height":"e uma altura","bloq-zowi-movements-height-sides-small":"baixa","bloq-zowi-movements-height-sides-medium":"média","bloq-zowi-movements-height-sides-big":"alta","bloq-num-conversion":"converter","bloq-num-conversion-to":"a","bloq-num-conversion-int":"inteiro","bloq-num-conversion-float":"decimal","bloq-name-default":"Nome","bloq-declare-array":"Declarar variável array","bloq-declare-array-size":"com tamanho","bloq-declare-array-type":"e tipo","bloq-servo-detach":"Desligar servo","bloq-servo-attach":"Ligar servo","bloq-hts221":"Ler a","bloq-hts221-read-temperature":"temperatura","bloq-hts221-read-humidity":"humidade","bloq-hts221-sensor":"do sensor","bloq-PTsensor":"Ler a","bloq-PTsensor-pressure":"pressão","bloq-PTsensor-temperature":"temperatura","bloq-PTsensor-altitude":"altitude","bloq-PTsensor-sensor":"do sensor","bloq-PTsensor-calibration":"Definir a pressão ao nível do mar como","bloq-PTsensor-calibration-sensor":"Pa no sensor","bloq-rgbLed-off":"Apagar o LED RGB","bloq-pin-analog-write-V1":"Escrever no pino digital","bloq-pin-analog-write-data-V1":"o valor analógico","bloq-buzzer-do-#":"Dó#","bloq-buzzer-re-#":"Ré#","bloq-buzzer-fa-#":"Fá#","bloq-buzzer-sol-#":"Sol#","bloq-buzzer-la-#":"Lá#","bloq-serial-receiver-receive-number":"Receber número","bloq-declare-array-declare":"Declarar array","bloq-declare-array-declare-type":"de tipo","bloq-declare-array-declare-size":"e tamanho","bloq-pin-digital-write-data-V1":"o valor digital","bloq-round-advanced-roundto":"Arredondar para","bloq-round-advanced-floor":"baixo","bloq-round-advanced-ceil":"cima","bloq-round-advanced-round":"o mais próximo","bloq-round-advanced-thenumber":"o número","bloq-rtc-date-2":"ano/mês/dia","bloq-rtc-time-2":"hora:minuto:segundo","bloq-pinlevel-high":"Alto","bloq-pinlevel-low":"Baixo","suggested":"Sugeridos","bloq-viewer":"Enviar dados para o visor","bloq-mbot-buzzer-note":"Fazer soar a nota","bloq-mbot-buzzer-for":"durante","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"Obter a distância (cm) dos ultrassons na","bloq-mbot-port-1":"porta 1","bloq-mbot-port-2":"porta 2","bloq-mbot-port-3":"porta 3","bloq-mbot-port-4":"porta 4","bloq-mbot-getbuttonstatus":"Ler o estado do botão","bloq-mbot-getlightsensor":"Ler o sensor de luz","bloq-mbot-linefollower-text":"Obter a informação do sensor de infravermelhos no","bloq-mbot-move-forward":"Avançar","bloq-mbot-move-backward":"Retroceder","bloq-mbot-move-turnleft":"Virar à esquerda","bloq-mbot-move-turnright":"Virar à direita","bloq-mbot-move-speed":"a uma velocidade","bloq-mbot-move-speed-fast":"muito rápida","bloq-mbot-move-speed-normal":"normal","bloq-mbot-move-speed-slow":"lenta","bloq-mbot-setled-set":"Estabelecer","bloq-mbot-led-all":"todos os leds","bloq-mbot-led-right":"o led direito","bloq-mbot-led-left":"o led esquerdo","bloq-mbot-setled-colormix":"com esta mistura de cores:","bloq-mbot-setled-green":"verde:","bloq-mbot-setled-red":"vermelho:","bloq-mbot-setled-blue":"azul:","bloq-mbot-stop":"Parar o robot","bloq-mbot-turnoffled-off":"Apagar","bloq-mbot-buzzer-advanced-play":"Fazer soar a nota","bloq-mbot-move-advanced-speed":"a uma velocidade","bloq-mbot-setled-advanced-set":"Estabelecer","bloq-mbot-setled-advanced-colormix":"com esta mistura de cores:","bloq-mbot-setled-advanced-red":"vermelho:","bloq-mbot-setled-advanced-green":"verde:","bloq-mbot-setled-advanced-blue":"azul:","bloq-mbot-buzzer-advanced-for":"durante","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"Repetir","bloq-magicfor-times":"vezes","bloq-phone-sounds":"Emitir som","bloq-phone-sounds-device":"no dispositivo","bloq-phone-sounds-ambient-v1":"ambiente","bloq-phone-sounds-bass-v1":"baixo","bloq-phone-sounds-bongo-v1":"bongo","bloq-phone-sounds-highhat-v1":"highhat","bloq-phone-sounds-snare-v1":"snare","bloq-phone-write-show":"Mostrar no ecrã","bloq-phone-receive":"Recebe dados por voz ou texto","bloq-phone-toggle-light":"Pisca com uma frequência de","bloq-phone-toggle-units":"segundos","bloq-phone-turnon-light":"Acende a lanterna com uma intensidade de","bloq-phone-turnoff-light":"Apaga a lanterna","bloq-twitter-config":"Configura a aplicação do Twitter","bloq-mbot-port-5":"porta 5","bloq-mbot-port-6":"porta 6","bloq-mbot-port-7":"porta 7","bloq-mbot-port-8":"porta 8","bloq-mbot-port-9":"porta 9","bloq-mbot-port-10":"porta 10","bloq-send-tweet":"Envia um tweet","bloq-common-ms":"ms","bloq-common-every":"cada","bloq-common-playnote":"Fazer soar a nota","bloq-common-for":"durante","bloq-phone-read":"Ler em","bloq-phone-lacceleration":"a aceleração linear no eixo","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Enviar por porta série","bloq-zowicomponent-serial-receive":"Receber pela porta série","bloq-zowicomponent-serial-receive-int":"Receber número pela porta série","bloq-phone-gyroscope":"o giroscópio no eixo","bloq-phone-is":"está","bloq-phone-covered":"tapado","bloq-phone-not-covered":"destapado","bloq-phone-acceleration":"a aceleração no eixo","bloq-phone-gravity":"a aceleração da gravidade no eixo","bloq-phone-light":"a luz ambiente","bloq-phone-magnetic":"o campo magnético no eixo","bloq-phone-sounds-meow-v1":"miau","bloq-phone-sounds-joke-v1":"troça","bloq-value":"Ler o valor do","bloq-phone-orientation-azimuth":"azimute","bloq-phone-orientation-roll":"roll","bloq-phone-orientation-pitch":"pitch","bloq-zowi-mouth-custom":"Desenha na tua boca seguindo esta série de números:","bloq-phone-screen":"no ecrã de","bloq-phone-light-intensity":"com uma intensidade de","bloq-from-device":"desde","bloq-the":"O","bloq-phone-axis":"no eixo","bloq-phone-of":"do","bloq-stop-buzzer":"Parar o buzzer","bloq-buzzer-without-pause":"sem pausa","lateraldisplacement-moveto":"Deslocar-se de lado para a","right":"direita","left":"esquerda","steps":"passos","forward":"Avançar","backward":"Retroceder","turn-right":"Virar à direita","turn-left":"Virar à esquerda","stop":"parar","benddown":"Agachar-se","rotate":"Rodar","rotate-grades-foot":"° sobre o pé","upstairs":"Subir escadas.","can-move-to":"Pode deslocar-se para ","move-to":"Deslocar-se para","open":"Abrir","close":"Fechar","the-clamp":"a pinça","move-joint":"Mover a articulação","degrees":"graus","move-for":"durante","roll-to":"Rodar para a","read-sensor":"Ler sensor","ms-at-speed-of":"ms a uma velocidade de","bloq-mbot-getdistance":"Obter a distância dos ultrassons","in":"em","inches":"polegadas","if":"Se","bloq-mbot-somethingnear-operation-near":"deteta-se um obstáculo próximo","bloq-mbot-somethingnear-operation-faraway":"deteta-se um obstáculo longe","bloq-mbot-somethingnear-operation-nodetect":"não se detetar um obstáculo","with-the":"com o","bloq-mbot-ifthereisalotoflight-alot":"deteta-se muita luz","bloq-mbot-ifthereisalotoflight-low":"deteta-se pouca luz","bloq-mbot-ifthereisalotoflight-operation-nodetect":"não se detetar luz","bloq-mbot-iffollowlines-if":"Se detetar","bloq-mbot-iffollowlines-and":"no sensor esquerdo e","bloq-mbot-iffollowlines-withsensor":"no sensor direito do","white":"branco","black":"preto"},"ru-RU":{"bloq-zowi-mouth-tongueOut":"улыбка с языком","bloq-zowi-mouth-confused":"смущенное лицо","bloq-zowi-mouth-bigSurprise":"удивленное лицо","bloq-zowi-distance":"Измеряет расстояние","bloq-zowi-sound":"Слушает","bloq-zowi-sounds-OhOoh":"ох-ох","bloq-zowi-sounds-surprise":"удивление","bloq-zowi-sounds-sad":"печаль","bloq-zowi-sounds-happy":"счастье","bloq-zowi-sounds-sleeping":"сон","bloq-zowi-sounds-cuddly":"баловство","bloq-zowi-sounds-confused":"смущение","bloq-zowi-movements-shakeLeg":"двигает ногой","bloq-zowi-sounds-fart1":"газы","bloq-zowi-movements-speed-medium":"средняя","bloq-zowi-movements-speed-small":"низкая","bloq-zowi-movements-speed-high":"высокая","bloq-break-stopLoop":"Прервать цикл","bloq-code-writeYourCode":"Напишите ваш собственный код","bloq-comment-comment":"Комментарий //","bloq-convert-convert":"Конвертировать","bloq-convert-to":"A","bloq-convert-dec":"Десятичный","bloq-convert-hex":"Шестнадцатиричный","bloq-convert-oct":"Восьмеричный","bloq-convert-bin":"Бинарный","bloq-serial-receiver-receive":"Получить","bloq-serial-send-send":"Отправить","bloq-serial-send-print":"Без переноса строки","bloq-serial-send-println":"С переносом строки","bloq-buzzer-advance-sound":"Активировать зуммер","bloq-buzzer-advance-note":"с примечанием","bloq-buzzer-advance-for":"в течение","bloq-buzzer-advance-ms":"мс","bloq-digital-read-advanced-readpin":"Считывание с цифрового выхода","bloq-analog-read-advanced-readpin":"Считывание с аналогового выхода","bloq-continuous-servo-start-advanced-turn":"Повернуть сервопривод","bloq-continuous-servo-start-advanced-direction":"в направлении","bloq-continuous-servo-start-advanced-clockwise":"по часовой стрелке","bloq-continuous-servo-start-advanced-counterclockwise":"против часовой стрелки","bloq-continuous-servo-stop-advanced-stop":"Остановить сервоприво","bloq-lcd-turn-on-off-advanced-turnon":"Включить","bloq-lcd-turn-on-off-advanced-turnoff":"Выключить","bloq-lcd-turn-on-off-advanced-lcdLigth":"свет ЖКЭ","bloq-lcd-clear":"Стереть содержимое ЖКД","bloq-lcd-writte-advanced-write":"Написать","bloq-lcd-writte-advanced-inLCD":"на ЖКЭ","bloq-lcd-writte-advanced-inPosition":"начиная с позиции (колонка, ряд)","bloq-led-advanced-turnon":"Включить","bloq-led-advanced-turnoff":"Выключить","bloq-led-advanced-theLED":"светодиод","bloq-oscillator-advanced-oscillate":"Вибрация сервопривода","bloq-oscillator-advanced-around":"около","bloq-oscillator-advanced-amplitude":"с амплитудой","bloq-oscillator-advanced-speed":"со скоростью","bloq-oscillator-start-advanced-oscillator":"Воспроизвести осциллятор","bloq-oscillator-stop-advanced-stop":"Остановить осциллятор","bloq-pin-read-advanced-readpin":"Прочитать PIN-код","bloq-pin-writte-advanced-writepin":"Записать в PIN-код","bloq-pin-writte-advanced-data":"единица данных","bloq-read-advanced-read":"Прочитать","bloq-servo-advanced-move":"Переместить","bloq-servo-advanced-to":"на","bloq-servo-advanced-degrees":"градусов","bloq-buzzer-sound":"Активировать зуммер","bloq-buzzer-note":"с примечанием","bloq-buzzer-for":"в течение","bloq-buzzer-ms":"мс","bloq-buzzer-do":"До","bloq-buzzer-re":"Ре","bloq-buzzer-mi":"Ми","bloq-buzzer-fa":"Фа","bloq-buzzer-sol":"Соль","bloq-buzzer-la":"Ля","bloq-buzzer-si":"Си","bloq-continuous-servo-start-turn":"Повернуть сервопривод","bloq-continuous-servo-start-direction":"в направлении","bloq-continuous-servo-start-clockwise":"по часовой стрелке","bloq-continuous-servo-start-counterclockwise":"против часовой стрелки","bloq-continuous-servo-stop-stop":"Остановить сервоприво","bloq-lcd-turn-on-off-turnon":"Включить","bloq-lcd-turn-on-off-turnoff":"Выключить","bloq-lcd-turn-on-off-lcdLigth":"свет ЖКЭ","bloq-lcd-writte-write":"Написать","bloq-lcd-writte-inLCD":"на ЖКЭ","bloq-led-turnon":"Включить","bloq-led-turnoff":"Выключить","bloq-led-theLED":"светодиод","bloq-oscillator-oscillate":"Вибрация сервопривода","bloq-oscillator-around":"около","bloq-oscillator-amplitude":"с амплитудой","bloq-oscillator-speed":"со скоростью","bloq-oscillator-times":"раз","bloq-oscillator-start-oscillator":"Воспроизвести осциллятор","bloq-oscillator-stop-stop":"Остановить осциллятор","bloq-read-read":"Прочитать","bloq-servo-move":"Переместить","bloq-servo-to":"на","bloq-servo-degrees":"градусов","bloq-case-ifSameTo":"если равно","bloq-case-exec":"выполниь","bloq-case-default-inOtherCase":"иначе выполниь","bloq-continue-continue":"Продолжить со следующей итерацией цикла","bloq-else-else":"иначе выполниь","bloq-else-if-if":"вместо этого, если","bloq-else-if-else":"выполниь","bloq-for-count":"Считать с","bloq-for-from":"от","bloq-for-to":"до","bloq-for-add":"суммируя","bloq-for-subtract":"вычитая","bloq-for-exec":"выполниь","bloq-if-if":"Си","bloq-if-exec":"выполниь","bloq-switch-check":"Проверить, каково значение","bloq-wait-wait":"Подождать","bloq-while-while":"Пока","bloq-while-exec":"выполниь","bloq-argument-var":"Переменная","bloq-argument-float":"Десятичный","bloq-argument-string":"Текст","bloq-argument-bool":"Булева переменная","bloq-invoke-function-exec":"Выполнить","bloq-invoke-return-function-exec":"Выполнить","bloq-invoke-function-args":"со следующими аргументами:","bloq-return-return":"Вернуться","bloq-return-function-declare":"Объявить функцию","bloq-return-function-return":"Вернуться","bloq-return-function-with-arguments-declare":"Объявить функцию","bloq-return-function-with-arguments-count":"считая с","bloq-return-function-with-arguments-return":"Вернуться","bloq-void-function-declare":"Объявить функцию","bloq-void-function-with-arguments-declare":"Объявить функцию","bloq-void-function-with-arguments-count":"считая с","bloq-boolArray-advanced-arraySize":"Массив с размером","bloq-boolArray-advanced-boolType":"и логического типа","bloq-boolArray-arraySize":"Массив с размером","bloq-boolArray-boolType":"и логического типа","bloq-boolean-true":"Истина","bloq-boolean-false":"Ложь","bloq-logic-operations-and":"и","bloq-logic-operations-or":"или","bloq-not-not":"not","bloq-loop-header":"цикл Loop","bloq-loop-description":"Создайте программу, которая будет выполняться непрерывно после установки.","bloq-setup-header":"Установка","bloq-setup-description":"Укажите то, что должно выполняться при запуске программы и только однократно.","bloq-var-header":"Глобальные переменные и функции","bloq-var-description":" Определите значения, которые будете использовать в Установке и цикле Loop; вы также можете создавать функции для группирования блоков.","bloq-numberArray-advanced-arraySize":"Массив с размером","bloq-numberArray-advanced-type":"и типа","bloq-numberArray-advanced-float":"десятеричный","bloq-numberArray-advanced-int":"целый","bloq-map-map":"Нанести на карту","bloq-map-value":"значение от [0 - до ","bloq-map-advanced-map":"Нанести на карту","bloq-map-advanced-value":"от [","bloq-map-advanced-and":" до [","bloq-math-operations-sqrt":"Квадратный корень","bloq-math-operations-abs":"Абсолютное значение","bloq-numberArray-arraySize":"Массив с размером","bloq-numberArray-floatType":"и типа float","bloq-random-random":"Случайное значение между","bloq-random-and":"и","bloq-stringArray-advanced-arraySize":"Массив с размером","bloq-stringArray-advanced-type":"и типа","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Длина","bloq-string-string":"Текст","bloq-stringArray-arraySize":"Массив с размером","bloq-stringArray-stringType":"и текстового типа","bloq-string-create-create":"Создать текст с","bloq-hw-variable-advanced-variable":"Переменная (компоненты)","bloq-sw-variable-advanced-variable":"Переменная (компоненты)","bloq-array-variable-variable":"Переменная","bloq-declare-variable-declare":"Объявить переменную","bloq-declare-variable-declare-type":"типа","bloq-declare-variable-declare-type-int":"целого","bloq-declare-variable-declare-type-float":"десятичного","bloq-declare-variable-declare-type-text":"текстового","bloq-declare-variable-declare-type-char":"символьного","bloq-declare-variable-declare-type-bool":"логическое значение","bloq-select-variable-variable":"Переменная","bloq-set-variableArray-variable":"Переменная","bloq-set-variable-variable":" 'Переменная","bloq-char":"Символ","bloq-lcd-default":"Привет!","bloq-comment-default":"Написать комментарий","bloq-functions-default":"Имя","bloq-wait-ms":"мс","drag-bloq":"Перетащите блок сюда, чтобы начать вашу программу","bloq-invoke-class-function-class":"объекта","bloq-invoke-arguments-class":"Создать объект класса","bloq-invoke-arguments-class-name":"с именем","bloq-invoke-arguments-args":"со следующими аргументами","bloq-invoke-class-return-function-exec":"Выполнить функцию","bloq-invoke-class-function-exec":"Выполнить функцию","bloq-invoke-class-function-args":"со следующими аргументами","bloq-invoke-class-return-function-args-exec":"Выполнить функцию","bloq-invoke-class-return-function-args-class":"объекта","bloq-invoke-class-return-function-args-args":"со следующими аргументами","bloq-set-class-variable-variable":"Переменная","bloq-set-class-variableArray-variable":"Переменная","bloq-select-class-variable-variable":"Переменная","bloq-array-class-variable-variable":"Переменная","bloq-constructor":"Конструктор","bloq-constructor-arguments":"Конструктор, использующий следующие аргументы","bloq-invoke-class":"Создать объект класса","bloq-invoke-class-name":"с именем","bloq-class":"Объявить класс","bloq-class-default":"Имя","bloq-class-from":"de","bloq-class-inheritance-type":"путем наследования","bloq-class-inheritance-public":"публичного","bloq-class-inheritance-protected":"защищенного","bloq-class-inheritance-private":"приватного","bloq-public":"Публичные переменные и функции:","bloq-protected":"Защищенные переменные и функции:","bloq-private":"Приватные переменные и функции:","bloq-include-lib-exec":"Подключить библиотеку","bloq-pin-analog-write":"Записать на аналоговый выход","bloq-pin-digital-write":"Записать на цифровой выход","bloq-pin-analog-write-data":"элемент данных","bloq-pin-digital-write-data":"элемент данных","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"иди","bloq-zowi-movements-turn":"повернись","bloq-zowi-movements-height-moonwalker":"сделай «лунную походку» (moonwalker)","bloq-zowi-movements-height-crusaito":"сделай перекрестный шаг","bloq-zowi-movements-height-flapping":"пошевелись","bloq-zowi-movements-shakeleg":"подвигай ногами","bloq-zowi-movements-bend":"наклонись","bloq-zowi-movements-forward":"вперед","bloq-zowi-movements-backward":"назад","bloq-zowi-movements-left":"влево","bloq-zowi-movements-right":"вправо","bloq-zowi-movements-speed":"раз со скоростью","bloq-zowi-mouth":"Рисует","bloq-zowi-mouth-mouth":"на ваших устах","bloq-zowi-mouth-smile":"улыбка","bloq-zowi-mouth-sad":"печальное лицо","bloq-zowi-mouth-happy":"веселое лицо","bloq-zowi-movements-height":"Zowi","bloq-zowi-movements-height-forward":"вперед","bloq-zowi-movements-height-backward":"назад","bloq-zowi-movements-height-left":"влево","bloq-zowi-movements-height-right":"вправо","bloq-zowi-movements-height-speed":"раз со скоростью","bloq-zowi-movements-height-height":"и высота","bloq-zowi-movements-height-big":"высокая","bloq-zowi-movements-height-medium":"средняя","bloq-zowi-movements-height-small":"низкая","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"поднимается и спускается","bloq-zowi-movements-no-dir-swing":"балансируй","bloq-zowi-movements-no-dir-tiptoeSwing":"балансируй на цыпочках","bloq-zowi-movements-no-dir-jitter":"дрожь","bloq-zowi-movements-no-dir-ascendingTurn":"обернись, когда поднимаешься","bloq-zowi-movements-no-dir-jump":"прыгает","bloq-zowi-movements-no-dir-speed":"раз со скоростью","bloq-zowi-movements-no-dir-height":"и высота","bloq-zowi-movements-no-dir-big":"высокая","bloq-zowi-movements-no-dir-medium":"средняя","bloq-zowi-movements-no-dir-small":"низкая","bloq-zowi-sounds":"Сделай звук","bloq-hts221-humidity":"Прочитать значения влажности датчика","bloq-hts221-temperature":"Прочитать значения температуры датчика","bloq-rgbLed-fade-red":"с «красным» значением","bloq-enable-interrupt":"Выполнить функцию","bloq-enable-interrupt-rising":"поменяйте 0 на 1","bloq-enable-interrupt-falling":"поменяйте 1 на 0","bloq-enable-interrupt-change":"поменяйте","bloq-enable-interrupt-pin":"при подключении контакта","bloq-rgbLed-green":", «зеленое» значение","bloq-rgbLed-fade":"Создать градиент в светодиодах RGB","bloq-rgbLed-red":"с «красным» значением","bloq-rtc-init":"Обновить дату и время часов","bloq-rtc-month":"месяц","bloq-rtc-using-advanced":"фактический при использовании часов","bloq-rtc-year":"год","bloq-rtc-day":"день","bloq-rtc-hour":"час","bloq-rtc-minute":"минута","bloq-rtc-second":"секунда","bloq-rtc-time":"час","bloq-rtc-using":"фактический при использовании часов","bloq-rtc-advanced":"Получить","bloq-rtc":"Получить","default-var-name-rtc":"часы_реальное_время","bloq-rtc-date":"дата","default-var-name-sound":"Датчик_звук","bloq-rgbLed-blue":"и «синее» значение","default-var-name-RGBled":"Светодиоды_RGB","bloq-rgbLed":"Включить светодиоды RGB","bloq-rgbLed-fade-blue":"и «синее» значение","bloq-rgbLed-fade-green":", «зеленое» значение","bloq-rgbLed-simple":"Включить светодиоды RGB","bloq-rgbLed-simple-color":"с цветом","bloq-rgbLed-simple-red":"красный","bloq-rgbLed-simple-green":"зеленый","bloq-rgbLed-simple-blue":"синий","bloq-zowi-gestures":"Сделай анимацию","bloq-zowi-gestures-ZowiHappy":"Счастливый","bloq-zowi-gestures-ZowiSuperHappy":"Очень счастливый","bloq-zowi-gestures-ZowiSad":"Печальный","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Прррр","bloq-zowi-gestures-ZowiConfused":"Смущение","bloq-zowi-gestures-ZowiLove":"Любовь","bloq-zowi-gestures-ZowiAngry":"Сердитый","bloq-zowi-gestures-ZowiFretful":"Беспокойный","bloq-zowi-gestures-ZowiMagic":"Магия","bloq-zowi-gestures-ZowiWave":"Волна","bloq-zowi-gestures-ZowiVictory":"Победа!!!","bloq-zowi-gestures-ZowiFail":"Игра окончена...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"раз","bloq-zowi-movements-simple-walk":"идет","bloq-zowi-movements-simple-turn":"поворачивается","bloq-zowi-movements-simple-shakeLeg":"двигает ногой","bloq-zowi-movements-simple-bend":"наклонись","bloq-zowi-movements-simple-moonwalker":"пройдись «лунной походкой»","bloq-zowi-movements-simple-crusaito":"пройдись шагом крест-накрест","bloq-zowi-movements-simple-flapping":"потрясись","bloq-zowi-movements-simple-updown":"поднимается и спускается","bloq-zowi-movements-simple-swing":"балансируй","bloq-zowi-movements-simple-tiptoeSwing":"балансируй на цыпочках","bloq-zowi-movements-simple-jitter":"дрожь","bloq-zowi-movements-simple-ascendingTurn":"обернись, когда поднимаешься","bloq-zowi-movements-simple-jump":"прыгает","bloq-zowi-rest":"Отдых","bloq-millis":"Получить время выполнения","bloq-random-seed":"Запустить генератор случайных чисел","bloq-rgbLed-simple-white":"белый","bloq-rgbLed-simple-yellow":"желтый","bloq-rgbLed-simple-orange":"апельсин","bloq-rgbLed-simple-dark-green":"темно-зеленый","bloq-rgbLed-simple-dark-blue":"темно-синий","bloq-rgbLed-simple-pink":"роза","bloq-argument-int":"Весь","bloq-argument-char":"Характер","bloq-zowi-buttons":"кнопка","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"О Zowi","bloq-zowi-if-distance":"При обнаружении расстояния","bloq-zowi-if-distance-less":"меньший","bloq-zowi-if-distance-more":"больший","bloq-zowi-if-distance-than":"что","bloq-zowi-if-distance-then":"сантиметров, выполняет:","bloq-zowi-if-buttons":"При нажатии на кнопку","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", выполняет:","bloq-zowi-if-sound":"Если услышит шум, выполняет:","bloq-evolution-rest":"Отдых","bloq-evolution-movements-simple":"Подвинься в сторону","bloq-evolution-movements-simple-fordward":"прямо","bloq-evolution-movements-simple-backward":"назад","bloq-evolution-movements-simple-right":"вправо","bloq-evolution-movements-simple-left":"влево","bloq-evolution-distance":"Измеряет расстояние","bloq-evolution-if-distance":"При обнаружении расстояния","bloq-evolution-if-distance-less":"меньший","bloq-evolution-if-distance-more":"больший","bloq-evolution-if-distance-than":"что","bloq-evolution-if-distance-then":"сантиметров, выполняет:","bloq-evolution-light":"Измеряет освещение","bloq-evolution-light-left":"влево","bloq-evolution-light-right":"вправо","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Определяет линию","bloq-evolution-line-left":"влево","bloq-evolution-line-right":"вправо","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Смотрит в сторону","bloq-evolution-head-left":"влево","bloq-evolution-head-right":"вправо","bloq-evolution-head-center":"прямо","bloq-evolution-buzzer-do":"До","bloq-evolution-buzzer":"Берет ноту","bloq-evolution-buzzer-re":"Ре","bloq-evolution-buzzer-mi":"Ми","bloq-evolution-buzzer-fa":"Фа","bloq-evolution-buzzer-sol":"Соль","bloq-evolution-buzzer-la":"Ля","bloq-evolution-buzzer-si":"Си","bloq-evolution-buzzer-for":"в течение","bloq-evolution-buzzer-ms":"мс","bloq-evolution-head-advance":"Смотрит","bloq-evolution-head-advance-deg":"градусов в направлении","bloq-evolution-head-advance-left":"влево","bloq-evolution-head-advance-right":"вправо","bloq-shield-stepper-steps":"Повернуть шаговый двигатель","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 и 2","bloq-shield-stepper-steps-degdir":"градусы по","bloq-shield-stepper-steps-CW":"часовой стрелке","bloq-shield-stepper-steps-CCW":"против часовой стрелки","bloq-shield-stepper-steps-at":"при","bloq-shield-stepper-steps-rpm":"об/мин","bloq-evolution-if-line":"При обнаружении линии","bloq-evolution-if-line-white":"белая","bloq-evolution-if-line-black":"черная","bloq-evolution-if-line-and":"с левой стороны и","bloq-evolution-if-line-then":"с правой стороны, выполняет:","bloq-evolution-if-light":"Если видит свет","bloq-evolution-if-light-and":"с левой стороны и","bloq-evolution-if-light-then":"с правой стороны, выполняет:","bloq-evolution-if-light-high":"высокая","bloq-evolution-if-light-medium":"средняя","bloq-evolution-if-light-low":"низкая","bloq-shield-stepper-steps-advanced":"Повернуть шаговой двигатель","bloq-shield-stepper-steps-advanced-degdir":"градусов по часовой стрелке","bloq-shield-stepper-steps-advanced-at":"в","bloq-shield-stepper-steps-advanced-rpm":"оборотов в минуту","bloq-shield-DCmotor-spin":"Поверните мотор","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"в определенном смысле","bloq-shield-DCmotor-spin-CW":"по часовой","bloq-shield-DCmotor-spin-CCW":"против часовой","bloq-shield-DCmotor-spin-at":"в","bloq-shield-DCmotor-spin-speed":"% от Vmax","bloq-shield-DCmotor-spinMotor-advanced":"Поверните мотор","bloq-shield-DCmotor-spinMotor-advanced-direction":"в определенном смысле","bloq-shield-DCmotor-spinMotor-advanced-at":"в","bloq-shield-DCmotor-spinMotor-advanced-speed":"% от Vmax","bloq-shield-DCmotor-stop":"Остановите двигатель","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"Остановите двигатель","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"Изначальное положение","bloq-zowi-gestures-v1":"Сделать анимацию","bloq-zowi-gestures-ZowiHappy-v1":"Счастливый","bloq-zowi-gestures-ZowiSuperHappy-v1":"Очень счастливый","bloq-zowi-gestures-ZowiSad-v1":"Грустный","bloq-zowi-gestures-ZowiSleeping-v1":"Zzzzzz","bloq-zowi-gestures-ZowiFart-v1":"Prrr","bloq-zowi-gestures-ZowiConfused-v1":"Смущенный","bloq-zowi-gestures-ZowiLove-v1":"Влюбленный","bloq-zowi-gestures-ZowiAngry-v1":"Сердитый","bloq-zowi-gestures-ZowiFretful-v1":"Беспокойный","bloq-zowi-gestures-ZowiVictory-v1":"Победа!!","bloq-zowi-gestures-ZowiFail-v1":"Игра окончена..","bloq-zowi-if-buttons-then-v1":", сделайте следующее:","bloq-zowi-if-distance-then-v1":"см, сделайте следующее:","bloq-zowi-if-sound-v1":"Если вы слышите шум , сделайте следующее:","bloq-zowi-mouth-v1":"Показывает","bloq-zowi-movements-simple-walk-v1":"Ступай","bloq-zowi-movements-simple-turn-v1":"Объезжай","bloq-zowi-movements-simple-shakeLeg-v1":"Перемести ногу","bloq-zowi-movements-simple-bend-v1":"Наклонись","bloq-zowi-movements-simple-moonwalker-v1":"Сделай лунную походку","bloq-zowi-movements-simple-crusaito-v1":"Сделай поперечный шаг","bloq-zowi-movements-simple-flapping-v1":"Встряхнись","bloq-zowi-movements-simple-updown-v1":"Поднимись и опустись","bloq-zowi-movements-simple-swing-v1":"Качнись","bloq-zowi-movements-simple-tiptoeSwing-v1":"Качнись на цыпочках","bloq-zowi-movements-simple-jitter-v1":"Дрожит","bloq-zowi-movements-simple-ascendingTurn-v1":"Он вертится пока ты поднимаешься","bloq-zowi-movements-simple-jump-v1":"Прыгай","bloq-zowi-sounds-v1":"Издает звук","bloq-zowi-sounds-fart1-v1":"prrr","bloq-zowi-distance-v1":"Измеряет расстояние","bloq-zowi-sound-v1":"внимательно слушает","bloq-zowi-movements-front":"Идет","bloq-zowi-movements-front-forward":"вперед","bloq-zowi-movements-front-backward":"назад","bloq-zowi-movements-front-speed":"раз со скоростью","bloq-zowi-movements-front-speed-small":"низкий","bloq-zowi-movements-front-speed-medium":"средний","bloq-zowi-movements-front-speed-high":"высокий","bloq-zowi-movements-front-endtext":" ","bloq-zowi-movements-sides-turn":"Объезжает","bloq-zowi-movements-sides-shakeLeg":"Перемести ногу","bloq-zowi-movements-sides-bend":"Наклонись","bloq-zowi-movements-sides-left":"влево","bloq-zowi-movements-sides-right":"вправо","bloq-zowi-movements-sides-speed":"раз со скоростью","bloq-zowi-movements-sides-speed-small":"низкий","bloq-zowi-movements-sides-speed-medium":"средний","bloq-zowi-movements-sides-speed-high":"высокий","bloq-zowi-movements-sides-endtext":" ","bloq-zowi-movements-height-sides-moonwalker":"Сделай лунную походку","bloq-zowi-movements-height-sides-crusaito":"Сделай поперечный шаг","bloq-zowi-movements-height-sides-left":"влево","bloq-zowi-movements-height-sides-right":"вправо","bloq-zowi-movements-height-sides-speed":"раз со скоростью","bloq-zowi-movements-height-sides-speed-small":"низкий","bloq-zowi-movements-height-sides-speed-medium":"средний","bloq-zowi-movements-height-sides-speed-high":"высокий","bloq-zowi-movements-height-sides-height":"и высота","bloq-zowi-movements-height-sides-small":"низкий","bloq-zowi-movements-height-sides-medium":"средний","bloq-zowi-movements-height-sides-big":"высокий","bloq-zowi-movements-height-sides-endtext":" ","bloq-num-conversion":"конвертировать","bloq-num-conversion-to":"в","bloq-num-conversion-int":"целое","bloq-num-conversion-float":"десятичное","bloq-name-default":"Имя","bloq-declare-array":"Объявить переменную массива","bloq-declare-array-size":"с размером","bloq-declare-array-type":"и типом","bloq-servo-detach":"Отсоедините сервопривод","bloq-servo-attach":"Подсоедините сервопривод","bloq-hts221":"Читает","bloq-hts221-read-temperature":"температура","bloq-hts221-read-humidity":"влажность","bloq-hts221-sensor":"сенсор","bloq-PTsensor":"Читает","bloq-PTsensor-pressure":"давление","bloq-PTsensor-temperature":"температура","bloq-PTsensor-altitude":"высота над уровнем моря\n","bloq-PTsensor-sensor":"сенсор","bloq-PTsensor-calibration":"Установите давление на уровне моря","bloq-PTsensor-calibration-sensor":"Па на датчике","bloq-rgbLed-off":"Выключите LED RGB","bloq-pin-analog-write-V1":"Запись в pin","bloq-pin-analog-write-data-V1":"аналоговое значение","bloq-buzzer-do-#":"До","bloq-buzzer-re-#":"Ре","bloq-buzzer-fa-#":"Фа","bloq-buzzer-sol-#":"Соль","bloq-buzzer-la-#":"Ля","bloq-serial-receiver-receive-number":"Получить номер","bloq-declare-array-declare":"Заявить массив","bloq-declare-array-declare-type":"типа","bloq-declare-array-declare-size":"и размера","bloq-pin-digital-write-data-V1":"цифровое значение","bloq-round-advanced-roundto":"Округлить в сторону","bloq-round-advanced-floor":"уменьшения","bloq-round-advanced-ceil":"увеличения","bloq-round-advanced-round":"ближайший","bloq-round-advanced-thenumber":"номер","bloq-rtc-date-2":"год/месяц/день","bloq-rtc-time-2":"часы:минуты:секунды","bloq-pinlevel-high":"Высокий","bloq-pinlevel-low":"Низкий","suggested":"Предложения","bloq-viewer":"Отправить данные в визор","bloq-mbot-buzzer-note":"Озвучить оценку","bloq-mbot-buzzer-for":"во время","bloq-mbot-buzzer-ms":"мс","bloq-mbot-getdistance-get":"Получить расстояние (см) ультразвука в","bloq-mbot-port-1":"порт 1","bloq-mbot-port-2":"порт 2","bloq-mbot-port-3":"порт 3","bloq-mbot-port-4":"порт 4","bloq-mbot-getbuttonstatus":"Считать состояние кнопки","bloq-mbot-getlightsensor":"Считать световой сенсор","bloq-mbot-linefollower-text":"Получить информацию от инфракрасного датчика в","bloq-mbot-move-forward":"Вперед","bloq-mbot-move-backward":"Назад","bloq-mbot-move-turnleft":"Повернуть налево","bloq-mbot-move-turnright":"Повернуть направо","bloq-mbot-move-speed":"на скорости","bloq-mbot-move-speed-fast":"очень быстро","bloq-mbot-move-speed-normal":"нормально","bloq-mbot-move-speed-slow":"медленно","bloq-mbot-setled-set":"Включить","bloq-mbot-led-all":"все светодиоды","bloq-mbot-led-right":"правый светодиод","bloq-mbot-led-left":"левый светодиод","bloq-mbot-setled-colormix":"с данным набором цветов:","bloq-mbot-setled-green":"зеленый:","bloq-mbot-setled-red":"красный:","bloq-mbot-setled-blue":"синий:","bloq-mbot-stop":"Остановить робота","bloq-mbot-turnoffled-off":"Выключить","bloq-mbot-buzzer-advanced-play":"Озвучить оценку","bloq-mbot-move-advanced-speed":"на скорости","bloq-mbot-setled-advanced-set":"Включить","bloq-mbot-setled-advanced-colormix":"с данным набором цветов:","bloq-mbot-setled-advanced-red":"красный:","bloq-mbot-setled-advanced-green":"зеленый:","bloq-mbot-setled-advanced-blue":"синий:","bloq-mbot-buzzer-advanced-for":"во время","bloq-mbot-buzzer-advanced-ms":"мс","bloq-magicfor-repeat":"Повторить","bloq-magicfor-times":"раз","bloq-phone-sounds":"Издать звук","bloq-phone-sounds-device":"в устройстве","bloq-phone-sounds-ambient-v1":"ambient","bloq-phone-sounds-bass-v1":"бас","bloq-phone-sounds-bongo-v1":"бонго","bloq-phone-sounds-highhat-v1":"хай-хэт","bloq-phone-sounds-snare-v1":"снэйр","bloq-phone-write-show":"Показать на экране","bloq-phone-receive":"Получает голосовые или текстовые данные","bloq-phone-toggle-light":"Мигает с частотой","bloq-phone-toggle-units":"секунд","bloq-phone-turnon-light":"Включает фонарик с интенсивностью","bloq-phone-turnoff-light":"Включает фонарик","bloq-twitter-config":"Настраивает приложение Twitter","bloq-mbot-port-5":"порт 5","bloq-mbot-port-6":"порт 6","bloq-mbot-port-7":"порт 7","bloq-mbot-port-8":"порт 8","bloq-mbot-port-9":"порт 9","bloq-mbot-port-10":"порт 10","bloq-send-tweet":"Отправить твит","bloq-common-ms":"мс","bloq-common-every":"каждый","bloq-common-playnote":"Озвучить оценку","bloq-common-for":"во время","bloq-phone-read":"Считать","bloq-phone-lacceleration":"линейное ускорение по оси","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"Отправить через последовательный порт","bloq-zowicomponent-serial-receive":"Получить через последовательный порт","bloq-zowicomponent-serial-receive-int":"Получить номер через последовательный порт","bloq-phone-gyroscope":"гироскоп на оси","bloq-phone-is":" ","bloq-phone-covered":"закрыт","bloq-phone-not-covered":"не закрыт","bloq-phone-acceleration":"ускорение по оси","bloq-phone-gravity":"ускорение силы тяжести по оси","bloq-phone-light":"окружающий свет","bloq-phone-magnetic":"магнитное поле по оси"},"zh-CN":{"bloq-zowi-mouth-tongueOut":"大笑","bloq-zowi-mouth-confused":"一脸疑惑","bloq-zowi-mouth-bigSurprise":"一脸惊讶","bloq-zowi-distance":"Zowi, 测量长度","bloq-zowi-sound":"Zowi, 仔细听","bloq-zowi-sounds-OhOoh":"哇哦","bloq-zowi-sounds-surprise":"惊讶","bloq-zowi-sounds-sad":"悲伤","bloq-zowi-sounds-happy":"高兴","bloq-zowi-sounds-sleeping":"睡意","bloq-zowi-sounds-cuddly":"拥抱","bloq-zowi-sounds-confused":"困惑","bloq-zowi-movements-shakeLeg":"可移动脚","bloq-zowi-sounds-fart1":"放屁","bloq-zowi-movements-speed-medium":"中等","bloq-zowi-movements-speed-small":"低","bloq-zowi-movements-speed-high":"高","bloq-break-stopLoop":"中断环","bloq-code-writeYourCode":"编写自己的代码","bloq-comment-comment":"注解 //","bloq-convert-convert":"换","bloq-convert-to":"乘","bloq-convert-dec":"十进制","bloq-convert-hex":"十六进制","bloq-convert-oct":"八进制","bloq-convert-bin":"二进制","bloq-serial-receiver-receive":"接受","bloq-serial-send-send":"发送","bloq-serial-send-print":"不换行","bloq-serial-send-println":"换行","bloq-buzzer-advance-sound":"蜂鸣器","bloq-buzzer-advance-note":"与音符","bloq-buzzer-advance-for":"在","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"阅读数字引脚","bloq-analog-read-advanced-readpin":"阅读模拟引脚","bloq-continuous-servo-start-advanced-turn":"转伺服","bloq-continuous-servo-start-advanced-direction":"反向","bloq-continuous-servo-start-advanced-clockwise":"顺时针","bloq-continuous-servo-start-advanced-counterclockwise":"逆时针","bloq-continuous-servo-stop-advanced-stop":"停止伺服","bloq-lcd-turn-on-off-advanced-turnon":"开","bloq-lcd-turn-on-off-advanced-turnoff":"关","bloq-lcd-turn-on-off-advanced-lcdLigth":"LCD光","bloq-lcd-clear":"删除LCD的内容","bloq-lcd-writte-advanced-write":"写","bloq-lcd-writte-advanced-inLCD":"在LCD","bloq-lcd-writte-advanced-inPosition":"开始位置（列，行）","bloq-led-advanced-turnon":"开","bloq-led-advanced-turnoff":"关","bloq-led-advanced-theLED":"LED","bloq-oscillator-advanced-oscillate":"摇动伺服","bloq-oscillator-advanced-around":"周围","bloq-oscillator-advanced-amplitude":"广","bloq-oscillator-advanced-speed":"速度","bloq-oscillator-start-advanced-oscillator":"播放振荡器","bloq-oscillator-stop-advanced-stop":"停止振荡器","bloq-pin-read-advanced-readpin":"阅读引脚","bloq-pin-writte-advanced-writepin":"写在引脚","bloq-pin-writte-advanced-data":"数据","bloq-read-advanced-read":"读","bloq-servo-advanced-move":"动","bloq-servo-advanced-to":"到","bloq-servo-advanced-degrees":"度","bloq-buzzer-sound":"蜂鸣器","bloq-buzzer-note":"与音符","bloq-buzzer-for":"在","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"转伺服","bloq-continuous-servo-start-direction":"反向","bloq-continuous-servo-start-clockwise":"顺时针","bloq-continuous-servo-start-counterclockwise":"逆时针","bloq-continuous-servo-stop-stop":"停止伺服","bloq-lcd-turn-on-off-turnon":"开","bloq-lcd-turn-on-off-turnoff":"关","bloq-lcd-turn-on-off-lcdLigth":"LCD光","bloq-lcd-writte-write":"写","bloq-lcd-writte-inLCD":"在LCD","bloq-led-turnon":"开","bloq-led-turnoff":"关","bloq-led-theLED":"LED","bloq-oscillator-oscillate":"摇动伺服","bloq-oscillator-around":"周围","bloq-oscillator-amplitude":"广","bloq-oscillator-speed":"速度","bloq-oscillator-times":"次","bloq-oscillator-start-oscillator":"播放振荡器","bloq-oscillator-stop-stop":"停止振荡器","bloq-read-read":"读","bloq-servo-move":"动","bloq-servo-to":"乘","bloq-servo-degrees":"度","bloq-case-ifSameTo":"如果它等于","bloq-case-exec":"跑:","bloq-case-default-inOtherCase":"否则，跑:","bloq-continue-continue":"继续本循环下一个迭代","bloq-else-else":"否则，跑:","bloq-else-if-if":"否则，如果:","bloq-else-if-else":"跑:","bloq-for-count":"加","bloq-for-from":"从","bloq-for-to":"到","bloq-for-add":"加","bloq-for-subtract":"减","bloq-for-exec":"跑:","bloq-if-if":"如果","bloq-if-exec":"跑:","bloq-switch-check":"检查有什么价值","bloq-wait-wait":"等","bloq-while-while":"同时","bloq-while-exec":"跑:","bloq-argument-var":"变量","bloq-argument-float":"十进制","bloq-argument-string":"文字","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"跑","bloq-invoke-return-function-exec":"跑","bloq-invoke-function-args":"与以下参数：","bloq-return-return":"收","bloq-return-function-declare":"宣告子程序","bloq-return-function-return":"收","bloq-return-function-with-arguments-declare":"宣告子程序","bloq-return-function-with-arguments-count":"与以下参数：","bloq-return-function-with-arguments-return":"收","bloq-void-function-declare":"宣告子程序","bloq-void-function-with-arguments-declare":"宣告子程序","bloq-void-function-with-arguments-count":"与以下参数：","bloq-boolArray-advanced-arraySize":"数组大小","bloq-boolArray-advanced-boolType":"布尔","bloq-boolArray-arraySize":"数组大小","bloq-boolArray-boolType":"布尔","bloq-boolean-true":"真","bloq-boolean-false":"假","bloq-logic-operations-and":"和","bloq-logic-operations-or":"或","bloq-not-not":"不","bloq-loop-header":"控制流程 (loop)","bloq-loop-description":"创建要安装后继续运行的程序","bloq-setup-header":"初始指令（设置）","bloq-setup-description":"请表示在程序的开头要运行一次。","bloq-var-header":"全局变量, 子程序和类","bloq-var-description":"请定义使用在设置和循环的价值观, 你也可以把功能组块在一起。","bloq-numberArray-advanced-arraySize":"数组大小","bloq-numberArray-advanced-type":"和类型","bloq-numberArray-advanced-float":"十进制","bloq-numberArray-advanced-int":"整数","bloq-map-map":"制图","bloq-map-value":"从[0 -","bloq-map-advanced-map":"制图","bloq-map-advanced-value":"[","bloq-map-advanced-and":"]到[","bloq-math-operations-sqrt":"平方根","bloq-math-operations-abs":"绝对值","bloq-numberArray-arraySize":"数组大小","bloq-numberArray-floatType":"浮点数","bloq-random-random":"随机的","bloq-random-and":"和","bloq-stringArray-advanced-arraySize":"数组大小","bloq-stringArray-advanced-type":"和类型","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"长短","bloq-string-string":"文字","bloq-stringArray-arraySize":"数组大小","bloq-stringArray-stringType":"和文字类型","bloq-string-create-create":"创建文字","bloq-hw-variable-advanced-variable":"变量（组件）","bloq-sw-variable-advanced-variable":"变量（代码）","bloq-array-variable-variable":"变量","bloq-declare-variable-declare":"宣告变量","bloq-declare-variable-declare-type":"和类型","bloq-declare-variable-declare-type-int":"整数","bloq-declare-variable-declare-type-float":"十进制","bloq-declare-variable-declare-type-text":"文字","bloq-declare-variable-declare-type-char":"字符","bloq-declare-variable-declare-type-bool":"布尔","bloq-select-variable-variable":"变量","bloq-set-variableArray-variable":"变量","bloq-set-variable-variable":"变量","bloq-char":"字符","bloq-lcd-default":"您好！","bloq-comment-default":"写评论","bloq-functions-default":"名字","bloq-wait-ms":"ms","drag-bloq":"为了开始你的程序,请拖动你的块到这里","bloq-invoke-class-function-class":"对象","bloq-invoke-arguments-class":"创建一个在本类的对象","bloq-invoke-arguments-class-name":"命名","bloq-invoke-arguments-args":"以下参数","bloq-invoke-class-return-function-exec":"跑这个子程序","bloq-invoke-class-function-exec":"跑这个子程序","bloq-invoke-class-function-args":"以下参数","bloq-invoke-class-return-function-args-exec":"跑这个子程序","bloq-invoke-class-return-function-args-class":"对象","bloq-invoke-class-return-function-args-args":"以下参数","bloq-set-class-variable-variable":"变量","bloq-set-class-variableArray-variable":"变量","bloq-select-class-variable-variable":"变量","bloq-array-class-variable-variable":"变量","bloq-constructor":"构造函数","bloq-constructor-arguments":"使用下列参数的构造函数","bloq-invoke-class":"创建一个在本类的对象","bloq-invoke-class-name":"命名","bloq-class":"宣告类","bloq-class-default":"名字","bloq-class-from":"的","bloq-class-inheritance-type":"继承","bloq-class-inheritance-public":"公开","bloq-class-inheritance-protected":"保护","bloq-class-inheritance-private":"私有","bloq-public":"变量和公共子程序","bloq-protected":"变量和保护子程序","bloq-private":"变量和私有子程序","bloq-include-lib-exec":"包括函式庫","bloq-pin-analog-write":"写在模拟引脚","bloq-pin-digital-write":"写在数字引脚","bloq-pin-analog-write-data":"数据","bloq-pin-digital-write-data":"数据","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"走","bloq-zowi-movements-turn":"转","bloq-zowi-movements-height-moonwalker":"月球漫步","bloq-zowi-movements-height-crusaito":"束交叉步","bloq-zowi-movements-height-flapping":"摇动","bloq-zowi-movements-shakeleg":"移动你的腿","bloq-zowi-movements-bend":"弯","bloq-zowi-movements-forward":"向前","bloq-zowi-movements-backward":"向后","bloq-zowi-movements-left":"左","bloq-zowi-movements-right":"右","bloq-zowi-mouth":"Zowi, 画一个","bloq-zowi-mouth-mouth":"在你的嘴里","bloq-zowi-mouth-smile":"笑容","bloq-zowi-mouth-sad":"哭脸","bloq-zowi-mouth-happy":"笑脸","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"向前","bloq-zowi-movements-height-backward":"向后","bloq-zowi-movements-height-left":"左","bloq-zowi-movements-height-right":"右","bloq-zowi-movements-height-height":"和一个高度","bloq-zowi-movements-height-big":"高","bloq-zowi-movements-height-medium":"中等","bloq-zowi-movements-height-small":"低","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"一上一下","bloq-zowi-movements-no-dir-swing":"摇摆","bloq-zowi-movements-no-dir-tiptoeSwing":"踮着脚尖摇摆","bloq-zowi-movements-no-dir-jitter":"抖动","bloq-zowi-movements-no-dir-ascendingTurn":"当你身请旋转","bloq-zowi-movements-no-dir-jump":"跳","bloq-zowi-movements-no-dir-height":"和一个高度","bloq-zowi-movements-no-dir-big":"高","bloq-zowi-movements-no-dir-medium":"中等","bloq-zowi-movements-no-dir-small":"低","bloq-zowi-sounds":"Zowi:发出这个声音","bloq-hts221-humidity":"阅读湿度传感器","bloq-hts221-temperature":"阅读温度传感器","bloq-rgbLed-fade-red":"与红色的值","bloq-enable-interrupt":"跑这个子程序","bloq-enable-interrupt-rising":"从0更改为1","bloq-enable-interrupt-falling":"从1更改为0","bloq-enable-interrupt-change":"改变","bloq-enable-interrupt-pin":"当输入在引脚","bloq-rgbLed-green":"绿色的值","bloq-rgbLed-fade":"创建RGB颜色渐变","bloq-rgbLed-red":"与红色的值","bloq-rtc-init":"更新时钟的日期和时间","bloq-rtc-month":"月","bloq-rtc-using-advanced":"用时钟","bloq-rtc-year":"年","bloq-rtc-day":"日","bloq-rtc-hour":"时间","bloq-rtc-minute":"分","bloq-rtc-second":"秒","bloq-rtc-time":"时间","bloq-rtc-using":"用时钟","bloq-rtc-advanced":"得到","bloq-rtc":"得到","default-var-name-rtc":"实时时钟","bloq-rtc-date":"日期","default-var-name-sound":"声音传感器","bloq-rgbLed-blue":"蓝色的值","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"打开RGB LED ","bloq-rgbLed-fade-blue":"蓝色的值","bloq-rgbLed-fade-green":"绿色的值","bloq-rgbLed-simple":"打开RGB LED ","bloq-rgbLed-simple-red":"红色","bloq-rgbLed-simple-green":"绿色","bloq-rgbLed-simple-blue":"蓝色","bloq-zowi-gestures":"Zowi, 展示","bloq-zowi-gestures-ZowiHappy":"高兴","bloq-zowi-gestures-ZowiSuperHappy":"非常高兴","bloq-zowi-gestures-ZowiSad":"悲伤","bloq-zowi-gestures-ZowiSleeping":"困倦","bloq-zowi-gestures-ZowiFart":"放屁","bloq-zowi-gestures-ZowiConfused":"困惑","bloq-zowi-gestures-ZowiLove":"相爱","bloq-zowi-gestures-ZowiAngry":"生气","bloq-zowi-gestures-ZowiFretful":"焦虑","bloq-zowi-gestures-ZowiMagic":"魔法","bloq-zowi-gestures-ZowiWave":"挥手","bloq-zowi-gestures-ZowiVictory":"胜利","bloq-zowi-gestures-ZowiFail":"挫败","bloq-zowi-movements-simple":"Zowi:","bloq-zowi-movements-simple-steps":"次","bloq-zowi-movements-simple-walk":"走","bloq-zowi-movements-simple-turn":"转","bloq-zowi-movements-simple-bend":"弯曲","bloq-zowi-movements-simple-moonwalker":"月球漫步","bloq-zowi-movements-simple-crusaito":"跨步","bloq-zowi-movements-simple-flapping":"拍打","bloq-zowi-movements-simple-updown":"一上一下","bloq-zowi-movements-simple-swing":"摇摆","bloq-zowi-movements-simple-tiptoeSwing":"踮着脚尖摇摆","bloq-zowi-movements-simple-jitter":"抖动","bloq-zowi-movements-simple-jump":"跳","bloq-zowi-rest":"Zowi, 休息","bloq-millis":"获取执行时间","bloq-random-seed":"开启随机数字生成器","bloq-rgbLed-simple-white":"白色","bloq-rgbLed-simple-yellow":"黄色","bloq-rgbLed-simple-orange":"橙色","bloq-rgbLed-simple-dark-green":"深绿色","bloq-rgbLed-simple-dark-blue":"深蓝色","bloq-rgbLed-simple-pink":"粉红色","bloq-argument-int":"整数","bloq-argument-char":"字符","bloq-zowi-buttons":"按键","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-if-distance":"如果它探测到一个距离","bloq-zowi-if-distance-less":"更少的","bloq-zowi-if-distance-more":"更多的","bloq-zowi-if-distance-than":"比","bloq-zowi-if-distance-then":"它会这样做:","bloq-zowi-if-buttons":"如果我按下按钮","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":"做:","bloq-zowi-if-sound":"如果听到噪音,它会这样做:","bloq-evolution-rest":"停止机器人","bloq-evolution-movements-simple":"动","bloq-evolution-movements-simple-fordward":"向前","bloq-evolution-movements-simple-backward":"向后","bloq-evolution-movements-simple-right":"右","bloq-evolution-movements-simple-left":"左","bloq-evolution-distance":"测量距离","bloq-evolution-if-distance":"如果它探测到一段距离","bloq-evolution-if-distance-less":"更少的","bloq-evolution-if-distance-more":"更多的","bloq-evolution-if-distance-than":"比","bloq-evolution-if-distance-then":"厘米,它会这样做:","bloq-evolution-light":"测量光","bloq-evolution-light-left":"左","bloq-evolution-light-right":"右","bloq-evolution-line":"检测到直线","bloq-evolution-line-left":"左","bloq-evolution-line-right":"右","bloq-evolution-head":"看","bloq-evolution-head-left":"左","bloq-evolution-head-right":"右","bloq-evolution-head-center":"向前","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"触碰音符","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"看","bloq-evolution-head-advance-deg":"度","bloq-evolution-head-advance-left":"左","bloq-evolution-head-advance-right":"右","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1和2","bloq-shield-stepper-steps-degdir":"度","bloq-shield-stepper-steps-CW":"顺时针","bloq-shield-stepper-steps-CCW":"逆时针","bloq-shield-stepper-steps-at":"在","bloq-shield-stepper-steps-rpm":"每分钟转数","bloq-evolution-if-line-white":"白色","bloq-evolution-if-line-black":"黑色","bloq-evolution-if-line-and":"在左边","bloq-evolution-if-line-then":"在右边,它会这样做:","bloq-evolution-if-light":"如果它看到光","bloq-evolution-if-light-and":"在左边","bloq-evolution-if-light-then":"在右边,它会这样做:","bloq-evolution-if-light-high":"高","bloq-evolution-if-light-medium":"中等","bloq-evolution-if-light-low":"低","bloq-shield-stepper-steps-advanced-degdir":"度","bloq-shield-stepper-steps-advanced-at":"在","bloq-shield-stepper-steps-advanced-rpm":"每分钟转数","bloq-shield-DCmotor-spin-motor1":"1","bloq-shield-DCmotor-spin-motor2":"2","bloq-shield-DCmotor-spin-direction":"方向","bloq-shield-DCmotor-spin-CW":"顺时针","bloq-shield-DCmotor-spin-CCW":"逆时针","bloq-shield-DCmotor-spin-at":"在","bloq-shield-DCmotor-spinMotor-advanced-direction":"方向","bloq-shield-DCmotor-spinMotor-advanced-at":"在","bloq-shield-DCmotor-stop":"停止电机","bloq-shield-DCmotor-stop-motor1":"1","bloq-shield-DCmotor-stop-motor2":"2","bloq-shield-DCmotor-stop-advanced":"停止电机","bloq-zowi-movements-endtext":" ","bloq-zowi-movements-height-endtext":" ","bloq-zowi-movements-no-dir-endtext":" ","bloq-zowi-rest-v1":"初始位置","bloq-zowi-gestures-v1":"做这个动画:","bloq-zowi-gestures-ZowiHappy-v1":"高兴","bloq-zowi-gestures-ZowiSuperHappy-v1":"非常高兴","bloq-zowi-gestures-ZowiSad-v1":"悲伤","bloq-zowi-gestures-ZowiSleeping-v1":"（拟声）困倦","bloq-zowi-gestures-ZowiFart-v1":"（拟声）放屁","bloq-zowi-gestures-ZowiConfused-v1":"困惑","bloq-zowi-gestures-ZowiLove-v1":"爱","bloq-zowi-gestures-ZowiAngry-v1":"生气","bloq-zowi-gestures-ZowiFretful-v1":"焦虑","bloq-zowi-gestures-ZowiVictory-v1":"胜利","bloq-zowi-gestures-ZowiFail-v1":"游戏结束……","bloq-zowi-if-buttons-then-v1":"做:","bloq-zowi-mouth-v1":"展示一个","bloq-zowi-movements-simple-walk-v1":"走","bloq-zowi-movements-simple-turn-v1":"转","bloq-zowi-movements-simple-bend-v1":"弯曲","bloq-zowi-movements-simple-moonwalker-v1":"月球漫步","bloq-zowi-movements-simple-crusaito-v1":"十字号","bloq-zowi-movements-simple-flapping-v1":"摇动","bloq-zowi-movements-simple-updown-v1":"一上一下","bloq-zowi-movements-simple-swing-v1":"摇摆","bloq-zowi-movements-simple-tiptoeSwing-v1":"踮着脚尖摇摆","bloq-zowi-movements-simple-jitter-v1":"颤抖","bloq-zowi-movements-simple-jump-v1":"跳","bloq-zowi-sounds-v1":"发出这个声音","bloq-zowi-sounds-fart1-v1":"（拟声）放屁","bloq-zowi-distance-v1":"测量距离","bloq-zowi-sound-v1":"仔细听","bloq-zowi-movements-front":"走","bloq-zowi-movements-front-forward":"向前","bloq-zowi-movements-front-backward":"向后","bloq-zowi-movements-front-speed-small":"低","bloq-zowi-movements-front-speed-medium":"中等","bloq-zowi-movements-front-speed-high":"高","bloq-zowi-movements-sides-turn":"转","bloq-zowi-movements-sides-bend":"弯","bloq-zowi-movements-sides-left":"左","bloq-zowi-movements-sides-right":"右","bloq-zowi-movements-sides-speed-small":"低","bloq-zowi-movements-sides-speed-medium":"中等","bloq-zowi-movements-sides-speed-high":"高","bloq-zowi-movements-height-sides-moonwalker":"月球漫步","bloq-zowi-movements-height-sides-crusaito":"十字号","bloq-zowi-movements-height-sides-left":"左","bloq-zowi-movements-height-sides-right":"右","bloq-zowi-movements-height-sides-speed-small":"低","bloq-zowi-movements-height-sides-speed-medium":"中等","bloq-zowi-movements-height-sides-speed-high":"高","bloq-zowi-movements-height-sides-height":"和一个高度","bloq-zowi-movements-height-sides-small":"低","bloq-zowi-movements-height-sides-medium":"中等","bloq-zowi-movements-height-sides-big":"高","bloq-num-conversion":"转换","bloq-num-conversion-to":"到","bloq-num-conversion-int":"整数","bloq-num-conversion-float":"小数","bloq-name-default":"名字","bloq-declare-array":"声明数组变量","bloq-declare-array-size":"尺寸","bloq-declare-array-type":"和类型","bloq-servo-detach":"分离伺服","bloq-servo-attach":"连接伺服","bloq-hts221":"读","bloq-hts221-read-temperature":"温度","bloq-hts221-read-humidity":"湿度","bloq-hts221-sensor":"传感器的","bloq-PTsensor":"读","bloq-PTsensor-pressure":"压力","bloq-PTsensor-temperature":"温度","bloq-PTsensor-altitude":"高度","bloq-PTsensor-sensor":"传感器的","bloq-PTsensor-calibration":"定义海平面的压力","bloq-rgbLed-off":"关闭RGB LED","bloq-pin-analog-write-data-V1":"模拟值","bloq-buzzer-do-#":"C#","bloq-buzzer-re-#":"\n D#","bloq-buzzer-fa-#":"\n F#","bloq-buzzer-sol-#":"G#","bloq-buzzer-la-#":"A#","bloq-serial-receiver-receive-number":"接收数量","bloq-declare-array-declare":"声明数组","bloq-declare-array-declare-type":"分析类型","bloq-declare-array-declare-size":"和尺寸","bloq-pin-digital-write-data-V1":"数字量","bloq-round-advanced-roundto":"上舍入","bloq-round-advanced-floor":"下","bloq-round-advanced-ceil":"上","bloq-round-advanced-round":"最近的","bloq-round-advanced-thenumber":"数字","bloq-rtc-date-2":"年/月/日","bloq-rtc-time-2":"时:分:秒","bloq-pinlevel-high":"高","bloq-pinlevel-low":"低","suggested":"建议的","bloq-viewer":"将数据发送给观众","bloq-mbot-buzzer-note":"播放音符","bloq-mbot-buzzer-ms":"ms","bloq-mbot-getdistance-get":"获得超声波传感器距离","bloq-mbot-port-1":"端口1","bloq-mbot-port-2":"端口2","bloq-mbot-port-3":"端口3","bloq-mbot-port-4":"端口4","bloq-mbot-getbuttonstatus":"读取按钮状态","bloq-mbot-getlightsensor":"读取光传感器","bloq-mbot-linefollower-text":"获得红外传感器数据","bloq-mbot-move-forward":"向前","bloq-mbot-move-backward":"向后","bloq-mbot-move-turnleft":"左转","bloq-mbot-move-turnright":"右转","bloq-mbot-move-speed":"迅速地","bloq-mbot-move-speed-fast":"快速的","bloq-mbot-move-speed-normal":"正常","bloq-mbot-move-speed-slow":"慢的","bloq-mbot-led-all":"所有LED","bloq-mbot-led-right":"右边的LED","bloq-mbot-led-left":"左边的LED","bloq-mbot-setled-colormix":"用这个颜色值","bloq-mbot-setled-green":"绿色的","bloq-mbot-setled-red":"红色的","bloq-mbot-setled-blue":"蓝色的","bloq-mbot-stop":"停止机器人","bloq-mbot-turnoffled-off":"关掉","bloq-mbot-buzzer-advanced-play":"播放音符","bloq-mbot-move-advanced-speed":"迅速地","bloq-mbot-setled-advanced-colormix":"用这个颜色值","bloq-mbot-setled-advanced-red":"红色的","bloq-mbot-setled-advanced-green":"绿色的","bloq-mbot-setled-advanced-blue":"蓝色的","bloq-mbot-buzzer-advanced-ms":"ms","bloq-magicfor-repeat":"重复","bloq-magicfor-times":"次","bloq-phone-sounds":"发出声音","bloq-phone-sounds-device":"在设备里","bloq-phone-sounds-ambient-v1":"氛围音乐","bloq-phone-sounds-bass-v1":"贝斯","bloq-phone-sounds-bongo-v1":"小手鼓","bloq-phone-sounds-highhat-v1":"举止傲慢","bloq-phone-sounds-snare-v1":"圈套","bloq-phone-write-show":"显示在屏幕上","bloq-phone-receive":"通过语音或文本接收数据","bloq-phone-toggle-light":"以……的频率闪烁","bloq-phone-toggle-units":"秒","bloq-phone-turnon-light":"以……的强度打开手电筒","bloq-phone-turnoff-light":"关掉手电筒","bloq-twitter-config":"建立推特的应用程序","bloq-mbot-port-5":"端口5","bloq-mbot-port-6":"端口6","bloq-mbot-port-7":"端口7","bloq-mbot-port-8":"端口8","bloq-mbot-port-9":"端口9","bloq-mbot-port-10":"端口10","bloq-send-tweet":"发送推特","bloq-common-ms":"ms","bloq-common-every":"每","bloq-common-playnote":"播放音符","bloq-phone-read":"从中读取","bloq-phone-lacceleration":"轴上的直系加速度","bloq-phone-axis-x":"x","bloq-phone-axis-y":"y","bloq-phone-axis-z":"z","bloq-zowicomponent-serial-send":"通过串口发送","bloq-zowicomponent-serial-receive":"通过串口接收","bloq-zowicomponent-serial-receive-int":"通过串口接收int","bloq-phone-gyroscope":"轴上的陀螺仪","bloq-phone-is":"是","bloq-phone-covered":"覆盖","bloq-phone-not-covered":"没有覆盖","bloq-phone-acceleration":"轴上的加速度","bloq-phone-gravity":"轴上的重力加速度","bloq-phone-light":"环境光","bloq-phone-magnetic":"轴线上的磁场","bloq-phone-sounds-meow-v1":"喵","bloq-phone-sounds-joke-v1":"开玩笑","bloq-value":"读取……的价值","bloq-phone-orientation-azimuth":"方位","bloq-phone-orientation-roll":"滚动","bloq-phone-orientation-pitch":"倾斜","bloq-zowi-mouth-custom":"根据这一系列的数字画在你的嘴里:","bloq-phone-screen":"在……的显示屏上","bloq-phone-light-intensity":"以……的强度","bloq-from-device":"从","bloq-the":"这个","bloq-phone-axis":"在轴上","bloq-phone-of":"的","bloq-stop-buzzer":"停止蜂鸣器","bloq-buzzer-without-pause":"不停地","lateraldisplacement-moveto":"移动到","right":"右","left":"左","steps":"步","forward":"向前","backward":"向后","turn-right":"右转","turn-left":"左转","stop":"停止","benddown":"蹲下","rotate":"旋转","upstairs":"楼上","can-move-to":"凸轮移动到","move-to":"移动到","open":"开","close":"关","the-clamp":"夹钳","degrees":"度","roll-to":"滚动到","read-sensor":"读取传感器","bloq-mbot-getdistance":"获取超声波传感器距离","inches":"英寸","if":"如果","bloq-mbot-somethingnear-operation-near":"检测到一个附近的障碍","bloq-mbot-somethingnear-operation-faraway":"检测到一个遥远的障碍","bloq-mbot-somethingnear-operation-nodetect":"没有检测到障碍","bloq-mbot-ifthereisalotoflight-alot":"有很多的光","bloq-mbot-ifthereisalotoflight-low":"检测到低光","bloq-mbot-ifthereisalotoflight-operation-nodetect":"没有检测到光","bloq-mbot-iffollowlines-if":"如果检测","bloq-mbot-iffollowlines-and":"在左边的传感器和","bloq-mbot-iffollowlines-withsensor":"在右边的传感器从","white":"白色","black":"黑色"}};
        bloqsLanguages.texts = texts;
    return bloqsLanguages;
})(window.bloqsLanguages = window.bloqsLanguages || {}, undefined);

'use strict';
(function(bloqsUtils, _) {



    var isNumeric = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    /**
     * If the param is not a number, we set it to ''
     * @param  number
     */

    var validNumber = function(number) {
        var temp = number;
        var removedChar = 0;
        var i = 0;
        if (number[0] === '-') {
            temp = number.substring(1);
            i = 1;
        }
        // var count = occurrencesInString(number, '.', false);
        var index = number.indexOf('.');
        while (i < number.length) {
            if ((number[i] === '.' && index < i) || (!isNumeric(number[i]) && number[i] !== '.')) {
                number = number.slice(0, i) + number.slice(i + 1, number.length);
                removedChar += 1;
            } else {
                i++;
            }
        }

        return {
            value: number,
            removedChar: removedChar
        };
    };

    var getCaretPosition = function(el) {
        if (el.selectionStart) {
            return el.selectionStart;
        } else if (document.selection) {
            el.focus();

            var r = document.selection.createRange();
            if (r === null) {
                return 0;
            }

            var re = el.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);

            return rc.text.length;
        }
        return 0;
    };

    var setCaretPosition = function(ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    /**
     * If the param has non escaped characters, escape them
     * @param  value
     */
    var validString = function(value) {
        value = value.replace(/(^|\b|[^\\])(\\\\)*\\$/g, '$&\\');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\")/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\*)/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\/)/g, '$1\\$2');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Return the first valid char from a string
     * @param  value
     */
    var validChar = function(value) {
        value = value.replace(/\$*/g, '');
        if (/^\\/g.test(value)) {
            if (/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g.test(value)) {
                value = value.match(/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g)[0];
            } else if (/^\\[bfnrtv0']/g.test(value)) {
                value = value.substring(0, 2);
            } else if (/^\\[%#!|"@~&?\/()=^`[+\]*,{};.:-]/g.test(value)) {
                value = value.charAt(1);
            } else {
                value = '\\\\';
            }
        } else if (/^(\')/g.test(value)) {
            value = '\\\'';
        } else {
            value = value.charAt(0);
        }

        return value;
    };

    /**
     * If the param has a comment end, omit it
     * @param  value
     */
    var validComment = function(value) {
        value = value.replace(/\*\//g, '');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Transform a function or variable name to make it "legal" in Arduino coding language
     * @param  name
     */
    var validName = function(name, softwareArrays) {
        var reservedWords = 'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bool,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts';
        reservedWords = reservedWords.split(',');
        if (name && name.length > 0) {
            var i = 0,
                j = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            //Remove all diacritics
            name = removeDiacritics(name);
            i = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            for (j = 0; j < reservedWords.length; j++) {
                if (name === reservedWords[j]) {
                    name += '_';
                    break;
                }
            }
            var counter = [];
            if (softwareArrays) {
                var softwareVars = softwareArrays.softwareVars.concat(softwareArrays.voidFunctions, softwareArrays.returnFunctions);
                for (j = 0; j < softwareVars.length; j++) {
                    if (name === softwareVars[j].name) {
                        counter.push(j);

                    }
                }
                if (counter.length === 2) {
                    j = counter[1];
                    console.log('name === softwareVars[j].name', name === softwareVars[j].name, name, softwareVars[j].name);
                    if (isNaN(name[name.length - 1])) {
                        name += '1';
                    } else {
                        i = 0;
                        var number, it;
                        while (isNaN(name[i])) {
                            it = i;
                            i++;
                        }
                        number = parseInt(name.substring(it + 1, name.length), 10);
                        number += 1;
                        name = name.substring(0, it + 1);
                        name += number.toString();
                    }
                }
            }
        }
        return name;
    };

    var appendArrayInOneTime = function($container, $items) {
        var rawArray = $.map(
            $items,
            function(value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );

        // Add the raw DOM array to the current collection.
        $container.append(rawArray);
    };

    var generateUUID = function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    var getNumericStyleProperty = function(style, prop) {
        return parseInt(style.getPropertyValue(prop), 10);
    };

    var drawDropdownOptions = function($element, arrayOptions) {
        var $tempElement, i,
            $items = [];

        $element.html('');
        for (i = 0; i < arrayOptions.length; i++) {
            $tempElement = $('<option>').attr({
                'data-var-id': arrayOptions[i].id,
                value: arrayOptions[i].name,
                'data-reference': arrayOptions[i].uid
            }).html(arrayOptions[i].name);
            $items.push($tempElement);
        }
        appendArrayInOneTime($element, $items);
    };

    var itsOver = function(dragConnector, dropConnector, margin) {
        margin = margin || 0;
        var dragConnectorOffset = dragConnector.offset(),
            dropConnectorOffset = dropConnector.offset();
        return dragConnectorOffset.left < (dropConnectorOffset.left + dropConnector[0].clientWidth + margin) && (dragConnectorOffset.left + dragConnector[0].clientWidth) > (dropConnectorOffset.left - margin) && dragConnectorOffset.top < (dropConnectorOffset.top + dropConnector[0].clientHeight + margin) && (dragConnectorOffset.top + dragConnector[0].clientHeight) > (dropConnectorOffset.top - margin);
    };

    var sameConnectionType = function(dragBloq, dropBloq, dropConnectorAcceptType, bloqs, IOConnectors, softwareArrays, componentsArray) {
        var dragConnectorType = getTypeFromBloq(dragBloq, bloqs, IOConnectors, softwareArrays, componentsArray);
        //if acceptType its and object, the acceptType comes from a dinamic dropdown.
        if (Object.prototype.toString.call(dropConnectorAcceptType) === '[object Object]') {
            dropConnectorAcceptType = getTypeFromDynamicDropdown(dropBloq, dropConnectorAcceptType, softwareArrays);
        }
        //we assume that float = int its a valid connection because c do a internal cast
        return (dragConnectorType === 'all') || (dropConnectorAcceptType.indexOf('all') !== -1) || (dropConnectorAcceptType.indexOf(dragConnectorType) !== -1) || ((dragConnectorType === 'float') && (dropConnectorAcceptType.indexOf('int') !== -1)) || ((dragConnectorType === 'int') && (dropConnectorAcceptType.indexOf('float') !== -1));
    };
    //getConnectorsUuidByAcceptType
    var getTypeFromDynamicDropdown = function(bloq, typeObject, softwareArrays) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').val();
        var selectedVarNameOnDropdown = attributeValue || selectedValue;

        if (!selectedVarNameOnDropdown) {
            //rare bug, maybe the timeout, cant get the value of a options create disabled and enabled later
            //selectedVarNameOnDropdown = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"] option:first-child').val();
            ////or maybe a empty set var bloq :D
            //throw 'check this!';
        }

        var varData = _.find(softwareArrays[typeObject.options], {
            name: selectedVarNameOnDropdown
        });
        if (varData) {
            if (typeObject.pointer) {
                varData.type = varData.type.replace(' *', '');
            }
            return varData.type;
        }
        return '';

    };
    var getFromDynamicDropdownType = function(bloq, idDropdown, options, softwareArrays, componentsArray) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').val();
        var varName = attributeValue || selectedValue;

        var softVar = _.find(softwareArrays[options], {
            name: varName
        });
        if (!softVar) {
            for (var j in componentsArray.sensors) {
                if (componentsArray.sensors[j].name === varName) {
                    if (componentsArray.sensors[j].type === 'Joystick' || componentsArray.sensors[j].type === 'LineFollower') {
                        return 'float *';
                    } else if (componentsArray.sensors[j].type === 'ButtonPad') {
                        return 'char';
                    } else {
                        return 'float';
                    }
                }
            }
        }
        if (softVar) {
            if (bloq.bloqData && bloq.bloqData.returnType && bloq.bloqData.returnType.pointer) {
                softVar.type = softVar.type.replace(' *', '');
            }
            return softVar.type;
        }
        return '';
    };

    /**
     * Get the extreme of the tree, the root or the leaf
     * @param  bloqUuid
     * @param  connectors
     * @param  bloqs
     * @param  connectorPosition 0: tipical position of the top-connector, 1: bottom-connector
     * @return
     */
    var getTreeExtreme = function(bloqUuid, bloqs, connectors, connectorPosition) {
        if (connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo) {
            return getTreeExtreme(connectors[connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo].bloqUuid, bloqs, connectors, connectorPosition);
        } else {
            return bloqs[bloqUuid].connectors[connectorPosition];
        }
    };
    /**
     * From a bloq, this function get the bottom Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getLastBottomConnectorUuid = function(bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 1);
    };
    /**
     * From a bloq, this function get the top Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getFirstTopConnectorUuid = function(bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 0);
    };
    /**
     * Get the output connector from a output bloq
     * @param  bloq
     * @param  IOConnectors
     * @return              the connector
     */
    var getOutputConnector = function(bloq, IOConnectors) {
        var i = 0,
            outputConnector = null;
        while (!outputConnector && (i < bloq.IOConnectors.length)) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--output') {
                outputConnector = IOConnectors[bloq.IOConnectors[i]];
            }
            i++;
        }
        if (!outputConnector) {
            throw 'outputBloq has no connector-output';
        } else {
            return outputConnector;
        }
    };
    /**
     * Receive a bloq, and if is top go to the bottom connector until the end, and gice the size
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqIsTop  [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getNodesHeight = function(bloqUuid, bloqIsTop, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var connectorPosition;
        if (bloqIsTop) {
            connectorPosition = 1;
        } else {
            connectorPosition = 0;
        }
        if (connectors[bloq.connectors[connectorPosition]].connectedTo) {
            return bloq.$bloq.outerHeight(true) + getNodesHeight(connectors[connectors[bloq.connectors[connectorPosition]].connectedTo].bloqUuid, bloqIsTop, bloqs, connectors);
        } else {
            return bloq.$bloq.outerHeight(true);
        }
    };
    /**
     * You can give any node of the tree, and return the size in px
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getTreeHeight = function(bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var topConnectorUuid = connectors[bloq.connectors[0]].connectedTo,
            bottomConnectorUuid = connectors[bloq.connectors[1]].connectedTo;
        var height = bloq.$bloq.outerHeight(true);
        if (topConnectorUuid) {
            height += getNodesHeight(connectors[topConnectorUuid].bloqUuid, false, bloqs, connectors);
        }
        if (bottomConnectorUuid) {
            height += getNodesHeight(connectors[bottomConnectorUuid].bloqUuid, true, bloqs, connectors);
        }
        return height;
    };
    /**
     * draw in console a branch
     * @param  {[type]} bloqs            [description]
     * @param  {[type]} connectors       [description]
     * @param  {[type]} topConnectorUuid [description]
     * @return {[type]}                  [description]
     */
    var drawBranch = function(bloqs, connectors, topConnectorUuid) {
        var branchUuid = connectors[topConnectorUuid].bloqUuid;
        console.log('          ******* - branch - *********', branchUuid);
        console.log('          ', bloqs[branchUuid].bloqData.name);
        console.log('          connector--top:', bloqs[branchUuid].connectors[0], 'connectedTo', connectors[bloqs[branchUuid].connectors[0]].connectedTo);
        console.log('          connector--bottom:', bloqs[branchUuid].connectors[1], 'connectedTo', connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        if (bloqs[branchUuid].connectors[2]) {
            console.log('       connector--root:', bloqs[branchUuid].connectors[2], 'connectedTo', connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            console.log('                       ******* -  content **********');
            if (connectors[bloqs[branchUuid].connectors[2]].connectedTo) {
                drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            }
            console.log('                       ******* - end content **********');
        }
        if (connectors[bloqs[branchUuid].connectors[1]].connectedTo) {
            drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        }
    };
    /**
     * Draw in console the tree
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var drawTree = function(bloqs, connectors) {
        console.log(bloqs);
        //buscamos los tipo statement q no tienen un top conectado
        for (var uuid in bloqs) {
            //console.log(bloqs[uuid]);
            if (bloqs[uuid].connectors[0] && !connectors[bloqs[uuid].connectors[0]].connectedTo) {
                switch (bloqs[uuid].bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        console.log('******* - tree - *********', uuid);
                        console.log(bloqs[uuid].bloqData.name);
                        console.log('connector--top:', bloqs[uuid].connectors[0], 'connectedTo', connectors[bloqs[uuid].connectors[0]].connectedTo);
                        console.log('connector--bottom:', bloqs[uuid].connectors[1], 'connectedTo', connectors[bloqs[uuid].connectors[1]].connectedTo);
                        if (bloqs[uuid].connectors[2]) {
                            console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                            console.log('           ccccccc -  content ccccccc');
                            if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                                drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                            }
                            console.log('           ccccccc - end content ccccccc');
                        }
                        if (connectors[bloqs[uuid].connectors[1]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[1]].connectedTo);
                        }
                        break;
                    case 'group':
                        console.log('******* - Group - *********', uuid);
                        console.log(bloqs[uuid].bloqData.name);
                        console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                        console.log('           ccccccc -  content ccccccc');
                        if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                        }
                        console.log('           ccccccc - end content ccccccc');
                        break;
                }
            }
        }
    };
    /**
     * get all the connectors of a branch
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getBranchsConnectors = function(bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqBranchUuid, connectors, bloqs));
        }
        //si tiene hijos
        if (bloq.connectors[2] && connectors[bloq.connectors[2]].connectedTo) {
            var bloqChildUuid = connectors[connectors[bloq.connectors[2]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqChildUuid, connectors, bloqs));
        }
        return result;
    };
    var getBranchsConnectorsNoChildren = function(bloqUuid, connectors, bloqs) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectorsNoChildren(bloqBranchUuid, connectors, bloqs));
        }
        return result;
    };

    var getConnectorsUuidByAcceptType = function(IOConnectors, type) {
        var result = [];
        for (var key in IOConnectors) {
            if (IOConnectors[key].data.acceptType.indexOf('type') !== -1) {
                result.push(IOConnectors[key].uuid);
            }
        }
        return result;
    };
    var getNotConnected = function(IOConnectors, uuids) {
        var result = [];
        for (var i = 0; i < uuids.length; i++) {
            if (!IOConnectors[uuids[i]].connectedTo) {
                result.push(uuids[i]);
            }
        }
        return result;
    };
    var getInputsConnectorsFromBloq = function(IOConnectors, bloqs, bloq) {
        var result = [];
        var uuid;
        // connectedBloq;
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            uuid = bloq.IOConnectors[i];
            if (IOConnectors[bloq.IOConnectors[i]] && IOConnectors[uuid].data.type === 'connector--input') {
                result.push(uuid);
            }
        }
        return result;
    };

    var removeInputsConnectorsFromBloq = function(IOConnectors, bloq) {
        //remove visually all bloqInputs
        bloq.$contentContainer.children('.bloqinput').remove();
        bloq.$contentContainer.children('.removabletext').remove();
        //remove all IOConnectors
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--input') {
                delete IOConnectors[bloq.IOConnectors[i]];
            }
        }
    };
    var generateBloqInputConnectors = function(bloq) {
        var uuid;
        for (var i = 0; i < bloq.content.length; i++) {
            for (var j = 0; j < bloq.content[i].length; j++) {
                if (bloq.content[i][j].alias === 'bloqInput') {
                    uuid = generateUUID();
                    bloq.content[i][j].name = uuid;
                    bloq.connectors.push({
                        type: 'connector--input',
                        accept: 'connector--output',
                        name: uuid
                    });
                }
            }
        }
    };
    var getBloqByConnectorUuid = function(connectorUuid, bloqs, connectors) {
        return bloqs[connectors[connectorUuid].bloqUuid];
    };

    var translateRegExp = /translate\(((-)*(\d|\.)*)px, ((-)*(\d|\.)*)px\)/;
    var redrawTree = function(bloq, bloqs, connectors) {
        var rootBloq = getBloqByConnectorUuid(getFirstTopConnectorUuid(bloq.uuid, bloqs, connectors), bloqs, connectors);

        var somethingConnectedInBottomUuid = connectors[rootBloq.connectors[1]].connectedTo,
            transformProperties = translateRegExp.exec(rootBloq.$bloq[0].style.transform),
            top,
            left,
            branchBloq;

        if (transformProperties) {
            top = parseInt(transformProperties[4]);
            left = transformProperties[1];
        } else {
            top = parseInt(rootBloq.$bloq[0].style.top) || rootBloq.$bloq.position().top;
            left = parseInt(rootBloq.$bloq[0].style.left) || rootBloq.$bloq.position().left;
        }
        top += rootBloq.$bloq.outerHeight(true);

        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            branchBloq.$bloq[0].style.transform = 'translate(' + left + 'px,' + top + 'px)';
            top += branchBloq.$bloq.outerHeight(true);
            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;
        }

    };

    var itsARootConnector = function(connector) {
        return connector.data.type === 'connector--root';
    };

    var itsInsideAConnectorRoot = function(bloq, bloqs, connectors) {

        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            return itsARootConnector(connectedWithTopConnector) || itsInsideAConnectorRoot(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);

        } else {
            return false;
        }
    };

    var getClassName = function(bloq, bloqs, connectors) {
        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            var bloqConnected = getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors);
            if (itsARootConnector(connectedWithTopConnector) && (bloqConnected.bloqData.name === 'classChildren' || bloqConnected.bloqData.name === 'class')) {
                return bloqConnected.$bloq.find('[data-content-id="NAME"]').val();
            } else {
                return getClassName(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);
            }
        } else {
            return undefined;
        }
    };

    var jqueryObjectsArrayToHtmlToInsert = function(arrayToTransform) {
        var rawArray = $.map(
            arrayToTransform,
            function(value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );
        return rawArray;
    };

    var connectorIsInBranch = function(connectorUuid, topBloqUuid, bloqs, connectors) {
        var isInBloq = false;
        var i = 0;
        //miro si es uno de mis conectores
        while (!isInBloq && (i < bloqs[topBloqUuid].connectors.length)) {
            if (bloqs[topBloqUuid].connectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        i = 0;
        while (!isInBloq && (i < bloqs[topBloqUuid].IOConnectors.length)) {
            if (bloqs[topBloqUuid].IOConnectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        //si tengo hijos miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[2] && connectors[bloqs[topBloqUuid].connectors[2]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[2]].connectedTo].bloqUuid, bloqs, connectors);
        }
        //si tengo enganchado algo abajo miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[1] && connectors[bloqs[topBloqUuid].connectors[1]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[1]].connectedTo].bloqUuid, bloqs, connectors);
        }
        return isInBloq;
    };

    var hasClass = function(el, selector) {
        var className = ' ' + selector + ' ';

        if ((' ' + el.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1) {
            return true;
        }

        return false;
    };

    var getTypeFromBloq = function(bloq, bloqs, IOConnectors, softwareArrays, componentsArray) {
        var result;
        if (!bloq) {
            console.error('We cant get the type if we dont have a bloq');
        }
        if (!bloq.bloqData.returnType) {
            console.error('we cant get the type from a bloq without returnType ' + bloq.bloqData.name);
        }
        switch (bloq.bloqData.returnType.type) {
            case 'simple':
                result = bloq.bloqData.returnType.value;
                break;
            case 'fromInput':
                var contentData = _.find(bloq.bloqData.content[0], {
                    bloqInputId: bloq.bloqData.returnType.bloqInputId
                });
                var connector = _.find(IOConnectors, {
                    bloqUuid: bloq.uuid,
                    data: {
                        name: contentData.name
                    }
                });
                if (connector && connector.connectedTo) {
                    result = getTypeFromBloq(getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors), bloqs, IOConnectors, softwareArrays, componentsArray);
                } else {
                    result = '';
                }
                break;
            case 'fromDynamicDropdown':
                result = getFromDynamicDropdownType(bloq, bloq.bloqData.returnType.idDropdown, bloq.bloqData.returnType.options, softwareArrays, componentsArray);
                break;
            case 'fromDropdown':
                result = bloq.$bloq.find('[data-content-id="' + bloq.bloqData.returnType.idDropdown + '"]').val();
                break;
            case 'fromStaticDropdownProperty':
                result = getTypeFromStaticDropdownProperty(bloq);
                break;
            default:
                throw 'we cant get the type from this bloq: ' + bloq.bloqData.name + ' ' + JSON.stringify(bloq.bloqData.returnType);
        }
        return result;
    };

    var getTypeFromStaticDropdownProperty = function(bloq) {
        var type = '';
        var selectedValue = bloq.$bloq.find('[data-content-id="' + bloq.bloqData.returnType.idDropdown + '"]').val();
        if (selectedValue) {
            var dropdownData = _.find(bloq.bloqData.content[0], {
                id: bloq.bloqData.returnType.idDropdown
            });
            var optionData = _.find(dropdownData.options, {
                value: selectedValue
            });
            if (optionData.type) {
                type = optionData.type;
            }

        }
        return type;

    };

    var occurrencesInString = function(string, subString, allowOverlapping) {
        string += '';
        subString += '';
        if (subString.length <= 0) {
            return string.length + 1;
        }

        var n = 0,
            pos = 0;
        var step = (allowOverlapping) ? (1) : (subString.length);

        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                n++;
                pos += step;
            } else {
                break;
            }
        }
        return (n);
    };

    var getParent = function(bloq, bloqs, IOConnectors) {
        var connector = getOutputConnector(bloq, IOConnectors);
        return getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors);

    };

    var getArgsFromBloq = function(bloq, bloqs, IOConnectors) {
        var result;
        if (!bloq) {
            throw 'wadafak';
        }

        while (!bloq.bloqData.arguments) {
            bloq = getParent(bloq, bloqs, IOConnectors);
        }
        var contentData = _.find(bloq.bloqData.content[0], {
            bloqInputId: bloq.bloqData.arguments.bloqInputId
        });
        var connector = _.find(IOConnectors, {
            bloqUuid: bloq.uuid,
            data: {
                name: contentData.name
            }
        });
        if (connector && connector.connectedTo) {
            var childBloq = getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors);
            result = {
                code: 'any code here',
                bloq: childBloq.uuid,
                funcName: '',
                size: occurrencesInString(code, ',', false) + 1
            };
        } else {
            result = {
                code: '',
                bloq: '',
                funcName: '',
                size: 0
            };
        }
        return result;
    };

    var drawSoftwareVars = function(softwareArrays) {
        for (var i = 0; i < softwareArrays.softwareVars.length; i++) {
            console.log('name: ', softwareArrays.softwareVars[i].name, 'type: ', softwareArrays.softwareVars[i].type);
        }
    };

    var drawSoftwareArray = function(softwareArrays) {
        console.info('drawSoftwareArray');
        drawSoftwareVars(softwareArrays);
        console.info('returnFunctions');
        for (var i = 0; i < softwareArrays.returnFunctions.length; i++) {
            console.log('name: ', softwareArrays.returnFunctions[i].name, 'type: ', softwareArrays.returnFunctions[i].type);
        }
    };

    var fillSchemaWithContent = function(originalBloqSchema, data) {
        var bloqSchema = _.clone(originalBloqSchema, true),
            k,
            found;

        if (data && data.content) {
            for (var i = 0; i < data.content[0].length; i++) {

                switch (data.content[0][i].alias) {
                    case 'varInput':
                    case 'numberInput':
                    case 'stringInput':
                    case 'charInput':
                    case 'dynamicDropdown':
                    case 'staticDropdown':
                    case 'multilineCodeInput':
                    case 'multilineCommentInput':
                        k = 0;
                        found = false;
                        while (!found && (k < bloqSchema.content[0].length)) {
                            if (data.content[0][i].id === bloqSchema.content[0][k].id) {
                                found = true;
                                bloqSchema.content[0][k].value = data.content[0][i].value;
                            }
                            k++;
                        }
                        if (!found) {
                            throw 'Attribute on bloqStructure not found in definition';
                        }
                        break;
                    case 'bloqInput':
                        //we do nothing here
                        break;
                    default:
                        throw 'we cant build that option ' + data.content[0][i].alias;
                }
            }
        }

        return bloqSchema;
    };

    var checkPins = function(component) {

        if (component.pins) {
            for (var pinType in component.pins) {
                component.pins[pinType].forEach(function(pin) {
                    component.pin[pin] = component.pin[pin] || ''
                });
            }
        }

        return component;
    };

    var splice = function(string, idx, rem, s) {

        return (string.slice(0, idx) + s + string.slice(idx + Math.abs(rem)));
    };

    var executeFunctionOnConnectedStatementBloqs = function(functionToExecute, bloq, bloqs, connectors) {
        var connector = connectors[bloq.connectors[1]].connectedTo,
            tempBloq;

        while (connector) {
            tempBloq = getBloqByConnectorUuid(connector, bloqs, connectors);
            tempBloq[functionToExecute]();
            connector = connectors[tempBloq.connectors[1]].connectedTo;
        }
    };

    var timers = [];
    var delay = (function() {
        return function(callback, ms, elementId) {
            if (timers[elementId]) {
                clearTimeout(timers[elementId]);
            }
            timers[elementId] = setTimeout(callback, ms);
        };
    })();

    var defaultDiacriticsRemovalap = [{
        'base': 'A',
        'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
    }, {
        'base': 'AA',
        'letters': '\uA732'
    }, {
        'base': 'AE',
        'letters': '\u00C6\u01FC\u01E2'
    }, {
        'base': 'AO',
        'letters': '\uA734'
    }, {
        'base': 'AU',
        'letters': '\uA736'
    }, {
        'base': 'AV',
        'letters': '\uA738\uA73A'
    }, {
        'base': 'AY',
        'letters': '\uA73C'
    }, {
        'base': 'B',
        'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
    }, {
        'base': 'C',
        'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
    }, {
        'base': 'D',
        'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'
    }, {
        'base': 'DZ',
        'letters': '\u01F1\u01C4'
    }, {
        'base': 'Dz',
        'letters': '\u01F2\u01C5'
    }, {
        'base': 'E',
        'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
    }, {
        'base': 'F',
        'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
    }, {
        'base': 'G',
        'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
    }, {
        'base': 'H',
        'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
    }, {
        'base': 'I',
        'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
    }, {
        'base': 'J',
        'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
    }, {
        'base': 'K',
        'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
    }, {
        'base': 'L',
        'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
    }, {
        'base': 'LJ',
        'letters': '\u01C7'
    }, {
        'base': 'Lj',
        'letters': '\u01C8'
    }, {
        'base': 'M',
        'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
    }, {
        'base': 'N',
        'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
    }, {
        'base': 'NJ',
        'letters': '\u01CA'
    }, {
        'base': 'Nj',
        'letters': '\u01CB'
    }, {
        'base': 'O',
        'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
    }, {
        'base': 'OI',
        'letters': '\u01A2'
    }, {
        'base': 'OO',
        'letters': '\uA74E'
    }, {
        'base': 'OU',
        'letters': '\u0222'
    }, {
        'base': 'OE',
        'letters': '\u008C\u0152'
    }, {
        'base': 'oe',
        'letters': '\u009C\u0153'
    }, {
        'base': 'P',
        'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
    }, {
        'base': 'Q',
        'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
    }, {
        'base': 'R',
        'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
    }, {
        'base': 'S',
        'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
    }, {
        'base': 'T',
        'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
    }, {
        'base': 'TZ',
        'letters': '\uA728'
    }, {
        'base': 'U',
        'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
    }, {
        'base': 'V',
        'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
    }, {
        'base': 'VY',
        'letters': '\uA760'
    }, {
        'base': 'W',
        'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
    }, {
        'base': 'X',
        'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
    }, {
        'base': 'Y',
        'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
    }, {
        'base': 'Z',
        'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
    }, {
        'base': 'a',
        'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
    }, {
        'base': 'aa',
        'letters': '\uA733'
    }, {
        'base': 'ae',
        'letters': '\u00E6\u01FD\u01E3'
    }, {
        'base': 'ao',
        'letters': '\uA735'
    }, {
        'base': 'au',
        'letters': '\uA737'
    }, {
        'base': 'av',
        'letters': '\uA739\uA73B'
    }, {
        'base': 'ay',
        'letters': '\uA73D'
    }, {
        'base': 'b',
        'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
    }, {
        'base': 'c',
        'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
    }, {
        'base': 'd',
        'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
    }, {
        'base': 'dz',
        'letters': '\u01F3\u01C6'
    }, {
        'base': 'e',
        'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
    }, {
        'base': 'f',
        'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
    }, {
        'base': 'g',
        'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
    }, {
        'base': 'h',
        'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
    }, {
        'base': 'hv',
        'letters': '\u0195'
    }, {
        'base': 'i',
        'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
    }, {
        'base': 'j',
        'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
    }, {
        'base': 'k',
        'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
    }, {
        'base': 'l',
        'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
    }, {
        'base': 'lj',
        'letters': '\u01C9'
    }, {
        'base': 'm',
        'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
    }, {
        'base': 'n',
        'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
    }, {
        'base': 'nj',
        'letters': '\u01CC'
    }, {
        'base': 'o',
        'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
    }, {
        'base': 'oi',
        'letters': '\u01A3'
    }, {
        'base': 'ou',
        'letters': '\u0223'
    }, {
        'base': 'oo',
        'letters': '\uA74F'
    }, {
        'base': 'p',
        'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
    }, {
        'base': 'q',
        'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
    }, {
        'base': 'r',
        'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
    }, {
        'base': 's',
        'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
    }, {
        'base': 't',
        'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
    }, {
        'base': 'tz',
        'letters': '\uA729'
    }, {
        'base': 'u',
        'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
    }, {
        'base': 'v',
        'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
    }, {
        'base': 'vy',
        'letters': '\uA761'
    }, {
        'base': 'w',
        'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
    }, {
        'base': 'x',
        'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
    }, {
        'base': 'y',
        'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
    }, {
        'base': 'z',
        'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
    }];

    var diacriticsMap = {};
    for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
        var letters = defaultDiacriticsRemovalap[i].letters;
        for (var j = 0; j < letters.length; j++) {
            diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
        }
    }

    var removeDiacritics = function(str) {
        return str.replace(/[^\u0000-\u007E]/g, function(a) {
            return diacriticsMap[a] || a;
        }).replace(/[^\w\s]/gi, '').replace(/ /g, '_');
    };

    var getEmptyComponentsArray = function() {
        return {
            leds: [],
            rgbs: [],
            sensors: [],
            buzzers: [],
            servos: [],
            continuousServos: [],
            oscillators: [],
            lcds: [],
            serialElements: [],
            clocks: [],
            hts221: [],
            barometer: [],
            robot: [],
            mkb_ultrasound: [],
            mkb_integrated_buzz: [],
            mkb_lightsensor: [],
            mkb_linefollower: [],
            mkb_integrated_RGB: []
        };
    };

    var getArduinoCode = function(componentsArray, program) {
        var varCode = getArduinoCodeFromBloq(program.vars),
            setupCode = getArduinoCodeFromBloq(program.setup),
            loopCode = getArduinoCodeFromBloq(program.loop);
        return varCode + setupCode + loopCode;
    };

    var getArduinoCodeFromBloq = function(bloq) {
        var code = '';
        if (bloq.enable) {
            var contentRegExp = new RegExp('{([A-Z0-9]+)}', 'g'),
                contentConnectionTypeRegExp = new RegExp('{([A-Z0-9]+\.connectionType)}', 'g'),
                regExpResult,
                contents = [];
            code = bloq.code;
            while (regExpResult = contentRegExp.exec(code)) {
                //console.log(regExpResult);
                contents.push(getContentFromBloq(regExpResult[1], bloq));
            }
            //twice bucle because regexp are not working fine
            for (var i = 0; i < contents.length; i++) {
                console.log('+++');
                console.log(contents[i].value);
                console.log((contents[i].value || '').replace(/ \*/g, ''));
                code = code.replace(new RegExp('{' + contents[i].id + '\.withoutAsterisk}', 'g'), (contents[i].value || '').replace(/ \*/g, ''));
                code = code.replace(new RegExp('{' + contents[i].id + '\.connectionType}', 'g'), contents[i].connectionType || '');
                code = code.replace(new RegExp('{' + contents[i].id + '}( )*', 'g'), contents[i].value || '');
            };

            //search for regular expressions:
            var reg = /(.*)\?(.*):(.*)/g;
            if (reg.test(code)) {
                code = eval(code); // jshint ignore:line
            }
            console.log(code);
        }
        return code;
    };

    var getContentFromBloq = function(contentId, bloq) {
        var content = {
            value: ''
        };

        if (contentId === 'STATEMENTS') {
            content.id = 'STATEMENTS';
            for (var i = 0; i < bloq.childs.length; i++) {
                content.value += getArduinoCodeFromBloq(bloq.childs[i]);
            }
        } else {
            content = _.filter(bloq.content[0], function(elem) {
                if (elem.id === contentId) {
                    return true;
                } else if (elem.bloqInputId === contentId) {
                    elem.id = contentId;
                    return true;
                }
            })[0];
        }
        if (content.alias === 'bloqInput' && content.value) {
            content.connectionType = getTypeFromBloqStructure(content.value);
            content.value = getArduinoCodeFromBloq(content.value);
        }
        return content;
    };

    var getTypeFromBloqStructure = function(bloq) {
        var type = '',
            content = null;
        if (bloq.returnType) {
            switch (bloq.returnType.type) {
                case 'simple':
                    type = bloq.returnType.value;
                    break;
                case 'fromDropdown':
                    content = getContentFromBloq(bloq.returnType.idDropdown, bloq);
                    type = content.value;
                    break;
                case 'fromDynamicDropdown':
                    //type = bloq.returnType.value;
                    break;
                case 'fromInput':
                    //type = bloq.returnType.value;
                    break;
                default:
                    throw 'Return type undefined';
            }
        } else {
            throw 'We cant get type from a bloq witouth a returnType';
        }
        return type;
    };

    /**
     * Return the connectors from the second bloq that can connect with any connector in bloq1
     * return null if cant find a valid connector
     * First bloq is moving bloq
     */
    function canConnectStatementBloqs(bloq1, bloq2, bloqs, connectors) {
        var result = [];
        if (canConnectConnectors(bloq1.connectors[0], bloq2.connectors[1], connectors)) {
            // we must chek of its some bloq connected, to ensure that the connector and the top or bottom branch
            // can connect to ensure the bloqs join
            if (connectors[bloq2.connectors[1]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[1]].connectedTo, getLastBottomConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[1]);
                }
            } else {
                result.push(bloq2.connectors[1]);
            }
        }
        if (canConnectConnectors(bloq1.connectors[1], bloq2.connectors[0], connectors)) {
            if (connectors[bloq2.connectors[0]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[0]].connectedTo, getFirstTopConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[0]);
                }
            } else {
                result.push(bloq2.connectors[0]);
            }
        }
        if (bloq1.connectors[2] && canConnectConnectors(bloq1.connectors[2], bloq2.connectors[0], connectors)) {
            result.push(bloq2.connectors[0]);
        }
        if (bloq2.connectors[2] && canConnectConnectors(bloq1.connectors[0], bloq2.connectors[2], connectors)) {
            if (connectors[bloq2.connectors[2]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[2]].connectedTo, getLastBottomConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[2]);
                }
            } else {
                result.push(bloq2.connectors[2]);
            }
        }
        if (result.length === 0) {
            result = null;
        }
        return result;
    };

    function canConnectConnectors(connectorUuid1, connectorUuid2, connectors) {
        var connector1 = connectors[connectorUuid1],
            connector2 = connectors[connectorUuid2];

        return ((connector1.data.type === connector2.data.accept) && canConnectAliases(connector1.data.acceptedAliases, connector2.data.acceptedAliases));
    };

    function canConnectAliases(acceptedAliases1, acceptedAliases2) {
        // if (acceptedAliases1 && acceptedAliases2) {
        //     console.log('---');
        //     console.log(acceptedAliases1, acceptedAliases2);
        //     console.log(arrayIntersection([acceptedAliases1, acceptedAliases2]));
        // }

        return (!acceptedAliases1 && !acceptedAliases2) || (acceptedAliases1 && acceptedAliases2 && (arrayIntersection([acceptedAliases1, acceptedAliases2]).length > 0)) || (!acceptedAliases1 && (acceptedAliases2.indexOf('all') !== -1)) || (!acceptedAliases2 && (acceptedAliases1.indexOf('all') !== -1));
    }

    function arrayIntersection(arrays) {
        return arrays.shift().filter(function(v) {
            return arrays.every(function(a) {
                return a.indexOf(v) !== -1;
            });
        });
    }

    function findAncestor(el, className) {
        var result;
        while (!result && el) {
            if (el.className.indexOf(className) !== -1) {
                result = el;
            } else {
                el = el.parentElement;
            }
        }
        return result;
    }

    bloqsUtils.validString = validString;
    bloqsUtils.validChar = validChar;
    bloqsUtils.validComment = validComment;
    bloqsUtils.delay = delay;
    bloqsUtils.validNumber = validNumber;
    bloqsUtils.validName = validName;
    bloqsUtils.generateUUID = generateUUID;
    bloqsUtils.getNumericStyleProperty = getNumericStyleProperty;
    bloqsUtils.itsOver = itsOver;
    bloqsUtils.getLastBottomConnectorUuid = getLastBottomConnectorUuid;
    bloqsUtils.getFirstTopConnectorUuid = getFirstTopConnectorUuid;
    bloqsUtils.getOutputConnector = getOutputConnector;
    bloqsUtils.getTreeHeight = getTreeHeight;
    bloqsUtils.getNodesHeight = getNodesHeight;
    bloqsUtils.drawTree = drawTree;
    bloqsUtils.drawBranch = drawBranch;
    bloqsUtils.getBranchsConnectors = getBranchsConnectors;
    bloqsUtils.getBranchsConnectorsNoChildren = getBranchsConnectorsNoChildren;
    bloqsUtils.getConnectorsUuidByAcceptType = getConnectorsUuidByAcceptType;
    bloqsUtils.getNotConnected = getNotConnected;
    bloqsUtils.getInputsConnectorsFromBloq = getInputsConnectorsFromBloq;
    bloqsUtils.generateBloqInputConnectors = generateBloqInputConnectors;
    bloqsUtils.getBloqByConnectorUuid = getBloqByConnectorUuid;
    bloqsUtils.redrawTree = redrawTree;
    bloqsUtils.itsARootConnector = itsARootConnector;
    bloqsUtils.itsInsideAConnectorRoot = itsInsideAConnectorRoot;
    bloqsUtils.jqueryObjectsArrayToHtmlToInsert = jqueryObjectsArrayToHtmlToInsert;
    bloqsUtils.connectorIsInBranch = connectorIsInBranch;
    bloqsUtils.hasClass = hasClass;
    bloqsUtils.appendArrayInOneTime = appendArrayInOneTime;
    bloqsUtils.drawDropdownOptions = drawDropdownOptions;
    bloqsUtils.getTypeFromBloq = getTypeFromBloq;
    bloqsUtils.drawSoftwareVars = drawSoftwareVars;
    bloqsUtils.drawSoftwareArray = drawSoftwareArray;
    bloqsUtils.sameConnectionType = sameConnectionType;
    bloqsUtils.getFromDynamicDropdownType = getFromDynamicDropdownType;
    bloqsUtils.fillSchemaWithContent = fillSchemaWithContent;
    bloqsUtils.getArgsFromBloq = getArgsFromBloq;
    bloqsUtils.removeInputsConnectorsFromBloq = removeInputsConnectorsFromBloq;
    bloqsUtils.getParent = getParent;
    bloqsUtils.checkPins = checkPins;
    bloqsUtils.splice = splice;
    bloqsUtils.translateRegExp = translateRegExp;
    bloqsUtils.executeFunctionOnConnectedStatementBloqs = executeFunctionOnConnectedStatementBloqs;
    bloqsUtils.getClassName = getClassName;
    bloqsUtils.getCaretPosition = getCaretPosition;
    bloqsUtils.setCaretPosition = setCaretPosition;
    bloqsUtils.getEmptyComponentsArray = getEmptyComponentsArray;
    bloqsUtils.getArduinoCode = getArduinoCode;
    bloqsUtils.canConnectAliases = canConnectAliases;
    bloqsUtils.canConnectStatementBloqs = canConnectStatementBloqs;
    bloqsUtils.findAncestor = findAncestor;


    return bloqsUtils;

})(window.bloqsUtils = window.bloqsUtils || {}, _, undefined);

'use strict';
(function(bloqsTooltip) {

    var $currentField, $tooltip;

    function addBloqsTooltip($field){
        if($currentField){
            destroyTooltip();
        };
        $currentField = $field;
        $tooltip = createTooltip();
        $currentField.append($tooltip);
    };

    function createTooltip(){
        var $tooltip = $('<div>').attr({
                'id': 'bloqs-tooltip',
                'class': 'tooltip',
                'data-literal':'Im a happy tooltip'
            });

        $tooltip.append('<div class="flecha"></div>');

        return $tooltip;
    };

    function destroyTooltip(){
        if($tooltip){
            $tooltip.remove();
        }
    };

    function showTooltip(text, positionX, positionY){
        $tooltip.css({
            display: 'block',
            top:positionX,
            left: positionY
        });
        $tooltip.attr({
            'data-literal': text
        });
    };

    function hideTooltip(){
        $tooltip.css({
            display:'none'
        });
    };

    bloqsTooltip.addBloqsTooltip = addBloqsTooltip;

    return bloqsTooltip;

})(window.bloqsTooltip = window.bloqsTooltip || {}, undefined);


'use strict';
(function(pythonGeneration) {

    var INDENT_DEFAULT_CHARACTER = '    ';
    var PARAMS_REGEXP = /{(.*?)}/;
    var params = {
        indentCharacter: INDENT_DEFAULT_CHARACTER
    };

    var imports = {},
        instances = {};

    function getCode(bloqFullStructure) {
        console.log('getting code', bloqFullStructure);
        imports = {};
        instances = {};

        var code = '# coding=utf-8\n\n';

        var bloqsCode = getCodeFromBLoq(bloqFullStructure);
        var propiedad;
        //after bloqscode to reuse the bucle to fill libraries and instance dependencies
        var importsCode = '';
        for (propiedad in imports) {
            importsCode += 'import ' + propiedad + '\n';
        }

        var instancesCode = '';
        for (propiedad in instances) {
            instancesCode += propiedad + ' = ' + instances[propiedad] + '.' + instances[propiedad] + '()\n';
        }


        code += importsCode + '\n\n';
        code += instancesCode + '\n\n';
        code += bloqsCode + '\n\n';
        return code;
    }

    function getCodeFromBLoq(bloqFullStructure) {
        console.log('getting code from bloq', bloqFullStructure);

        var codeLines = bloqFullStructure.python.codeLines,
            aliases = bloqFullStructure.content[0],
            childs = bloqFullStructure.childs,
            childsCode = '',
            aliasesValuesHashMap = {},
            value,
            code = '',
            tempCode,
            match,
            numberOfIndents;

        if (bloqFullStructure.python.libraries) {
            for (var i = 0; i < bloqFullStructure.python.libraries.length; i++) {
                imports[bloqFullStructure.python.libraries[i]] = true;
            }
        }

        if (bloqFullStructure.python.needInstanceOf) {
            for (var i = 0; i < bloqFullStructure.python.needInstanceOf.length; i++) {
                instances[bloqFullStructure.python.needInstanceOf[i].name] = bloqFullStructure.python.needInstanceOf[i].type;
            }
        }

        if (aliases) {
            for (var i = 0; i < aliases.length; i++) {
                if (aliases[i].id) {
                    aliasesValuesHashMap[aliases[i].id] = aliases[i].value;
                } else if (aliases[i].bloqInputId && aliases[i].value) {
                    aliasesValuesHashMap[aliases[i].bloqInputId] = getCodeFromBLoq(aliases[i].value);
                }
            }
        }
        if (childs) {
            for (var i = 0; i < childs.length; i++) {
                childsCode += getCodeFromBLoq(childs[i]);
            }
            aliasesValuesHashMap.STATEMENTS = childsCode;
        }

        for (var i = 0; i < codeLines.length; i++) {
            numberOfIndents = (codeLines[i].indentation || 0);
            if (codeLines[i].conditional) {
                tempCode = codeLines[i].conditional.code[aliasesValuesHashMap[codeLines[i].conditional.aliasId]];
            } else {
                tempCode = codeLines[i].code;
            }

            //searchGroups
            match = PARAMS_REGEXP.exec(tempCode);
            while (match) {
                console.log('match!', match);
                console.log(aliasesValuesHashMap[match[1]]);
                tempCode = tempCode.replace(match[0], aliasesValuesHashMap[match[1]]);
                match = PARAMS_REGEXP.exec(tempCode);
            }

            tempCode = tempCode.replace(/^/gm, params.indentCharacter.repeat(numberOfIndents));

            if (bloqFullStructure.type != 'output') {
                tempCode += '\n';
            }

            code += tempCode;
        }
        return code;
    }

    pythonGeneration.getCode = getCode;
    pythonGeneration.params = params;

    return pythonGeneration;

})(window.pythonGeneration = window.pythonGeneration || {}, undefined);

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

'use strict';
(function(bloqsSuggested, bloqsLanguages, bloqsUtils) {

    var suggestedWindow,
        header,
        headerTitle,
        bloqsContainer,
        bloqSchemas,
        windowParent,
        suggestedBloqs,
        showWindowCallback;

    function init(suggestionWindowParent, schemas) {
        windowParent = suggestionWindowParent || windowParent;
        bloqSchemas = schemas || bloqSchemas;
    }

    function showSuggestedWindow(params) {
        if (bloqSchemas) {
            params = params || {};

            params.workspaceWidth = params.workspaceWidth || 0;
            params.workspaceHeight = params.workspaceHeight || 0;

            params.launcherTopPoint = params.launcherTopPoint || 0;
            params.launcherBottomPoint = params.launcherBottomPoint || 0;


            params.suggestedBloqs = params.suggestedBloqs || [];
            params.suggestedText = params.suggestedText || '';
            params.fieldOffsetTop = params.fieldOffsetTop || 0;
            params.fieldOffsetLeft = params.fieldOffsetLeft || 0;
            params.fieldOffsetRight = params.fieldOffsetRight || 0;
            params.fieldScrollTop = params.fieldScrollTop || 0;
            params.fieldScrollLeft = params.fieldScrollLeft || 0;



            showWindowCallback = params.showWindowCallback;
            console.log('params.suggestedBloqs', params.suggestedBloqs);
            showWindow();
            if (params.suggestedText) {
                setSuggestedText(params.suggestedText);
            }
            moveWindow({
                launcherTopPoint: params.launcherTopPoint,
                launcherHeight: params.launcherHeight,
                launcherBottomPoint: params.launcherBottomPoint,
                suggestedWindowWidth: suggestedWindow.offsetWidth,
                suggestedWindowHeight: suggestedWindow.offsetHeight,
                workspaceHeight: params.workspaceHeight,
                workspaceWidth: params.workspaceWidth,
                fieldOffsetTop: params.fieldOffsetTop,
                fieldOffsetLeft: params.fieldOffsetLeft,
                fieldOffsetRight: params.fieldOffsetRight,
                fieldScrollTop: params.fieldScrollTop,
                fieldScrollLeft: params.fieldScrollLeft
            });

            if (params.suggestedBloqs && (params.suggestedBloqs.length > 0)) {
                createBloqsInside(params.suggestedBloqs);

            } else {
                setNoBloqsSuggestedText(params.noSuggestedText);
                console.log('no bloqs suggested');
            }

        } else {
            console.error('You must set the bloqSchemas');
        }
    }

    function showWindow() {
        if (!suggestedWindow) {
            header = createHeader();
            suggestedWindow = document.createElement('div');
            suggestedWindow.className = 'suggestion-window';

            bloqsContainer = document.createElement('div');
            bloqsContainer.className = 'bloqs-container';

            var topTriangle = document.createElement('div');
            topTriangle.className += 'triangle top';

            var bottomTriangle = document.createElement('div');
            bottomTriangle.className += 'triangle bottom';

            suggestedWindow.appendChild(topTriangle);
            suggestedWindow.appendChild(header);
            suggestedWindow.appendChild(bloqsContainer);
            suggestedWindow.appendChild(bottomTriangle);

            windowParent.appendChild(suggestedWindow);
        } else {
            suggestedWindow.className = suggestedWindow.className.replace('hide', '');
        }
        suggestedBloqs = [];
        document.addEventListener('mousedown', actionWithWindowOpenListener);
        document.addEventListener('touchstart', actionWithWindowOpenListener);
        window.addEventListener('bloqs:mousedown', actionWithWindowOpenListener);
        window.addEventListener('bloqs:dragend', onSuggestedBloqDragEnd);

        return suggestedWindow;
    }

    function hideWindow() {
        if (suggestedWindow.className.indexOf('hide') === -1) {
            suggestedWindow.className += ' hide';
        }
        document.removeEventListener('mousedown', actionWithWindowOpenListener);
        document.removeEventListener('touchstart', actionWithWindowOpenListener);
        window.removeEventListener('bloqs:mousedown', actionWithWindowOpenListener);
        window.removeEventListener('bloqs:dragend', onSuggestedBloqDragEnd);
    }

    function moveWindow(params) {
        console.log('place window in the available space', params);
        suggestedWindow.className = suggestedWindow.className.replace(' right', '');
        suggestedWindow.className = suggestedWindow.className.replace(' top', '');

        var heightExtraOffset = 6,
            widthExtraOffset = 21,
            finalPoint = {},
            bottomFreeSpace = params.workspaceHeight + params.fieldOffsetTop - params.launcherBottomPoint.top,
            topFreeSpace = params.launcherTopPoint.top - params.fieldOffsetTop,
            heightNeededSpace = params.suggestedWindowHeight + heightExtraOffset,
            rightFreeSpace = params.workspaceWidth - params.fieldOffsetRight - (params.launcherBottomPoint.left - params.fieldOffsetLeft),
            leftFreeSpace = params.launcherBottomPoint.left - params.fieldOffsetLeft,
            widthNeededSpace = params.suggestedWindowWidth + widthExtraOffset;

        if ((bottomFreeSpace >= heightNeededSpace) || (bottomFreeSpace >= topFreeSpace) || (topFreeSpace < heightNeededSpace)) {
            finalPoint.top = params.launcherBottomPoint.top - params.fieldOffsetTop + heightExtraOffset + params.fieldScrollTop;
        } else {
            finalPoint.top = params.launcherTopPoint.top - params.fieldOffsetTop - params.suggestedWindowHeight - heightExtraOffset + params.fieldScrollTop;
            suggestedWindow.className += ' top';
        }

        if ((rightFreeSpace >= widthNeededSpace) || (rightFreeSpace >= leftFreeSpace) || (leftFreeSpace < widthNeededSpace)) {
            finalPoint.left = params.launcherBottomPoint.left - params.fieldOffsetLeft - widthExtraOffset + params.fieldScrollLeft;
        } else {
            finalPoint.left = params.launcherBottomPoint.left - params.fieldOffsetLeft - params.suggestedWindowHeight + widthExtraOffset + params.fieldScrollLeft;
            suggestedWindow.className += ' left';
        }


        suggestedWindow.style.transform = 'translate(' + finalPoint.left + 'px,' + finalPoint.top + 'px)';
    }

    function setSuggestedText(text) {
        if (headerTitle) {
            headerTitle.innerHTML = text;
        }
    }

    function setNoBloqsSuggestedText(text) {
        var noSuggested = document.createElement('p');
        noSuggested.innerHTML = text;
        if (bloqsContainer) {
            bloqsContainer.appendChild(noSuggested);
        }
    }

    function createHeader() {
        headerTitle = document.createElement('h3');
        var header = document.createElement('div');
        header.className += 'sugg-header';
        header.appendChild(headerTitle);

        return header;
    }

    function actionWithWindowOpenListener(evt) {
        console.log('actionWithWindowOpenListener', evt);
        var el;
        if (evt.detail !== 1) {
            el = evt.detail;
        } else {
            el = evt.target;
        }

        if (!bloqsUtils.findAncestor(el, 'suggestion-window')) {
            bloqSelected();
        }
    }

    function createBloqsInside(bloqsToBuild) {
        var bloq,
            tempContainer;
        for (var i = 0; i < bloqsToBuild.length; i++) {
            bloq = new bloqs.Bloq({
                bloqData: bloqSchemas[bloqsToBuild[i]]
            });
            suggestedBloqs.push(bloq);
            tempContainer = document.createElement('div');
            tempContainer.className += 'bloq-container';
            tempContainer.appendChild(bloq.$bloq[0]);
            bloqsContainer.appendChild(tempContainer);

            bloq.$bloq[0].addEventListener('click', onSuggestedBloqClick);
        }

    }

    function onSuggestedBloqDragEnd(evt) {
        console.log('onSuggestedBloqDragEnd', evt.detail.bloq);
        //comprobar si está encima del input que lo llamo, o relativamente cerca, de estarlo se conecta, si no, no se conecta ya que puede haberlo arrastrado a otro sitio
        bloqSelected(evt.detail.bloq.uuid);
    }

    function onSuggestedBloqClick(evt) {
        console.log('onSuggestedBloqClick', evt);
        var eventBloq = evt.currentTarget;
        var eventBloqId = eventBloq.getAttribute('data-bloq-id');
        bloqSelected(eventBloqId, true);
    }

    function bloqSelected(bloqUuid, sendConnect) {
        for (var i = 0; i < suggestedBloqs.length; i++) {
            suggestedBloqs[i].$bloq[0].removeEventListener('click', onSuggestedBloqClick);
            if (suggestedBloqs[i].uuid !== bloqUuid) {
                suggestedBloqs[i].autoRemove();
            }
        }
        bloqsContainer.innerHTML = '';
        if (bloqUuid && sendConnect) {
            showWindowCallback(bloqUuid);
        }
        hideWindow();
    }

    bloqsSuggested.init = init;
    bloqsSuggested.showSuggestedWindow = showSuggestedWindow;
    bloqsSuggested.setSuggestedText = setSuggestedText;

    return bloqsSuggested;

})(window.bloqsSuggested = window.bloqsSuggested || {}, bloqsLanguages, bloqsUtils, undefined);


'use strict';
(function(exports, _, bloqsUtils, bloqsLanguages, bloqsTooltip, bloqsSuggested) {
    /**
     * Events
     * bloqs:created
     * bloqs:connect
     * bloqs:dragend
     * bloqs:bloqremoved
     * bloqs:change
     */

    var utils = bloqsUtils,
        lang = 'es-ES',
        connectors = {},
        IOConnectors = {},
        bloqs = {},
        availableConnectors = [],
        availableIOConnectors = [],
        $field = null,
        scrollTop = 0,
        forcedScrollTop = null,
        softwareArrays = {
            voidFunctions: [],
            returnFunctions: [],
            softwareVars: [],
            classes: [],
            objects: []
        },
        dragPreviousTopPosition,
        dragPreviousLeftPosition,
        dragBloqMousePositionX,
        dragBloqMousePositionY,
        //we cant get the offset if the element its not visible, to avoid calc them on each drag, set them here
        fieldOffsetTop,
        //to relative fields
        fieldOffsetLeft = 0, //Bitbloq value 70,
        fieldOffsetRight = 0, //Bitbloq value 216 (toolbox and scroll)
        fieldOffsetTopSource = [], //bitbloq value['header', 'nav--make', 'actions--make', 'tabs--title'],
        fieldOffsetTopForced = 0,
        mouseDownBloq = null,
        draggingBloq = null,
        startPreMouseMove = null,
        availableBloqs,
        preMouseMoveX,
        preMouseMoveY,
        shiftKeyDown,
        componentsArray = bloqsUtils.getEmptyComponentsArray();

    var setOptions = function(options) {
        fieldOffsetTopSource = options.fieldOffsetTopSource || fieldOffsetTopSource || [];
        fieldOffsetLeft = options.fieldOffsetLeft || fieldOffsetLeft || 0;
        fieldOffsetRight = options.fieldOffsetRight || fieldOffsetRight || 0;
        fieldOffsetTopForced = options.fieldOffsetTopForced || fieldOffsetTopForced || 0;
        availableBloqs = options.availableBloqs;

        if ((options.forcedScrollTop === 0) || options.forcedScrollTop) {
            forcedScrollTop = options.forcedScrollTop;
        }
        bloqsSuggested.init(options.suggestionWindowParent, options.bloqSchemas);

        lang = options.lang || 'es-ES';
    };

    var getFieldOffsetTop = function(source) {
        var fieldOffsetTop = 0;
        if (fieldOffsetTopForced) {
            fieldOffsetTop = fieldOffsetTopForced;
        } else {
            var tempElement;
            for (var i = 0; i < source.length; i++) {
                tempElement = document.getElementsByClassName(source[i]);
                if (tempElement[0]) {
                    fieldOffsetTop += tempElement[0].clientHeight;
                }
            }
        }

        return fieldOffsetTop;
    };

    var bloqMouseDown = function(evt) {
        // console.log('bloqMouseDown');
        // console.log(evt);
        //console.log(evt.target.tagName);


        if (evt.target.tagName !== 'SELECT') {
            //to avoid mousemove event on children and parents at the same time
            evt.stopPropagation();
            //launch another event
            window.dispatchEvent(new CustomEvent('bloqs:mousedown', {
                detail: event.target
            }));

            mouseDownBloq = evt.currentTarget;
            startPreMouseMove = true;
            shiftKeyDown = evt.shiftKey;
            document.addEventListener('mousemove', bloqPreMouseMove);
            document.addEventListener('mouseup', bloqMouseUpBeforeMove);
            document.addEventListener('touchmove', bloqPreMouseMove);
            document.addEventListener('touchend', bloqMouseUpBeforeMove);
        }
    };

    var bloqMouseUpBeforeMove = function() {
        //console.log('bloqMouseUpBeforeMove');
        mouseDownBloq = null;
        document.removeEventListener('mousemove', bloqPreMouseMove);
        document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
        document.removeEventListener('touchmove', bloqPreMouseMove);
        document.removeEventListener('touchend', bloqMouseUpBeforeMove);
    };

    //to avoid move bloqs with a 1 px movement
    var bloqPreMouseMove = function(evt) {
        // console.log('bloqPreMouseMove');
        // console.log(evt.type);
        var pageX = evt.pageX || evt.touches[0].pageX,
            pageY = evt.pageY || evt.touches[0].pageY;

        if (startPreMouseMove) {
            preMouseMoveX = pageX;
            preMouseMoveY = pageY;
            startPreMouseMove = false;

            //we take values to the bloqsMouseMove from the first move
            var position = mouseDownBloq.getBoundingClientRect();

            //mouse position respect bloq
            dragBloqMousePositionX = pageX - position.left;
            dragBloqMousePositionY = pageY - position.top;

            //the mouse position its relative to the document, we need the top offset from header
            fieldOffsetTop = getFieldOffsetTop(fieldOffsetTopSource);

            //position to control the translate and the distance
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;

            //to add the scroll to the mouse positions
            scrollTop = $field[0].scrollTop;
        } else {
            //console.log(pageX, pageY)
            var distanceX = pageX - preMouseMoveX,
                distanceY = pageY - preMouseMoveY;

            //console.log('distance', Math.abs(distanceX), Math.abs(distanceY));
            if ((Math.abs(distanceX) >= 5) || (Math.abs(distanceY) >= 5)) {
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.addEventListener('mousemove', bloqMouseMove);
                document.removeEventListener('touchmove', bloqPreMouseMove);
                document.addEventListener('touchmove', bloqMouseMove);
            }
        }
    };

    var bloqMouseMove = function(evt) {
        //console.log('bloqMouseMove');
        var bloq = null;
        //actions to do before start to move
        if (mouseDownBloq) {

            bloq = bloqs[mouseDownBloq.getAttribute('data-bloq-id')];
            window.dispatchEvent(new CustomEvent('bloqs:startMove', {
                detail: bloq
            }));

            if (!bloq.isConnectable()) {
                //console.log('its not connectable');
                bloq.doConnectable();
                $field.append(bloq.$bloq);
            }
            document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
            document.addEventListener('mouseup', bloqMouseUp);
            document.removeEventListener('touchend', bloqMouseUpBeforeMove);
            document.addEventListener('touchend', bloqMouseUp);

            mouseDownBloq.className = mouseDownBloq.className.concat(' dragging');

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragStart(bloq);
                    break;
                case 'output':
                    outputDragStart(bloq);
                    break;
                case 'group':
                    throw 'Group cant be moved';
                default:
                    throw 'Not defined bloq dragstart!!';
            }
            mouseDownBloq = null;
            draggingBloq = bloq;
        }

        bloq = bloq || draggingBloq;
        var clientX = evt.clientX || evt.touches[0].clientX,
            clientY = evt.clientY || evt.touches[0].clientY;

        var distance = moveBloq(bloq, clientX, clientY);

        switch (bloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(bloq, bloqs, connectors);
                if (distance > 10) {
                    handleCollisions([bloq.connectors[0], utils.getLastBottomConnectorUuid(bloq.uuid, bloqs, connectors)], evt);
                }
                break;
            case 'output':
                if (distance > 10) {
                    handleIOCollisions(bloq, availableIOConnectors);
                }
                break;
            default:
                throw 'Not defined bloq drag!!';
        }

    };

    var bloqMouseUp = function(evt) {
        //console.log('bloqMouseUp');
        scrollTop = 0;
        var $dropConnector = $('.connector.available').first(),
            bloq = draggingBloq;

        connectBloq(bloq, $dropConnector);
        window.dispatchEvent(new CustomEvent('bloqs:dragend', {
            detail: {
                bloq: bloq,
                mouseEvent: evt
            }
        }));
    };

    var connectBloq = function(bloq, $dropConnector) {
        if ($dropConnector[0]) {

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragEnd(bloq, $dropConnector);
                    break;
                case 'output':
                    connectOutputBloq(bloq, $dropConnector);
                    break;
                default:
                    throw 'Not defined bloq drag!!';
            }
            window.dispatchEvent(new Event('bloqs:connect'));

            if (!bloq.$bloq.closest('.bloq--group')[0]) {
                bloq.disable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
                }
            } else {
                bloq.enable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('enable', bloq, bloqs, connectors);
                }
            }
        } else {
            bloq.disable();
            if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
            }

        }
        availableConnectors = [];
        availableIOConnectors = [];
        $('.bloq').removeClass('dragging');
        $('.connector.available').removeClass('available');
        $('.connector.invalid').removeClass('invalid');
        $('.connector.valid').removeClass('valid');
        $('.bloq--dragging').removeClass('bloq--dragging');
        $field.focus();


        draggingBloq = null;
        dragPreviousTopPosition = 0;
        dragPreviousLeftPosition = 0;

        document.removeEventListener('mousemove', bloqMouseMove);
        document.removeEventListener('mouseup', bloqMouseUp);
        document.removeEventListener('touchmove', bloqMouseMove);
        document.removeEventListener('touchend', bloqMouseUp);
    };

    var statementDragStart = function(bloq) {

        var previousConnector = connectors[bloq.connectors[0]].connectedTo;
        var afterConnector;
        if (shiftKeyDown) {
            afterConnector = connectors[bloq.connectors[1]].connectedTo;
            if (afterConnector) {
                //test rompemos el enlace de abajo
                connectors[afterConnector].connectedTo = previousConnector;
                if (previousConnector) {
                    connectors[previousConnector].connectedTo = afterConnector;
                }
                connectors[bloq.connectors[1]].connectedTo = null;
                utils.redrawTree(bloqs[connectors[afterConnector].bloqUuid], bloqs, connectors);
            }
        }


        if (previousConnector) {
            var previousBloq = bloqs[connectors[previousConnector].bloqUuid];

            var itsInsideAConnectorRoot = utils.itsInsideAConnectorRoot(bloq, bloqs, connectors);

            //desenganchamos
            if (!afterConnector) {
                connectors[previousConnector].connectedTo = null;
            }

            connectors[bloq.connectors[0]].connectedTo = null;



            //miramos si estaba enganchado a un connector-root para sacarlo del parent
            if (itsInsideAConnectorRoot) {


                if (previousBloq.bloqData.type === 'group' && !afterConnector) {
                    //remove class that show help on group bloqs
                    previousBloq.$bloq.removeClass('with--content');
                }
                removeFromStatementInput(bloq);
                utils.redrawTree(previousBloq, bloqs, connectors);

            }
        }

        availableConnectors = [];

        var possibleConnectors;
        for (var possibleDropBloqUuid in bloqs) {
            var possibleDropBloq = bloqs[possibleDropBloqUuid];
            if (possibleDropBloq.bloqData.type !== 'output' && possibleDropBloq.isConnectable() && !utils.connectorIsInBranch(possibleDropBloq.connectors[0], bloq.uuid, bloqs, connectors)) {
                possibleConnectors = utils.canConnectStatementBloqs(bloq, possibleDropBloq, bloqs, connectors);
                if (possibleConnectors) {
                    availableConnectors = availableConnectors.concat(possibleConnectors);
                }
            }
        }

        for (var i = 0; i < availableConnectors.length; i++) {
            connectors[availableConnectors[i]].jqueryObject.addClass('valid');
        };
    };

    var removeFromStatementInput = function(firstBloqToRemove) {
        var $totalBloqsToRemove = [firstBloqToRemove.$bloq];
        var childConnectorUuid = connectors[firstBloqToRemove.connectors[1]].connectedTo,
            bloqToRemove,
            top = firstBloqToRemove.$bloq.outerHeight(true);

        firstBloqToRemove.$bloq.removeClass('inside-bloq');
        while (childConnectorUuid) {
            bloqToRemove = bloqs[connectors[childConnectorUuid].bloqUuid];
            $totalBloqsToRemove.push(bloqToRemove.$bloq);
            bloqToRemove.$bloq.removeClass('inside-bloq');
            bloqToRemove.$bloq[0].style.transform = 'translate(' + 0 + 'px,' + top + 'px)';
            top += bloqToRemove.$bloq.outerHeight(true);
            childConnectorUuid = connectors[bloqToRemove.connectors[1]].connectedTo;
        }
        utils.appendArrayInOneTime($field, $totalBloqsToRemove);

    };

    var outputDragStart = function(bloq) {
        var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
        if (outputConnector.connectedTo) {
            bloq.$bloq.removeClass('nested-bloq');

            var bloqConnector = IOConnectors[outputConnector.connectedTo],
                oldBloq = bloqs[bloqConnector.bloqUuid];

            //remove the logical conexions
            bloqConnector.connectedTo = null;
            outputConnector.connectedTo = null;

            if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                updateSoftVar(oldBloq);
            }

            $field[0].appendChild(bloq.$bloq[0]);
        }

        //store the available connectors
        availableIOConnectors = [];
        for (var connectorUuid in IOConnectors) {
            if (IOConnectors[connectorUuid].data.type === 'connector--input') {
                if (utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors).isConnectable() && !IOConnectors[connectorUuid].connectedTo && utils.sameConnectionType(bloq, utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors), IOConnectors[connectorUuid].data.acceptType, bloqs, IOConnectors, softwareArrays, componentsArray) && !utils.connectorIsInBranch(connectorUuid, bloq.uuid, bloqs, IOConnectors)) {
                    availableIOConnectors.push(connectorUuid);
                    IOConnectors[connectorUuid].jqueryObject.addClass('valid');
                } else {
                    IOConnectors[connectorUuid].jqueryObject.addClass('invalid');
                }
            }
        }

        // console.log('availableIOConnectors',availableIOConnectors);
    };

    var moveBloq = function(bloq, clientX, clientY) {
        var position = bloq.$bloq[0].getBoundingClientRect(),
            distance = Math.round(Math.sqrt(Math.pow(dragPreviousTopPosition - position.top, 2) + Math.pow(dragPreviousLeftPosition - position.left, 2))),
            x,
            y,
            destinationX,
            destinationY;
        if (scrollTop !== $field[0].scrollTop) {
            scrollTop = $field[0].scrollTop;
        }

        if (forcedScrollTop !== null) {
            scrollTop = forcedScrollTop;
        }

        x = clientX - fieldOffsetLeft;
        y = clientY - fieldOffsetTop + scrollTop;

        destinationX = (x - dragBloqMousePositionX);
        destinationY = (y - dragBloqMousePositionY);

        bloq.$bloq[0].style.transform = 'translate(' + destinationX + 'px,' + destinationY + 'px)';
        if (distance > 10) {
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;
        }
        if (bloq.bloqData.type === 'statement-input') {
            utils.redrawTree(bloq, bloqs, connectors);
        }

        return distance;
    };

    var statementDragEnd = function(bloq, $dropConnector) {

        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = $('[data-connector-id="' + dropConnectorUuid + '"]').attr('data-canconnectwith');

        //console.log('dragConnectorUuid', dragConnectorUuid);
        //console.log('dropUuid', dropConnectorUuid);
        var areDroppingInsideABloq = utils.itsARootConnector(connectors[dropConnectorUuid]) || utils.itsInsideAConnectorRoot(utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors), bloqs, connectors);

        //console.log('areDroppingInsideABloq?', areDroppingInsideABloq);

        setLogicalConnections(dropConnectorUuid, dragConnectorUuid);
        if (areDroppingInsideABloq) {
            connectorRootDragEnd(bloq, $dropConnector);
        } else {
            placeNestedBloq(dropConnectorUuid, dragConnectorUuid);
        }

    };

    var connectorRootDragEnd = function(dragBloq, $dropConnector) {
        //console.log('connectorRootDragEnd');
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];

        dragBloq.$bloq.addClass('inside-bloq');
        dragBloq.$bloq.removeAttr('style');

        if (utils.itsARootConnector(connectors[dropConnectorUuid])) {
            var $dropContainer = dropBloq.$bloq.find('.bloq--extension__content');
            $dropContainer.first().append(dragBloq.$bloq);
            dropBloq.$bloq.addClass('with--content');
        } else {
            dropBloq.$bloq.after(dragBloq.$bloq);
        }

        //var childNodes

        var somethingConnectedInBottomUuid = connectors[dragBloq.connectors[1]].connectedTo;
        var branchBloq;
        var childNodes = [];
        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            childNodes.push(branchBloq.$bloq);
            branchBloq.$bloq.addClass('inside-bloq');
            branchBloq.$bloq.removeAttr('style');

            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;

        }
        dragBloq.$bloq.after(utils.jqueryObjectsArrayToHtmlToInsert(childNodes));

        //se repinta el arbol donde esta el dropbloq, porq cambiara de tamaño
        utils.redrawTree(dropBloq, bloqs, connectors);
    };

    var connectOutputBloq = function(bloq, $dropConnector) {
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = utils.getOutputConnector(bloq, IOConnectors).uuid;

        $dropConnector.append(bloq.$bloq);
        bloq.$bloq.addClass('nested-bloq').removeAttr('style');

        IOConnectors[dropConnectorUuid].connectedTo = dragConnectorUuid;
        IOConnectors[dragConnectorUuid].connectedTo = dropConnectorUuid;

        var dropBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, IOConnectors);
        var dragBloq = utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, IOConnectors);

        if (dropBloq.bloqData.returnType && (dropBloq.bloqData.returnType.type === 'fromInput')) {
            if (!dragBloq.bloqData.returnType.pointer) {
                updateSoftVar(dropBloq);
            }
        }
    };

    var handleCollisions = function(dragConnectors) {
        var i,
            found,
            $dropConnector,
            $dragConnector,
            tempBloq;

        // For each available connector
        availableConnectors.forEach(function(dropConnectorUuid) {
            $dropConnector = connectors[dropConnectorUuid].jqueryObject;
            i = 0;
            found = false;
            while (!found && (i < dragConnectors.length)) {
                $dragConnector = connectors[dragConnectors[i]].jqueryObject;

                if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.canConnectAliases(connectors[dropConnectorUuid].data.acceptedAliases, connectors[dragConnectors[i]].data.acceptedAliases) && utils.itsOver($dragConnector, $dropConnector, 20)) {
                    found = true;
                } else {
                    i++;
                }
            }
            tempBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors);
            if (found) {
                $dropConnector.addClass('available');
                $dropConnector.attr('data-canconnectwith', dragConnectors[i]);

                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.addClass('bloq--dragging');
                }
            } else {
                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.removeClass('bloq--dragging');
                }
                $dropConnector.removeClass('available');
                $dropConnector.removeAttr('data-canconnectwith');
            }
        });
    };

    var handleIOCollisions = function(bloq, availableIOConnectors) {
        var dropConnector;
        var dragConnector = utils.getOutputConnector(bloq, IOConnectors);
        availableIOConnectors.forEach(function(dropConnectorUuid) {
            dropConnector = IOConnectors[dropConnectorUuid];
            if (utils.itsOver(dragConnector.jqueryObject, dropConnector.jqueryObject, 0) && utils.sameConnectionType(bloqs[dragConnector.bloqUuid], bloqs[dropConnector.bloqUuid], dropConnector.data.acceptType, bloqs, IOConnectors, softwareArrays, componentsArray)) {
                dropConnector.jqueryObject.addClass('available');
            } else {
                dropConnector.jqueryObject.removeClass('available');

            }
        });
    };

    var setLogicalConnections = function(dropConnectorUuid, dragConnectorUUid) {
        //console.log('conectamos', dropConnectorUuid, connectors[dropConnectorUuid].data.type, 'con ', dragConnectorUUid, connectors[dragConnectorUUid].data.type);
        //console.log('conectado con', connectors[dropConnectorUuid].connectedTo, 'y el otro con', connectors[dragConnectorUUid].connectedTo);
        if (connectors[dropConnectorUuid].connectedTo) {
            var dropBottomConnectorUuid, dragBloqLastBottomConnectorUuid, dropTopConnectorUuid, dragBloqFirstTopConnectorUuid;
            switch (connectors[dropConnectorUuid].data.type) {
                case 'connector--bottom':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                case 'connector--top':
                    dropTopConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqFirstTopConnectorUuid = utils.getFirstTopConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dropTopConnectorUuid].connectedTo = dragBloqFirstTopConnectorUuid;
                    connectors[dragBloqFirstTopConnectorUuid].connectedTo = dropTopConnectorUuid;
                    break;
                case 'connector--root':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                default:
                    throw 'connector on setLogicalConnections no handled ' + connectors[dropConnectorUuid].data.type;
            }
        }
        connectors[dropConnectorUuid].connectedTo = dragConnectorUUid;
        connectors[dragConnectorUUid].connectedTo = dropConnectorUuid;
    };

    var placeNestedBloq = function(dropConnectorUuid, dragConnectorUuid) {
        //console.log('Nest');

        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];
        //console.log(dropBloq, dragBloq);

        switch (dropBloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, connectors), bloqs, connectors);
                break;
            case 'output':
                break;
            default:
                throw 'bloqtype not defined in nesting ' + dropBloq.bloqData.type;
        }
    };

    var updateSoftVar = function(bloq, name, type, args) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        //console.log('updating softVar', dynamicContentType);
        if (!dynamicContentType) {
            throw 'We are adding a softVar on a bloq that not defined the dynamic content';
        }
        if (!softwareArrays[dynamicContentType]) {
            throw 'dynamicContentType not defined ' + bloq.bloqData.name;
        }
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        type = type || utils.getTypeFromBloq(bloq, bloqs, IOConnectors, softwareArrays, componentsArray);
        //arguments if any:
        if (bloq.bloqData.type === 'statement-input' && bloq.bloqData.arguments) {
            args = args || utils.getArgsFromBloq(bloq, bloqs, IOConnectors);
        } else {
            args = '';
        }
        var softVar;
        if (found) {
            softVar = softwareArrays[dynamicContentType][i - 1];
            softVar.name = name || softVar.name;
            softVar.type = type;
            softVar.args = args;
            if (softVar.name) {
                //cambiar data-value cuando el valor sea el mismo que el de la variable que se cambia
                // $('select[data-varreference=' + softVar.id + ']').attr({
                //     'data-value': softVar.name
                // });
                $('option[data-var-id="' + softVar.id + '"]').attr({
                    value: softVar.name
                }).html(softVar.name);

            } else {
                removeSoftVar(bloq);
            }

        } else {
            if (name) {
                softVar = {
                    name: name,
                    id: utils.generateUUID(),
                    bloqUuid: bloq.uuid,
                    type: type,
                    args: args
                };
                softwareArrays[dynamicContentType].push(softVar);
                $('select[data-dropdowncontent="' + dynamicContentType + '"]').append($('<option>').attr({
                    'data-var-id': softVar.id,
                    value: softVar.name
                }).html(softVar.name));
            }
        }
        //update type of all vars
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
        // console.log('afterUpdating: ', softwareArrays);
    };

    var removeSoftVar = function(bloq) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        if (found) {
            var softVar = softwareArrays[dynamicContentType][i - 1];
            softwareArrays[dynamicContentType].splice(i - 1, 1);
            $('option[data-var-id="' + softVar.id + '"]').remove();
        }
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
    };

    var updateSoftVarTypes = function(softwareArrays, dynamicContentType, bloqs, IOConnectors) {
        //refresh type of functions and vars
        if ((dynamicContentType === 'returnFunctions') || (dynamicContentType === 'softwareVars')) {
            refreshSoftVarTypes(softwareArrays, 'returnFunctions', bloqs, IOConnectors);
            refreshSoftVarTypes(softwareArrays, 'softwareVars', bloqs, IOConnectors);
        } else {
            refreshSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
        }


        //console.log('dynamicContentType updated', dynamicContentType);
        //utils.drawSoftwareArray(softwareArrays);
    };

    function refreshSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors) {
        var tempSoftVar;
        for (var i = 0; i < softwareArrays[dynamicContentType].length; i++) {
            tempSoftVar = softwareArrays[dynamicContentType][i];
            tempSoftVar.type = utils.getTypeFromBloq(bloqs[tempSoftVar.bloqUuid], bloqs, IOConnectors, softwareArrays, componentsArray);
        }
    }

    var removeBloq = function(bloqUuid, redraw, removeAllConnectedBloqs) {

        var bloq = bloqs[bloqUuid],
            i;
        console.log('remove:', bloqUuid);
        if (bloq) {
            console.log('remove bloq name:', bloq.bloqData.name);
            //disconnect
            var topConnector, bottomConnector, outputConnector;
            window.dispatchEvent(new Event('bloqs:bloqremoved'));
            bloq.$bloq[0].removeEventListener('mousedown', bloqMouseDown);
            //remove listener of suggested window
            if (bloq.$bloqInputs) {
                for (i = 0; i < bloq.$bloqInputs.length; i++) {
                    bloq.$bloqInputs[i].off('click');
                }
            }

            //if its moving remove all listener
            if ((mouseDownBloq && mouseDownBloq.getAttribute('data-bloq-id') === bloqUuid) ||
                (draggingBloq && draggingBloq.uuid)) {

                document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.removeEventListener('mousemove', bloqMouseMove);
                document.removeEventListener('mouseup', bloqMouseUp);


                document.removeEventListener('touchend', bloqMouseUpBeforeMove);
                document.removeEventListener('touchmove', bloqPreMouseMove);
                document.removeEventListener('touchmove', bloqMouseMove);
                document.removeEventListener('touchend', bloqMouseUp);
            }
            //no break sentences
            switch (bloq.bloqData.type) {
                case 'statement-input':
                    bloq.$bloq.find('.btn-collapse')[0].removeEventListener('click', collapseButtonClick);
                case 'group':
                    var tempBloq,
                        childConnector = connectors[bloq.connectors[2]].connectedTo;

                    while (childConnector) {
                        tempBloq = utils.getBloqByConnectorUuid(childConnector, bloqs, connectors);
                        childConnector = connectors[tempBloq.connectors[1]].connectedTo;
                        removeBloq(tempBloq.uuid, redraw, removeAllConnectedBloqs);
                    }
                    /* falls through */
                case 'statement':

                    topConnector = connectors[bloq.connectors[0]].connectedTo;
                    bottomConnector = connectors[bloq.connectors[1]].connectedTo;
                    var previousBloq;
                    if (removeAllConnectedBloqs) {
                        if (topConnector) {
                            connectors[topConnector].connectedTo = null;
                            if (connectors[topConnector].data.type === 'connector--root') {
                                previousBloq = bloqs[connectors[topConnector].bloqUuid];
                                if (previousBloq.bloqData.type === 'group') {
                                    previousBloq.$bloq.removeClass('with--content');
                                }

                                if (redraw) {
                                    utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                                }
                            } else {
                                removeBloq(connectors[topConnector].bloqUuid, redraw, removeAllConnectedBloqs);
                            }

                        }
                        if (bottomConnector) {
                            connectors[bottomConnector].connectedTo = null;
                            removeBloq(connectors[bottomConnector].bloqUuid, redraw, removeAllConnectedBloqs);
                        }
                    } else {
                        if (topConnector && bottomConnector) {
                            connectors[topConnector].connectedTo = bottomConnector;
                            connectors[bottomConnector].connectedTo = topConnector;

                            if (redraw) {
                                utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                            }

                        } else if (topConnector) {
                            connectors[topConnector].connectedTo = null;
                            previousBloq = bloqs[connectors[topConnector].bloqUuid];
                            if (previousBloq.bloqData.type === 'group') {
                                previousBloq.$bloq.removeClass('with--content');
                            }

                            if (redraw) {
                                utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                            }
                        } else if (bottomConnector) {
                            connectors[bottomConnector].connectedTo = null;
                        }
                    }


                    //remove the inputs bloqs inside in 1 level
                    var uuid;
                    for (i = 0; i < bloq.IOConnectors.length; i++) {
                        uuid = bloq.IOConnectors[i];
                        if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                            removeBloq(IOConnectors[IOConnectors[uuid].connectedTo].bloqUuid, redraw, removeAllConnectedBloqs);
                        }
                    }
                    break;
                case 'output':
                    outputConnector = IOConnectors[bloq.IOConnectors[0]].connectedTo;

                    if (outputConnector) {
                        IOConnectors[outputConnector].connectedTo = null;
                    }
                    break;
                default:
                    throw 'we dont know how to delete: ' + bloq.bloqData.type;
            }

            //remove visual
            bloq.$bloq.remove();
            //removeLogical
            var key;
            for (i = 0; i < bloq.connectors.length; i++) {
                delete connectors[bloq.connectors[i]];
            }
            for (i = 0; i < bloq.IOConnectors.length; i++) {
                delete IOConnectors[bloq.IOConnectors[i]];
            }

            //si es un bloq que genera dinmayc content
            if (bloq.bloqData.createDynamicContent) {
                removeSoftVar(bloq);
            } else {
                for (key in softwareArrays) {
                    updateSoftVarTypes(softwareArrays, key, bloqs, IOConnectors);
                }
            }

            //remove the bloq
            delete bloqs[bloqUuid];

        } else {
            throw 'Cant delete this bloq: ' + bloqUuid;
        }

    };

    var buildContent = function(bloq) {

        var bloqData = bloq.bloqData;
        var $tempElement;
        for (var j = 0; j < bloqData.content.length; j++) {
            for (var k = 0; k < bloqData.content[j].length; k++) {
                $tempElement = createBloqElement(bloq, bloqData.content[j][k], softwareArrays);
                if (bloqData.content[j][k].position === 'DOWN') {
                    bloq.$contentContainerDown.addClass('with-content');
                    bloq.$contentContainerDown.append($tempElement);
                } else {
                    bloq.$contentContainer.append($tempElement);
                }
            }
        }
    };

    var buildStatementConnector = function(tempUuid, bloqConnectors, bloq, tempConnector, $container) {
        var $connector = $('<div>').attr({
            'data-connector-id': tempUuid
        });

        $connector.addClass('connector connector--offline ' + bloqConnectors.type);

        $container.append($connector);

        connectors[tempUuid] = tempConnector;

        bloq.connectors.push(tempUuid);
        return $connector;
    };

    var buildConnectors = function(bloqConnectors, bloq) {
        //connectors
        var $connector, tempUuid, tempConnector, $container;
        for (var i = 0; i < bloqConnectors.length; i++) {

            tempUuid = 'connector:' + utils.generateUUID();

            tempConnector = {
                uuid: tempUuid,
                data: bloqConnectors[i],
                bloqUuid: bloq.uuid,
                connectedTo: null
            };

            switch (bloqConnectors[i].type) {
                case 'connector--top':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--bottom':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.find('.bloq--extension--end');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--root':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq;
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);

                    break;
                case 'connector--input':
                    $connector = $(bloq.$bloq.find('.bloqinput[data-connector-name="' + bloqConnectors[i].name + '"]'));

                    $connector.attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector ' + bloqConnectors[i].type);
                    tempConnector.contentId = $connector.attr('data-content-id');
                    IOConnectors[tempUuid] = tempConnector;
                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--output':
                    $connector = $('<div>').attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector connector--offline ' + bloqConnectors[i].type);

                    bloq.$bloq.append($connector);

                    tempConnector.returnType = bloq.bloqData.returnType;
                    IOConnectors[tempUuid] = tempConnector;

                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--empty':
                    $connector = $('<div>');
                    connectors[tempUuid] = tempConnector;

                    bloq.connectors.push(tempUuid);
                    break;
                default:
                    throw 'Connector not defined to build';
            }
            tempConnector.jqueryObject = $connector;
        }
    };

    var createBloqElement = function(bloq, elementSchema, softwareArrays) {
        var i,
            $tempElement,
            $element = null,
            arrayOptions,
            key;
        switch (elementSchema.alias) {
            case 'staticDropdown':
                //component
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id
                });

                var childs = [];
                for (i = 0; i < elementSchema.options.length; i++) {
                    $tempElement = $('<option>').attr({
                        value: elementSchema.options[i].value,
                        'data-i18n': elementSchema.options[i].label
                    }).html(translateBloq(lang, elementSchema.options[i].label));
                    childs.push($tempElement);
                }
                utils.appendArrayInOneTime($element, childs);
                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                }

                $element.change(function() {
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                if (bloq.bloqData.returnType && bloq.bloqData.returnType.type === 'fromDropdown') {
                    $element.change(function() {
                        updateSoftVar(bloq);
                    });
                }

                break;
            case 'dynamicDropdown':
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id,
                    'data-dropdowncontent': elementSchema.options,
                    'data-value': elementSchema.value
                });

                switch (elementSchema.options) {
                    case 'voidFunctions':
                    case 'returnFunctions':
                    case 'softwareVars':
                    case 'classes':
                    case 'objects':
                        arrayOptions = softwareArrays[elementSchema.options];
                        $element.change(function() {
                            //if we change a dynamicDropdown, can be for two reasons
                            // We are a output and we refresh vars of the old BLoq
                            // We are selecting a variable in a statement, and we update the dont change type
                            if (bloq.bloqData.type === 'output') {
                                var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
                                //if its connected to another bloq, we update the vars of the old bloq
                                if (outputConnector.connectedTo) {

                                    var bloqConnector = IOConnectors[outputConnector.connectedTo],
                                        oldBloq = bloqs[bloqConnector.bloqUuid];

                                    if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                                        updateSoftVar(oldBloq);
                                    }
                                }
                            }
                        });
                        break;
                    case 'allServos':
                        arrayOptions = [];

                        arrayOptions = arrayOptions.concat(componentsArray.servos, componentsArray.oscillators, componentsArray.continuousServos);
                        break;
                    case 'varComponents':
                        arrayOptions = [];

                        for (key in componentsArray) {
                            if (componentsArray[key].length >= 1) {
                                arrayOptions = arrayOptions.concat(componentsArray[key]);
                            }
                        }
                        break;
                    case 'clocks':
                        arrayOptions = [];
                        arrayOptions = componentsArray.clocks;
                        break;
                    case 'hts221':
                        arrayOptions = [];
                        arrayOptions = componentsArray.hts221;
                        break;
                    case 'barometer':
                        arrayOptions = [];
                        arrayOptions = componentsArray.barometer;
                    default:
                        arrayOptions = componentsArray[elementSchema.options];
                }
                if (!arrayOptions) {
                    throw 'Dropdowns not defined in array: ' + elementSchema.options;
                }

                //content
                utils.drawDropdownOptions($element, arrayOptions);

                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                    var componentRef = arrayOptions.find(function(item) {
                        return item.name === elementSchema.value;
                    });
                    $element[0].dataset.reference = componentRef ? componentRef.uid : '';
                    $element[0].dataset.value = elementSchema.value;
                    $element.val(elementSchema.value);
                }

                $element.change(function(evt) {
                    $element[0].dataset.value = evt.currentTarget.value;
                    $element[0].dataset.reference = evt.currentTarget.selectedOptions[0].dataset.reference;
                    //$element[0].dataset.varreference = evt.currentTarget.selectedOptions[0].dataset.varId;
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                break;
            case 'text':
                $element = $('<span>').attr({
                    'data-i18n': elementSchema.value
                }).html(translateBloq(lang, elementSchema.value));
                break;
            case 'removableText':
                $element = $('<span>').html(elementSchema.value);
                $element.addClass('removabletext');

                break;
            case 'numberInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                //Check that the characters are numbers
                $element.bind('input', function() {
                    var position = utils.getCaretPosition(this);
                    var a = utils.validNumber($(this).val());
                    $(this).val(a.value);
                    utils.setCaretPosition(this, position - a.removedChar);
                });
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 60,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    //console.log('change number!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'stringInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value || translateBloq(lang, elementSchema.defaultValue));
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    $element.val(utils.validString($element.val()));
                    //console.log('change String!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'charInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    $element.val(utils.validChar($element.val()));
                    //console.log('change Char!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'codeInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    //console.log('change SCinput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCodeInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function() {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);
                $element.change(function() {
                    //console.log('change multilineCode!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCommentInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function() {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);

                $element.keyup(function() {
                    bloqsUtils.delay(function() {
                        $element.val(utils.validComment($element.val()));
                    }, 1000);
                });

                $element.change(function() {
                    $element.val(utils.validComment($element.val()));
                    //console.log('change multilineComment!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'varInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);

                bloq.varInputs = [];
                bloq.varInputs.push($element);
                $element.addClass('var--input');
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                //Transform the name to create valid function / variables names
                $element.keyup(function() {
                    bloqsUtils.delay(function() {
                        var name = utils.validName($element.val(), softwareArrays);
                        $element.val(name);
                        if (name) {
                            updateSoftVar(bloq, name);
                        } else {
                            removeSoftVar(bloq, name);
                        }
                    }, 1000, bloq.uuid);
                });

                $element.change(function() {
                    //console.log('change varInput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'bloqInput':
                $element = $('<div>').attr({
                    'data-connector-name': elementSchema.name,
                    'data-content-id': elementSchema.bloqInputId
                });
                $element.addClass('bloqinput');

                $element.click(showSuggestedWindow);
                if (!bloq.$bloqInputs) {
                    bloq.$bloqInputs = [];
                }
                //store bloq input to remove listeners from suggested windows
                bloq.$bloqInputs.push($element);
                break;
            case 'headerText':
                $element = $('<h3>').html(elementSchema.value);
                $element.addClass('headerText');
                break;
            case 'descriptionText':
                $element = $('<p>').html(elementSchema.value);
                $element.addClass('descriptionText');
                break;
            default:
                throw 'elementSchema not defined: ' + elementSchema.alias;
        }

        return $element;
    };

    function showSuggestedWindow(evt) {
        console.log('click input', evt);
        //to avoid event on children and parents at the same time

        if (evt.target.hasAttribute('data-connector-name')) {
            var bloqConnectorUuid = evt.target.getAttribute('data-connector-id');
            console.log('id', bloqConnectorUuid);
            var bloq = utils.getBloqByConnectorUuid(bloqConnectorUuid, bloqs, IOConnectors);
            console.log(bloq.itsEnabled());
            if (bloq.itsEnabled()) {
                evt.stopPropagation();


                var launcherRect = evt.target.getBoundingClientRect();
                var workspaceRect = $field[0].getBoundingClientRect();
                var params = {
                    suggestedText: translateBloq(lang, 'suggested'),
                    noSuggestedText: translateBloq(lang, 'no-suggested'),
                    launcherTopPoint: {
                        top: launcherRect.top,
                        left: launcherRect.left
                    },
                    launcherBottomPoint: {
                        top: launcherRect.bottom,
                        left: launcherRect.left
                    },
                    launcherHeight: launcherRect.height,
                    workspaceHeight: workspaceRect.height,
                    workspaceWidth: workspaceRect.width,
                    fieldOffsetTop: getFieldOffsetTop(fieldOffsetTopSource),
                    fieldOffsetLeft: fieldOffsetLeft,
                    fieldOffsetRight: fieldOffsetRight,
                    fieldScrollTop: $field[0].scrollTop,
                    fieldScrollLeft: $field[0].scrollLeft,
                    availableBloqs: availableBloqs
                };
                if (IOConnectors[bloqConnectorUuid]) {
                    params.suggestedBloqs = IOConnectors[bloqConnectorUuid].data.suggestedBloqs;
                } else if (connectors[bloqConnectorUuid]) {
                    params.suggestedBloqs = connectors[bloqConnectorUuid].data.suggestedBloqs;
                }
                params.suggestedBloqs = filterSuggestedBloqs(params.suggestedBloqs, componentsArray, softwareArrays, params.availableBloqs);
                params.showWindowCallback = function(selectedBloqId) {
                    var selectedBloq = bloqs[selectedBloqId];
                    if (!selectedBloq.isConnectable()) {
                        selectedBloq.doConnectable();
                    }
                    connectBloq(selectedBloq, IOConnectors[bloqConnectorUuid].jqueryObject);
                    window.dispatchEvent(new CustomEvent('bloqs:suggestedAdded', {
                        detail: bloq
                    }));
                }
                bloqsSuggested.showSuggestedWindow(params);
            }
        }
    }

    function filterSuggestedBloqs(suggestedBloqs, componentsArray, softwareArrays, availableBloqs) {
        var filteredItems = [];
        for (var i = 0; i < suggestedBloqs.length; i++) {
            if (!availableBloqs || (availableBloqs && availableBloqs.indexOf(suggestedBloqs[i]) > -1)) {
                switch (suggestedBloqs[i]) {
                    case 'selectVariable':
                        if (softwareArrays.softwareVars.length > 0) {
                            filteredItems.push(suggestedBloqs[i]);
                        }
                        break;
                    case 'readSensor':
                        if (componentsArray.sensors.length > 0) {
                            filteredItems.push(suggestedBloqs[i]);
                        }
                        break;
                    default:
                        filteredItems.push(suggestedBloqs[i]);
                }
            }

        }
        return filteredItems;
    }

    var translateBloqs = function(newLang) {
        if (newLang !== lang) {
            lang = newLang;
            var bloqElements, bloqPlaceholders, i18nKey;
            for (var currentBloq in bloqs) {

                bloqPlaceholders = bloqs[currentBloq].$bloq.find('[data-placeholder-i18n]');

                bloqElements = bloqs[currentBloq].$bloq.find('[data-i18n]');

                for (var i = 0; i < bloqPlaceholders.length; i++) {
                    i18nKey = bloqPlaceholders[i].getAttribute('data-placeholder-i18n');
                    bloqPlaceholders[i].placeholder = translateBloq(lang, i18nKey);
                }

                for (var j = 0; j < bloqElements.length; j++) {
                    i18nKey = bloqElements[j].getAttribute('data-i18n');
                    bloqElements[j].innerHTML = translateBloq(lang, i18nKey);
                }
            }
            bloqsSuggested.setSuggestedText(translateBloq(lang, 'suggested'));
        }
    };

    var destroyFreeBloqs = function() {
        var uuid, bloq;
        for (uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
    };

    /**
     * Get bloqs that are not connected
     *
     */
    var getFreeBloqs = function() {
        var bloq,
            result = [],
            bloqGroup,
            tempBloq,
            connectedConnector;
        for (var uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            connectedConnector = connectors[bloq.connectors[1]].connectedTo;
                            while (connectedConnector) {
                                tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                                bloqGroup.push(tempBloq.getBloqsStructure());
                                connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                            }
                            result.push({
                                position: bloq.$bloq.position(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            result.push({
                                position: bloq.$bloq[0].getBoundingClientRect(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
        return result;
    };

    var updateBloqsTimeout;

    var startBloqsUpdate = function(componentsArrayUpdated) {
        componentsArray = componentsArrayUpdated;

        if (!updateBloqsTimeout) {
            updateBloqsTimeout = setTimeout(function() {
                updateBloqsTimeout = null;
                updateBloqs(componentsArray);
            }, 200);
        }
    };

    var updateBloqs = function(componentsArray) {


        var allBloqs = exports.bloqs;
        var allComponents = [];

        function _resetDropdown(element, list) {
            if (list[0]) {
                element.dataset.reference = list[0].uid;
                element.dataset.value = list[0].name;
                element.value = list[0].name;
            } else {
                delete element.dataset.reference;
                delete element.dataset.value;
            }
            element.selectedIndex = 0;
        }

        var updateBloq = function(element, list) {

            var componentRef = list.find(function(comp) {
                return comp.uid === element.dataset.reference;
            });

            bloqsUtils.drawDropdownOptions($(element), list);

            if (componentRef) {
                element.value = componentRef.name;
                element.dataset.reference = componentRef.uid;
                element.dataset.value = componentRef.name;
            } else {
                _resetDropdown(element, list);
            }
        };
        var bloqCanvasEl = null,
            componentsList;
        //Update dropdowns values from bloqs canvas
        for (var type in componentsArray) {
            bloqCanvasEl = document.getElementsByClassName('bloqs-tab')[0];
            var nodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="' + type + '"]');

            if (type === 'sensors') {
                /*jshint camelcase: false */
                componentsList = componentsArray.sensors.concat(componentsArray.mkb_lightsensor.concat(componentsArray.mkb_linefollower));
                /*jshint camelcase: true */
            } else {
                componentsList = componentsArray[type];
            }
            for (var i = 0, len = nodeList.length; i < len; i++) {
                updateBloq(nodeList[i], componentsList);
            }
            allComponents = allComponents.concat(componentsArray[type]);
        }
        //Update dropdowns from bloqs of toolbox
        if (bloqCanvasEl) {
            var toolboxNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="varComponents"]');
            for (var j = 0, len2 = toolboxNodeList.length; j < len2; j++) {
                updateBloq(toolboxNodeList[j], allComponents);
            }

            var varServos = [];
            varServos = varServos.concat(componentsArray.servos, componentsArray.oscillators, componentsArray.continuousServos);
            var servosNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="allServos"]');
            for (var y = 0, lenServo = servosNodeList.length; y < lenServo; y++) {
                updateBloq(servosNodeList[y], varServos);
            }
        }


    };

    var updateDropdowns = function() {
        var key;
        for (key in softwareArrays) {
            updateDropdown(key);
        }
    };

    var updateDropdown = function(softwareArrayKey) {
        var $element, tempValue;
        $('select[data-dropdownContent="' + softwareArrayKey + '"]').each(function(index, element) {
            $element = $(element);
            tempValue = $element.attr('data-value');
            bloqsUtils.drawDropdownOptions($element, softwareArrays[softwareArrayKey]);
            if (tempValue) {
                $element.val(tempValue);
            }
        });
    };

    var translateBloq = function(lang, key) {
        if (!bloqsLanguages.texts[lang]) {
            console.error('Language not supported ' + lang);
            lang = 'en-GB';
        }
        return bloqsLanguages.texts[lang][key] || bloqsLanguages.texts['en-GB'][key] || bloqsLanguages.texts['es-ES'][key] || key;
    };

    function collapseButtonClick(evt) {
        //console.log('collapse IT!', evt);
        if (evt.target.parentElement.parentElement.className.indexOf(' collapsed') === -1) {
            evt.target.parentElement.parentElement.className = evt.target.parentElement.parentElement.className.concat(' collapsed');
            evt.target.innerHTML = '+'
        } else {
            evt.target.parentElement.parentElement.className = evt.target.parentElement.parentElement.className.replace(' collapsed', '');
            evt.target.innerHTML = '-'
        }

    }

    // Block Constructor
    var Bloq = function Bloq(params) {
        if (params.bloqData) {


            this.uuid = 'bloq:' + utils.generateUUID();

            if (params.$field && !params.$field.is($field)) {
                $field = params.$field;
                bloqsTooltip.addBloqsTooltip($field);
            }

            this.bloqData = params.bloqData;
            componentsArray = params.componentsArray || componentsArray;

            this.connectors = [];
            this.IOConnectors = [];

            var enable = false,
                connectable,
                that = this;

            this.collapseGroupContent = function() {

                var $fieldContent = that.$bloq.children('.field--content');
                //$fieldContent = $(e.currentTarget).parent().find('.field--content');
                $fieldContent.toggleClass('field--collapsed');
                that.connectable = !that.connectable;
                $fieldContent.parent().toggleClass('collapsed--field');
            };

            this.enable = function(onlyParent) {
                if (!enable) {
                    this.$bloq.removeClass('disabled');
                    //console.log('activamos', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            if (this.bloqData.content[0][i].alias === 'bloqInput') {
                                var uuid;
                                for (var j = 0; j < this.IOConnectors.length; j++) {
                                    uuid = this.IOConnectors[j];
                                    if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                        utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).enable();
                                    }
                                }
                            }
                        }
                    }

                    enable = true;

                    if (this.connectors[2] && !onlyParent) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.enable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                }
            };

            this.disable = function(onlyParent) {
                this.$bloq.addClass('disabled');
                if (enable) {

                    //console.log('activamos', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            switch (this.bloqData.content[0][i].alias) {
                                case 'bloqInput':
                                    //disable the inputs bloqs inside in 1 level
                                    var uuid;
                                    for (var j = 0; j < this.IOConnectors.length; j++) {
                                        uuid = this.IOConnectors[j];
                                        if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                            utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).disable();
                                        }
                                    }
                                    break;
                                default:
                            }
                        }
                    }

                    enable = false;

                    if (this.connectors[2] && !onlyParent) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.disable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                }
            };

            this.itsEnabled = function() {
                return enable;
            };

            this.doConnectable = function() {
                if (!connectable) {
                    // console.log('make them connectable', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            if (this.bloqData.content[0][i].alias === 'bloqInput') {
                                var uuid;
                                for (var j = 0; j < this.IOConnectors.length; j++) {
                                    uuid = this.IOConnectors[j];
                                    if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                        utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).doConnectable();
                                    }
                                }
                            }
                        }
                    }
                    if (this.connectors[2]) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.doConnectable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                    connectable = true;
                    this.$bloq[0].dispatchEvent(new Event('bloq:connectable'));
                }
            };

            this.doNotConnectable = function() {
                connectable = false;
            };

            this.isConnectable = function() {
                return connectable;
            };

            this.itsFree = function() {
                return (this.$bloq.closest('.bloq--group').length === 0);
            };

            this.autoRemove = function() {
                removeBloq(this.uuid);
            }

            //creation
            this.$bloq = $('<div>').attr({
                'data-bloq-id': this.uuid,
                tabIndex: 0
            });

            this.$bloq.addClass('bloq bloq--' + this.bloqData.type + ' ' + this.bloqData.bloqClass);

            bloqs[this.uuid] = this;

            //this.disable();
            this.doNotConnectable();

            switch (this.bloqData.type) {
                case 'statement-input':
                    this.$bloq.append('<div class="bloq--statement-input__header"><button class="btn-collapse">-</button></div><div class="bloq--extension"><div class="bloq--extension__content"></div> <div class="bloq--extension--end"></div></div>');
                    this.$contentContainer = this.$bloq.find('.bloq--statement-input__header');
                    this.$contentContainerDown = this.$bloq.find('.bloq--extension--end');
                    //this.$bloq.attr('draggable', true);
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    this.$bloq.find('.btn-collapse')[0].addEventListener('click', collapseButtonClick);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$contentContainer.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$contentContainer.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    this.$contentContainer.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    this.$contentContainerDown.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$contentContainerDown.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'statement':
                    this.$bloq.append('<div class="bloq--fixed">');
                    this.$contentContainer = this.$bloq.find('.bloq--fixed');
                    //this.$bloq.attr('draggable', true);
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$bloq.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'output':
                    this.$contentContainer = this.$bloq;
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$bloq.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'group':
                    this.$bloq.append('<div class="field--header"><button class="btn btn--collapsefield"></button><h3 data-i18n="' + this.bloqData.headerText + '">' + translateBloq(lang, this.bloqData.headerText) + '</h3></div><div class="field--content"><div class="bloq--extension--info"> <div class="bloq__info"><p class="bloq__info--text" data-i18n="' + this.bloqData.descriptionText + '">' + translateBloq(lang, this.bloqData.descriptionText) + '</p></div><p class="bloq--drag-bloq" data-i18n="drag-bloq">' + translateBloq(lang, 'drag-bloq') + '</p></div><div class="bloq--extension__content"></div></div>');
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.find('.connector--root').addClass('connector--root--group');
                    this.$bloq.find('.field--header .btn').on('click', this.collapseGroupContent);
                    this.$bloq.find('.field--header h3').on('click', this.collapseGroupContent);
                    break;
                default:
                    throw 'bloqData ' + this.bloqData.type + 'not defined in bloq construction';
            }

            if (this.bloqData.createDynamicContent) {
                var name = utils.validName(this.$bloq.find('input.var--input').val());
                if (name) {
                    updateSoftVar(this, name);
                } else {
                    removeSoftVar(this, name);
                }
            }

            this.getIOConnectorUuidByContentId = function(contentId) {
                var found = false,
                    i = 0,
                    result = null;

                while (!found && (i < this.IOConnectors.length)) {
                    if (IOConnectors[this.IOConnectors[i]].contentId === contentId) {
                        found = true;
                        result = this.IOConnectors[i];
                    }
                    i++;
                }
                return result;
            };

            this.getBloqsStructure = function(fullStructure) {
                var result,
                    tempBloq;

                if (fullStructure) {
                    result = _.cloneDeep(this.bloqData);
                } else {
                    result = {
                        name: this.bloqData.name,
                        content: [
                            []
                        ]
                    };
                }
                result.enable = this.itsEnabled();

                var rootConnector = this.connectors[2];
                if (rootConnector) {
                    result.childs = [];
                    var connectedConnector = connectors[rootConnector].connectedTo;
                    while (connectedConnector) {
                        tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                        result.childs.push(tempBloq.getBloqsStructure(fullStructure));
                        connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                    }
                }

                var tempObject, value, selectedValue, attributeValue;
                if (this.bloqData.content[0]) {

                    for (var i = 0; i < this.bloqData.content[0].length; i++) {
                        tempObject = null;
                        switch (this.bloqData.content[0][i].alias) {
                            case 'varInput':
                            case 'stringInput':
                            case 'numberInput':
                            case 'multilineCodeInput':
                            case 'multilineCommentInput':
                            case 'codeInput':
                            case 'charInput':
                                value = this.$bloq.find('[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value
                                    };
                                }
                                break;
                            case 'bloqInput':
                                //get the inputs bloqs inside in 1 level
                                var uuid,
                                    connectedBloq;
                                uuid = this.getIOConnectorUuidByContentId(this.bloqData.content[0][i].bloqInputId);
                                if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                    connectedBloq = utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors);
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        bloqInputId: this.bloqData.content[0][i].bloqInputId,
                                        value: connectedBloq.getBloqsStructure(fullStructure)
                                    };
                                }

                                break;
                            case 'dynamicDropdown':
                                attributeValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').attr('data-value');
                                selectedValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').val();
                                //only software Vars get value from val(), hardware, use attribute or val()
                                var variableType = this.bloqData.content[0][i].options,
                                    itsSoftwareValue = Object.keys(softwareArrays).indexOf(variableType),
                                    sensorsComponentsArray = componentsArray.sensors.concat(componentsArray.mkb_lightsensor.concat(componentsArray.mkb_linefollower)),
                                    valueType,
                                    j;

                                if (itsSoftwareValue !== -1) {
                                    value = selectedValue;
                                    j = 0;
                                    while (!valueType && (j < softwareArrays[variableType].length)) {
                                        if (softwareArrays[variableType][j].name === value) {
                                            valueType = softwareArrays[variableType][j].type || -1;
                                        }
                                        j++;
                                    }
                                } else if (variableType === 'sensors') {
                                    value = selectedValue;

                                    j = 0;
                                    while (!valueType && (j < sensorsComponentsArray.length)) {
                                        if (sensorsComponentsArray[j].name === value) {
                                            valueType = sensorsComponentsArray[j].dataReturnType;
                                        }
                                        j++;
                                    }

                                } else {
                                    value = attributeValue || selectedValue;
                                }

                                // console.log('val', attributeValue, selectedValue);
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value,
                                        valueType: valueType
                                    };
                                }
                                break;
                            case 'staticDropdown':
                                //value = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                value = this.$contentContainer.find('> select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value
                                    };
                                }
                                break;
                            case 'text':
                                //we dont catch this field
                                break;
                            default:
                                throw 'I dont know how to get the structure from this contentType :( ' + this.bloqData.content[0][i].alias;
                        }
                        if (tempObject) {
                            if (fullStructure) {
                                result.content[0][i].value = tempObject.value;
                                result.content[0][i].valueType = tempObject.valueType;
                            } else {
                                result.content[0].push(tempObject);
                            }
                        }

                    }
                }

                return result;
            };
            window.dispatchEvent(new CustomEvent('bloqs:created', {
                detail: {
                    bloq: this
                }
            }));
            return this;
        } else {
            console.error('the bloqData its empty.');
        }
    };

    var clearSoftwareArrays = function() {
        softwareArrays = {
            voidFunctions: [],
            returnFunctions: [],
            softwareVars: [],
            classes: [],
            objects: []
        };
    };

    var buildBloqWithContent = function(data, componentsArray, schemas, $field) {

        var tempBloq,
            originalBloqSchema = _.cloneDeep(schemas[data.name]),
            bloqSchema,
            lastBottomConnector,
            tempNodeBloq,
            tempOutputBloq,
            inputConnectorUuid,
            $dropContainer,
            i;


        if (!originalBloqSchema) {
            console.error('no original schema', data);
        }
        //fill the schema with content
        bloqSchema = bloqsUtils.fillSchemaWithContent(originalBloqSchema, data);
        tempBloq = new Bloq({
            bloqData: bloqSchema,
            componentsArray: componentsArray,
            $field: $field
        });

        if (data.content) {
            for (i = 0; i < data.content[0].length; i++) {
                if (data.content[0][i].alias === 'bloqInput') {
                    inputConnectorUuid = tempBloq.getIOConnectorUuidByContentId(data.content[0][i].bloqInputId);
                    $dropContainer = tempBloq.$bloq.find('[data-connector-id="' + inputConnectorUuid + '"]').first();
                    //console.debug($dropContainer);
                    //inputConnectorUuid = $dropContainer.attr('data-connector-id');
                    //console.debug(inputConnectorUuid);
                    tempOutputBloq = buildBloqWithContent(data.content[0][i].value, componentsArray, schemas, $field);
                    tempOutputBloq.$bloq.addClass('nested-bloq');
                    //Connections in bloqInput
                    //logical
                    if (!IOConnectors[inputConnectorUuid]) {
                        console.debug('not connector?', originalBloqSchema);
                    }
                    IOConnectors[inputConnectorUuid].connectedTo = tempOutputBloq.IOConnectors[0];
                    IOConnectors[tempOutputBloq.IOConnectors[0]].connectedTo = inputConnectorUuid;
                    //visual
                    //$dropContainer[0].appendChild(tempOutputBloq.$bloq[0])
                    $dropContainer.append(tempOutputBloq.$bloq);
                }
            }
        }

        if (data.childs) {

            $dropContainer = tempBloq.$bloq.find('.bloq--extension__content');
            lastBottomConnector = tempBloq.connectors[2];

            if (data.childs.length > 0) {
                tempBloq.$bloq.addClass('with--content');
            }
            for (i = 0; i < data.childs.length; i++) {
                tempNodeBloq = buildBloqWithContent(data.childs[i], componentsArray, schemas, $field);
                //Connections in statement
                //logical
                connectors[lastBottomConnector].connectedTo = tempNodeBloq.connectors[0];
                connectors[tempNodeBloq.connectors[0]].connectedTo = lastBottomConnector;
                lastBottomConnector = tempNodeBloq.connectors[1];

                //visual
                tempNodeBloq.$bloq.addClass('inside-bloq');
                $dropContainer.append(tempNodeBloq.$bloq);
            }
        }

        if (data.enable) {
            tempBloq.enable(true);
        } else {

            tempBloq.disable();
        }
        if (tempBloq.bloqData.createDynamicContent) {
            updateSoftVar(tempBloq);
        }

        return tempBloq;
    };

    exports.Bloq = Bloq;
    exports.updateSoftVar = updateSoftVar;
    exports.connectors = connectors;
    exports.IOConnectors = IOConnectors;
    exports.bloqs = bloqs;
    exports.removeBloq = removeBloq;
    exports.translateBloqs = translateBloqs;
    exports.getFreeBloqs = getFreeBloqs;
    exports.destroyFreeBloqs = destroyFreeBloqs;
    exports.updateDropdowns = updateDropdowns;
    exports.setOptions = setOptions;
    exports.buildBloqWithContent = buildBloqWithContent;
    exports.clearSoftwareArrays = clearSoftwareArrays;
    exports.startBloqsUpdate = startBloqsUpdate;

    return exports;

})(window.bloqs = window.bloqs || {}, _, bloqsUtils, bloqsLanguages, bloqsTooltip, bloqsSuggested, undefined);
