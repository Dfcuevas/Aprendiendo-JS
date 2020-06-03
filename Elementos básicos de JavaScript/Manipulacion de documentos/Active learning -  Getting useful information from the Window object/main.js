//Tomamos una referencia al div del documento html
const div = document.querySelector('div')

//Ahora tomamos una referencia al ancho y alto del viewport y las almacenamos en variables 
//let winWidth = window.innerWidth
//let winHeight = window.innerHeight

//Ahora manipularemos dinamicamente el ancho y alto del div para que sea igual al de la ventana grafica (viewport)
//div.style.width = winWidth + 'px'
//div.style.height = winHeight + 'px'

//El objeto window tiene un evento disponible llamado onresize, que se activa cada vez que se cambia el tamaño de la ventana
window.onresize = function () {
  let winWidth = window.innerWidth
  let winHeight = window.innerHeight
  div.style.width = `${winWidth}px`
  div.style.height = `${winHeight}PX`

}

