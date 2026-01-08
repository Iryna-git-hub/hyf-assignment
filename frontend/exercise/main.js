console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function formatPriceDKK(value) {
  return value.toFixed(2) + " DKK";
}

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const ul = document.createElement("ul");

  if (!products || products.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No products found.";
    ul.appendChild(li);
    main.appendChild(ul);
    return;
  }

  products.forEach((product) => {
    const li = document.createElement("li");

    // Title
    const title = document.createElement("div");
    title.textContent = product.name;
    title.style.fontWeight = "700";

    // Price and rating
    const meta = document.createElement("div");
    meta.textContent = `Price: ${formatPriceDKK(product.price)}  |  Rating: ${
      product.rating
    }/10`;
    meta.style.color = "#555";

    li.appendChild(title);
    li.appendChild(meta);
    ul.appendChild(li);
  });

  main.appendChild(ul);
}

renderProducts(products);
