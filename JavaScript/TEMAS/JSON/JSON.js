const persona = {
    nombre:'Alvert',
    genero:'Masculino',
    altura:'1,68'
}

//TRANSFORMAR OBJETO A JSON
 const formatoJson = JSON.stringify(persona);
//TRANSFORMAR UN JSON A OBJETO
console.log(JSON.parse(formatoJson));





