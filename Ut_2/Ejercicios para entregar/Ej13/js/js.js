"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.
 
*/


function eliminaYMuestraRepe(arr) {
    let valoresProcesados=[];
    let conjuntoRepetidos=new Set();
    for (let elemento of arr){
        if(valoresProcesados.includes(elemento)){
           conjuntoRepetidos.add(elemento);
        }else {
            valoresProcesados.push(elemento)
        }
    }
    console.log("los repetidos son " + [...conjuntoRepetidos].join());
    console.log("los no repetidos son " + valoresProcesados.join());
}

eliminaYMuestraRepe([2,5,6,7,2,5])