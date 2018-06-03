"use strict"

//diferencias entre var y alert

//var se utliza para declarar de forma global una variable
//let se utiliza para declarar a nive de bloque de código

var strmnsj = "Esto es una variable global";
alert(strmnsj);
if(true){

   var strmnsj = "se ha modificado a variable global";

   alert(strmnsj);
}

alert(strmnsj);

//declaracion de variables alert

var strmensaje = "Esto sigue siendo una variable global";
console.log(strmensaje);
if (true) {
  let strmensaje= "Esto es una variable local "

  console.log(strmensaje);
}

console.log(strmensaje);
