"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*10) OPCIONAL: Crea una función en la que puedan entrar un número indeterminado de argumentos.
Comprueba que todos son cadenas(si no devuelve error) y pinta por pantalla la suma total de
todas las longitudes de las cadenas. Utiliza rest y reduce. Prueba con varias entradas.
 */



function muchosArgumentos(...argumentos) {


    if (argumentos.every(typeof "string")){
        console.log("string");
    }

}

muchosArgumentos("hola","solo");


