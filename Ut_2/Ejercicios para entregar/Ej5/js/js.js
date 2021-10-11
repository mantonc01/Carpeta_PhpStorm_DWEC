"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.
 

5) Crea una función que dado un array lo ordene (mira funciones predefinidas). 
Intenta hacer un método para ordenarlo por tí mismo considerando que el array 
siempre incluyese números (Es decir, sin utilizar .sort()).
 */

function ordenarArray(arrayObtenido) {

    let miArray = arrayObtenido;

    let msg ="El array original es: " + arrayObtenido +"\n";
    console.log(msg);

    msg = "Ordenado de mayor a menor es " + miArray.sort((elem1, elem2)=>(elem2-elem1))+"\n";
    console.log(msg);

    msg =  "Ordenado de menor a mayor es " + miArray.sort((elem1, elem2)=>(elem1-elem2))+"\n";
    console.log(msg);

}
function miOrdenacionDeArray(arrayobtenido) {

    let miArray=arrayobtenido;

    let msg ="El array original es: " + miArray +"\n";
    console.log(msg);

    let n, i, k, aux;
    n = miArray.length;

    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (miArray[i] > miArray[i + 1]) {
                aux = miArray[i];
                miArray[i] = miArray[i + 1];
                miArray[i + 1] = aux;
            }
        }
    }
    msg =  "Ordenado de menor a mayor es " + miArray +"\n";
    console.log(msg);
}

let unArray=[1,2,89,654,1,0,56,789,1002];
//ordenarArray(unArray);
miOrdenacionDeArray(unArray)