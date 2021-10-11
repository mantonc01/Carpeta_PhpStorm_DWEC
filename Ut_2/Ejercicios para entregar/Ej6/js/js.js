"use strict";
/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2. 
El formato de entrega será un fichero js subido a Moodle.

6) Crea un array con 4 valores y realiza los siguientes pasos:
1) Añade dos elementos al inicio.
2) Añade 2 más al final.
3) Elimina las posiciones 3,4,5
4) Inserta 2 elementos antes del último elemento.
NOTA: En cada cambio muestra los elementos del array separados por una almohadilla
(no utilices bucles, utiliza las funciones predefinidas de arrays).
 */
let unArray=[1,2,89,654];
let msg ="El array original es: " + unArray +"\n";
console.log(msg);
unArray.unshift(22,23);
msg ="El array con dos elementos al inicio: " + unArray +"\n";
console.log(msg);
unArray.push(55,56);
msg ="El array con 2 más al final: " + unArray +"\n";
console.log(msg);
unArray.splice(2,3);
msg ="El array Elimina las posiciones 3,4,5: " + unArray +"\n";
console.log(msg);
unArray.splice(unArray.length-1,0,[33,36]);
msg ="El array Inserta 2 elementos antes del último elemento: " + unArray +"\n";
console.log(msg);


