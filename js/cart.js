// js/cart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart and update everything
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartHeader();
  renderCart();
}

// Update cart header (count + total)
function updateCartHeader() {
  const cartCountEl = document.getElementById("cart-count");
  const cartAmountEl = document.getElementById("cart-amount");

  // Update item count
  if (cartCountEl) {
    const totalItems = cart.reduce((total, item) => total + (item.qty || 1), 0);
    cartCountEl.textContent = `(${totalItems})`;
  }

  // Update total amount
  if (cartAmountEl) {
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * (item.qty || 1),
      0
    );
    cartAmountEl.textContent = `₹${totalAmount.toFixed(2)}`;
  }
}

// Add item to cart: product = {id, name, price, qty}
function addToCart(product) {
  const existing = cart.find((p) => p.id === product.id);

  if (existing) {
    existing.qty += product.qty || 1;
  } else {
    product.qty = product.qty || 1;
    cart.push(product);
  }

  saveCart();
  alert(`${product.name} added to cart!`);
}

// Remove item by index
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();
}

// Change quantity
function changeQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    // remove if qty goes to 0
    removeFromCart(index);
  } else {
    saveCart();
  }
}

// Render cart items in cart.html
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  if (!cartContainer) return; // not on cart.html

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    if (cartTotalEl) cartTotalEl.textContent = "₹0.00";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * (item.qty || 1);
    total += subtotal;

    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <span><strong>${item.name}</strong></span>
      <span>Price: ₹${item.price.toFixed(2)}</span>
      <span>
        Qty: 
        <button onclick="changeQty(${index}, -1)">➖</button>
        ${item.qty || 1}
        <button onclick="changeQty(${index}, 1)">➕</button>
      </span>
      <span>Subtotal: ₹${subtotal.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartContainer.appendChild(row);
  });

  if (cartTotalEl) {
    cartTotalEl.textContent = `₹${total.toFixed(2)}`;
  }
}

// On load
document.addEventListener("DOMContentLoaded", () => {
  updateCartHeader();
  renderCart();
});

// Sync across tabs
window.addEventListener("storage", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartHeader();
  renderCart();
});
