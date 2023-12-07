
const KEY = "ENTER_YOUR_KEY_HERE"; // https://www.themoviedb.org/

async function getMovieData() {
//   const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
    const url = "https://api.themoviedb.org/3/tv/popular?page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${KEY}`,
    },
  };

  const resp = await fetch(url, options);
  const jsonData = await resp.json();
  const movies = jsonData.results;

  return movies;
}

function addMovies(movies) {
  const movieContainer = document.getElementById("movie-container");
  function addMovie(movie) {
    const imgMovie = document.createElement("img");
    imgMovie.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieContainer.appendChild(imgMovie);
  }

  for (let movie of movies) {
    addMovie(movie);
  }
}

const movies = await getMovieData();
addMovies(movies);
