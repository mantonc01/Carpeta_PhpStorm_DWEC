"use strict";
/*
ejercicio 1
let nombre ="Mario";


console.log(nombre);
console.log(typeof nombre);

var altura= 175;

console.log(altura);
console.log(typeof altura);

altura= "Ciento setenta y cinco";
console.log(altura);
console.log(typeof altura);
*/


/*
ejercicio 4
let procesarTres=function (arg1,arg2,arg3,funcionProcesadora){
    return funcionProcesadora(arg1,arg2,arg3);
}
//console.log(
    procesarTres(2,5,4)
)
let funcionLamdaSuma=(arg1,arg2,arg3)=>{return arg1 + arg2 + arg3};
let funcionLamdaMayor=(arg1,arg2,arg3)=>{
    let mayor=0;
    if (arg1>arg2){
        mayor=arg1;
    }else {
        mayor=arg2;
    }
    if (mayor<arg3){
        mayor=arg3;
    }
    return mayor};
let funcionLamdaMenor=(arg1,arg2,arg3)=>{
    let menor=0;
    if (arg1<arg2){
        menor=arg1;
    }else {
        menor=arg2;
    }
    if (menor>arg3){
        menor=arg3;
    }
    return menor};
let funcionLamdaSumaDivision=(arg1,arg2,arg3)=>{return (arg1 + arg3)/arg2};

console.log()*/

//prueba 7
/*
function cambiarContenido(a,b,c) {
    a=a*10;
    b.item="cambiar";
    c={item: "cambiar"};

}
let num=10;
let obj1={item: "inicial"};
let obj2 = {item: "inicial"};

cambiarContenido(num,obj1,obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);
*/


//prueba 8
/*
let valor= 100;
let impuesto= 30;
function calculaPrecioConImpuesto(valor=0,impuesto=valor/10){
    return valor + impuesto;}

console.log("producto de "+valor+"$, sin entrada de impuesto: " + calculaPrecioConImpuesto(valor));

console.log("producto de "+valor+"$, con "+ impuesto + "$ de impuesto: " + calculaPrecioConImpuesto(valor,impuesto));
*/

//prueba 11
/*
console.log()

 */

//prueba 13
/*let s1="esto es una cadena";
console.log(s1.length); //largo de la cadena
console.log(s1.charAt(0)); //carácter de una posición
console.log(s1.indexOf("es")); //busca la posición de la primera coincidencia
console.log(s1.lastIndexOf("es")); //busca la posición de la última coincidencia
console.log(s1.match(/.n/)); //devuelve las coincidencias
console.log(s1.search(/[aeiou]/)); //busca las vocales
console.log(s1.replace(/e/gi,"i")); //reemplaza la e globalmente sin distinguir mayúsculas y minúsculas por la i
console.log(s1.slice(5,7)); //devuelve lo que hay desde la posición 5 asta la 7
console.log(s1.substring(5,7)); //devuelve lo que hay desde la posición 5 asta la 7
console.log(s1.substr(5,7)); //devuelve desde la posición que indiques y tantas como indiques
console.log(s1.toLocaleUpperCase());  //convierte a mayúsculas
console.log("cadena     con   \t\t     espacios ".trim()); // quita los últimos espacios
console.log(s1.startsWith("esto")); //booleano si empieza con esto
console.log(s1.endsWith("cadena"));  //booleano si termina con cadena
console.log(s1.includes("una"));  //booleano si contiene una
console.log("la".repeat(6)); //repite la 6 veces
console.log("\u{1f3c4}"); //pinta lo que tenga referenciado en este caso un surfista*/

//ejercicios de consolidacion

/*
Crea los siguiente programas en JavaScript de la misma manera que hemos
realizado las pruebas anteriores:


Que permita al usuario introducir 3 números por pantalla.
Si los números suman 100 devolverá mediante un alert un mensaje de éxito.
En caso contrario devolverá un mensaje de fracaso.
*/
/*
let num1= prompt("introduce un numero");
let num2= prompt("introduce un numero");
let num3= prompt("introduce un numero");
if(num1+num2+num3===100){
    alert("éxito");
}else {
    alert("fracaso");
    }
    if(num1+num2+num3===100)?alert("éxito"):alert("fracaso");


*/
/*

Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden
pasar dos parámetros, el número de milisegundos a esperar y qué función se
va a ejecutar cuando pasen esos milisegundos. Crea un programa que espere 3
 segundos y luego pinte en una alerta “Hola”.
*/

    /*setTimeout(alert,3000,"pasaron 3 segundos hola");*/

 //después de 3 segundos muestro el alert

/*
Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden
 pasar dos parámetros, el número de milisegundos a esperar y qué función
  se va a ejecutar cuando pasen esos milisegundos. Crea un programa que
  pida por pantalla el nombre al usuario y después de 3 segundos genere
  una respuesta con el nombre que introdujo el alumno.
*/
/*let nombre=prompt("dame el nombre") //pido un nombre por el promt
setTimeout(3000,alert("pasaron 3 segundos te llamas " + nombre));*/ //después de 3 segundos muestro lo pasado
/*
Genera una función que dada una cadena pinte: El número de caracteres
que hay. El número de vocales. Si empieza por “A” o no.
*/

/*let cadena="mas vale pájaro en mano que ciento volando";
function numeroCaracteresVocalesYSiInicioA(cadena) {
    let numeroCaracteres=cadena.length; //guardo el número de caracteres totales de la cadena
    console.log(cadena.length);
    alert("numero de caracteres totales => " + numeroCaracteres);
    let cuenta=cadena.replace(/[^aeiou]/gi,"").length; //reemplazo las vocales globalmente y sin distinguir mayúsculas
    console.log(cadena.replace(/[^aeiou]/gi,"").length);
    alert("numero de caracteres sin vocales => " + cuenta);

    /!*if (console.log(cadena.charAt(0).includes("A"))){ //si el primer carácter es A lo digo
        alert("la cadena empieza por A")
        console.log("la cadena empieza por A");
    }else {
        alert("la cadena no empieza por A")
        console.log("la cadena no empieza por A");
    }*!/
    console.log(cadena.charAt(0).includes("A"))?console.log("la cadena empieza por A"):console.log("la cadena no empieza por A"); //modo ternario
}
console.log(numeroCaracteresVocalesYSiInicioA(cadena));*/

/*

UT2 EJERCICIOS FINALES A ENTREGAR

Los siguientes ejercicios deberán ser entregados al final de la
UT2. El formato de entrega será un fichero js subido a Moodle.

    Crea una función que reciba dos cadenas y pinte cuál es la
más larga de las dos. Si alguno de los dos argumentos no es una
cadena devuelve un mensaje de error en su lugar. Probarlo con
varias entradas directamente introducidas con código. Las
salidas se harán con console.log.

*/
/*
let cadena1="true mos";
let cadena2="true mas";*/

//function cadenaMasLarga(cadena1,cadena2) {
 //  (typeof cadena1==="string"&&typeof cadena2==="string")?(cadena1.length>cadena2.length)?console.log(cadena1):console.log(cadena2):console.log("error");
//}
//cadenaMasLarga(cadena1,cadena2);

/*

    Crea una función que reciba dos cadenas. Comprobará que
ambos argumentos son cadenas y en caso afirmativo pintará
mediante console.log si una cadena es igual a la otra del
revés. Prueba con varias entradas.
*/
/*function segunda(cadena1,cadena2) {
    let comprobacion=typeof cadena1==="string"&&typeof cadena2==="string";
    if (comprobacion){
        let invertida="";
        for(let i = cadena2.length -1;i>=0; --i){
            invertida +=cadena2[i];
        }
    }
    (comprobacion)?(cadena1===invertida)?console.log("son iguales"):console.log("no son iguales"):console.log("error");
}
segunda(cadena1,cadena2);*/


//prueba 20
/*

let persona = {
   nombre: "jesús",
   edad: 45,
   tlf:"123456789"
};
for (let campo in persona){
   console.log(campo + ": " +persona[campo]);
}
*/

/*
let ar = new Array(4,21,23,24,8);

for (let i in ar){
   console.log(ar[i]);
}*/
/*
EJERCICIO 14.1: Crea un programa que dada la siguiente cadena y utilizando un bucle for...of devuelva cuáles de las
letras son vocales y cuáles son consonantes. NOTA: Los caracteres de las cadenas se pueden recorrer con un bucle de
este tipo.
 */
/*let str = "ab1c3de4fg";

for (let letra of str) {

   if (letra.match(/[a-z]/gi)){
      if (letra.match(/^[aeiou]/gi)){
         console.log(letra + " letra")
      } else {
         console.log(letra + " consonante")
      }
   }

}*/
//EJERCICIO 14.2 Utiliza splice (en una sola sentencia) para que el siguiente array: [1,2,"a","d","g"]
// se modifique a [1,2,"pepe",3,"H","g"]

/*
let a = [1,2,"a","d","g"];
console.log(a);

a.splice(2,3,"pepe",3,"H","g");
console.log(a);*/


/*PRUEBA (21):
Define correctamente la función ordenaEnteros y comprueba que la ordenación resultante es correcta.
Modificación: Hazlo mediante una función lambda.
*/

/*
let a3=[20,6,100,51,28,9];
a3.sort((entero1,entero2)=>{
    //si entero1 es mayor que entero2 devuelve un numero positivo
    if (entero1>entero2){
        return 1;
    }
    //si entero1 es igual que entero2 devuelve 0
    if (entero1==entero2){
        return 0;
    }
    //si entero1 es menor que entero2 devuelve un numero negativo.
    return -1;
});
//a3.sort((entero1,entero2)=>entero1-entero2);
console.log(a3.join(" - "));*/

//arrays
/*class Persona {
    nombre;
    edad;

    constructor(nombre,edad) {
        this.nombre=nombre;
        this.edad=edad;
    }

    toString() {
        return this.nombre+"  ("+this.edad+")";
    };
}
let personas =[new Persona("Marcos",33),
    new Persona("María",19),
    new Persona("Santiago",28),
    new Persona("Cristina",40)];

console.log(personas);
personas.sort((persona1,persona2) => persona1.edad-persona2.edad);
console.log(personas.toString());*/


/**
 * UT2 EJERCICIOS FINALES A ENTREGAR

 ej3 * Crea una función a la cual se le pase un array. Esta función devolverá:
 Cuántos elementos hay de tipo número y los pintará por pantalla.
 Cuántos elementos hay de tipo cadena y los pintará por pantalla.
 Cuántos elementos no son ni número ni cadena y los pintará por pantalla.
 Prueba la ejecución con varias entradas.

 */
/*
let arrayVariasCosas=["maria",1,45,,2,"lolo",true,false];

console.log(arrayVariasCosas);

function averiguaTipo() {
    //arrayVariasCosas.forEach(elemento => console.log(elemento + " es un " + typeof elemento));
    let texto =0;
    let numero=0;
    let otros=0;
    for (let elemento of arrayVariasCosas){
        if (typeof elemento == "string"){
            console.log(elemento + " es un " + typeof elemento);
            texto++;
        }

    }
    console.log("total " + texto );

    for (let elemento of arrayVariasCosas){
        if (typeof elemento == "number"){
            console.log(elemento + " es un " + typeof elemento);
            numero++;
        }
    }
    console.log("total " + numero );

    for (let elemento of arrayVariasCosas){
        if (typeof elemento != "number" && typeof elemento != "string" ){
            console.log(elemento + " es un " + typeof elemento);
            otros++;
        }
    }
    console.log("total " + otros);
}
averiguaTipo();
*/


/*
* PRUEBA (23):
Utiliza rest y spread para crear una función a la que le puedas
*  pasar un número ilimitado de parámetros. Compruebe que
* todos esos parámetros sean números y devuelva el mayor de
* todos. Si algún parámetro no es un número devolverá
* undefined.  Prueba tu función con varias entradas
* utilizando spread.*/
/*
function funcionConRest(...restoArg) {
    //let mayor=0;
   // restoArg.every(typeof "number")?restoArg.lastIndexOf(num=>num>num):console.log("undefine");
    console.log("los argumentos son " + restoArg.toString());
   let todosNumero= restoArg.every (function (elemento){
       return typeof elemento ==="number";

    });

    return Math.max(restoArg);


}
funcionConRest(1,2);*/

/*Los siguientes ejercicios deberán ser entregados al final de la UT2.
El formato de entrega será un fichero js subido a Moodle.

4) Crea una función que recibe 3 parámetros con valores
por defecto (producto → “Producto genérico”, precio → 100, impuestos → 21).
La función convierte las entradas a cadena, entero y entero.
Si no se pudiesen convertir las entradas, devolvería los valores por defecto.
Prueba esta función varias veces, omitiendo valores y poniendo valores incorrectos.
*/

function funcionConversiones(producto="Producto genérico",precio = 100,impuestos = 21) {
    let product= String(producto);
    let preci= Number(precio);
    let impuesto=Number(impuestos);

console.log( " El producto es " + product + " el precio es " + preci + " y su impuesto es " + impuesto);
}


funcionConversiones("asd");
funcionConversiones("asd",true);
funcionConversiones("asd",true,false);
funcionConversiones("asd",true,23);
funcionConversiones(null,true,false);