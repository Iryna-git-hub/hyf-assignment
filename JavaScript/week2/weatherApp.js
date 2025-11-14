// Based on the temperature the "Weather wear" returns a string with what the user should wear
function weatherWear(temperature) {
    // Initializing weather-appropriate clothing array
  const clothes = [
    "Warm coat, sweater, jeans, gloves, boots",
    "Coat or puffer, sweater, jeans, hat",
    "Light jacket, long sleeves, jeans, sneakers",
    "Long sleeves, jeans, light shoes",
    "T-shirt, jeans or shorts",
  ];

  // 
  let weatherReadyClothes;
  if (temperature > -10 && temperature < 0) {
    weatherReadyClothes = clothes[0];
  } else if (temperature >= 0 && temperature < 10) {
    weatherReadyClothes = clothes[1];
  } else if (temperature >= 10 && temperature < 15) {
    weatherReadyClothes = clothes[2];
  } else if (temperature >= 15 && temperature < 20) {
    weatherReadyClothes = clothes[3];
  } else if (temperature >= 20 && temperature < 30) {
    weatherReadyClothes = clothes[4];
  } else 
    {weatherReadyClothes = "Stay at home!";}

return weatherReadyClothes;  
}

const clothesToWear = weatherWear(18);
console.log(clothesToWear);
