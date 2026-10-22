
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