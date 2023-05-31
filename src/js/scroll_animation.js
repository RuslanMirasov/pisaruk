document.addEventListener('DOMContentLoaded', event => {
  const amimateElements = document.querySelectorAll('[data-animation]');
  const screenGap = 150;
  let windowHeight = window.innerHeight;
  window.addEventListener('scroll', () => {
    windowHeight = window.innerHeight;
    animate();
  });
  window.addEventListener('load', () => {
    setTimeout(function () {
      animate();
    }, 300);
  });
  function animate() {
    amimateElements.forEach(element => {
      const animationRepeat = element.dataset.repeat;
      const elementScrolltop = element.getBoundingClientRect().top;
      const elementScrollbottom = elementScrolltop + element.offsetHeight;
      if (elementScrollbottom > screenGap && elementScrolltop < windowHeight - screenGap) {
        element.classList.add('animate');
      } else {
        if (animationRepeat !== undefined) {
          element.classList.remove('animate');
        }
      }
    });
  }
});
