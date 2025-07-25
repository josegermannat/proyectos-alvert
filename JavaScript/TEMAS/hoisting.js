//Hoisting significa que JS primero lee y guarda las declaraciones de funciones y variables
//antes de ejecutar el código

//Por eso esto funciona:
saludar()

function saludar() {
    console.log('Hola desde una función declarada')
}

//Pero esto NO funciona si usamos let o const

// console.log(nombre)
// let nombre = 'Juan' /
// 
// ⛔ Error porque let y const NO se elevan como var
function hola(){
    function pepe(){
console.log('hola')
    }
}

