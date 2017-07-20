var getMovieInfo = require("./movie");


var threeFavoriteMovies = ['Amelie', 'Amadeus Movie', 'Ex Machina'];
threeFavoriteMovies.forEach(function(film){
  getMovieInfo(film); //bc we're exporting the get function from movie.js, 'get()' and 'getMovieInfo()' are synonynous
});