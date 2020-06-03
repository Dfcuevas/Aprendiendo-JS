let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');

select.onchange = function () {
  let choise = select.value;
  let days = 31;
  if(choise === 'Febrero') {
    days = 29;
  } else if (choise === 'Abril' || choise === 'Junio' || choise === 'Septiembre' || choise === 'Noviembre') {
    days = 30;
  } 

  createCalendar(days, choise);
}

function createCalendar(days, choise) {
  list.innerHTML = '';
  h1.textContent = choise;

  for(let i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January'); 