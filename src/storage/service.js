export const getMovies = new Promise((res, rej) => {
  const movies = require('./movies.json')
  setTimeout(() => {
    res(movies)    
  }, 3000);
})