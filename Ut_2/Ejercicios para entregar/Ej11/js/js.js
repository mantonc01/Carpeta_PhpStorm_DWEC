"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.
 
9) Crea un programa en el que existan 3 objetos de tipo platoCocina, que tengan los atributos:
nombrePlato(cadena), duracionMinutos(un número) y dificultad(un número).

Almacena en un mapa la relación de cada plato con un array que guarde los ingredientes que
se utilizan como cadenas.
 */





function pintarNumerosPares(...args){
    console.log(
        args.filter(e=> typeof e ==="number").filter(n=>n%2==0).join()
    );
}

pintarNumerosPares(6,8,7,1,5)