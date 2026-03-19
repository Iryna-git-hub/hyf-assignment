//============================================================================================
// Functions
//============================================================================================

// 1
setTimeout(() => {
  document.querySelector(".one").textContent = "Called after 2.5 seconds";
}, 2500);

// 2
const logAfterDelay = (delay, stringToLog) => {
  setTimeout(() => {
    document.querySelector(".two").textContent = stringToLog;
  }, delay * 1000);
};
logAfterDelay(2, "The string logged out after 2 seconds");
logAfterDelay(7, "The string logged out after 7 seconds");
logAfterDelay(15, "The string logged out after 15 seconds");

// 3

const handleClick = () => {
  logAfterDelay(5, "The string logged out after 5 seconds");
};

const sectionThree = document.querySelector(".three");
const btn = document.createElement("button");
btn.textContent = "Click";
sectionThree.appendChild(btn);

btn.addEventListener("click", handleClick);

// 4

const logEarth = () => {
  document.querySelector(".four").textContent = "The Earth function is called";
};
const logSaturn = () => {
  document.querySelector(".four").textContent = "The Saturn function is called";
};

const planetLogFunction = (func) => {
  func();
};
planetLogFunction(logEarth);

// 5

const sectionFive = document.querySelector(".five");
const btn2 = document.createElement("button");
btn2.textContent = "Log location";

let latText = document.createElement("p");
latText.className = "latitude";
let longText = document.createElement("p");
longText.className = "longitude";

sectionFive.appendChild(btn2);
sectionFive.appendChild(latText);
sectionFive.appendChild(longText);

const logLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.textContent = `This is the latitude ${lat}`;
    longText.textContent = `This is the longitude ${long}`;
  });
};

btn2.addEventListener("click", logLocation);

// 6 *optional - going to implement later

// 7

const runAfterDelay = (delay, callback) => {
  setTimeout(callback, delay * 1000);
};

document.getElementById("btn3").addEventListener("click", () => {
  const delay = Number(document.getElementById("delayInput").value);

  runAfterDelay(delay, () => {
    const p = document.createElement("p");
    p.textContent = `Callback called after ${delay} seconds`;
    document.querySelector(".seven").appendChild(p);
  });
});

// 8

document.addEventListener("dblclick", (e) => {
  const p = document.createElement("p");
  p.textContent = `double click!`;
  document.querySelector(".eight").appendChild(p);
});

// 9

const logFunnyJoke = () => {
  const p = document.createElement("p");
  p.innerHTML =
    "Why do programmers hate nature?<br>Because it has too many trees and not enough root access.";
  document.querySelector(".nine").appendChild(p);
};

const logBadJoke = () => {
  const p = document.createElement("p");
  p.innerHTML =
    "Why did the variable go to therapy?<br>Because it had too many issues… and still returned nothing.";
  document.querySelector(".nine").appendChild(p);
};

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

jokeCreator(true, logFunnyJoke, logBadJoke);

//============================================================================
// Function as a variable
//============================================================================

// 1
const toUpper = (sentence) => {
  console.log(sentence.toUpperCase());
};

const toLower = (sentence) => {
  console.log(sentence.toLowerCase());
};

const toSplit = (sentence) => {
  const words = sentence.split(" ");
  console.log(words[1]);
};

const newArr = [toUpper, toLower, toSplit];
newArr.forEach((callback) => callback("hElLO WorlD"));

// 2

const foo = function () {
  console.log(5);
};

function baz() {
  console.log(7);
}

foo();
baz();

// 3

let object = { multiply : (x, y) => { 
    console.log(x * y)
} };

object.multiply(5, 2)

// 4 ...loading
