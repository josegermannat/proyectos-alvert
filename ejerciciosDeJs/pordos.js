/*Escribe una función que tome un }
array de números y devuelva
 un nuevo array donde cada número 
ha sido multiplicado por 2.*/
const Array = [5,4,9,1,3] 
function Multiplicación(numeros){
    let PorDos = []
    for(let i=0;i<numeros.length;i++){
PorDos.push(numeros[i]*2)
    
}
return PorDos;

    }
    const resultado = Multiplicación(Array);
console.log("LA MULTIPLICACION DE TODOS LOS NUMEROS EN EL ARRAY ES " + resultado);

 
