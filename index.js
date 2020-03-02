if (window.matchMedia('screen and (min-width: 481px)').matches) {

  const home = document.querySelector('.home');
  let computedStyle = +getComputedStyle(home).height.split('px')[0];
  document.addEventListener('scroll', onScroll);
  function onScroll() {
    const nav = document.querySelector('.nav__container')
    if (window.pageYOffset >= computedStyle -150) {
      nav.classList.add('changed')
    } else {
      nav.classList.remove('changed')
    }
  }

} else {
  const open = document.querySelector('.nav__open');
  const close = document.querySelector('.nav__close');
  open.addEventListener('click', toggleMenu);
  close.addEventListener('click', toggleMenu);
  function toggleMenu() {
    const navWrapper = document.querySelector('.nav__wrapper');
    navWrapper.classList.toggle('opened')
    document.body.classList.toggle('overflow-hidden')
  }
}




