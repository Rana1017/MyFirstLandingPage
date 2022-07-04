const menu = document.querySelector('.menu')
const closed = document.querySelector('.closed')
const nav = document.querySelector('nav')
const arrow = document.querySelector('.arrow-svg')

menu.addEventListener('click',()=>{
    nav.classList.add('open-nav')
})

closed.addEventListener('click',()=>{
    nav.classList.remove('open-nav')
})

arrow.addEventListener('click',()=>{
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
})