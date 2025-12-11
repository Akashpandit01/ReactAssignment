const API_BASE = "https://fakestoreapi.com";

function apiRequest(path, method = "GET", body = null) {
  const url = `${API_BASE}${path}`;
  const start = performance.now();

  return withTimeout(8000,
    retryFetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null
    })
  )
  .then(res => {
    logApi(url, method, res.status, (performance.now() - start).toFixed(0));
    return res.json();
  })
  .catch(err => {
    logApi(url, method, "ERR", (performance.now() - start).toFixed(0));
    return Promise.reject(err);
  });
}

function getProducts() { return apiRequest("/products"); }
function getCategories() { return apiRequest("/products/categories"); }
function getProduct(id) { return apiRequest(`/products/${id}`); }

function login(username, password) {
  return apiRequest("/auth/login", "POST", { username, password });
}

function checkoutCart(cartItems, userId) {
  return apiRequest("/carts", "POST", {
    userId,
    date: new Date(),
    products: cartItems.map(i => ({ productId: i.id, quantity: i.qty }))
  });
}
