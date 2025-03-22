/*Escribe una función que tome un array de números y devuelva la suma de todos los números en el array.*/
const numeros = [2,5,4,8,7,10];
function TodosLosNumeros(array){
    let NumerosSumados = 0;
    for(let i= 0;i<array.length;i++){
        
NumerosSumados = (NumerosSumados + array[i]);
}

return NumerosSumados;
}
const resultado = TodosLosNumeros(numeros);
console.log("LA SUMA DE TODOS LOS NUMEROS EN EL ARRAY ES " + resultado);