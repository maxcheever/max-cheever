const open = document.getElementById('open-menu')
const menu = document.getElementById('menu')

open.addEventListener('click', function() {

  
  menu.style.animation = 'fade 1s linear forwards'
})


const box_1 = document.getElementById('box1')
const number = document.getElementById('number')

box_1.addEventListener('click', function() {

  number.style.animation = 'fade 2s ease-in-out both'
})


const box_2 = document.getElementById('box2')
const email = document.getElementById('email')

box_2.addEventListener('click', function() {

  email.style.animation = 'fade 2s ease-in-out both'
})


const box_3 = document.getElementById('box3')
const social_icons = document.getElementById('social-icons')
const link = document.getElementById('link')

box_3.addEventListener('click', function() {

  social_icons.style.animation = 'fade 0.1s ease-in-out both'
  link.style.animation = 'fade 0.1s ease-in-out both'
})


const box_4 = document.getElementById('box4')
const resume = document.getElementById('resume')

box_4.addEventListener('click', function() {

  resume.style.animation = 'fade 2s ease-in-out both'
})