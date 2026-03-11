import { movies } from "./movies.js";

console.log(movies);

const shortTitles = movies.filter(movie => movie.title.length <= 10);



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
