"use strict"

/*programa que muestra los numeros impares entre los numeros introducidos por el usuario*/

var intNumeroInicial;
var intNumeroFinal;


intNumeroInicial = parseInt(prompt("ingresa el primer numero para iniciar la cuenta",""));
intNumeroFinal = parseInt(prompt("ingresa el segundo numero donde finalizar",""));

while(isNaN(intNumeroInicial) || isNaN(intNumeroInicial)){
    alert("Dato incorrrecto");
  intNumeroInicial = parseInt(prompt("ingresa el primer numero para iniciar la cuenta",""));
  intNumeroFinal = parseInt(prompt("ingresa el segundo numero donde finalizar",""));
}


for (var i = intNumeroInicial; i < intNumeroFinal ; i++) {

  let residuo = i%2;

  if(residuo != 0){

    console.log("el numero "+i+" es impar");
  }
}
