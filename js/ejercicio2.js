"use strict";

/*Utilizando un bucle mostrar la media y la suma de los resultados introducidos por el usuario,
hasta que el usuario introduzca un numero negativo */


var valorInt = 0;
var promedioInt;
var AcumuladoInt = 0;
var contador = 0;



 

while( valorInt >= 0 ){

    valorInt = parseInt(prompt("Ingresa el valor a sumar, ingresa -1 para terminar"));
    AcumuladoInt += valorInt;
    contador++;
}

promedioInt = AcumuladoInt/contador;

document.write(`<h1>Resultado de la suma</h1><br/>
                <p>${AcumuladoInt}</p><br/>
                <h2>Promedio de la suma</h2><br/>
                <p>${promedioInt}</p>`);