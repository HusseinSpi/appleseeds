class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseDate() {
    return this.releaseDate;
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}

const API_BASE_URL = "https://api.themoviedb.org/3/";
const apiKey = "af01626b2f1fb8a5ad802cb6052bb7a0";

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
  },
});

const getImage = (imgPath, size = "original") => {
  return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
};

const createMovieCard = (movie) => {
  let target = document.querySelector(".movies-list");
  target.innerHTML += `
    <div class="movie">
      <img class="vector-img" src="./images/Vector.svg">
      <a href="#">
        <img class="poster-img" src="./images/tabler-icon-plus.svg">
      </a>
      <img class="poster" src=${movie.getPicture()}>
      <h2>${movie.getTitle()}</h2>
      <p>Release Date: ${movie.getReleaseDate()}</p>
      <p>Rating: ${movie.getRating()}</p>
    </div>`;
};

const updateItemCount = () => {
  const itemCountElement = document.querySelector(".sort-bar p");
  const movieElements = document.querySelectorAll(".movie");
  const movieCount = movieElements.length;
  itemCountElement.textContent = `${movieCount} items`;
};

const createErrorMessage = () => {
  let target = document.querySelector(".movies-list");
  target.innerHTML = `<div class="error-message">Error fetching movies. Please try again later.</div>`;
};

const fetchMovies = () => {
  fetch(
    `${API_BASE_URL}movie/popular?language=en-US&page=1&api_key=${apiKey}`,
    getHttpOptions()
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((item) => {
        const title = item.title;
        const releaseDate = item.release_date;
        const picture = getImage(item.poster_path);
        const rating = item.vote_average;
        const movie = new Movie(title, releaseDate, picture, rating);
        createMovieCard(movie);
      });
      updateItemCount();
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      createErrorMessage();
    });
};

fetchMovies();
