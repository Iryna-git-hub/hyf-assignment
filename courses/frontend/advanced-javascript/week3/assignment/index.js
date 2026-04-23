const fromSelect = document.getElementById("fromCurrencySelect");
const toSelect = document.getElementById("toCurrencySelect");
const fromInput = document.getElementById("fromCurrencyAmount");
const toInput = document.getElementById("toCurrencyAmount");
const conversionResult = document.getElementById("conversionResult");

let rates = [];

async function loadCurrencies() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    rates = data.rates;

    Object.keys(rates).forEach((currency) => {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;
      fromSelect.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.textContent = currency;
      toSelect.appendChild(option2);
    });

    fromSelect.value = "EUR";
    toSelect.value = "DKK";
    convertCurrencies();
  } catch (err) {
    console.error("Failed to load currencies:", err);
  }
}

const convertCurrencies = () => {
  const amount = Number(fromInput.value) || 1;
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  const result = amount * (rates[toCurrency] / rates[fromCurrency]);

  toInput.value = result.toFixed(2);
  conversionResult.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
};

loadCurrencies();
fromSelect.addEventListener("change", convertCurrencies);
toSelect.addEventListener("change", convertCurrencies);
fromInput.addEventListener("input", convertCurrencies);
