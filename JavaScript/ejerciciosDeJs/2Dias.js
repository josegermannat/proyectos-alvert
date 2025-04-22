/* Crear 1 funcion que tome un valor del 1 al 7 como parametro
 y que devuelva en consola el dia de la semana segun el numero ejemplo:
  1 == lunes, 2== martes. Si se escribe un numero mayor a 7 debe escribir en consola "Escribiste mal el numero."*/

  function DiasDeLaSemana(Dia,Mes){
    switch(Dia){
        case 1: console.log("Lunes");
        break;
        case 2: console.log("Martes")
        break;
        case 3: console.log("Miercoles");
        break;
        case 4: console.log("Jueves");
        break;
        case 5: console.log("Viernes");
        break;
        case 6: console.log("Sabado");
        break;
        case 7: console.log("Domingo");
        break;
        default: console.log("Escribiste mal el numero")

        

        
    }
    switch(Mes){
      case 1: console.log("del mes de Enero");
        break;
        case 2: console.log("del mes de Febrero")
        break;
        case 3: console.log("del mes de Marzo");
        break;
        case 4: console.log("Jdel mes de Abril");
        break;
        case 5: console.log("del mes de Mayo");
        break;
        case 6: console.log("del mes de Junio");
        break;
        case 7: console.log("del mes de Julio");
        break;
        case 8: console.log("del mes de Agosto")
        break;
        case 9: console.log("Mdel mes de Septiembre");
        break;
        case 10: console.log("del mes de Octubre");
        break;
        case 11: console.log("del mes de Noviembre");
        break;
        case 12: console.log("del mes de Diciembre");
        break;
        default: console.log("Escribiste mal el numero")


    }
  }
  const DiaDeHoy = 1
  const MesActual=2
  DiasDeLaSemana(DiaDeHoy,MesActual) 
  