const miPromesa = new Promise((resolve,reject) => {
    let exito  = true;
 setTimeout(() =>{
  if(exito){
        resolve('{"nombre":"German"}')
    } else{ 
        reject('LA PROMESA FUE RECHAZADA')
    }
 } ,1000)
  
})

miPromesa
 .then(resolve => console.log(JSON.parse(resolve)))
 .catch(error => {
    console.log(error);
    })




