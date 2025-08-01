class Tienda{
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
        this.carrito = new Carrito();
        
    }
    buscarProducto(nombreDelProducto){
        return (this.productos.find(item=> item.nombreP.toLowerCase().trim() === nombreDelProducto.toLowerCase().trim()))
       
         
    }
    agregarAlCarrito(producto, cantidad){
    const productosElegido = this.buscarProducto(producto)
    if( productosElegido.reducirStock(cantidad)){
         const productoAgregado = new Producto(producto,productosElegido.precio,cantidad); 
     this.carrito.agregar(productoAgregado)
    }
    else{
        console.log("No se pueden agregar productos inexistentes");
    }
   
    
    }  
    

    
    nombrarTienda(){
        console.log(`La tienda se llama ${this.nombre}`)
    };

    listarProductosTienda(){
        console.log("PRODUCTOS DISPONIBLES:\n ");
        this.productos.forEach((item, i) =>{
        console.log( "Producto numero: " , i + 1);  
         item.infoP();   
            
    });
        
        
    };

    agregarProducto(producto){
        this.productos.push(producto);
        

    }
}

class Carrito{
    constructor(){
        this.productosCarrito = [];
        
    }
    mostrarCarrito(){
        console.log("PRODUCTOS DEL CARRITO: ");
        this.productosCarrito.forEach((item , i) => {
            console.log("Producto del carrito numero: " , i + 1);
           
            item.infoP();
            
        })
    };

    agregar(producto){
        this.productosCarrito.push(producto);

    }
}

class Producto{
    constructor(nombreP, precio, stock){
        this.nombreP = nombreP;/*string*/ 
        this.precio = precio; /*numero*/ 
        this.stock = stock; /*numero*/
    }
    
    infoP(){

    console.log(`Nombre del producto: ${this.nombreP} ` );
    console.log(`Precio: $ ${this.precio}`);
    console.log(`Cantidad en stock : ${this.stock}`);

    }
reducirStock( reduccion){
    if( this.stock >= reduccion) {
        this.stock -= reduccion;
        return true;
    }
    else{
        console.log(`No hay suficiente stock de ${this.nombreP}`);
        return false;
    }
        

}
}

const tienda = new Tienda ("Supermercado DIA");
const shampoos = new Producto("Shampoo",3000, 10);
const dulces = new Producto("chocolate",1500, 10);
const jabones = new Producto("jabonLux",2000, 10);
const perfumes = new Producto("Perfume Channel",12000, 10);

 tienda.agregarProducto(shampoos);
 tienda.agregarProducto(dulces);
 tienda.agregarProducto(jabones);
 tienda.agregarProducto(perfumes);
 tienda.nombrarTienda();
 tienda.listarProductosTienda();
 tienda.agregarAlCarrito("Shampoo",5);
 tienda.carrito.mostrarCarrito();
 tienda.listarProductosTienda();


 

