let frutas = ['manzana', 'pera', 'banana']

//push agrega un nuevo elemento al final del array
frutas.push('sandía')
console.log(frutas) // ['manzana', 'pera', 'banana', 'sandía']

//length nos dice cuántos elementos tiene el array
console.log(frutas.length) // 4

//splice sirve para borrar o reemplazar elementos
//el primer número es el índice donde empieza, el segundo cuántos va a borrar
frutas.splice(1, 1) //borra 1 elemento a partir del índice 1
console.log(frutas) // ['manzana', 'banana', 'sandía']


//👉 pop() — quita el último
frutas.pop() // ['manzana', 'kiwi', 'pera']