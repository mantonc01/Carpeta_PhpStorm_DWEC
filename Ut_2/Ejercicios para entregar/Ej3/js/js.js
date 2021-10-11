"use strict";

/**
 * UT2 EJERCICIOS FINALES A ENTREGAR

 ej3 * Crea una función a la cual se le pase un array. Esta función devolverá:
 Cuántos elementos hay de tipo número y los pintará por pantalla.
 Cuántos elementos hay de tipo cadena y los pintará por pantalla.
 Cuántos elementos no son ni número ni cadena y los pintará por pantalla.
 Prueba la ejecución con varias entradas.

 */
let arrayVariasCosas=["maria",1,45,,2,"lolo",true,false];

//console.log(arrayVariasCosas);

function averiguaTipo(array) {
    //array.forEach(elemento => console.log(elemento + " es un " + typeof elemento));
    let texto =0;
    let numero=0;
    let otros=0;
    for (let elemento of array){
        if (typeof elemento == "string"){
            console.log(elemento + " es un " + typeof elemento);
            texto++;
        }

    }
    console.log("total tipo cadena < " + texto +" >");

    for (let elemento of array){
        if (typeof elemento == "number"){
            console.log(elemento + " es un " + typeof elemento);
            numero++;
        }
    }
    console.log("total tipo número < " + numero+" >" );

    for (let elemento of array){
        if (typeof elemento != "number" && typeof elemento != "string") {
            console.log(elemento + " es un " + typeof elemento)
            otros++;
        }
    }
    console.log("total no tipo cadena o número < " + otros + " >");
}
averiguaTipo(arrayVariasCosas);
