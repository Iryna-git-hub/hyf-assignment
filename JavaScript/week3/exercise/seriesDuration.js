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

function getTimeOfLifeWithSeries() {
    // Calculate 80 years lifetime in hours
    const lifeTime = 80 * 365 * 24;

    // Calculate series duration in hours
    const firstSeriesDuration = seriesDurations[0].days * 24 + seriesDurations[0].hours + seriesDurations[0].minutes / 60;
    const secondSeriesDuration = seriesDurations[1].days * 24 + seriesDurations[1].hours + seriesDurations[1].minutes / 60;
    const thirdSeriesDuration = seriesDurations[2].days * 24 + seriesDurations[2].hours + seriesDurations[2].minutes / 60;

    // Calculate the rounded percentage of life spent watching TV series
    const firstSeriesPercent = Number((firstSeriesDuration * 100 / lifeTime).toFixed(3));
    const secondSeriesPercent = Number((secondSeriesDuration * 100 / lifeTime).toFixed(3));
    const thirdSeriesPercent = Number((thirdSeriesDuration * 100 / lifeTime).toFixed(3));

    // Declare log out statement for series
    const firstSeriesLog =`${seriesDurations[0].title} took ${firstSeriesPercent}\% of my life`;
    const secondSeriesLog =`${seriesDurations[1].title} took ${secondSeriesPercent}\% of my life`;
    const thirdSeriesLog =`${seriesDurations[2].title} took ${thirdSeriesPercent}\% of my life`;
    const durationSum = firstSeriesPercent + secondSeriesPercent + thirdSeriesPercent;
    const totalSeriesDuration =`In total that is ${durationSum} of my life`;

    console.log(firstSeriesLog);
    console.log(secondSeriesLog);
    console.log(thirdSeriesLog);
    console.log(totalSeriesDuration);
}

getTimeOfLifeWithSeries(); 

// I think there is a way to optimize the code to avoid duplication. I'll explore it later.