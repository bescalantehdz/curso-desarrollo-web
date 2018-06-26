"use strict"

/*
Programa que muestra los numeros divisible entre un numero introducido
por el usuario
*/


var numero = parseInt(prompt("Ingresa un Numero", 1));	

for(var i=1; i<=numero; i++){

	if(numero%i === 0 ){

		console.log("Divisor: " + i);

	}
}

