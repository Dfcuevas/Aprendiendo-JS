let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];let list = document.createElement('ul');

    // Add your code here
for (i=0; i < myArray.length; i++) {
  let lista = document.createElement('li');
  lista.textContent = myArray[i];
  list.appendChild(lista);
}
    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);