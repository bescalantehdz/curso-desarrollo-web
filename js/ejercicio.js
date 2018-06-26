'use strict'


  /*Realizar programa que ingreses 2 numero y
  te diga cual es mayor y cual es menor o si son iguales
  Si el tipo de dato no es number o si los numero son <= 0, nos vuelva a pedir que
  introduzca los datos*/

  /*var strX = "";
  var strY = "";*/

      var IntX;
      var IntY;
 do{

       IntX = parseInt(prompt("Ingresa el primer valor",""));
       IntY = parseInt(prompt("Ingresa el segundo valor",""));

}while(isNaN(IntX) || isNaN(IntY) || IntX <= 0 || IntY <= 0);

if (IntX > IntY) {

    document.write(`<p>El numero mayor es:${IntX}</p>`);
    document.write(`<p>El numero menor es:${IntY}</p>`);

}else if(IntY > IntX){

    document.write(`<p>El numero mayor es:${IntY}</p>`);
    document.write(`<p>El numero menor es:${IntX}</p>`);

} else{
  document.write(`<h1>Ambos Numeros son iguales</h1>`);
}