// Products

let products = [
  {
    id: 1,
    img: "macbook-air.webp",
    title: `ماك بوك اير 13 بوصة: شريحة ابل M1 مع وحدة معالجة مركزية 8 نواة
              ووحدة معالجة رسومات جرافيكية 7 نواة، 8 جيجابايت، 256 جيجابايت -
              ذهبي`,
    price: 35000,
    quantity: 0,
  },
  {
    id: 2,
    img: "macbook-air.webp",
    title: `ماك بوك اير 13 بوصة: شريحة ابل M2 مع وحدة معالجة مركزية 10 نواة
              ووحدة معالجة رسومات جرافيكية 8 نواة، 16 جيجابايت، 512 جيجابايت -
              ذهبي`,
    price: 45000,
    quantity: 0,
  },
  {
    id: 3,
    img: "macbook-pro.webp",
    title: `
    ماك بوك برو 16 بوصة: شريحة ابل M1 مع وحدة معالجة مركزية 8 نواة
              ووحدة معالجة رسومات جرافيكية 8 نواة، 16 جيجابايت، 512 جيجابايت -
              فضي
              `,
    price: 50000,
    quantity: 0,
  },
  {
    id: 4,
    img: "iphone-14-pro-max.webp",
    title: `
    ابل ايفون 14 برو ماكس الجديد (256 جيجابايت) - اسود
              `,
    price: 39000,
    quantity: 0,
  },
  {
    id: 5,
    img: "iphone-13.webp",
    title: `
    ابل ايفون 13 الجديد (128 جيجابايت) - ازرق
              `,
    price: 29000,
    quantity: 0,
  },
  {
    id: 6,
    img: "playstation-5.webp",
    title: `
    بلايستيشن 5 الجديد أبيض + وحدة تحكم هدية
              `,
    price: 20000,
    quantity: 0,
  },
];

let productsDiv = document.getElementById("products");

const renderProducts = () => {
  products.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product", "rad-6", "p-20");

    productDiv.innerHTML = `
                <div class="image txt-center">
                <img src="images/${product.img}" alt="product" />
              </div>
              <div class="title fs-20 mt-10">
              ${product.title}
              </div>
              <div class="mt-10 fs-25 flex-between align-center">
                <span id="price">${product.price.toLocaleString()} جنيه</span>
                <div>
                  <button class="btn bg-primary c-white addToCart">أضف الى السلة</button>
                  <button class="btn bg-primary c-white buyNow">شراء الأن</button>
                </div>
              </div>
    `;
    productsDiv.appendChild(productDiv);
  });
};

renderProducts();

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

// Cart
const cartDiv = document.querySelector(".cart");
const closeCart = document.getElementById("closeCart");
const addToCartBtns = document.querySelectorAll(".addToCart");

closeCart.addEventListener("click", () => {
  cartDiv.style.right = "-100%";
});

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartDiv.style.right = "0";
  });
});

export { products };
