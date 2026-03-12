import { movies } from "./movies.js";

console.log(movies);

let visibleMovies = 15;
let currentMovies = [...movies];

const moviesContainer = document.getElementById("moviesList");

function renderMovies(list) {
  moviesContainer.innerHTML = "";

  list.slice(0, visibleMovies).forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
<div class="movie-title">${movie.title}</div>
<div>Year: ${movie.year}</div>
<div>Rating: ${movie.rating}</div>
`;

    moviesContainer.appendChild(card);
  });
}

renderMovies(currentMovies);

document.getElementById("showMore").addEventListener("click", () => {
  visibleMovies += 15;
  renderMovies(currentMovies);
});

document.getElementById("shortBtn").onclick = () => {
  currentMovies = movies.filter((m) => m.title.length <= 10);

  renderMovies(currentMovies);
};

document.getElementById("longBtn").onclick = () => {
  currentMovies = movies.filter((m) => m.title.length > 20);

  renderMovies(currentMovies);
};

document.getElementById("movies80sBtn").onclick = () => {
  currentMovies = movies.filter((m) => m.year >= 1980 && m.year <= 1989);

  renderMovies(currentMovies);
};

document.getElementById("ratingBtn").onclick = () => {
  currentMovies = movies.filter((m) => m.rating > 6);

  renderMovies(currentMovies);
};

document.getElementById("keywordBtn").onclick = () => {
  const checked = [
    ...document.querySelectorAll("input[type=checkbox]:checked"),
  ].map((el) => el.value.toLowerCase());

  currentMovies = movies.filter((movie) => {
    const title = movie.title.toLowerCase();

    return checked.some((word) => title.includes(word));
  });

  renderMovies(currentMovies);
};
