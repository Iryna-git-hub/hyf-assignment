const amountToSpend = Math.random() * 100;
const boughtCandyPrices = [];

console.log("amountToSpend", amountToSpend);

function addCandy(candyType, weight) {
  const candyPricesMap = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    "chewing-gum": 0.03,
  };

  const unitPrice = candyPricesMap[candyType];
  const candyPrice = weight * unitPrice;
  boughtCandyPrices.push(candyPrice);
}

function canBuyMoreCandies() {
  let total = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total += boughtCandyPrices[i];
  }

  return total < amountToSpend;
}

addCandy("chocolate", 100);
addCandy("toffee", 70);
console.log("boughtCandyPrices", boughtCandyPrices);

const canGetMore = canBuyMoreCandies();
if (canGetMore === true) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
