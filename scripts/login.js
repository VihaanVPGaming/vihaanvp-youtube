function myFunction() {
  var username = document.forms["myForm"]["Username"].value;
  var password = document.forms["myForm"]["Password"].value;

  if(username === "admin" && password === "VihaanParth") {
    window.location.href="/vihaanvp-youtube/adminsOnly.html";
  } else {
    alert("Invalid Credentials!")
  }
}