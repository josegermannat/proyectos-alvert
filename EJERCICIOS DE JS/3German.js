/* German esta cursando en el colegio carbo y tiene 5 materias.
 German necesita un programa que coloque sus notas y el programa le diga el promedio de cada una y que tambien las escriba cada una.
  Si tu promedio es mayor a 8 debe imprimir "Eres un excelente alumno" si tu promedio es de 6 debe imprimir "eres un alumno regular" 
  si tu promedio es menor a 4 debe imprimir"eres un mal alumno". 
  ahora las variables ya no sean variables sino parametros para que el usuario las pueda cambiar cada vez que se llame a la funcion*/ 
   function materias (Matematica, Fisicas, Biologia, Lenguaje, Geografia,) {
  const Promedio = (Matematica + Fisicas + Biologia + Lenguaje + Geografia) /5;
  if(Promedio >= 7.6 ){
    console.log("Eres un exclente alumno")
  }
  else if(Promedio>= 6 && Promedio <= 7.5){
    console.log("Eres un alumno regular")
}
else { console.log("Eres un mal alumno")
}
console.log("Tu promedio es " + Promedio)
console.log("Tu nota en Matematica es " + Matematica )
console.log("Tu nota en Fisica es  " + Fisicas )
console.log("Tu nota en Biologia es  " + Biologia )
console.log("Tu nota en Lenguaje es  " + Lenguaje )
console.log("Tu nota en Geografia  " + Geografia )


}
materias(10,7,9,9,2)

