// Event application figures out what weekday in num days will be
function getEventWeekday(num) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date from the system
  const today = new Date();

  // Defining the event day
  const eventDay = weekDays[(today.getDay() + num) % 7];
  console.log(eventDay);
}

getEventWeekday(10);
getEventWeekday(1);
