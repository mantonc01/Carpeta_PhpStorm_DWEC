"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.


 12) OPCIONAL: Crea un mapa que guarde Estudiantes (cadena con el nombre) ---->
 [notas de las asignaturas] (un array de 6 posiciones con números).  Al menos 4 estudiantes.

a) Pinta por pantalla el nombre de cada estudiante con su media académica. Crea la función

mediaAritmetica que tenga como entrada enteros con cualquier número de elementos.

b) Pinta al final quién es el estudiante con mejor media y cuál es esa media.


c) Pinta los nombres de todos los estudiantes ordenados por su media.

*/

let nuevoMapa=new Map([["jose",[5,6,7,0,9,8]],
    ["luis",[8,6,8,8,9,8]],
    ["felix",[5,6,4,8,9,9]],
    ["ana",[5,2,7,8,1,8]]]);

nuevoMapa.forEach(elementosDelMapa);


mejorMediaYOrdenados(nuevoMapa);

function mediaAritmetica(...numerosIntroducidos) {
    let media=numerosIntroducidos.reduce((acumulador,numero)=>acumulador+numero,0);
    return media/numerosIntroducidos.length;
}

function elementosDelMapa(value, key) {
    let media=mediaAritmetica(...value);
    console.log("nombre " + key + " y su media " + media);
};

function mejorMediaYOrdenados() {
    let nuevoArray = [];
    for (let [value, key] of nuevoMapa) {
        nuevoArray.push([value, mediaAritmetica(...key)]);
    }
    nuevoArray.sort((alumno1, alumno2) => alumno2[1] - alumno1[1]);
    console.log("Estudiante con mejor media " + nuevoArray[0].join(" con un "));
    console.log(nuevoArray.join("\n"));
}


