let cart = JSON.parse(localStorage.getItem("cart")) || [];

let table = document.getElementById("cartItems");
let total = 0;

cart.forEach(function(product) {
    let subtotal = product.price * product.quantity;
    total = total + subtotal;

    table.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>₹${subtotal}</td>
        </tr>
    `;
});

document.getElementById("totalPrice").innerText = "Total: ₹" + total;

function emptyCart() {
    localStorage.removeItem("cart");

    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("totalPrice").innerText = "Total: ₹0";

    alert("Cart is empty!");
}
