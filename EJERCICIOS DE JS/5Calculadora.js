/*Usar una función para crear una calculadora que tome 2 valores y los sume, reste, multiplique o divida segun el parametro que se le pase a la funcion y debe hacer console.log a cada uno de los operadores dependiendo de cual se elija*/ 

function calculadora (Valor1,Valor2,Operador){
    let resultado = 0
switch(Operador){    
case "+": resultado = Valor1 + Valor2; console.log("El resultado de tu suma es " + resultado);
break;

case  "-": resultado =Valor1 - Valor2; console.log("El resultado de tu resta es " + resultado);
break;

case "*": resultado =Valor1 * Valor2; console.log("El resultado de tu multiplicación es " + resultado);
break;

case "/": resultado = Valor1 / Valor2;console.log("El resultado de tu división es " + resultado);
break;

default: console.log("El operador no esta en la lista")
return
}
    
}
    


calculadora (5,5,"+")