const form = document.getElementById("loginForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value) {
    alert("حدث خطأ يجب ادخال اسم المستخدم");
    return false;
  }
  if (!userPassword.value) {
    alert("حدث خطأ يجب ادخال كلمة مرور المستخدم");
    return false;
  } else if (userPassword.value.length < 8) {
    alert("يجب ان تكون كلمة المرور اكثر من 8 احرف");
    return false;
  }

  location.href = "../index.html";
});
