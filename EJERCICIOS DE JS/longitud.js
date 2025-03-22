/*Ejercicio: Filtrar Palabras por Longitud
Objetivo: Crear una función, que filtre las palabras de un array, que tengan una longitud mayor a un valor dado, y las devuelva en un nuevo array.

Requisitos:
-Utilizar un array para almacenar las palabras.
-Crear una función para filtrar las palabras.
-Utilizar if y for dentro de la función.
-Mostrar el resultado en la consola.*/

function FiltrarPalabras(palabra,valor){
   let filtro = [];
   for(let i=0;i<palabra.length;i++){
    if(palabra[i].length>valor){
        filtro.push(palabra[i])
    }

   } 
   return filtro;
}
const array = ["Carro", "Parangaricutirimicuaro","Esternocleidomastoideo","Libelula","pitocorto","feo","carro"];
const ValorDado = 15;
const resultado = FiltrarPalabras(array,ValorDado);
console.log(resultado)