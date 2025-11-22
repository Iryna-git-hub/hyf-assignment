// Series duration of my life
const seriesDurations = [
  {
    title: "Lie to me",
    days: 1,
    hours: 11,
    minutes: 12,
  },
  {
    title: "Big little lies",
    days: 1,
    hours: 22,
    minutes: 52,
  },
  {
    title: "X-men",
    days: 3,
    hours: 1,
    minutes: 28,
  },
];

// Calculate 80 years lifetime in hours
const lifeTime = 80 * 365 * 24;
let seriesDurationInPercent = 0;

function getSeriesDurationInPercent(seriesDurations) {
  for (let i = 0; i < seriesDurations.length; i++) {
    // Calculate series duration in hours
    const seriesDurationInHours =
      seriesDurations[i].days * 24 +
      seriesDurations[i].hours +
      seriesDurations[i].minutes / 60;

    // Calculate the rounded percentage of life spent watching TV series
    seriesDurationInPercent = Number(
      ((seriesDurationInHours * 100) / lifeTime).toFixed(3)
    );

    // Declare log out statement for series
    const seriesDurationLog = `${seriesDurations[i].title} took ${seriesDurationInPercent}\% of my life`;
    console.log(seriesDurationLog);
    seriesDurationInPercent += seriesDurationInPercent;
  }

  const totalSeriesDuration = `In total that is ${seriesDurationInPercent} of my life`;
  console.log(totalSeriesDuration);
}

getSeriesDurationInPercent(seriesDurations);
