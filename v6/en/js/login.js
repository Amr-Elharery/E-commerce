const form = document.getElementById("loginForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    userName.style.border = "1px solid red";

    alert("Error, you should write user name");
    return false;
  }
  if (!userPassword.value) {
    userPassword.style.border = "1px solid red";

    alert("Error, you should write a password");
    return false;
  } else if (userPassword.value.length < 8) {
    userPassword.style.border = "1px solid red";

    alert("Password should not be less than 8");
    return false;
  }

  location.href = "../index.html";
});
