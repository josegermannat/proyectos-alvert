const input = document.getElementById("escribirTarea");
const boton = document.getElementById("botonAñadir");

const listaDeTareas = document.getElementById("ListaDeTareas");

boton.addEventListener(
    "click",() =>{
 const texto = input.value.trim();

 if(texto !== "" && isNaN(texto)){
    const newLi = document.createElement("li");
    newLi.textContent = texto;

const botonDos = document.createElement("button");
botonDos.textContent = " 🗑️";
botonDos.style.marginLeft = "20px";

botonDos.addEventListener("click", () =>{
    newLi.remove();
})    
    
newLi.appendChild(botonDos);

    listaDeTareas.appendChild(newLi);

newLi.addEventListener( "click", () =>{

 newLi.classList.toggle("completada"); 
 
})

    input.value = "";
 }
 else{
    alert(" No se pueden ingresar numeros");
    input.value = "";
 }

    }
);

