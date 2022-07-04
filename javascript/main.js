const menu = document.querySelector('.menu')
const closed = document.querySelector('.closed')
const nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    nav.classList.add('open-nav')
})

closed.addEventListener('click',()=>{
    nav.classList.remove('open-nav')
})