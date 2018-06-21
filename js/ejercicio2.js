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

  document.write(̣`<h1>El resultado de la suma</h1>
                  ${intSuma}
                  <h1>El promedio total es:</h1>
                  ${media}`̣);
