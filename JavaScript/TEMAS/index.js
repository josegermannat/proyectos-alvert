class Animal {
    constructor(nombre,peso,altura,especie,habitat){
      this.nombre = nombre;
      this.peso = peso;
      this.altura = altura
      this.especie = especie
      this.habitat = habitat
    }
    comer(){
        console.log(`el ${this.nombre} MORFANDO`)
    }
}








 class Perro extends Animal  {
  constructor(nombre,peso,altura,especie,habitat,seHueleElculo){
       super(nombre,peso,altura,especie,habitat)
    this.seHueleElculo = seHueleElculo
  }
  
  ladrar(poder){
    if(poder > 5){
        console.log('GUA GUA SUPER FUERTE')
    } else {
        console.log('gua gua')
    }
  }



}



const perro = new Perro('bull dog','8kg','80cm','perro','Animal Domestico','true')
const perro2 = new Animal('pudel','8kg','80cm','perro','Animal Domestico')

perro.ladrar(2)




