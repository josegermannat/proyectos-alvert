/* Objetivo: Crear una función que filtre los números de un array que sean mayores a un valor dado y los retorne en un nuevo array 
DATOS : LA FUNCION TIENE DOS PARAMETROS   por ejemplo: filtrarNumeros(array,valor);
la funcion tiene q retornar en otro array creado los numeros del array pasado como parametro mayoes al valor q tambien se paso como parametro
*/

function filtrarNumeros(numeros, valor) {
    const numerosFiltrados = [];
  
    
    for (let i = 0; i < numeros.length; i++) {
      
      if (numeros[i] > valor) {
        numerosFiltrados.push(numeros[i]); 
      }
    }
  
    
    return numerosFiltrados;
  }
  
  
  const numeros = [12, 5, 8, 130, 44, 9, 7, 19, 35, 78];
  const valorFiltro = 10;
  const resultado = filtrarNumeros(numeros, valorFiltro);
  console.log('Números mayores a', valorFiltro, ':', resultado);