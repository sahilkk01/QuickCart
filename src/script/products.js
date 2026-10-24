const params = new URLSearchParams(window.location.search);

const categoryName = params.get("category");

document.getElementById("categoryTitle").innerText = categoryName;

let allProducts = [];

fetch("../products.json")
    .then(response => response.json())
    .then(products => {

        allProducts = products; // ADD THIS LINE

        let filteredProducts = products.filter(product =>
            product.category === categoryName
        );

        let output = "";

        filteredProducts.forEach(product => {
            output += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price} / ${product.unit}</p>
                    <p>Rating: ⭐ ${product.rating}</p>
                    <button onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;
        });

        document.getElementById("products").innerHTML = output;
    });


// ADD THIS FUNCTION AT THE BOTTOM

function addToCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = allProducts.find(p => p.id === productId);

    if (!product) {
        return;
    }

    let existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}