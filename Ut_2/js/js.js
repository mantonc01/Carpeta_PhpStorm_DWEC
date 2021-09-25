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
if(num1+num2+num3==100){
    alert("exito");
}else {
    alert("fracaso");
}*/
/*

Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden
pasar dos parámetros, el número de milisegundos a esperar y qué función se
va a ejecutar cuando pasen esos milisegundos. Crea un programa que espere 3
 segundos y luego pinte en una alerta “Hola”.
*/
/*setTimeout(3000,alert("pasaron 3 segundos hola")); *///después de 3 segundos muestro el alert

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

let cadena="mas vale pájaro en mano que ciento volando";
function numeroCaracteresVocalesYSiInicioA(cadena) {
    let numeroCaracteres=cadena.length; //guardo el número de caracteres totales de la cadena
    console.log(cadena.length);
    alert("numero de caracteres totales => " + numeroCaracteres);
    let cuenta=cadena.replace(/[^aeiou]/gi,"").length; //reemplazo las vocales globalmente y sin distinguir mayúsculas
    console.log(cadena.replace(/[^aeiou]/gi,"").length);
    alert("numero de caracteres sin vocales => " + cuenta);

    /*if (console.log(cadena.charAt(0).includes("A"))){ //si el primer carácter es A lo digo
        alert("la cadena empieza por A")
        console.log("la cadena empieza por A");
    }else {
        alert("la cadena no empieza por A")
        console.log("la cadena no empieza por A");
    }*/
    console.log(cadena.charAt(0).includes("A"))?console.log("la cadena empieza por A"):console.log("la cadena no empieza por A"); //modo ternario
}
console.log(numeroCaracteresVocalesYSiInicioA(cadena));
