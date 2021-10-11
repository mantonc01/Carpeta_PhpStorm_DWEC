"use strict";
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