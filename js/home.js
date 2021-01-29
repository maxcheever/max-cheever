// gettting the elements to be controlled by the javascript
const open = document.getElementById('open-menu')
const menu = document.getElementById('menu')

// waiting for a click on the "open-menu" icon
open.addEventListener('click', function() {

  // changing each elements CSS based on this click
  menu.style.animation = 'fade 1s linear forwards'
})

// waiting for a click on the "close-menu" icon
close.addEventListener('click', function() {

  // changing each elements CSS based on this click
  menu.style.animation = 'fade 1s linear forwards'
})