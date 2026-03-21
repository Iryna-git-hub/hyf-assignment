let countS = 0;
let countL = 0;
let gameActive = false;
let timeLeft = 0;
let timerInterval = 0;

const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const playerS = document.getElementById("playerS");
const playerL = document.getElementById("playerL");

const displayCountS = document.createElement("p");
displayCountS.className = "displayCount";
playerS.appendChild(displayCountS);

const displayCountL = document.createElement("p");
displayCountL.className = "displayCount";
playerL.appendChild(displayCountL);

const canvasS = document.createElement("canvas");
canvasS.style.position = "absolute";
canvasS.style.top = "0";
canvasS.style.left = "0";
canvasS.style.width = "100%";
canvasS.style.height = "100%";
canvasS.style.pointerEvents = "none";
playerS.style.position = "relative";
playerS.appendChild(canvasS);

const canvasL = document.createElement("canvas");
canvasL.style.position = "absolute";
canvasL.style.top = "0";
canvasL.style.left = "0";
canvasL.style.width = "100%";
canvasL.style.height = "100%";
canvasL.style.pointerEvents = "none";
playerL.style.position = "relative";
playerL.appendChild(canvasL);

const confettiS = confetti.create(canvasS, {
  resize: true,
  useWorker: true,
});

const confettiL = confetti.create(canvasL, {
  resize: true,
  useWorker: true,
});

function startGame() {
  timeLeft = timeInput.value;
  countS = 0;
  countL = 0;
  displayCountS.textContent = 0;
  displayCountL.textContent = 0;

  if (!timeLeft || timeLeft <= 0) return;

  gameActive = true;

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

const endGame = () => {
  gameActive = false;
  clearInterval(timerInterval);
  timeInput.value = 0;

  if (countS > countL) {
    confettiS({
      particleCount: 200,
      spread: 80,
      origin: { x: 0.5, y: 1 },
    });
  } else if (countS < countL) {
    confettiL({
      particleCount: 200,
      spread: 80,
      origin: { x: 0.5, y: 1 },
    });
  } else {
    confettiS({
      particleCount: 200,
      spread: 80,
      origin: { x: 0.5, y: 1 },
    });
    confettiL({
      particleCount: 200,
      spread: 80,
      origin: { x: 0.5, y: 1 },
    });
  }
};

const handleKeyPress = (event) => {
  if (!gameActive || event.repeat) return;
  const key = event.key.toLowerCase();

  if (key === "s") {
    console.log("key S pressed");
    countS++;
    displayCountS.textContent = countS;
  } else if (key === "l") {
    console.log("key L pressed");
    countL++;
    displayCountL.textContent = countL;
  }
};

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", handleKeyPress);
