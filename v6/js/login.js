const form = document.getElementById("loginForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    userName.style.border = "1px solid red";
    alert("حدث خطأ يجب ادخال اسم المستخدم");
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
  }

  location.href = "../index.html";
});
