let list = document.querySelector('.output ul');
list.innerHTML = '';

estaciones = [
  'MAN67744564563456sjti4532;Mancherter Piccadilly',
  'GNF34lk5j12342k34lj2342134l;Greenfield',
  'LIV345lk34523lk345nh23345lkd3;Liverpool Lime Street',
  'SYB324lk55hl2k3j4lk24235ha09;Stalybridge',
  'HUDasdlk34309fdfsd09324lkj23;Huddersfield'
];

for (i = 0; i < estaciones.length; i++) {

  let input = estaciones[i];
  primeras3Letras = input.slice(0,3);
  puntoComa = input.indexOf(';');
  nombreEstacion = input.slice(puntoComa + 1, input.length);
  let result = primeras3Letras + ': ' + nombreEstacion;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

