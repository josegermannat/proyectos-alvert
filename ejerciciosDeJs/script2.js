const Global= [1,2,3,4,5,6,7,8,9,10];
function EsPar(numero){  
  if(numero%2 == 0){ 
  return true}
  else {
  return false}

}
function EncontrarPares(array){
    const NumerosImpares = [];
    
    const NumerosPares = [];
    for(let i=0;i<array.length;i++){
        if(EsPar(array[i])){
              NumerosPares.push(array[i])}
              else {NumerosImpares.push(array[i])}
        
    }
    console.log (NumerosPares)
    console.log (NumerosImpares)
}
EncontrarPares(Global)
 