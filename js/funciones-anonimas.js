"use strict";

/*funciones anonimas
son aquellas que no tienen nombre*/

//declaracion de una funcion anonima
var peliculas = function(strNombre){
  return "Nombre de pelicula: "+strNombre;
}


//declaracion de una funcion con callback
function sumar(intA,intB,sumaYMuestra,sumaPorDos){
  let resultado = intA + intB;
 sumaYMuestra(resultado);
 sumaPorDos(resultado);
}

sumar(10,20,function(intDato){
   console.log("La suma es: " + intDato);
},function(intDato){
  console.log("La suma por 2: "+(intDato*2));
});
