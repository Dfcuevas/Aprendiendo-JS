let select = document.querySelector('select');
let html = document.querySelector('.output');

select.onchange = function () {
  let choise = select.value;

  switch (choise) {
    case 'White':
      update('white', 'black');
      break;
    case 'Black':
      update('black', 'white');
      break;
    case 'Purple':
      update('purpe', 'white');
      break;
    case 'Yellow':
      update('yellow', 'darkgray');
      break;
    case 'Psychodelic':
      update('lime', 'purple');
      break;

  }
};

function update(bgColor, textColor) {
  html.style.backgroundColor = 'bgcolor';
}
