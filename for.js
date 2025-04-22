//El bucle FOR se usa cuando queremos repetir algo un número específico de veces
//por ejemplo: imprimir los números del 0 al 4

for (let i = 0; i < 5; i++) {
    console.log('Número:', i)
}

//¿QUÉ SIGNIFICA CADA PARTE DEL FOR?

// for (inicio ; condición ; incremento) {
//        código que se repite
// }

// let i = 0     → creamos una variable i y la iniciamos en 0
// i < 5         → mientras i sea menor que 5, sigue ejecutando
// i++           → después de cada vuelta, le suma 1 a i

// Así que esto se repite 5 veces:
// i = 0 → imprime 0
// i = 1 → imprime 1
// i = 2 → imprime 2
// i = 3 → imprime 3
// i = 4 → imprime 4
// cuando i llega a 5 → se rompe el bucle porque ya no cumple la condición






//BREAK: sirve para cortar el bucle antes de que termine normalmente

for (let i = 0; i < 10; i++) {
    if (i === 4) {
        break // <-- cuando i llega a 4, se sale del bucle completamente
    }
    console.log('i vale:', i)
}

//Esto imprime 0, 1, 2, 3

//--------------------------------------------------------------

//CONTINUE: sirve para saltarse UNA vuelta del bucle

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue // <-- cuando i es 2, no se ejecuta el console.log y pasa a la siguiente vuelta
    }
    console.log('i vale:', i)
}

//Esto imprime: 0, 1, 3, 4 (el 2 se lo salta)