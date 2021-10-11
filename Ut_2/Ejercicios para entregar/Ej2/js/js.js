"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR


    Crea una función que reciba dos cadenas. Comprobará que
ambos argumentos son cadenas y en caso afirmativo pintará
mediante console.log si una cadena es igual a la otra del
revés. Prueba con varias entradas.
*/
let cadena1="true mos";
let cadena2="som eurt";

function segunda(cadena1,cadena2) {
    let comprobacion=typeof cadena1==="string"&&typeof cadena2==="string";
    let invertida="";
    if (comprobacion){
        for(let i = cadena2.length -1;i>=0; --i){
            invertida +=cadena2[i];
        }
        //console.log(invertida);
        //console.log(cadena1)
    }
    (comprobacion)?(cadena1===invertida)?console.log("son iguales"):console.log("no son iguales"):console.log("error");
}
segunda(cadena1,cadena2);

