const carros = [
 {
    marca:'mustang',
    color:'negro',
    bonito:true
 },
 {
      marca:'BMW',
      color:'rojo',
      bonito:false
 },
 {
      marca:'ford',
      color:'amarillo',
      bonito:false
 },
 {
      marca:'toyota',
      color:'amarillo',
      bonito:true
 }

]

function aprobado(){
 carros.forEach( (carro) => {
  if(carro.bonito) {
      carro.aprobado = true;
  } else {
    carro.aprobado = false
  }
 } )
}

function buscarPorColor(color1,color2){
 const carrosEncontrados = carros.filter(carro => carro.color === color1 || carro.color === color2 )
 return carrosEncontrados
}



function cambiarColor(NombreCarro,colorAcambiar){
  carros.forEach((carro) => {
    if(carro.marca === NombreCarro){
        carro.color = colorAcambiar
    }
  })
}

function mostrarCarros(){
    console.log(carros)
}

