window.addEventListener('DOMContentLoaded', () => {

    const buttonDeAgregar = document.getElementById('buttonAgregar')
    const contenedorDePalabras = document.getElementById('contenedorDePalabras')
    buttonDeAgregar.addEventListener('click', () => {

     
         

        const input = document.getElementById('input')

        const h1 = document.createElement('h1');
        h1.innerText = input.value;

        contenedorDePalabras.append(h1)

        input.value = '';
   

        
 
    })
    


})

