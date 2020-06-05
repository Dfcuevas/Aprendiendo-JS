//creando variables para guardar referencias de elementos ul, input y button
const ulList = document.querySelector('ul')
const input = document.querySelector('input')
const boton = document.querySelector('button')

input.focus();

boton.onclick = function () {
  let valorInput = input.value
  console.log(valorInput)
  input.value = ''

  let nuevoLi = document.createElement('li')
  let nuevoSpan = document.createElement('span')
  let nuevoBoton = document.createElement('button')

  nuevoLi.appendChild(nuevoSpan)
  nuevoLi.appendChild(nuevoBoton)

  nuevoSpan.textContent = valorInput
  nuevoBoton.textContent = 'Delete'

  ulList.appendChild(nuevoLi)
  
  nuevoBoton.onclick = function () {
    ulList.removeChild(nuevoLi)
    input.focus();
  }
  input.focus();  
}
