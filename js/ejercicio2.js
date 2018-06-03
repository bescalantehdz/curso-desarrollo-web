"use strict";

/*Utilizando un bucle mostrar la media y la suma de los resultados introducidos por el usuario,
hasta que el usuario introduzca un numero negativo */


var intNumero;
var intSuma = 0;
var media;
var cuenta = 0;

do{

  intNumero = parseInt(prompt("Ingresa el numero",""));

  if(isNaN(intNumero)){
    intNumero = 0;
  } else if( intNumero > 0){
    intSuma = intSuma + intNumero;
    cuenta++;
  }


}while(intNumero > 0);

  media = intSuma/cuenta;

  console.log("el total de la suma es: " + intSuma +
              " y la media es: " + media );
