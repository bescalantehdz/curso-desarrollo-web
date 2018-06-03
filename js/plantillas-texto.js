"use strict"

var strTexto;
var apellidos;
var texto;

//Plantillas de Texto

strTexto = prompt("Ingresa tu nombre","");
apellidos = prompt("Ingresa tu apellido","");


//texto = "mi nombre es: "+strTexto.concat()+" mis apellidos son: "+apellidos.concat();

//uso de pantillas html
texto = `
 <h1>Hola que tal</h1>
 <h3>mi nombre es: ${strTexto}</h3>
 <h3>mi apellido es: ${apellidos}</h3>
`;
document.write(texto);
