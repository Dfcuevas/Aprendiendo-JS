let list = document.querySelector('.output ul');
let searchInput = document.querySelector('.output input');
let searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let miHistoria = [];

searchBtn.onclick = function() {
  if(searchInput.value !== '') {
    miHistoria.unshift(searchInput.value);

    list.innerHTML = '';

    for(let i=0; i < miHistoria.length; i++) {
      itemText = miHistoria[i];
      let listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    if(miHistoria.length >= 5) {
      miHistoria.pop();
    }

    searchInput.value = '';
    searchInput.focus();
  }
}