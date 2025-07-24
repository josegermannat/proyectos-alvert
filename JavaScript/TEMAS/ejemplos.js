
 

const PRODUCTOS = [ 
{color:'verde', producto:'laptop'}, 

{color:'verde', producto:'celu'},

{color:'rojo', producto:'arroz'},

{color:'amarillo', producto:'pc'}
];

const PRODUCTO__LAPTOP = PRODUCTOS.find(elemento => elemento.producto === 'arroz')
console.log(PRODUCTO__LAPTOP)

