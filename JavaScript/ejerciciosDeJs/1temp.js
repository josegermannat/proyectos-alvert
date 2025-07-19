/*escriba un programa para leer la temperatura en grados centígrados y mostrar un mensaje adecuado según el estado de temperatura a continuación:
Temperatura < 0 y luego clima helado
Temperatura 0-10 y luego clima muy frío
Temperatura 11-20 y luego clima frío
Temperatura 21-30 y luego Normal en temperatura
Temperatura 31-40 y luego hace calor
Temp>=40 entonces hace mucho calor
Datos de prueba:
42
Resultado esperado: 
Hace mucho calor.*/
function grados (Temperatura){
    if(Temperatura < 0){console.log("Clima helado  ")}
    else if(Temperatura>= 0 && Temperatura <= 10){console.log("Clima muy frio")}
    else if(Temperatura>=11 && Temperatura<=20){console.log("Clima frio")}
    else if(Temperatura>=21 && Temperatura<=30){console.log("Normal en temperatura")}
    else if(Temperatura>=31 && Temperatura<=40){console.log("Hace calor")}
    else if(Temperatura>=40){console.log("Hace mucho calor")}
    console.log("pene")
    console.log("miembro")
    
}
const GradosCentigrados = 
grados(GradosCentigrados)