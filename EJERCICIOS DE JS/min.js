/*Ejercicio: Encontrar el Número Mínimo en un Array
Objetivo: Crear una función que encuentre el número mínimo en un array de números.
Requisitos:
-Utilizar un array para almacenar los números.
-Crear una función para encontrar el número mínimo.
-Utilizar if y for dentro de la función.
-Mostrar el resultado en la consola.*/
function NumeroMinimo(numero){
    let Minimo = numero [0];
    for(let i=1;i<numero.length;i++){
        if(numero[i]<Minimo){
            Minimo = numero [i]
        }
    return Minimo;
}
}
    const numero =[2,6,77,88,22,1,0]

const min = NumeroMinimo(numero)
console.log("El numero minimo es: " ,min)