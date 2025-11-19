// Define the time to arrive at your destination
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = timeToArrive(travelInformation);

function timeToArrive() {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  // Get integer hours
  const intHours = Math.trunc(time);
  // Get fraction minutes
  const fraction = time - intHours;
  const intMinutes = Math.trunc(fraction * 60);

  return `${intHours} fours and ${intMinutes} minutes`;
}

console.log(travelTime); // 8 hours and 38 minutes
