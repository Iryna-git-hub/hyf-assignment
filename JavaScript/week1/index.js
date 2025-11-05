// Age-ify (A future age calculator)
let yearOfBirth = 1927;
let yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears === true) {
  dogYear *= 7;
  console.log(`Your dog will be ${dogYear} dog years old in 2027.`); // Log out result in dog years
} else {
  dogYear *= 1;
  console.log(`Your dog will be ${dogYear} human years old in 2027.`); // Log out result in human years
}

// Housey pricey (A house price estimator)

// Constructor function for HouseSize objects
function HouseSize(wide, deep, height, garden, cost) {
  this.wide = wide;
  this.deep = deep;
  this.hight = height;
  this.gardenSizeInM2 = garden;
  this.houseCost = cost;
  // House area formula
  this.volumeInMeters = wide * deep * height;

  // House price formula
  this.housePrice = this.volumeInMeters * 2.5 * 1000 + garden * 300;

  // Calculating the difference in cost
  this.diffCost = cost - this.housePrice;
}

// Peter's house
// Create Peter object
const peterHouse = new HouseSize(8, 10, 10, 100, 2500000);

if (peterHouse.diffCost > 0) {
    console.log(`Peter's house costs ${peterHouse.diffCost} too much.`);
} else if (peterHouse.diffCost === 0) {
    console.log(`Peter's house has a fair price.`);
} else {
    console.log(`Peter's house costs ${Math.abs(peterHouse.diffCost)} too little.`);
};


// Julia's house
// Create Julia object
const juliaHouse = new HouseSize(5, 11, 8, 70, 1000000);
if (juliaHouse.diffCost > 0) {
    console.log(`Julia's house costs ${juliaHouse.diffCost} too much.`);
} else if (juliaHouse.diffCost === 0) {
    console.log(`Julia's house has a fair price.`);
} else {
    console.log(`Julia's house costs ${Math.abs(juliaHouse.diffCost)} too little.`);
};

// Ez Namey (Startup name generator) Optional
const firstWords = [
  "Witty",
  "Quantum",
  "Sparkly",
  "Pixelated",
  "Cosmic",
  "Electric",
  "Hungry",
  "Tiny",
  "Turbo",
  "Cheeky",
];
const secondWords = [
  "Taco",
  "Pixel",
  "Panda",
  "Rocket",
  "Algorithm",
  "Cloud",
  "Avocado",
  "Robot",
  "Unicorn",
  "Circuit",
];
const randomNumberFirst = Math.floor(Math.random() * 10);
const randomNumberSecond = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];
console.log(`The startup: ${startupName} contains ${startupName.length} characters.`);
