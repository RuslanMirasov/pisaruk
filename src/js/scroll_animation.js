/*
data-animation="fade-in" - вызов анимации с названием эффекта
data-repeat              - если есть, повторяет анимацию при скроле
data-delay="500"         - задержка анимации в милисекундах
*/
document.addEventListener('DOMContentLoaded', event => {
  const body = document.querySelector('.body');
  let delay = 0;
  let windowHeight = window.innerHeight;
  let bodyHeight = body.offsetHeight;
  const amimateElements = document.querySelectorAll('[data-animation]');
  const screenGap = 50;

  window.addEventListener('scroll', () => {
    windowHeight = window.innerHeight;
    animate();
  });
  window.addEventListener('load', () => {
    setTimeout(function () {
      bodyModifyHeight();
      animate();
    }, 300);
  });
  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    bodyModifyHeight();
  });

  function bodyModifyHeight() {
    bodyHeight = body.offsetHeight;
    if (bodyHeight < windowHeight) {
      body.style.height = windowHeight + 'px';
    } else {
      body.style.height = 'auto';
    }
    console.log(bodyHeight);
  }

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
