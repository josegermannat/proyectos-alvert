/*Ejercicio: Encontrar el Número Máximo en un Array
Objetivo: Crear una función que encuentre el número máximo en un array de números.

Requisitos:
Utilizar un array para almacenar los números.
Crear una función para encontrar el número máximo.
Utilizar if y for dentro de la función.
Mostrar el resultado en la consola.*/
const ArrayNumerico =[2,4,8,9,66,88,13]; 
function NumerosMaximo(array){
let Maximo = 0;
for(let i = 0;i<array.length;i++){
if(array[i]>Maximo){

    Maximo = array[i];

}
}
return Maximo;
}

const resultado = NumerosMaximo(ArrayNumerico);
console.log("El numero maximo es : ", resultado)







