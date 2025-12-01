// Javascript warmup: Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

function removeTheName(name) {
  const i = names.indexOf(name);
  if (i !== -1)
    names.splice(i, 1);
}

removeTheName(nameToRemove);

console.log(names);
