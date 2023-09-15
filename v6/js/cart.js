const cart = JSON.parse(localStorage.getItem("products")) || [];

const tableBody = document.querySelector("tbody");

const totalSpan = document.getElementById("total");

let total = 0;

totalSpan.innerHTML = total.toLocaleString();

cart.forEach((product) => {
  total += product.price * product.quantity;
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${product.id}</td>
  <td>${product.title}</td>
  <td>${product.price}</td>
  <td><img src="../images/${product.img}" /></td>
  <td>${product.quantity}</td>
  `;
  tableBody.append(row);
  totalSpan.innerHTML = total.toLocaleString();
});
