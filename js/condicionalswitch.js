"use strict"

var edad =  18;
var imprime = "";

switch (edad) {
  case 18:
    imprime = "es mayor de edad";
    break;

    case 25:
      imprime = "ya eres adulto";
      break;

      case 40:
        imprime = "crisis de los cuarente";
        break;

        case 70:
          imprime = "eres un señor de la tercera edad";
          break;
  default:
     imprime = "no has ingresado una edad";
     break;

}

console.log(imprime);
