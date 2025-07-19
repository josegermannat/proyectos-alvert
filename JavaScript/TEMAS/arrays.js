//📦 ¿QUÉ ES UN ARRAY?
//Un array es una estructura de datos que permite guardar varios valores en una sola variable

const  frutas = ['manzana', 'banana', 'pera'] // los valores están separados por comas dentro de []

//🔢 ACCEDER A VALORES (por posición, llamada "índice")
//El indice empieza en 0 osea q para acceder al primer elemento tengo q usar el indice 0 y para el siguiente sera el 1 asi susecivamente

console.log(frutas[0]) // 'manzana'
console.log(frutas[1]) // 'banana'
console.log(frutas[2]) // 'pera'

//✏️ MODIFICAR UN VALOR EN EL ARRAY
frutas[1] = 'kiwi' // cambia 'banana' por 'kiwi'
console.log(frutas) // ['manzana', 'kiwi', 'pera']
