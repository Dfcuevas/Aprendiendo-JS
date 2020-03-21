var list = document.querySelector('.output ul');
list.innerHTML = '';

var cities = [
  'nonDon',
  'ManCHESTer',
  'BiRmiNGHAM',
  'liVERpoOL'
]

for (var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var minusculas = input.toLowerCase();
  var primeraLetra = minusculas.slice(0,1);
  var mayusculas = minusculas.replace(primeraLetra, primeraLetra.toUpperCase());
  listItem = document.createElement('li');
  listItem.textContent = mayusculas;
  list.appendChild(listItem);

}