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

class PlatoCocina {
    nombrePlato;
    duracionMinutos;
    dificultad;

    constructor(nombrePlato,duracionMinutos,dificultad) {
        this.nombrePlato=nombrePlato;
        this.duracionMinutos=duracionMinutos;
        this.dificultad=dificultad;
    }
    toString(){
        return "El plato de "+ this.nombrePlato + " tiene una duración de " + this.duracionMinutos + " con dificultad " + this.dificultad + "\n" + "Ingredientes : " + mapaPlatos;
    }
}
let platoCocina1=(new PlatoCocina("tortilla",15,5));
let platoCocina2=(new PlatoCocina("patatas fritas",10,3));
let platoCocina3=(new PlatoCocina("fideos",20,6));

let mapaPlatos= new Map()
mapaPlatos.set(platoCocina1,["huevos","aceite"]);
mapaPlatos.set(platoCocina2,["patatas","aceite"]);
mapaPlatos.set(platoCocina3,["fideos","agua"]);

for(let[platos,mapaPlatos]of mapaPlatos){
    console.log(platos.nombrePlato)
}
console.log(platoCocina1.toString());