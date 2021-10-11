"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

Los siguientes ejercicios deberán ser entregados al final de la
UT2. El formato de entrega será un fichero js subido a Moodle.

    Crea una función que reciba dos cadenas y pinte cuál es la
más larga de las dos. Si alguno de los dos argumentos no es una
cadena devuelve un mensaje de error en su lugar. Probarlo con
varias entradas directamente introducidas con código. Las
salidas se harán con console.log.

*/
let cadena1="true mos";
let cadena2="true mas o menos";

function cadenaMasLarga(cadena1,cadena2) {
    (typeof cadena1==="string"&&typeof cadena2==="string")?(cadena1.length>cadena2.length)?console.log(cadena1):console.log(cadena2):console.log("error");
}
cadenaMasLarga(cadena1,cadena2);
