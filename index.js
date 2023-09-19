
const openToggle = document.querySelector('.mobile-toggle-open')
const closeToggle = document.querySelector('.mobile-toggle-close')
const menu = document.querySelector(".menu");

openToggle.addEventListener('click', function(){
  console.log(menu.classList)
  console.log(menu.classList.contains('show-links'))

  if (menu.classList.contains('show-links')){
    (menu.classList.remove('show-links'))
  }
  else{
    menu.classList.add('show-links')
  }
})
closeToggle.addEventListener('click', function(){
  menu.classList.remove('show-links')
})