/*
Crea un programa que gestione el inventario de una tienda. El inventario debe estar representado por un array de objetos, 
donde cada objeto representa un producto con las siguientes propiedades: nombre, precio y cantidad.

Implementa las siguientes funcionalidades:

- Agregar un nuevo producto.
- Actualizar la cantidad de un producto existente.
- Calcular el valor total del inventario.
- Mostrar todos los productos en el inventario.*/

const productos = [ 
    { nombre: "manzana", precio: 0.5, cantidad: 30 },
    { nombre: "Plátano", precio: 0.2, cantidad: 50 },
    { nombre: "Naranja", precio: 0.6, cantidad: 40 }
      ]; 
      
      
      function nuevoProducto(producto, valor, abundancia){
    
    const productoNuevo = {nombre:producto, precio: valor , cantidad:abundancia};
    productos.push(productoNuevo)
    return productoNuevo    
      }

    function actualizarCantidad(nuevaCantidad, nuevoNombre){
      for (let i =0 ; i<productos.length; i++){
        if(productos[i].nombre === nuevoNombre){
            productos[i].cantidad = nuevaCantidad
            return
              }
    }  
}
function valorTotal(){
    let valorFinal = 0
    for (let i =0 ; i<productos.length; i++){
        
        valorFinal += (productos[i].precio * productos[i].cantidad)
        
    } 
   return valorFinal

}

function inventarioDeProductos(){
const arrayProductos = [] 
for(let i =0; i<productos.length; i++){

arrayProductos.push(productos[i])

}
return arrayProductos
}

nuevoProducto("durazno", 0.5, 30);
nuevoProducto("pera", 0.9, 30);
nuevoProducto("mora", 0.6, 10);
actualizarCantidad( 20,"manzana" )
console.log(inventarioDeProductos())
console.log(valorTotal())
