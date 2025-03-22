/* Jaimito va a una tecnicatura y esta cursando 3 materias el quiere entrar a un curso para eso tiene que aprobar las 3 materias o tener un promedio en matematica y fisica mayor igual a 8, las materias son: Fisica, matematica y quimica.*/
/*Caracteristicas del programa: 
_ Debe haber una funcion donde pueda colocar las notas y reciba esas notas como parametro.
-Debe decir las notas individualmente*/

function Materias(Matematica,Física,Inglés){
    if(Matematica>=6 && Física>=6 && Inglés>=6){
        console.log("!Aprobaste todas las materias!,¡Felicidades!")
    }
    else if(Matematica>=8 && Física>=8){ 
        console.log("Estas aprobado")}

        else { console.log("Estas desaprobado")}
    console.log("Tu promedio en matematica es " + Matematica)
    console.log("Tu promedio en Fisica es " + Física)
    console.log("Tu Promedio en Inglés " + Inglés)

    }
    Materias(8,8,3)
