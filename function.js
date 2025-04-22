//como crear una funcion en js

function NombreDeLaFuncion() { 
    console.log('hola mundo')
}


//las funciones tambien pueden resivir parametros para q sean adaptables

function escribirNombre(nombre) {
     console.log(nombre)
}


//cuando llamamos a la funcion es cuando le damos el valor a los parametros q definimos posteriormente
escribirNombre('German')


//Las funciones una gran cantidad de veces tienen q retornar cosas
//para eso usamos la palabra clave  "RETURN"


function sumarValores(numero1,numero2) { 
    return numero1 + numero2 //<-- en esta linea de codigo decimos q cuando llamemos a la funcion literalmente va a ser como escribir lo q estamos retornando...

}
//por ejemplo si yo mando a imprimir la funcion de esta manera
 console.log(sumarValores(1,2))
   //el resultado de nuestra funcion seria 3 porq cuando escribirmos una funcion q esta retornadno algo es literalmente como escribir el resutlado de lo q retorna 


//DATO IMPORTANTE CUANDO UNA FUNCION LLEGA A UN RETURN AUTOMATICAMENTE SE SALE DE LA FUNCION Y LA DEJA DE EJECUTAR

function restarValores(numero1,numero2) { 
    return numero1 - numero2
    return nunmero1 + numero2 // <--- este return nunca se ejecutara sino q se tomara el primero q es el q llego primero en el flujo de la funcion
}
