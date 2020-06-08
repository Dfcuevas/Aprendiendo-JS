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

function Person(first, last, age, gender, interests) {
  this.nombre = {
    first: first,
    last: last
  };
  this.age = age
  this.gender = gender
  this.interests = interests
  this.bio = function () {
    alert(`${this.nombre.first} ${this.nombre.last} tiene ${this.age}. A el o ella le gusta ${this.interests[0]} y ${this.interests[1]}`)
  }
  this.greeting = function () {
    alert(`Hola, yo soy ${this.nombre.first}.`)
  }
}

let person1 = new Person('Diego', 'Cuevas', 31, 'Masculino', ['Musica', 'VideoJuegos'])