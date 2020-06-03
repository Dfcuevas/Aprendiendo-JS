let btn = document.querySelector('button');
let txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn () {
  if(btn.textContent === 'Iniciar maquina') {
    btn.textContent = 'Detener maquina';
    txt.textContent = 'La maquina se inicio!';
  } else {
    btn.textContent = 'Iniciar maquina';
    txt.textContent = 'La maquina se detuvo';
  }
}
