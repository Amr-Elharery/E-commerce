// Products

let products = [
  {
    id: 1,
    img: "macbook-air.webp",
    title: `MacBook Air 13-inch: Apple M1 chip with 8-core CPU
    GPU 7 core, 8GB, 256GB -
    Golden`,
    price: 35000,
    quantity: 1,
  },
  {
    id: 2,
    img: "macbook-air.webp",
    title: `MacBook Air 13-inch: Apple M2 chip with 10-core CPU
    GPU 8 core, 16 GB, 512 GB -
    Golden`,
    price: 45000,
    quantity: 1,
  },
  {
    id: 3,
    img: "macbook-pro.webp",
    title: `
    MacBook Pro 16-inch: Apple M1 chip with 8-core CPU
              GPU 8 core, 16 GB, 512 GB -
              silver
              `,
    price: 50000,
    quantity: 1,
  },
  {
    id: 4,
    img: "iphone-14-pro-max.webp",
    title: `
    New Apple iPhone 14 Pro Max (256GB) - Black
              `,
    price: 39000,
    quantity: 1,
  },
  {
    id: 5,
    img: "iphone-13.webp",
    title: `
    New Apple iPhone 13 (128GB) - Blue
              `,
    price: 29000,
    quantity: 1,
  },
  {
    id: 6,
    img: "playstation-5.webp",
    title: `
    New PlayStation 5 white + free controller
              `,
    price: 20000,
    quantity: 1,
  },
  {
    id: 7,
    img: "computer.webp",
    title: `
    Dell Optiplex Core i7 9010MT Computer with 18.5-inch Widescreen LED Display (E1912H)
    `,
    price: 5000,
    quantity: 1,
  },
  {
    id: 8,
    img: "samsung.webp",
    title: `
    Samsung Galaxy S22 Plus 5G mobile phone, with a capacity of 256 GB
    `,

    price: 30000,
    quantity: 1,
  },
  {
    id: 9,
    img: "screen.webp",
    title: `
    Samsung 24 Inch IPS Full HD LED Monitor 75Hz, AMD FreeSync Borderless
    `,

    price: 3500,
    quantity: 1,
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
                <span class="price">${product.price.toLocaleString()} LE</span>
                <div>
                  <button class="btn bg-primary c-white addToCartBtn" data-item='${JSON.stringify(
                    product
                  )}'>Add to cart</button>
                  <button class="btn bg-primary c-white buyNow">Buy now</button>
                </div>
              </div>
    `;
    productsDiv.appendChild(productDiv);
    document;
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
let cart = JSON.parse(localStorage.getItem("products")) || [];
const cartDiv = document.querySelector(".cart");
const closeCart = document.getElementById("closeCart");
const openCart = document.querySelector(".cartBtn");
const addToCartBtns = document.querySelectorAll(".addToCartBtn");
const reset = document.querySelector(".empty");
const cartContent = document.querySelector(".cart-content");
const cartLenght = document.getElementById("cartLength");
const cartTotal = document.getElementById("total");
let total = 0;

closeCart.addEventListener("click", () => {
  cartDiv.style.right = "-100%";
});
openCart.addEventListener("click", () => {
  cartDiv.style.right = "0";
});

reset.addEventListener("click", () => {
  localStorage.clear();
  cart = JSON.parse(localStorage.getItem("products")) || [];
  total = 0;

  displayCartContent();
});

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    addToLocalStorage(JSON.parse(btn.getAttribute("data-item")));
    cartDiv.style.right = "0";
  });
});

const addToLocalStorage = (product) => {
  let storageCart = JSON.parse(localStorage.getItem("products")) || [];
  let exist = storageCart.find((p) => p.id === product.id);
  if (exist !== undefined) {
    exist.quantity++;
    storageCart = storageCart.filter((p) => p.id !== exist.id);
    storageCart.push(exist);
  } else {
    storageCart.push(product);
  }

  localStorage.setItem("products", JSON.stringify(storageCart));

  cart = JSON.parse(localStorage.getItem("products"));

  displayCartContent();
};

function displayCartContent() {
  cartContent.innerHTML = "";
  total = 0;
  cartTotal.innerHTML = total.toLocaleString();
  cartLenght.innerHTML = cart.length;
  if (cart.length > 0) {
    cart.forEach((product) => {
      if (product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
          <div class="image">
            <img alt="product" src="images/${product.img}" />
          </div>
          <div class="title">${product.title}</div>
          <div class="price mt-10">${product.price.toLocaleString()} LE </div>
    
          <div>Quantity : ${product.quantity}</div>
    
          <div class="btns mt-10">
            <button class="btn c-white bg-primary changeQuantityPlus" data-item='${JSON.stringify(
              product
            )}' >+</button>
    
            <button class="btn c-white bg-primary changeQuantityMines" data-item='${JSON.stringify(
              product
            )}'  >-</button>
          </div>
        `;

        cartContent.appendChild(productDiv);
        total += product.quantity * product.price;
        cartTotal.innerHTML = total.toLocaleString();
      }
    });

    let changeQuantityPlusBtns = document.querySelectorAll(
      ".changeQuantityPlus"
    );
    let changeQuantityMinesBtns = document.querySelectorAll(
      ".changeQuantityMines"
    );

    changeQuantityPlusBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let product = JSON.parse(btn.getAttribute("data-item"));
        addToLocalStorage(product);
      });
    });

    changeQuantityMinesBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let product = JSON.parse(btn.getAttribute("data-item"));
        let storageCart = JSON.parse(localStorage.getItem("products")) || [];
        let index;
        storageCart = storageCart.map((p, i) => {
          if (p.id === product.id) {
            p.quantity--;
            if (p.quantity === 0) {
              index = i;
            }
          }
          return p;
        });

        if (index >= 0) {
          storageCart.splice(index, 1);
        }

        localStorage.setItem("products", JSON.stringify(storageCart));

        cart = JSON.parse(localStorage.getItem("products"));

        displayCartContent();
      });
    });
  }
}

displayCartContent();
