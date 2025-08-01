document.addEventListener('DOMContentLoaded', () => {
 const liNombre = document.getElementById('nombre')
  const liPeso = document.getElementById('peso')
   const liAltura = document.getElementById('altura')
   const imagen = document.getElementById('img')
   const input = document.getElementById('inputPokemon')
   const button = document.getElementById('button')

button.addEventListener('click', () => {

     fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
  .then(respuesta =>  respuesta.json())
  .then((res) => {
    console.log(res)
  liNombre.innerHTML = `El nombre es  ${res.name}`
  liAltura.innerHTML = `La altura es ${res.height}`
  liPeso.innerHTML = `el peso es ${res.weight}`
  imagen.src = res.sprites.front_shiny_female
})
.catch(error => console.log('arroz'))



})

})

