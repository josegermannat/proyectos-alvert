window.addEventListener('DOMContentLoaded', () => {


  const titulo = document.getElementById('titulo');
  const input = document.getElementById('input-nombre');
  const boton = document.getElementById('button');

  boton.addEventListener('click', () => {
    if(input.value !== ''){
        titulo.innerText = input.value;
        input.value = ''; 
    } else {
       alert('EU PPENDEJO ESCIRBI ALGO') 
    }
     
  })



})

