
function clickCategory(){
    document.write(`<h1>Page not found.....</h1>`);
}
var user = localStorage.getItem("user");

if (user) {

    var loginUser = document.getElementById("loginUser");

    loginUser.innerText = "👤 " + user;
    loginUser.href = "#";

}
function press(){
   localStorage.removeItem("user");
  alert("Logout Successful");
}


let cart=JSON.parse(localStorage.getItem("cart")) || [];
function buy(item,price){
    let product=cart.find(p=>p.name===item);
    if (product){
        product.quantity++;
    }
    else{
        let product={
            name:item,
            price:price,
            quantity:1
        };
        cart.push(product);
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${item} is saved to cart`);
    console.log(cart);
}

