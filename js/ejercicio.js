'use strict'


  /*Realizar programa que ingreses 2 numero y
  te diga cual es mayor y cual es menor o si son iguales
  Si el tipo de dato no es number o si los numero son <= 0, nos vuelva a pedir que
  introduzca los datos*/

  /*var strX = "";
  var strY = "";*/

  var intX = prompt("Ingresa el valor 1 ", "");
  var intY = prompt("Ingresa el valor 2 ", "");

  while (intX <= 0 || intY <= 0 || isNaN(intX) || isNaN(intY)) {
    var intX = prompt("Ingresa el valor 1 ", "");
    var intY = prompt("Ingresa el valor 2 ", "");
  }


  intX = parseInt(intX);
  intY = parseInt(intY);


  if( intX > intY ){
    console.log("el numero mayor es: " + intX
               +" el numero menor es: " + intY );
  } else if (intY > intX){
    console.log("el numero mayor es: " + intY
                +" el numero menor es: " + intX );
  }else{
    console.log("Los números son iguales");
  }
