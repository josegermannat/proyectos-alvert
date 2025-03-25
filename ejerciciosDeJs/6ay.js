/*Escribe una función que tome un array de números y devuelva la suma de todos los números en el array.*/

function SumaDeNumeros(array){
    let indice = 0
    for (let i = 0;i<array.length;i++)
    indice += array[i]
    console.log("El resultado de la suma de todos los elementos es " + indice)
    return indice

}
const ListaDeNumeros = [2,5,6,8,4]
SumaDeNumeros (ListaDeNumeros)
