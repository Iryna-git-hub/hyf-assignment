// Based on the temperature the "Weather wear" returns a string with what the user should wear
function getWeatherWear(temperature) {
    // Initializing weather-appropriate clothing array
  const clothes = [
    "Warm coat, sweater, jeans, gloves, boots",
    "Coat or puffer, sweater, jeans, hat",
    "Light jacket, long sleeves, jeans, sneakers",
    "Long sleeves, jeans, light shoes",
    "T-shirt, jeans or shorts",
  ];

  // 
  let weatherWear;
  if (temperature > -10 && temperature < 0) {
    weatherWear = clothes[0];
  } else if (temperature >= 0 && temperature < 10) {
    weatherWear = clothes[1];
  } else if (temperature >= 10 && temperature < 15) {
    weatherWear = clothes[2];
  } else if (temperature >= 15 && temperature < 20) {
    weatherWear = clothes[3];
  } else if (temperature >= 20 && temperature < 30) {
    weatherWear = clothes[4];
  } else 
    {weatherWear = "Stay at home!";}

return weatherWear;  
}

const clothesToWear = getWeatherWear(18);
console.log(clothesToWear);
