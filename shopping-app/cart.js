let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const found = cart.find(p => p.id === product.id);
  found ? found.qty++ : cart.push({ ...product, qty: 1 });
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = cart.map(
    c => `<li>${c.title} x${c.qty} <button onclick="removeFromCart(${c.id})">❌</button></li>`
  ).join("");
}
