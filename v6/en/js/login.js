const form = document.getElementById("loginForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    alert("Error, you should write user name");
    return false;
  }
  if (!userPassword.value) {
    alert("Error, you should write a password");
    return false;
  } else if (userPassword.value.length < 8) {
    alert("Password should not be less than 8");
    return false;
  }

  location.href = "../index.html";
});
