const form = document.getElementById("signupForm");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    userName.style.border = "1px solid red";

    alert("حدث خطأ يجب ادخال اسم المستخدم");
    return false;
  }
  if (!userEmail.value) {
    userEmail.style.border = "1px solid red";

    alert("حدث خطأ يجب ادخال بريد المستخدم");
    return false;
  }
  if (!userPassword.value) {
    userPassword.style.border = "1px solid red";

    alert("حدث خطأ يجب ادخال كلمة مرور المستخدم");
    return false;
  } else if (userPassword.value.length < 8) {
    userPassword.style.border = "1px solid red";

    alert("يجب ان تكون كلمة المرور اكثر من 8 احرف");
    return false;
  } else if (userPassword.value !== userConfirmPassword.value) {
    userConfirmPassword.style.border = "1px solid red";

    alert("يجب ان تكون كلمة المرور متطابقة");
    return false;
  }

  location.href = "login.html";
});
