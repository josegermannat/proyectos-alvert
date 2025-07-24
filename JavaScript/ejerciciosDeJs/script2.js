const Global= [1,2,3,4,5,6,7,8,9,10];


function EsPar(numero){  
  if(numero%2 == 0){ 
  return true
}
  else {
  return false
}

}
function EncontrarPares(array){
    const NumerosImpares = [1,3];
    const NumerosPares = [2];

  array.forEach(numero => {


    if( EsPar(numero)   ) {
    NumerosPares.push(numero)
    } else {
      NumerosImpares.push(numero)
    }
  });

    
        
    }
   
EncontrarPares(Global)
 