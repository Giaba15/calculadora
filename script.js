
let numero1 = parseInt(prompt("Ingrese un número"));

let operadores = prompt("Elegir una operación +,-,*,/");

let numero2 = parseInt(prompt("Ingrese otro número"));


let resultado;


switch (operadores) {
    case "+":
        resultado = (numero1) + (numero2);
        alert("Resultado: " + resultado);
        break;     
    case "-":
        resultado= (numero1) - (numero2);
        alert("Resultado: " + resultado)
        break;
    case "*":
        resultado = (numero1) * (numero2);
        alert("Resultado: " + resultado)
        break;
    case "/": 
        resultado = (numero1) / (numero2);

     if(numero2 > 0) {
            alert("Resultado: " + resultado);
     }else{
        alert("Error, no se puede dividir con 0")
     }
        break; 

    default:
        alert ("Ingrese un caracter válido (+,-,*,/) ") 
        break;         
    }








