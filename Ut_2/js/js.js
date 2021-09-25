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
/*
let s1="esto es una cadana";
console.log(s1.length);
console.log(s1.charAt(0));
console.log(s1.indexOf("es"));
console.log(s1.lastIndexOf("es"));
console.log(s1.match(/.n/));
console.log(s1.search(/[aeiou]/));
console.log(s1.replace(/e/g,"i"));
console.log(s1.slice(5,7));
console.log(s1.substring(5,7));
console.log(s1.substr(5,7));
console.log(s1.toLocaleUpperCase());
console.log("cadena     con   \t\t     espacios ".trim());
console.log(s1.startsWith("esto"));
console.log(s1.endsWith("cadena"));
console.log(s1.includes("una"));
console.log("la".repeat(6));
console.log("\u{1f3c4}");
*/

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
//setTimeout(3000,alert("pasaron 3 segundos hola"));

/*
Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden
 pasar dos parámetros, el número de milisegundos a esperar y qué función
  se va a ejecutar cuando pasen esos milisegundos. Crea un programa que
  pida por pantalla el nombre al usuario y después de 3 segundos genere
  una respuesta con el nombre que introdujo el alumno.
*/
//let nombre=prompt("dame el nombre")
//setTimeout(3000,alert("pasaron 3 segundos te llamas " + nombre));
/*
Genera una función que dada una cadena pinte: El número de caracteres
que hay. El número de vocales. Si empieza por “A” o no.

* */

let cadena="mas vale pájaro en mano que ciento volando";
function numeroCaracteresVocalesYSiInicioA(cadena) {
    console.log(cadena.length);
    if (console.log(cadena.includes("a","e","i","o","u"))){
        cuenta++;

    };
    alert(cuenta);
    if (console.log(cadena.charAt(0).includes("A"))){
        alert("empieza por A")
    }else {
        alert("no empieza por A")
    }
}
console.log(numeroCaracteresVocalesYSiInicioA(cadena));