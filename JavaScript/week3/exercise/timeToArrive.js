// Define the time to arrive at your destination
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToArrive(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  // Get integer hours
  const intHours = Math.trunc(time);
  // Get fraction minutes
  const fraction = time - intHours;
  const intMinutes = Math.trunc(fraction * 60);

  return `${intHours} hours and ${intMinutes} minutes`;
}

const travelTime = timeToArrive(travelInformation);
console.log(travelTime);
