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

<<<<<<< HEAD
document.write(`<h1>Resultado de la suma</h1><br/>
                <p>${AcumuladoInt}</p><br/>
                <h2>Promedio de la suma</h2><br/>
                <p>${promedioInt}</p>`);

  document.write(̣`<h1>El resultado de la suma</h1>
                  ${intSuma}
                  <h1>El promedio total es:</h1>
                  ${media}`̣);
>>>>>>> d3b768205c0d6771667d51cd5c61a5f7626f4aa2
