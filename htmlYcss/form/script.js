

document.addEventListener("DOMContentLoaded", () =>{


const imagen = document.getElementById("imagenId");

imagen.addEventListener("click", () =>{
    imagen.classList.add("clicked");
 const  audio = new Audio("boing.mp3"); 
console.log(audio)
 audio.play();
 
 setTimeout(() => {
    imagen.classList.remove("clicked");
  }, 10);
});






})
