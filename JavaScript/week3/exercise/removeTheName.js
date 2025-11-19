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

// Write some code here
function removeTheName() {
  // Define the index of the variable to remove
  const i = names.indexOf(nameToRemove);
  // Check if indexOf found the variable
  if (i !== -1)
    // Removes 1 element starting at index i
    names.splice(i, 1);
}
// Code done
removeTheName(nameToRemove);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']
