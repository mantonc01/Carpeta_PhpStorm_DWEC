"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.
 
8) Crea una función procesarArray que realice los siguientes pasos:
	a) Checkea que todos los elementos son de tipo número. Si no, termina con alert(“Error”).
b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2.
 (se debe almacenar sobre el mismo array.
c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje
por pantalla de éxito, en caso contrario, de error.
 */



let unArray=[2,8];

function procesarArray(arrayIntroducido) {
    let arrayOriginal=arrayIntroducido;
    let msg ="El array original es: " + arrayOriginal +"\n";
    console.log(msg);

    //a) Checkea que todos los elementos son de tipo número. Si no, termina con alert(“Error”).
    msg=arrayIntroducido.some(num=>typeof num!="number");
    //console.log(msg);

    //b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2.
    //  (se debe almacenar sobre el mismo array.
    msg?alert("Error"):arrayOriginal=arrayIntroducido.map(num=>num*2);

    //c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje
    // por pantalla de éxito, en caso contrario, de error.
    arrayOriginal.every(num=>num%2==0)?alert("Éxito"):false;
    return arrayOriginal
}

unArray=procesarArray(unArray);
console.log(unArray);


