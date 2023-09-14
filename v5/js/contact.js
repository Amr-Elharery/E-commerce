const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  alert("حدث خطأ أثناء الارسال.. حاول مجدداً.");
  e.preventDefault();
});
