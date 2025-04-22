/*Superficie de un triangulo.
Que solicite 2 valores reales positivos, expresado en cms. El primero corresponde
a la base y el segundo a la altura de un triangulo. Calcular el valor de la superficie.
Si la superficie calculada es menor a 100 cm2, expresarla en mm2, caso contrario en metros cuadrados. */


function superficieDeTriangulo(base,altura) { 

  const superficieEnCentimetosCuadrados  = (base * altura) / 2;

  if(superficieEnCentimetosCuadrados < 100) {

     const superficieEnMilimetrosCuadrados =  superficieEnCentimetosCuadrados * 100;


     console.log('la superfice en centimetros al cuadrado es: ' + superficieEnCentimetosCuadrados + 
        'transformandola a milimetros al cuadrado es' + superficieEnMilimetrosCuadrados)
  }  else { 
     const superficeEnMetrosCuadrados = superficieEnCentimetosCuadrados / 10000;
     console.log('la superficie en centimetros cuadrados es' + superficieEnCentimetosCuadrados)
     console.log('transformada a metros cuadrados es', superficeEnMetrosCuadrados)
  }
}
