/*🛒 Mini Tienda Online (Ejercicio de POO Básico)
📚 Descripción
Este proyecto simula una pequeña tienda online usando Programación Orientada a Objetos (POO). Está pensado como un ejercicio para principiantes que quieran practicar clases, objetos, herencia, métodos y organización básica de un sistema.

🎯 Objetivo
Crear una aplicación de consola que permita:

Registrar productos en la tienda (con stock y precio)

Ver la lista de productos disponibles

Agregar productos al carrito

Calcular el total a pagar

Simular una compra que descuente el stock

🧱 Requisitos del sistema
Debes implementar las siguientes clases:

🔹 Clase Producto
Atributos:

nombre: string

precio: número

stock: número

Métodos:

mostrar_info(): muestra los detalles del producto

reducir_stock(cantidad): descuenta unidades si hay suficiente stock

🔹 Clase ProductoElectronico (hereda de Producto)
Atributos adicionales:

marca: string

garantia: número de meses

Métodos:

Sobrescribe mostrar_info() para incluir marca y garantía

🔹 Clase Carrito (debe ser un array)
Atributos:

items: lista de productos agregados con su cantidad

Métodos:

agregar(producto, cantidad)

mostrar(): lista los productos y subtotales

total(): devuelve el total del carrito

🔹 Clase Tienda
Atributos:

nombre: string

productos: lista de productos disponibles

carrito: instancia de la clase Carrito

Métodos:

agregar_producto(producto)

listar_productos()

agregar_al_carrito(nombre_producto, cantidad)

procesar_compra(): descuenta stock y limpia el carrito*/