/*
data-animation="fade-in" - вызов анимации с названием эффекта
data-repeat              - если есть, повторяет анимацию при скроле
data-delay="500"         - задержка анимации в милисекундах
*/
document.addEventListener('DOMContentLoaded', event => {
  const amimateElements = document.querySelectorAll('[data-animation]');
  const screenGap = 50;
  let delay = 0;
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
      const animationDelay = element.dataset.delay;
      const elementScrolltop = element.getBoundingClientRect().top;
      const elementScrollbottom = elementScrolltop + element.offsetHeight;
      if (animationDelay !== undefined) {
        delay = animationDelay;
      } else {
        delay = 0;
      }
      if (elementScrollbottom > screenGap && elementScrolltop < windowHeight - screenGap) {
        setTimeout(function () {
          element.classList.add('animate');
        }, delay);
      } else {
        if (animationRepeat !== undefined) {
          element.classList.remove('animate');
        }
      }
    });
  }
});
