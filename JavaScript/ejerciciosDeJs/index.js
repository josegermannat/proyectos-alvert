const TIENDA = [
1,
    {
    nombre: 'calular',
    precio: 55
  },
    {
    nombre: 'arrozera',
    precio: 200
  },
    {
    nombre: 'pasta',
    precio: 10
  },
    {
    nombre: 'lavadora',
    precio: 450
  }
]


function encontrarProductoEnLaTienda(nombreProducto){
  const productoEncontrado = TIENDA.find(item => item === 3 );
  //HASTA ACA LLEGO EL FIND





  return productoEncontrado

}
 const producto = encontrarProductoEnLaTienda('lavadora')


console.log(producto)

 



