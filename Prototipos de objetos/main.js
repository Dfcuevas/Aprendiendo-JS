// ----------------- PROTOTIPOS DE OBJETOS

// Los prototipos son un mecanismo mediante el cual los objetos en Javascript heredan caracteristicas entre si. 

// ---------------Un lenguaje basado en prototipos

/* 
Js es a menudo descrito como un lenguaje basado en prototipos. Para proporcionar mecanismos de herencia los objetos pueden tener un prototipo (objeto prototipo) asociado, que actua como una plantilla desde la que el objeto hereda métodos y propiedades

Un objeto prototipo puede tener, a su vez, otro objeto prototipo asociado desde el que heredar metodos y propiedades, y asi sucesivamente. Esto es conocido con frecuencia como la (cadena de prototipos), y explica por que objetos diferentes pueden tener disponibles propiedades y metodos definidos en otros objetos.

Aunque para ser exactos, los metodos y propieaddes son definidas en la propiedad prototype, que recide en la funcion constructor del objeto, no en la instancia del objeto.

Asi pues tenemos que, en js, se establece un enlace entre la instancia del objeto y su prototipo (este se encuentra en la propiedad __proto__ de la instancia, que es inicializada por la propiedad prototype del constructor). Y, como ya se ha comentado, el objeto tendrá acceso a una serie de metodos y propiedades que se encuentran a lo largo de la cadena de prototipos asociada
*/

//--------ENTENDIENDO PROTOTYPE OBJECTS

// Definiendo la funcion constructor

function Person(nombre, apellido, edad, genero, intereses) {
  this.nombre = {
    nombre: nombre,
    apellido: apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
  this.bio = function () {
    var string = `${this.nombre.nombre} ${this.nombre.apellido} tiene ${this.edad} años. `
    var pronoun;

    if(this.genero === 'hombre' || this.genero === 'Hombre' || this.genero === 'h' || this.genero === 'H') {
      pronoun = `A el le gusta: `
    } else if (this.genero === 'mujer' || this.genero === 'Mujer' || this.genero === 'm' || this.genero === 'M') {
      pronoun = `A ella le gusta: `
    } else {
      pronoun = `A ellos les gusta: `
    }

    string += pronoun

    if(this.intereses.length === 1) {
      string += `${this.intereses[0]}.`
    } else if (this.intereses.length === 2) {
      string += `${this.intereses[0]} y ${this.intereses[1]}.`
    } else {
      for(i = 0; i < this.intereses.length; i++) {
        if(i === this.intereses.length - 1) {
          string += `y ${this.intereses[i]}.`
        } else {
          string += `${this.intereses[i]}, `
        }
      }
    }

    alert(string)
  };
  this.saludo = function () {
    alert(`Hola, yo soy ${this.nombre.nombre}.`)
  }
}

let person1 = new Person('Diego', 'Cuevas', 31, 'hombre', ['Musica', 'Videojuegos', 'Desarrollo Web']);


person1.valueOf()

/* 
Este metodo simplemente retornará el valor del objeto sobre el que se llama. Lo que pasa es que:

  *El navegador comprueba inicialmente si el objeto person1 tiene un metodo valueOf() disponible en él.contenedor
  *Si no lo hace, entonces el navegador comprueba si el objeto prototipo del objeto person1 (el prototipo del constructor de Person()) tiene un metodo valueOf() disponible en el.contenedor
  *Si tampoco lo hace, entonces el navegador comprueba si el objeto prototipo del objeto prototipo del constructor Person() (Objeto() prototipo del objeto prototipo del constructor) tiene un metodo valueOf() disponible en el. Lo hace, asi que es llamado, y todo funciona.
*/

