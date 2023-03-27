/* eslint-disable prettier/prettier */
const myName = 'Luciana';
const myAge = 24;

const suma = (a: number, b: number) => {
  return a + b
}

suma(13, 14);

class Persona{
  //si no se le asigna, por defecto es public
  //si esta en privado no podemos acceder a estos atributos
 /* private age;
  private name;

  constructor(age: number, name:string){
    this.age = age;
    this.name = name;
  }*/

  //pero al tener este metodo publico nos permite acceder a
  //los atributos
  getSummary(){
    return `my name is ${this.name},${this.age}`;
  }

  //tambien se puede crear un constructor para una clase sin atributos
  //ej:
   constructor(private age: number, private name:string){}
  //esto permite crear un objeto de esa clase, con x atributos
  //MAS USADA EN NESTJS
}

const luciana = new Persona(24, 'luciana');
luciana.getSummary();
