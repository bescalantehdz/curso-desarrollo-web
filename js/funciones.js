"use strict"

// declaracion funciones
/*function calculadora(){
document.write(`<p>Suma:</p>${1+2}
                <p>Resta:${5-2}</p>
                <p>Multiplicacion:${3*9}</p>
                <p>Division:${10/2}</p>`);
}

calculadora();*/


//funciones con parametros

function calculadora(numero1,numero2){
document.write(`<p>Suma:</p>${numero1+numero2}
                <p>Resta:${numero1-numero2}</p>
                <p>Multiplicacion:${numero1*numero2}</p>
                <p>Division:${numero1/numero2}</p>`);
document.write(`<p>-----------------------------------</p>`);
}


//calculadora(8,3);
//se vuelve a llamar a la funcion
//calculadora(45,5)

for (var i = 0; i < 10; i++) {
	calculadora(8,3);
}
