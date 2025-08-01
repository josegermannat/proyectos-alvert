try {
  let texto = '{ "nombre": "Germán", "edad": 17 }'; 
  let persona = JSON.parse(texto); // <- puede fallar si el texto está mal
  console.log(persona);
} catch (error) {
  console.log("❌ Hubo un error al convertir el JSON:", error.message);
}