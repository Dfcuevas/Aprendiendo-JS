let list = document.querySelector('.output ul');
let totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

let productos = ['Underpants:6.99',
                  'Socks:5.99',
                  'T-shirt:15.99',
                  'Trousers:31.99',
                  'Shoes:23.99'
];


for (let i=0; i < productos.length; i++) {
  let productoDividido = productos[i].split(':');
  let nombreProducto = productoDividido[0];
  let valorProducto = Number(productoDividido[1]);
  total += valorProducto;
  itemText = nombreProducto + ' - $' + valorProducto;

  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);


/* let prueba = ['Zapatos:10.11'];

console.log(prueba[0].split(':')); */