// 1. Click counter

let counter = 0;

const firstBtn = document.getElementById("btn1");
const secondBtn = document.getElementById("btn2");
const show = document.getElementById("show");

const listener = () => {
  show.innerHTML = counter;
  counter++;
};

firstBtn.addEventListener("click", listener);
secondBtn.addEventListener("click", listener);

// 2. Delay clicker

const delayBtn = document.getElementById("delayBtn");
const show_delay = document.getElementById("show_delay");

const delay_clicker = () => {
  setTimeout(() => {
    show_delay.innerHTML = "This text was delayed by 3 seconds";
  }, 3000);
};

delayBtn.addEventListener("click", delay_clicker);

// 3. Page onload

document.addEventListener("DOMContentLoaded", function () {
  const show_onload = document.getElementById("show_onload");
  show_onload.textContent = "DOM fully loaded and parsed";
});

// 4. Mouse position

let screenLog = document.querySelector("#screen_log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.textContent = `
    Client X: ${e.clientX}, Y: ${e.clientY}`;
}

// 5. Mouse position online tool

const data = [];

const mouseListener = (event) => {
  data.push({
    x: event.clientX,
    y: event.clientY,
  });
  console.log(data);
};

document.addEventListener("mousemove", mouseListener);

setTimeout(() => {
  document.removeEventListener('mousemove', mouseListener);

  const sums = data.reduce((acc, item) => {
    acc.sumX += item.x;
    acc.sumY += item.y;

    return acc;

  }, { sumX: 0, sumY: 0 });

  const avgX = sums.sumX / data.length;
  const avgY = sums.sumY / data.length;

  const showAveragePosition = document.querySelector("#show_average_position");
  showAveragePosition.textContent = `AVG X: ${avgX}; AVG Y: ${avgY}`;
 
}, 30000);


