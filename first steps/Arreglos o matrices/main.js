/* 1. Digamos que queriamos almacenar una lista de compras en una matriz -- hariamos algo como lo siguiente. Ingresa las siguientes lineas en la consola */

var shopping = ['bread', 'milk', 'cheese', 'humus', 'nodles'];

console.log(shopping);

/* 2. En este caso, cada elemento de la matriz es una cadena, pero ten en cuenta que puedes almacenar cualquier elemento en una matriz -- cadena, numero, objeto, otra variable, incluso otra matriz. Tambien puedes mezclar y combinar tipos de elementos -- no todos tienen que ser numeros, cadenas, etc. Prueba estos */

var sequence = [1, 1, 2, 3, 5, 8, 13];

console.log(sequence);

var random = ['tree', 794, [0, 1, 2]];

console.log(random);

/* Accediendo y modificando elementos de la matriz
Puedes entonces acceder a elementos individuales en la matriz mediante la notacion  de corchetes, del mismo modo que accediste a las letras de una cadena. */

console.log(shopping[0]);

/* Tambien puedes modificar un elemento en una matriz sipmlemente dando a un item de la matriz un nuevo valor.  */

shopping[0] = 'Tahiti';

console.log(shopping);

/* Ten en cuenta que una matriz dentro de otra matriz se llama matris multidimensional. Puedes acceder a los elementos de una matriz que esten dentro de otra, encadenando dos pares de corchetes. Por ejemplo, para acceder a uno de los elementos dentro de la matriz, que a su vez, es el tercer elemento dentro de la matriz random */

console.log(random[2][1]);

/* Puedes averiguar la longitud de una matriz (cuantos elementos contiene) exactamente de la misma manera que determinas la longitud (en caracteres) de una cadena utilzando la propiedad length */

console.log(sequence.length);

/* Esto tiene otros usos, pero se usa mas comunmente para indicarle a un ciclo que continue hasta que haya recorrido todos los elementos de la matriz. Asi por ejemplo: */

for(let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

// Algunos metodos de matriz utiles

/* En esta seccion veremos algunos metodos bastante utiles relacionados con matrices que nos permiten dividir cadenas en elementos de matriz y viceversa, y agregar nuevos elementos en matrices */

//Conversion entre matrices y cadenas

/* A menudo se te presentaran algunos datos brutos contenidos en una cadena larga y grande, y es posible que desees separar los elementos utiles de una forma mas conveniente y luego hacerle cosas, como mostrarlos en una tabla de datos. Para hacer esto, podemos usar el metodo split(). En su forma mas simple, esto toma un unico parametro, el caracter que quieres separar de la cadena, y devuelve las subcadenas entre el separados como elementos de una matriz */

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

let myArray = myData.split(',');

console.log(myArray);

console.log(myArray.length);

/* Tambien puedo hacer lo contrario, unir los elementos de una matriz en una variable  */

let myNewString = myArray.join(',');

console.log(myNewString);

/* Otra forma de convertir una matriz en cadena es usar el metodo toString(). es posiblemente mas simple que join() ya que no toma un parametro, pero es mas limitado. Con join() puedes especificar diferentes separadores  */

let dogNames = [
  'Rocket', 
  'Flash',
  'Bella',
  'Slugger'
];

console.log(dogNames.toString());

//Agregar y eliminar elementos de la matriz 

/* Todavia no hemos cubierto la posibilidad de agregar y eliminar elementos de la matriz --- echemos un vistazo a esto ahora. Usaremos la matriz myArray con la que terminamos en la ultima seccion. */

let miArreglo = [
  'Manchester',
  'London',
  'Liverpool',
  'Birmingham',
  'Leeds', 
  'Carlisle'
];

/* Antes que nada, para añadir o eliminar un elemento al final de una matriz podemos usar push() y pop() respectivamente */

miArreglo.push('Cardiff');
console.log(miArreglo);

miArreglo.push('Bradford', 'Brighton');

console.log(miArreglo);

// Si quisiera almacenar la nueva longitud de matriz en una variable, podrias ahcer algo como esto: 

let newLength = miArreglo.length;
console.log(newLength);

/* Eliminar el ultimo elemento de una matriz es tan simple como correr pop() en ella.*/

miArreglo.pop();
console.log(miArreglo);

/* El elemento que se elimino se devuelve cuando se completa la llamada al metodo. Para guardar este elemento en una variable, puedes hacer lo siguiente: */

let itemEliminado = miArreglo.pop();

console.log(itemEliminado);

/* unshift() y shift() funcionan exactamente igual de push() y pop(), respectivamente, excepto que funcionan al principio de la matriz, no al final. */

miArreglo.unshift('Edinburgh');
console.log(miArreglo);

let removedItem = miArreglo.shift();
console.log(removedItem);