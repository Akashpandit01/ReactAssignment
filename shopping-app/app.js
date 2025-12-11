let allProducts = [];
let cached = false;
let currentPage = 1;
const pageSize = 6;
let token = localStorage.getItem("token") || "";
let userLogged = false;

function loadCategories() {
  getCategories()
    .then(cats => {
      const sel = document.getElementById("category-filter");
      sel.innerHTML = `<option value="">All Categories</option>` +
        cats.map(c => `<option>${c}</option>`).join("");
    });
}

function loadProducts() {
  if (!navigator.onLine) {
    const cache = JSON.parse(localStorage.getItem("products-cache")) || [];
    allProducts = cache;
    cached = true;
    renderProducts();
    return;
  }

  getProducts()
    .then(products => {
      allProducts = products;
      cached = false;
      localStorage.setItem("products-cache", JSON.stringify(products));
      renderProducts();
    })
    .catch(() => {
      alert("Network error, loading cached data...");
      const cache = JSON.parse(localStorage.getItem("products-cache")) || [];
      allProducts = cache;
      cached = true;
      renderProducts();
    });
}

function applyFilters() {
  let list = [...allProducts];
  const query = document.getElementById("search-input").value.toLowerCase();
  const cat = document.getElementById("category-filter").value;
  const sort = document.getElementById("sort-filter").value;

  if (query) {
    list = list.filter(p => p.title.toLowerCase().includes(query));
    storeSearchHistory(query);
  }

  if (cat) list = list.filter(p => p.category === cat);

  if (sort === "asc") list.sort((a, b) => a.price - b.price);
  if (sort === "desc") list.sort((a, b) => b.price - a.price);

  return list;
}

function paginate(list) {
  const start = (currentPage - 1) * pageSize;
  return list.slice(start, start + pageSize);
}

function renderProducts() {
  const filtered = applyFilters();
  const pageItems = paginate(filtered);

  const container = document.getElementById("product-list");
  container.innerHTML = pageItems.map(
    p => `
    <div class="product-card">
      <img src="${p.image}" width="100" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button onclick="showDetails(${p.id})">Details</button>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    </div>`
  ).join("");

  renderPagination(filtered.length);
  renderSearchHistory();

  if (cached) container.innerHTML += `<p style="color:red;">Loaded from cache</p>`;
}

function renderPagination(total) {
  const pages = Math.ceil(total / pageSize);
  const pag = document.getElementById("pagination");

  pag.innerHTML = "";
  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => { currentPage = i; renderProducts(); };
    pag.appendChild(btn);
  }
}

function showDetails(id) {
  getProduct(id).then(p => {
    document.getElementById("product-details").innerHTML = `
      <h2>${p.title}</h2>
      <img src="${p.image}" width="150" />
      <p>${p.description}</p>
      <p><b>$${p.price}</b></p>
    `;
  });
}

/* ------------ Search History ------------ */
function storeSearchHistory(q) {
  let hist = JSON.parse(localStorage.getItem("search-history")) || [];
  hist.unshift(q);
  hist = [...new Set(hist)].slice(0, 5);
  localStorage.setItem("search-history", JSON.stringify(hist));
}

function renderSearchHistory() {
  const hist = JSON.parse(localStorage.getItem("search-history")) || [];
  document.getElementById("search-history").innerHTML =
    "<b>Recent searches:</b> " + hist.join(", ");
}

/* ------------ Authentication ------------ */
document.getElementById("login-btn").onclick = () => {
  login("mor_2314", "83r5^_")  // FakeStore credentials
    .then(res => {
      token = res.token;
      userLogged = true;
      localStorage.setItem("token", token);
      document.getElementById("user-info").textContent = "Logged in";
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "";
    });
};

document.getElementById("logout-btn").onclick = () => {
  token = "";
  userLogged = false;
  localStorage.removeItem("token");
  location.reload();
};

/* ------------ Checkout ------------ */
document.getElementById("checkout-btn").onclick = () => {
  if (!token) return alert("Login required!");

  checkoutCart(cart, 1)
    .then(() => {
      alert("Order placed!");
      cart = [];
      saveCart();
      renderCart();
    })
    .catch(() => alert("Checkout failed"));
};

/* ------------ Start App ------------ */
loadCategories();
loadProducts();
renderCart();
