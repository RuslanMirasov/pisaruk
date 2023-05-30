document.addEventListener('DOMContentLoaded', event => {
  const films = document.querySelectorAll('.js-film-hover');
  const posters = document.querySelectorAll('.poster');

  films.forEach(filmLink => {
    //desctop events
    filmLink.addEventListener('mouseover', showMoviePoster);
    filmLink.addEventListener('mouseout', clearMoviePosters);
    //mobil events
    filmLink.addEventListener('touchstart', showMoviePoster);
    filmLink.addEventListener('touchend', clearMoviePostersMobil);
  });

  function clearMoviePosters() {
    posters.forEach(poster => {
      poster.classList.remove('active');
    });
  }

  function clearMoviePostersMobil() {
    const filmId = this.dataset.id;
    posters.forEach(poster => {
      if (poster.dataset.id !== filmId) {
        poster.classList.remove('active');
      }
    });
  }

  function showMoviePoster() {
    const filmId = this.dataset.id;
    posters.forEach(poster => {
      if (poster.dataset.id === filmId) {
        poster.classList.add('active');
      } else {
        poster.classList.remove('active');
      }
    });
  }
});
