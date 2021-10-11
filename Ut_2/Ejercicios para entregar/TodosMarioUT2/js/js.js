"use strict";
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
let cadenaUno="true mos";
let cadenaDos="true mas o menos";

function cadenaMasLarga(cadenaUno,cadenaDos) {
    (typeof cadenaUno==="string"&&typeof cadenaDos==="string")?(cadenaUno.length>cadenaDos.length)?console.log(cadenaUno):console.log(cadenaDos):console.log("error");
}
cadenaMasLarga(cadenaUno,cadenaDos);

/*
UT2 EJERCICIOS FINALES A ENTREGAR


    Crea una función que reciba dos cadenas. Comprobará que
ambos argumentos son cadenas y en caso afirmativo pintará
mediante console.log si una cadena es igual a la otra del
revés. Prueba con varias entradas.
*/
let cadena1="true mos";
let cadena2="som eurt";

function segunda(cadena1,cadena2) {
    let comprobacion=typeof cadena1==="string"&&typeof cadena2==="string";
    let invertida="";
    if (comprobacion){
        for(let i = cadena2.length -1;i>=0; --i){
            invertida +=cadena2[i];
        }
        //console.log(invertida);
        //console.log(cadena1)
    }
    (comprobacion)?(cadena1===invertida)?console.log("son iguales"):console.log("no son iguales"):console.log("error");
}
segunda(cadena1,cadena2);

/**
 * UT2 EJERCICIOS FINALES A ENTREGAR

 ej3 * Crea una función a la cual se le pase un array. Esta función devolverá:
 Cuántos elementos hay de tipo número y los pintará por pantalla.
 Cuántos elementos hay de tipo cadena y los pintará por pantalla.
 Cuántos elementos no son ni número ni cadena y los pintará por pantalla.
 Prueba la ejecución con varias entradas.

 */
let arrayVariasCosas=["maria",1,45,,2,"lolo",true,false];

//console.log(arrayVariasCosas);

function averiguaTipo(array) {
    //array.forEach(elemento => console.log(elemento + " es un " + typeof elemento));
    let texto =0;
    let numero=0;
    let otros=0;
    for (let elemento of array){
        if (typeof elemento == "string"){
            console.log(elemento + " es un " + typeof elemento);
            texto++;
        }

    }
    console.log("total tipo cadena < " + texto +" >");

    for (let elemento of array){
        if (typeof elemento == "number"){
            console.log(elemento + " es un " + typeof elemento);
            numero++;
        }
    }
    console.log("total tipo número < " + numero+" >" );

    for (let elemento of array){
        if (typeof elemento != "number" && typeof elemento != "string") {
            console.log(elemento + " es un " + typeof elemento)
            otros++;
        }
    }
    console.log("total no tipo cadena o número < " + otros + " >");
}
averiguaTipo(arrayVariasCosas);
/*
UT2 EJERCICIOS FINALES A ENTREGAR

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
funcionConversiones(undefined,undefined,undefined);
funcionConversiones(null,"jklkjlkjl",false);

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

let unArrayDe=[1,2,89,654,1,0,56,789,1002];
//ordenarArray(unArray);
miOrdenacionDeArray(unArrayDe)

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


/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2.
El formato de entrega será un fichero js subido a Moodle.

7) Utiliza la función every para comprobar que todos los elementos de un array son pares.

 */
let unArraySiete=[2,8];
let msgSiete ="El array original es: " + unArraySiete +"\n";
console.log(msgSiete);
msgSiete ="función every para comprobar que todos los elementos de un array " +
    "son pares: " + unArraySiete.every(num=>num%2==0) +"\n";
console.log(msgSiete);

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



let unArrayOcho=[2,8];

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

unArrayOcho=procesarArray(unArrayOcho);
console.log(unArrayOcho);


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
        return "El plato de "+ this.nombrePlato +
            " tiene una duración de " + this.duracionMinutos +
            " minutos con dificultad " + this.dificultad + "\n" +
            "Ingredientes : "
    }

}
let platoCocina1=(new PlatoCocina("tortilla",15,5));
let platoCocina2=(new PlatoCocina("patatas fritas",10,3));
let platoCocina3=(new PlatoCocina("fideos",20,6));

let mapaPlatos= new Map()
mapaPlatos.set(platoCocina1,["huevos","aceite"]);
mapaPlatos.set(platoCocina2,["patatas","aceite"]);
mapaPlatos.set(platoCocina3,["fideos","agua"]);


console.log(platoCocina1.toString());

/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*10) OPCIONAL: Crea una función en la que puedan entrar un número indeterminado de argumentos.
Comprueba que todos son cadenas(si no devuelve error) y pinta por pantalla la suma total de
todas las longitudes de las cadenas. Utiliza rest y reduce. Prueba con varias entradas.
 */



function muchosArgumentos(...argumentos) {

    let strings=argumentos.every(function (arg1) {
        return typeof arg1 ==="string";
    });

    if (strings){
        //let suma= (valorPasado,valorActual)=>valorPasado+valorActual;
        console.log(argumentos.reduce((total,numero)=>total+numero.length,0));
    }

}

muchosArgumentos("hola","solo");


/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2.
El formato de entrega será un fichero js subido a Moodle.

11) OPCIONAL: Crea una función que reciba un número indeterminado de parámetros.
Para aquellos que sean números, agrúpalos en un array y píntalos por pantalla
sólo si son pares. Prueba con diferentes entradas.
 */

function pintarNumerosPares(...args){
    console.log(
        args.filter(e=> typeof e ==="number").filter(n=>n%2==0).join()
    );
}

pintarNumerosPares(6,8,7,1,5)

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


/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2.
El formato de entrega será un fichero js subido a Moodle.
 ej 13
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

/*
UT2 EJERCICIOS FINALES A ENTREGAR

/*Los siguientes ejercicios deberán ser entregados al final de la UT2.
El formato de entrega será un fichero js subido a Moodle.

EJ:14


 Los siguientes ejercicios puntúan con 1 punto del total:

BLACKJACK: Crea un programa que simule un juego de blackJack.
Debes considerar las siguientes características:


Cada carta se representa como un array de dos posiciones,
en la primera posición se guarda el palo y en la segunda
posición el valor. Los palos son “Corazones”♥, “Picas”♠,
“Tréboles” ♣ y “Diamantes”♦. Los valores posibles para
las cartas son: 1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 (valores normales)
y las figuras “Jota”, “Reina” y “Rey”. Ejemplos de cartas:


 [“Corazones”, 10]
 [“Picas”, “Jota”]

 BLACKJACK:
Valores de las cartas: Las cartas naturales tienen su valor nominal excepto
el 1 (el AS) que puede valer 1 u 11, como desee el usuario. Las figuras
todas valen 10.

Objetivo del juego: En esta versión reducida, el jugador jugará contra
la máquina. Habrá dos turnos, en el primero juega el jugador y en el siguiente
 la máquina. Procedemos a describir los pasos:

Se crea un array con todas las cartas posibles que tiene el juego
(un array de arrays de dos dimensiones con 52 cartas).
*/
let mazo=[["Corazones",1],
    ["Corazones",2],
    ["Corazones",3],
    ["Corazones",4],
    ["Corazones",5],
    ["Corazones",6],
    ["Corazones",7],
    ["Corazones",8],
    ["Corazones",9],
    ["Corazones",10],
    ["Corazones",11],
    ["Corazones",12],
    ["Corazones",13],
    ["Picas",1],
    ["Picas",2],
    ["Picas",3],
    ["Picas",4],
    ["Picas",5],
    ["Picas",6],
    ["Picas",7],
    ["Picas",8],
    ["Picas",9],
    ["Picas",10],
    ["Picas",11],
    ["Picas",12],
    ["Picas",13],
    ["Trébol",1],
    ["Trébol",2],
    ["Trébol",3],
    ["Trébol",4],
    ["Trébol",5],
    ["Trébol",6],
    ["Trébol",7],
    ["Trébol",8],
    ["Trébol",9],
    ["Trébol",10],
    ["Trébol",11],
    ["Trébol",12],
    ["Trébol",13],
    ["Rombo",1],
    ["Rombo",2],
    ["Rombo",3],
    ["Rombo",4],
    ["Rombo",5],
    ["Rombo",6],
    ["Rombo",7],
    ["Rombo",8],
    ["Rombo",9],
    ["Rombo",10],
    ["Rombo",11],
    ["Rombo",12],
    ["Rombo",13],
];

/**
 * esta función baraja 52 números
 * @returns {*[]} array de números barajados
 */
function numerosBarajados() {
    let numerosBarajados = [];
    for (let i = 0; i <= 51; i++) {
        numerosBarajados.push([i]);//array de números del 0 al 51
    }
    numerosBarajados.sort(() => Math.random() - 0.5);//barajo el array de números
    return numerosBarajados;
}

/*
     Turno del jugador:
Con un menú, pide cartas (que salen aleatoriamente) hasta que
considera que ya no quiere pedir más, el objetivo del juego es llegar
a 21 puntos o lo más cercano, pero sin pasarse. Una vez termina de pedir
cartas, se muestra su puntuación y comienza el turno de la máquina.


     Turno de la máquina:
La máquina realiza el mismo procedimiento, pero automáticamente.
Para de pedir cartas cuando su puntuación sobrepasa a la del jugador.
En cuyo caso pueden ocurrir dos cosas:

Supera la puntuación del jugador y se pasa de 21 puntos: El jugador gana.
Supera la puntuación del jugador y tiene 21 puntos o menos: La máquina gana.


pistas para estructurar el juego
*/

/**
 * Función para lanza un juego de blackjack
 */
function blackJack() {
    console.log("Creando el mazo...");
    let mazo=construirMazo();

    let cartasJugador=turnoJugador(mazo);
    let valorJugador= calcularValorMano(cartasJugador);

    if (valorJugador>21){
        alert("Has perdido la partida, has superado 21 puntos");
    }else {//Si no te pasas de 21:
        let cartasMaquina=turnoMaquina(mazo,valorJugador);
        pintarInfoFinalJuego(cartasJugador, cartasMaquina);
    }
}

while (prompt("¿Quieres jugar al BlackJack?  (S/N)")=== "S"){
    blackJack();
}

/**
 *
 * Devuelve el mazo con todas las cartas barajadas
 * @returns {*[]} un array de cartas barajado
 */
function construirMazo() {
    let mazoColocado=mazo;
    let mazoBarajado=[];
    let numerosAleatorios = numerosBarajados();
    for (let i = 0; i <= 51; i++) {
        mazoBarajado.push(mazoColocado[numerosAleatorios[i]]);
    }
    return mazoBarajado
}

/**
 * va nombrando los valores de las cartas
 * @param mazo con cartas
 */
function nombresDeCartas(mazo) {
    if (mazo[0][1] === 11) {
        console.log("Jota de " + mazo[0][0]);
    } else {
        if (mazo[0][1] === 12) {
            console.log("Reina de " + mazo[0][0]);
        } else {
            if (mazo[0][1] === 13) {
                console.log("Rey de " + mazo[0][0]);
            } else {
                if (mazo[0][1] === 1) {
                    console.log("Ás de " + mazo[0][0]);
                } else {
                    console.log(mazo[0][1] + " de " + mazo[0][0]);
                }
            }
        }
    }
}

/**
 * Turno del jugador
 * @param mazo barajado para coger las cartas
 * @returns {*[]}
 */
function turnoJugador(mazo) {
    let cartasJugador=[];
    let puntos=0;
    console.log("-----TU TURNO------");
    do {
        cartasJugador.push(mazo[0])// Ingreso las cartas del jugador
        nombresDeCartas(mazo); // Nombro las cartas
        mazo.splice(0,1);// Retiro del mazo la carta del jugador
        puntos=calcularValorMano(cartasJugador) ;
        console.log("Llevas " + puntos + " puntos.");
    }while (puntos < 22 && prompt("¿Quieres otra carta?  (S/N)")=== "S")
    return cartasJugador;
}


/**
 * Dado un conjunto de cartas calcula su valor, sin pasarse de 21
 * (si es posible).
 * IMPORTANTE: Si hay varios ASES todos valen 1 excepto el último
 * que puede valer 1 ú 11 dependiendo si nos pasamos o no.
 * @param cartas Un array con las cartas
 * @returns {number} El valor de esas cartas sin pasarse de 21 (si
 * es posible).
 */
function calcularValorMano(cartas) {
    let number=0;
    for (let item of cartas){
        (item[1]>10)?number+=10:(item[1]===1 && number<=10)?number+=11:number+=item[1];
    }
    return number;
}

/**
 * empieza el turno de la máquina
 * @param mazo sin las cartas del jugador
 * @param valorJugador valor de las cartas del jugador
 * @returns {*[]} array con las cartas de la máquina
 */
function turnoMaquina(mazo,valorJugador){
    let cartasMaquina=[];
    let puntos=0;
    console.log("-----TURNO DE LA MÁQUINA------");
    do {
        cartasMaquina.push(mazo[0])// Ingreso las cartas del jugador
        nombresDeCartas(mazo); // Nombro las cartas
        mazo.splice(0,1);// Retiro del mazo la carta del jugador
        puntos=calcularValorMano(cartasMaquina) ;
        console.log("La máquina lleva " + puntos + " puntos.");
    }while (puntos < 22 && puntos < valorJugador)
    return cartasMaquina;
}

/**
 * Se pinta las cartas de los jugadores y se dice quien gana.
 * @param cartasJugador cartas del jugador.
 * @param cartasMaquina cartas de la máquina.
 */
function pintarInfoFinalJuego(cartasJugador, cartasMaquina) {
    let puntosJugador=calcularValorMano(cartasJugador);
    let puntosMaquina=calcularValorMano(cartasMaquina);
    console.log("-----PUNTUACIONES------");
    console.log("Tienes " + puntosJugador + " puntos.");
    console.log("La máquina tiene " + puntosMaquina + " puntos.");
    if (puntosJugador==puntosMaquina && puntosJugador<22){
        console.log("EMPATE !!!!!!!!!")
    }else {
        if (puntosJugador<22&&puntosMaquina<22){
            if (puntosJugador>puntosMaquina){
                console.log("GANASTE !!!!!!")
            } else {
                console.log("PERDISTE !!!!!!!!!")
            }
        } else {
            console.log("GANASTE !!!!!!!!!")
        }
    }
}