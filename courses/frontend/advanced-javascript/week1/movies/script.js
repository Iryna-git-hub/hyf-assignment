import { movies } from "./movies.js";

console.log(movies);

const shortTitles = movies.filter(movie => movie.title.length <= 10);

const longTitles = movies.map(movie => movie.title)
.filter(title => title.length > 20);

const movies80s = movies.filter(movie =>
movie.year >= 1980 && movie.year <= 1989
);



function renderList(id,title,data){

const section = document.getElementById(id);

section.innerHTML = `
<h2>${title}</h2>
<ul>
${data.map(item=>`<li>${item}</li>`).join("")}
</ul>
`;

}

renderList(
"shortTitles",
"Short Titles",
shortTitles.map(m=>m.title)
);

renderList(
"longTitles",
"Long Titles",
longTitles
);

renderList(
"movies80s",
"Movies from 1980s",
movies80s.map(m=>m.title)
);
