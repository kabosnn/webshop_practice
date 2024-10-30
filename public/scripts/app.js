import { getProducts } from "./getProducts.js";

window.onload = () => {
  console.log("hello world");
};

async function main() {
  const products = await getProducts();
  const root = document.querySelector("#root");

  const searchBar = document.createElement("input");
  searchBar.className = "search-bar";
  searchBar.placeholder = "Search products";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  function createProductCard(product) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const cardImageHolder = document.createElement("div");
    cardImageHolder.className = "image-holder";

    const productImage = document.createElement("img");
    productImage.src = product.image;

    const productTitle = document.createElement("h3");
    productTitle.innerText = product.title;
    productTitle.className = "product-title";

    const price = document.createElement("p");
    price.innerText = `Price: $${product.price}`;

    const detailsButton = document.createElement("button");
    detailsButton.innerText = "View details";

    cardImageHolder.append(productImage);
    cardDiv.append(cardImageHolder, productTitle, price, detailsButton);

    return cardDiv;
  }

  function renderProducts(productList) {
    cardContainer.innerHTML = "";
    productList.forEach((product) => {
      const card = createProductCard(product);
      cardContainer.append(card);
    });
  }

  renderProducts(products);

  searchBar.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);
  });

  root.append(searchBar, cardContainer);
}

main();
