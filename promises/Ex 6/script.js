// class Movie {
//   constructor(title, releaseDate, picture, rating) {
//     this.title = title;
//     this.releaseDate = releaseDate;
//     this.picture = picture;
//     this.rating = rating;
//   }
//   getTitle() {
//     return this.title;
//   }
//   getReleaseDate() {
//     return this.releaseDate;
//   }
//   getPicture() {
//     return this.picture;
//   }
//   getRating() {
//     return this.rating;
//   }
// }

// const getHttpOptions = () => ({
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer af01626b2f1fb8a5ad802cb6052bb7a0",
//   },
// });

// const API_BASE_URL = "https://api.themoviedb.org/3/";

fetch(`https://api.themoviedb.org/3/movie/550?api_key=`)
  .then((response) => response.json())
  .then((data) => console.log(data));
