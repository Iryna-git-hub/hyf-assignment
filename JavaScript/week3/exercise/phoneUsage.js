// Adding an activity
const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date: "23/7-18", activity: "Youtube", duration: 30 });
}

addActivity("23/7-18", "Youtube", 30);
console.log(activities);

// Show my status
function showStatus(activities) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    //const statusText = `You have added ${} activities. They amount to ${} min. of usage.`
}

showStatus(activities);

// Usage limit
