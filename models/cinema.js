const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  const titles = this.films.map((film) => {
     return film.title;
  }); 
  return titles;
};

Cinema.prototype.findFilm = function (title) {
  const film = this.films.find(film => film.title === title);
  return film;
};

Cinema.prototype.filterFilms = function (filterItem, property) {
  const films = this.films.filter(film => film[property] === filterItem);
  return films;
};

Cinema.prototype.checkYear = function (year) {
    const chosenYear =  this.films.some(film => film.year === year);
    return chosenYear;
    // const array = this.films;
    // const filmInYear = (film) => films.year === year;
    // array.some(filmInYear);
};

Cinema.prototype.everyFilm = function (duration) {
  const longFilm = this.films.every((film) => {
    return film.length > duration;
  });
    
  return longFilm;
};

Cinema.prototype.runTime = function () {
    const lenOfFilms = this.films.reduce((total,film) => {
      return total + film.length;
    }, 0)
    return lenOfFilms;
};

Cinema.prototype.sortFilms = function (){
    const sortedFilms = this.films.sort((film1,film2) => {
        if (film1.title < film2.title){
          return -1;
        }
        if (film1.title > film2.title){
          return 1;
        }
        return 0;
    })
    return sortedFilms;
}; 

module.exports = Cinema;
