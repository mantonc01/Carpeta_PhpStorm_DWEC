"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.
 
11) OPCIONAL: Crea una función que reciba un número indeterminado de parámetros.
Para aquellos que sean números, agrúpalos en un array y píntalos por pantalla
sólo si son pares. Prueba con diferentes entradas.
 */

function pintarNumerosPares(...args){
    console.log(
        args.filter(e=> typeof e ==="number").filter(n=>n%2==0).join()
    );
}

pintarNumerosPares(6,8,7,1,5)