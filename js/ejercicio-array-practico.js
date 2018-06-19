'use strict'
/*
 1.-pida 6 numeros por pantalla y los meta en un array
 2.-muestre el array de enteros  en cuerpo de la página y en la consola
 3.-Ordenarlo y mostrarlo
 4.-Invertir el orden y mostrarlo
 5.-Mostrar cuantos elementos tiene el Array
 6.-Realizar busqueda de un valor introducido por el usuario, indique si se encuentra o no 
 y su posicion
*/

var numeros = []

//pide numeros al usuario
for(var i=0; i <=5; i++){

	//numeros[i]=parseInt(prompt("Ingresa el valor:",""));
	//forma alternativa con push

	numeros.push(parseInt(prompt("Ingresa el valor:","")));
}

//mostramos en el cuerpo de la pagina
document.write("<h1>Contenido del Array</h1>");
numeros.forEach((numero, index) =>{
    document.write("<strong>"+numero+"</strong></br>");
});

//mostramos Array por consola
console.log(numeros)
//ordenarlo y mostrarlo
numeros.sort();
console.log(numeros);
