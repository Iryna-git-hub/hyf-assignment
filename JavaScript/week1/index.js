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
// Peter's house
let widePeter = 8;
let deepPeter = 10;
let heightPeter = 10;
let gardenSizeInM2Peter = 100;
let volumeInMetersPeter = widePeter * deepPeter * heightPeter;
let housePricePeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
let sellingPricePeter = 2500000 - housePricePeter;
console.log("Peter's house costs " + sellingPricePeter + " too much.");

// Julia's house
let wideJulia = 5;
let deepJulia = 11;
let heightJulia = 8;
let gardenSizeInM2Julia = 70;
let volumeInMetersJulia = wideJulia * deepJulia * heightJulia;
let housePriceJulia =
  volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
let sellingPriceJulia = 1000000 - housePriceJulia;
console.log(
  "Julia's house costs " + Math.abs(sellingPriceJulia) + " too little."
);

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
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    " characters."
);
