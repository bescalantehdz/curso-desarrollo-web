"use strict"


var nombres = ["brian","andrea","jorge"];
var lenguajes = new Array("java","js","php","kotlin");
							

/*console.log(lenguajes);
console.log(nombres.length);*/			
//var elemento = parseInt(prompt("QUE ELEMENTO DEL Array QUIERES??",""))

 /*if(elemento > nombres.length){
document.write("ERROR!! ARRAY OUTBOUND OF INDEX");
   }else{document.write(`<h1>${nombres[elemento]}</h1>`);}*/


  document.write("<h1>Lenguajes de programación del 2018</h1>");

 /* for(var i=0;i<lenguajes.length;i++){
  	document.write(`<h3>${lenguajes[i]}</h3><br/>`);
  }*/

  //Recorrer elementos de un array con for-each en js
  nombres.forEach((elemento,indice)=>{
  	 document.write(`<h3>${indice+" "+elemento}</h3><br/>`);
  });


