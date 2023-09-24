const form = document.getElementById("signupForm");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    alert("Error, you should write user name");

    return false;
  }
  if (!userEmail.value) {
    alert("Error, you should write Email");
    return false;
  }
  if (!userPassword.value) {
    alert("Error, you should write a password");
    return false;
  } else if (userPassword.value.length < 8) {
    alert("Password should not be less than 8");
    return false;
  } else if (userPassword.value !== userConfirmPassword.value) {
    alert("Confirm should be same the password");
    return false;
  }

  location.href = "login.html";
});
