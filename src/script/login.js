function userlogin(){
 var a=document.getElementById("x").value;
 var b=document.getElementById("y").value;
 if (a==="Admin" && b==="admin123"){
    localStorage.setItem("user",a);
  window.location.href="../index.html";
 }
 else{
  alert("Invalid Id & Password") ;
 }
}
var user = localStorage.getItem("user"); 

