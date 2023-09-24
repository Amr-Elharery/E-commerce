const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  alert("Error while sending, please try again");
  e.preventDefault();
});
