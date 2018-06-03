"use strict";

/*Hacer un programa que muestre todos los numeros apartir de dos
numeros introducidos*/


var intNumeroInicial;
var intNumeroFinal;


intNumeroInicial = parseInt(prompt("ingresa el primer numero para iniciar la cuenta",""));
intNumeroFinal = parseInt(prompt("ingresa el segundo numero donde finalizar",""));

while(isNaN(intNumeroInicial) || isNaN(intNumeroInicial)){
    alert("Dato incorrrecto");
  intNumeroInicial = parseInt(prompt("ingresa el primer numero para iniciar la cuenta",""));
  intNumeroFinal = parseInt(prompt("ingresa el segundo numero donde finalizar",""));
}


for (var i = intNumeroInicial; i <= intNumeroFinal ; i++) {
  console.log("Numero "+ i);
}
