"use strict"

//operaciones con arrays
var ingreso_elementos="";
var peliculas = ["Avengers","Django","la verdad duele","Batman"];
var cadena = "mensaje de prueba";

//método push para agrergar elementos al Array
//agregamos elementos al Array
/*
   
   //Esta funcion saca el ultimo elemento del array 
   peliculas.pop();

   var peliculasStr = peliculas.join();

console.log(peliculasStr);*/


//convertir String en un array
//se ponen espacios en blanco para hacer que cada palabra del string  se separe por una coma
//var cadena_array = cadena.split(" ");
//console.log(cadena_array);


//ORDENAMIENTO DE UN ARRAY//
/*peliculas.sort();
console.log(peliculas);*/

//ORDENAMINTO AL REVES//
/*peliculas.reverse();
console.log(peliculas);*/

//BUSQUEDA DENTRO DE UN ARRAY
var busqueda = peliculas.find(valor => valor == "Avengers");

console.log(busqueda);