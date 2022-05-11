function togglepassword() {
  var input = document.getElementById("password");
  var icon = document.getElementById("img-eye");
  var imgs = new Array("img/hide.svg", "img/show.svg");
  if (input.type === "password") {
    input.type = "text";
    icon.src = imgs[0];
  } else {
    input.type = "password";
    icon.src = imgs[1];
  }
}
function togglePasswordRepeat() {
  var input = document.getElementById("repeat-password");
  var icon = document.getElementById("repeat-img-eye");
  var imgs = new Array("img/hide.svg", "img/show.svg");
  if (input.type === "password") {
    input.type = "text";
    icon.src = imgs[0];
  } else {
    input.type = "password";
    icon.src = imgs[1];
  }
}


function validatePassword() {
  var password = document.getElementById("password"),
repeat_password = document.getElementById("repeat-password");
  if (password.value != repeat_password.value) {
    repeat_password.setCustomValidity("Пароли не совпадают");
  } else {
    repeat_password.setCustomValidity("");
  }
}
