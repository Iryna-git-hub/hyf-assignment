// setTimeout(() => {
//   document.querySelector(".one").textContent = "Called after 2.5 seconds";
// }, 2500);

let countS = 0;
let countL = 0;

const displayCountS = document.createElement("p");
displayCountS.className = "displayCount";
document.getElementById("playerS").appendChild(displayCountS);

const displayCountL = document.createElement("p");
displayCountL.className = "displayCount";
document.getElementById("playerL").appendChild(displayCountL);

const handleKeyPress = (event) => {
  const key = event.key.toLowerCase();

  if (key === "s" && !event.repeat) {
    console.log("key S pressed");
    countS++;
    displayCountS.textContent = countS;
  }

  if (key === "l" && !event.repeat) {
    console.log("key L pressed");
    countL++;
    displayCountL.textContent = countL;
  }
};

document.addEventListener("keydown", handleKeyPress);
