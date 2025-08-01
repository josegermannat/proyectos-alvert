const libros = [{nombre:'luis',apellido:'gilberto'},{nombre:'alberto'}]


libros.forEach((item) => {
  const li = document.createElement('li')
  li.innerText = 'alberto';
  listita.appendCHild(li)
})



const dulces = new Producto("chocolate",1500, 10);
const jabones = new Producto("jabon Lux",2000, 10);
const perfumes = new Producto("Perfume Channel",12000, 10);tienda.agregarProducto(dulces);
 tienda.agregarProducto(jabones);
 tienda.agregarProducto(perfumes);