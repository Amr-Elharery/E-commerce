const cart = JSON.parse(localStorage.getItem("products")) || [];

const tableBody = document.querySelector("tbody");

cart.forEach((product) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.price}</td>
    <td><img src="../images/${product.img}" /></td>
    <td>${product.quantity}</td>
    `;
  tableBody.append(row);
});
