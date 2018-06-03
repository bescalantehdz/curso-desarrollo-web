"use strict"


var intedad = 34;
var strnombre = "Brian Jesús";
var año = 2018;
//var intedad_y = 12;


//condicional if
/*  if(intedad > intedad_y) {
    console.log("edad " + intedad + " es mayor " + 'que ' + intedad_y);
  } else {
    document.write("edad " + intedad + " no es mayor " + 'que ' + intedad_y);
  }*/

  /*if (intedad >= 18) {

    alert("el usuario " + strnombre + " es mayor de edad");

    if( intedad == 33){
       alert("todavia eres millenial");
    } else {

      alert("ya no eres millenail");
    }

  } else {
    alert("El usuario no es mayor de edad");
  }*/

// operador de Negacion
  if(año != 2016){

    console.log("No es el año correcto");
  }

//AND
if ( año >= 2000 && año <= 2020) {

  console.log("Estamos en la era actual");
} else {
  console.log("Estamos en la era post moderna");
}

//OR
if (año == 2008 || (año >= 2018 && año == 2028)) {

  console.log("El año acaba en 8");
} else{
  console.log("Año no registrado");
}
