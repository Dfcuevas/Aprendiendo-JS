//Exploremos la creacion de clases a través de constructores y la creacion de instancias de objetos a partir de ellas. 

// Definir una persona con una funcion normal

/*function createNewPerson (name) {
  const obj = {}
  obj.name = name;
  obj.greeting = function(){
    alert(`Hola yo soy ${obj.name}.`)
  }
  return obj
}*/

//crear una nueva persona llamando la funcion 

/*const salva = createNewPerson('Salva')
salva.name
salva.greeting()*/

//constructor function

/*function Person(name) {
  this.name = name
  this.greeting = function () {
    alert(`Hola soy ${this.name}.`)
  }
}*/

// llamar al constructor para crear algunos objetos

/*let person1 = new Person('Luis')
let person2 = new Person('Flor')

*/

//creando nuestro constructor final

//function Person(first, last, age, gender, interests) {
//  this.nombre = {
//    first: first,
//    last: last
//  };
//  this.age = age
//  this.gender = gender
//  this.interests = interests
//  this.bio = function () {
//    alert(`${this.nombre.first} ${this.nombre.last} tiene ${this.age}. A el o ella le gusta ${this.interests[0]} y ${this.interests[1]}`)
//  }
//  this.greeting = function () {
//    alert(`Hola, yo soy ${this.nombre.first}.`)
//  }
//}

//let person1 = new Person('Diego', 'Cuevas', 31, 'Masculino', ['Musica', 'VideoJuegos'])


//----------  EL CONSTRUCTOR OBJECT


var person1 = new Object(); // Guardamos un objeto vacio en la variable person1

person1.name = 'Diego' //puedo agregar propiedades usando la notacion de punto
person1['age'] = 31 // puedo agregar propiedades usando la notacion de llaves
person1.saludo = function (){
  alert(`Hola, Yo soy ${this.name} y tengo ${this.age} años`)
} // agregar metodos


var person2 = new Object({
  name: 'Diego',
  age: 38,
  saludo : function (){
    alert(`Hola, Yo soy ${this.name} y tengo ${this.age} años`)
  }
})

//------------ USANDO EL METODO CREATE

// JS tiene un metodo llamado create() que permite crear un nuevo objeto basado en cualquier otro objeto existente.contenedor

var person3 = Object.create(person1); // person3 fue creado basado en person1, tiene las mismas propiedades y metodos

// El metodo create no esta soportado por IE8