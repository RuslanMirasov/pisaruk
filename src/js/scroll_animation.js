document.addEventListener('DOMContentLoaded', event => {
  const amimateElements = document.querySelectorAll('[data-animation]');
  let windowHeight = window.innerHeight;
  let scroll = window.scrollY;
  window.addEventListener('scroll', () => {
    scroll = window.scrollY;
    windowHeight = window.innerHeight;
    animate();
  });

  function animate() {
    amimateElements.forEach(element => {
      const elementScrolltop = element.getBoundingClientRect().top;
      const elementScrollbottom = elementScrolltop + element.offsetHeight;
      if (elementScrollbottom > 50 || elementScrollbottom > 50) {
        element.style.backgroundColor = 'green';
      } else {
        element.style.backgroundColor = 'tomato';
      }
      console.log(`${elementScrollbottom}`);
    });
  }

  animate();
});
