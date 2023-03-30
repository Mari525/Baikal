const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const nav = document.querySelector('.nav');
const header = document.getElementById('header');
const address = document.querySelector('.header__address');
const body = document.querySelector('.body');
// const mediaQuery = window.matchMedia('(min-width: 1050px)')

burgerOpen.addEventListener('click', function() {
  nav.style.display = 'block';
  header.style.height = '100vh';
  burgerClose.style.display = 'block';
  burgerOpen.style.display = 'none';
  address.style.display = 'block';
  body.style.overflow = "hidden";
})

burgerClose.addEventListener('click', function(){
  header.style.height = 'auto';
  address.style.display = 'none';
  body.style.overflow = "auto";
  nav.style.display = 'none';
  burgerClose.style.display = 'none';
  burgerOpen.style.display = 'block';


  // if (mediaQuery.matches) {
  //   nav.style.display = 'block';
  //   burgerOpen.style.display = 'none';
  // }

  // else {
  //   nav.style.display = 'none';
  //   burgerClose.style.display = 'none';
  //   burgerOpen.style.display = 'block';
  // } 
})