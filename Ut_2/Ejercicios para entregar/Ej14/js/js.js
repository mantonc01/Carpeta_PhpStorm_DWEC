"use strict";
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
        if(item[1]>10){
            number+=10
        }else{
            if(item[1]===1 && number<=10) {
                number+=11
            } else{
                number+=item[1];
            }
        }
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