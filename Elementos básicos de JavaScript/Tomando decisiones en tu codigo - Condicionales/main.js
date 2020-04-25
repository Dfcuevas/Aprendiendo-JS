//Declaraciones if ... else

//Sintaxis if... else basica

/* if (condicion) {
  //codigo a ejecutar si la condicion es verdadera
} else {
  //ejecuta este otro codigo si la condicion es falsa
} */

//ES algo asi, esta diciendo que (if) la condicion retorna verdadero (true), entonces ejecute el codigo a, sino (else) ejecute el codigo B

/* let compraRealizada = true;

if (compraRealizada === true) {
  let subsidioAdicional = 10;
  console.log(subsidioAdicional);
} else {
  let subsidioAdicional = 5;
  console.log(subsidioAdicional);
}
 */


let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('.parrafoClima');

seleccionar.addEventListener('change', establecerClima);

function establecerClima () {
  let eleccion = seleccionar.value;

  if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy';
  } else if(eleccion === 'lluvioso') {
    parrafo.textContent = 'Esta lloviendo, tome un abrigo para lluvia y un paraguas';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Esta nevando - esta congelando!';
  } else if(eleccion  === 'nublado') {
    parrafo.textContent = 'No esta lloviendo, pero el cielo esta gris';
  } else {
    parrafo.textContent = '';
  }

}

// ---------------------------------------------------------------------//

//Declaraciones con switch

/* El condicional if...else hace un buen trabajo permitiendonos realizar un buen codigo, pero esto viene con sus desventajas. Hay variedad de casos donde necesitaras realizar varias elecciones, y cada una requiere una cantidad razonable de codigo para ser ejecutado y/o sus condicionales son complejas (i.e operadores logicos multiples). Para los casos en los que solo se desea establecer una variable apra una determinada opcion de valores o imprimir una declaracion en particular dependiendo de una condicion, la sintaxis puede ser un poco engorrosa, especialmente si se tiene una gran cantidad de opciones.

para estos casos los (switch statements) son de gran ayuda - toman una sola expresion / valor como una entrada, y luego pasan a traves de una serie de opciones hasta que encuentran una que coi8ncida con ese valor, ejecutando el codigo correspondiente que va junto con ella. Aqui hay un pseudocodigo mas para hacerte una idea: */

/* 
switch (expresion) {
  case choice1:
    ejecuta este codigo
    break;

  case choice2:
    ejecuta este codigo
    break;

  se pueden incluir todos los casos que quieras

  default:
    por si acaso, corre este codigo
} 
*/

/* 
Aqui tenemos: 

1. La palabra clave switch, seguida por un conjunto de parentesis.
2. Una expresion o valor dentro de los parentesis
3. La palabra clave case, seguida de una eleccion con la expresion / valor que podria ser, seguido de dos pntos.
4. Algun codigo a correr si la eleccion coincide con la expresion.
5. Una declaracion llamada break, seguida de un punto y coma. Si la eleccion previa coincide con la expresion/valor, el explorador dejara de ejecutar el bloque de codigo aqui, y continuara a la siguente linea de codigo. Si la opcion anterior coincide con la expresion/valor, aqui el navegador deja de ejecutar el bloque de codigo y pasa a cualquier codigo que aparezca debajo de la declaracion de switch.
6. La palabra clave default, seguido exactamente del mismo patron de codigo que en los casos anteiores, excepto que el valor predeterminado no tiene opciones despues de el, y no es necesarior que se use break por que no hay nada que ejecutar despues de este bloque de todas formas. Esta es la opcion predeterminada o por defecto que se ejecuta si ninguna de las opciones coincide.
*/

let select = document.querySelector('.selectClima');
let para = document.querySelector('.parrafoWeather');

select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'Dia soleado';
      break;
    case 'rainy':
      para.textContent = 'Dia lluvioso';
      break;
    case 'snowing':
      para.textContent = 'Dia nevado';
      break;
    case 'overcast':
      para.textContent = 'Dia con el cielo oscuro';
      break;
    default:
      para.textContent = '';
  }
}