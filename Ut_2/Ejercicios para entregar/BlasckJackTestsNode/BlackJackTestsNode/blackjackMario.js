"use strict";
let prompt = require('prompt-sync')();

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
    let mazo = [];
    for(let palo of ["Corazones","Picas","Tréboles","Diamantes"]){
        for(let valor of [1,2,3,4,5,6,7,8,9,10,11,12,13]){
            mazo.push([palo,valor]);
        }
    }
    let mazoColocado=mazo;
    let mazoBarajado=[];
    for (let i = 0; i <= 51; i++) {
        numerosBarajados.push([i]);//array de números del 0 al 51
    }
    numerosBarajados.sort(() => Math.random() - 0.5);//barajo el array de números
    let numerosAleatorios = numerosBarajados;
    for (let i = 0; i <= 51; i++) {
        mazoBarajado.push(mazoColocado[numerosAleatorios[i]]);
    }
    return mazoBarajado
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

//Debemos definir qué modulos queremos exportar.
module.exports = {
    construirMazo : construirMazo,
    calcularValorMano : calcularValorMano,
    //getAleatoria : getAleatoria,
    turnoMaquina: turnoMaquina,
    blackJack : blackJack,
    nombresDeCartas:nombresDeCartas
}