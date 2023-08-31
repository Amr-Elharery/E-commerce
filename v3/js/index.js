const buyBtns = document.querySelectorAll(".buyNow");
const payment = document.getElementById("payment");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");
const payForm = document.getElementById("payForm");

// Handle Buy Buttons
buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    payment.style.display = "block";
    overlay.style.display = "block";
    location.href = "#payment";
  });
});

// Handle Close Button
closeBtn.addEventListener("click", () => {
  payment.style.display = "none";
  overlay.style.display = "none";
});

// Stop Sen Data From Form To Do not Refresh Page
payForm.addEventListener("submit", (e) => e.preventDefault());
