function mobileMenu(){
  const body = document.querySelector('body')
  const menuBtn = document.querySelector('.mobile-btn')
  const menu = document.querySelector('.mobile__menu')

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.toggle('showMenu')
    menuBtn.classList.toggle('active')
    body.classList.toggle('hidden')
  })
}

mobileMenu()