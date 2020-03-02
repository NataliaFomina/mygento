if (window.matchMedia('screen and (min-width: 481px)').matches) {

  const home = document.querySelector('.home');
  // let computedStyle = +getComputedStyle(home).height.split('px')[0];
  let computedStyle = getComputedStyle(home);
  let h = +computedStyle.height.split('px')[0];
  console.log(h)
  document.addEventListener('scroll', onScroll(h));
  function onScroll(h) {
    const nav = document.querySelector('.nav__container')
    if (window.pageYOffset >= h -150) {
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



