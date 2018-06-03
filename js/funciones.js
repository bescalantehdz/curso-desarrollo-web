"use strict"


//Funcion con paramentros
var resutado;


function porConsola(intNumeroX,intNumeroY){

  console.log("Suma: "+(intNumeroX+intNumeroY));
  console.log("Resta: "+(intNumeroX-intNumeroY));
  console.log("Multiplicacion: "+(intNumeroX*intNumeroY));
  console.log("Division: "+(intNumeroX/intNumeroY));
}

function porPantalla(intNumeroX,intNumeroY){
  document.write("Suma: "+(intNumeroX+intNumeroY)+"</br>");
  document.write("resta: "+(intNumeroX-intNumeroY)+"</br>");
  document.write("multiplicacion: "+(intNumeroX*intNumeroY)+"</br>");
  document.write("divison: "+(intNumeroX/intNumeroY)+"</br>");
}

function calculadora(intNumeroY,intNumeroX,valor = false){

  if(valor){
            porPantalla(intNumeroX,intNumeroY);
  } else {
            porConsola(intNumeroX,intNumeroY);
         }
}

calculadora(4,5);
