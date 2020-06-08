const person = {
  name: {
    nombre: 'Diego',
    apellido: 'Cuevas'
  },
  age: 31,
  gender: 'Masculino',
  interests: ['musica', 'programar'],
  bio: function (){
    alert(`${this.name[0]} ${this.name[1]} tiene ${this.age} años. A él le gusta la ${this.interests[0]} y ${this.interests[1]}.`)
  },
  greeting: function(){
    alert(`Hola! yo soy ${this.name[0]}.`)
  }
}
person.despedida = function () {
  alert(`Adios a todos, adios a mi ${this.interests[0]}`);
}

let myDataName = 'ojos'
let myDataValue = 'Cafe clarito'
person[myDataName] = myDataValue

let person1 = {
  name: 'Diego',
  saludo: function(){
    alert(`Hola, yo soy ${this.name}.`)
  }
}

let person2 = {
  name: 'Miguel',
  saludo: function() {
    alert(`Hola, yo soy ${this.name}`)
  }
}

const myNotification = new Notification('Hello') 