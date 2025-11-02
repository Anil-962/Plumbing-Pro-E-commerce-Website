// --------------------
// Sample product data
// --------------------
const products = [
  { id: 1, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 2, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 3, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 4, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 5, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 6, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 7, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 8, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 9, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 10, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 11, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 12, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 13, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 14, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
  { id: 15, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 16, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 17, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 18, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
  { id: 19, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 20, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 21, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 22, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 23, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 24, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
  { id: 25, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 26, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 27, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 28, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 29, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 30, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
   { id: 31, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 32, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 33, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 34, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 35, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 36, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 37, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 38, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 39, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 40, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
   { id: 41, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 42, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 43, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 44, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 45, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 46, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 47, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 48, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 49, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 50, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
   { id: 51, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 52, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id:53, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 54, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 55, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 56, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" },
  { id: 57, name: "Steel Faucet", price: 500, category: "Faucets", image: "images/faucet.png" },
  { id: 58, name: "PVC Tank Connector", price: 150, category: "Fittings", image: "images/connector.png" },
   { id: 59, name: "PVC Pipe 1 inch", price: 120, category: "Pipes", image: "images/pvc-pipe.jpeg" },
  { id: 60, name: "CPVC Elbow ½ inch", price: 45, category: "Fittings", image: "images/elbow.png" }
];

// --------------------
// Cart handling
// --------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// --------------------
// Render products page
// --------------------
if (document.getElementById("product-list")) {
  const list = document.getElementById("product-list");
  const search = document.getElementById("search");
  const category = document.getElementById("category");

  function renderProducts() {
    list.innerHTML = "";
    const searchTerm = search.value.toLowerCase();
    const filterCat = category.value;
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) &&
      (filterCat === "All" || p.category === filterCat)
    );

    filtered.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" width="100">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      list.appendChild(div);
    });
  }

  search.addEventListener("input", renderProducts);
  category.addEventListener("change", renderProducts);
  renderProducts();
}

// --------------------
// Add to cart
// --------------------
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert("✅ Added to cart!");
}

// --------------------
// Render cart page
// --------------------
if (document.getElementById("cart-items")) {
  const items = document.getElementById("cart-items");
  const totalElem = document.getElementById("cart-total");

  function renderCart() {
    items.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      items.innerHTML = "<li>Your cart is empty.</li>";
      totalElem.textContent = "Total: ₹0";
      return;
    }

    cart.forEach((item, i) => {
      total += item.price;
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;

      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.onclick = () => {
        cart.splice(i, 1);
        saveCart();
        renderCart();
      };

      li.appendChild(btn);
      items.appendChild(li);
    });

    totalElem.textContent = "Total: ₹" + total;
  }

  renderCart();
}

// --------------------
// Clear cart
// --------------------
function clearCart() {
  cart = [];
  saveCart();
  location.reload();
}

// --------------------
// Checkout page
// --------------------
if (document.getElementById("checkout-total")) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("checkout-total").textContent = "Total: ₹" + total;
}

function processPayment() {
  if (cart.length === 0) {
    alert("❌ Your cart is empty!");
    return;
  }
  alert("💳 Payment Successful!");
  cart = [];
  saveCart();
  window.location.href = "index.html";
}
// ===== Form Validation and Submission =====
const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  
  // Clear previous errors
  const allFormGroups = document.querySelectorAll('.form-group');
  allFormGroups.forEach(group => group.classList.remove('error'));
  
  // Validate shipping information
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const zipCode = document.getElementById('zipCode').value.trim();
  const country = document.getElementById('country').value;
  
  // Required field validation
  const requiredFields = [
    { id: 'firstName', value: firstName, message: 'Please enter your first name' },
    { id: 'lastName', value: lastName, message: 'Please enter your last name' },
    { id: 'email', value: email, message: 'Please enter your email address' },
    { id: 'phone', value: phone, message: 'Please enter your phone number' },
    { id: 'address', value: address, message: 'Please enter your shipping address' },
    { id: 'city', value: city, message: 'Please enter your city' },
    { id: 'state', value: state, message: 'Please enter your state' },
    { id: 'zipCode', value: zipCode, message: 'Please enter your ZIP code' },
    { id: 'country', value: country, message: 'Please select your country' }
  ];
  
  requiredFields.forEach(field => {
    if (!field.value) {
      showError(field.id, field.message);
      isValid = false;
    }
  });
  
  // Email validation
  if (email && !validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Phone validation
  if (phone && !validatePhone(phone)) {
    showError('phone', 'Please enter a valid 10-digit phone number');
    isValid = false;
  }
  
  // ZIP code validation (basic)
  if (zipCode && !/^\d{6}$/.test(zipCode)) {
    showError('zipCode', 'Please enter a valid 6-digit ZIP code');
    isValid = false;
  }
  
  // Validate billing information if different
  if (differentBilling.checked) {
    const billingFirstName = document.getElementById('billingFirstName').value.trim();
    const billingLastName = document.getElementById('billingLastName').value.trim();
    const billingAddress = document.getElementById('billingAddress').value.trim();
    const billingCity = document.getElementById('billingCity').value.trim();
    const billingState = document.getElementById('billingState').value.trim();
    const billingZipCode = document.getElementById('billingZipCode').value.trim();
    const billingCountry = document.getElementById('billingCountry').value;
    
    const billingFields = [
      { id: 'billingFirstName', value: billingFirstName, message: 'Please enter your first name' },
      { id: 'billingLastName', value: billingLastName, message: 'Please enter your last name' },
      { id: 'billingAddress', value: billingAddress, message: 'Please enter your billing address' },
      { id: 'billingCity', value: billingCity, message: 'Please enter your city' },
      { id: 'billingState', value: billingState, message: 'Please enter your state' },
      { id: 'billingZipCode', value: billingZipCode, message: 'Please enter your ZIP code' },
      { id: 'billingCountry', value: billingCountry, message: 'Please select your country' }
    ];
    
    billingFields.forEach(field => {
      if (!field.value) {
        showError(field.id, field.message);
        isValid = false;
      }
    });
    
    // Billing ZIP code validation
    if (billingZipCode && !/^\d{6}$/.test(billingZipCode)) {
      showError('billingZipCode', 'Please enter a valid 6-digit ZIP code');
      isValid = false;
    }
  }
  
  // Check if cart is empty
  let cart = [];
  try {
    const cartData = localStorage.getItem('cart');
    cart = cartData ? JSON.parse(cartData) : [];
  } catch (e) {
    console.error('Error loading cart data:', e);
    cart = [];
  }
  
  if (cart.length === 0) {
    alert('Your cart is empty. Please add items to your cart before placing an order.');
    isValid = false;
    // Redirect to products page
    setTimeout(() => {
      window.location.href = 'pipes.html';
    }, 2000);
    return;
  }
  
  // Payment method validation
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  
  if (paymentMethod === 'credit-card') {
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    
    if (!cardNumber) {
      showError('cardNumber', 'Please enter your card number');
      isValid = false;
    } else if (!validateCardNumber(cardNumber)) {
      showError('cardNumber', 'Please enter a valid 16-digit card number');
      isValid = false;
    }
    
    if (!expiryDate) {
      showError('expiryDate', 'Please enter the expiry date');
      isValid = false;
    } else if (!validateExpiryDate(expiryDate)) {
      showError('expiryDate', 'Please enter a valid expiry date (MM/YY)');
      isValid = false;
    }
    
    if (!cvv) {
      showError('cvv', 'Please enter the CVV');
      isValid = false;
    } else if (!validateCVV(cvv)) {
      showError('cvv', 'Please enter a valid CVV (3-4 digits)');
      isValid = false;
    }
    
    if (!cardName) {
      showError('cardName', 'Please enter the name on your card');
      isValid = false;
    }
  }
  
  if (paymentMethod === 'upi') {
    const upiId = document.getElementById('upiId').value.trim();
    
    if (!upiId) {
      showError('upiId', 'Please enter your UPI ID');
      isValid = false;
    } else if (!validateUPI(upiId)) {
      showError('upiId', 'Please enter a valid UPI ID (e.g., name@upi)');
      isValid = false;
    }
  }
  
  if (paymentMethod === 'net-banking') {
    const selectedBank = document.getElementById('selectedBank').value;
    
    if (!selectedBank) {
      // Find if any bank is selected
      const selectedBankOption = document.querySelector('.bank-option.selected');
      if (!selectedBankOption) {
        alert('Please select a bank for net banking');
        isValid = false;
      } else {
        // Auto-populate the selected bank if not already set
        const bankName = selectedBankOption.querySelector('span').textContent;
        document.getElementById('selectedBank').value = bankName;
      }
    }
  }
  
  // Cash on delivery doesn't require additional validation
  
  if (!isValid) {
    // Scroll to the first error
    const firstError = document.querySelector('.form-group.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  
  // If validation passes, process order
  processOrder();
});

// Enhanced validation functions
function validateCardNumber(cardNumber) {
  // Remove spaces and check if it's 16 digits
  const cleaned = cardNumber.replace(/\s/g, '');
  return /^\d{16}$/.test(cleaned);
}

function validateExpiryDate(expiryDate) {
  const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!re.test(expiryDate)) return false;
  
  const [month, year] = expiryDate.split('/');
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;
  
  const expiryYear = parseInt(year);
  const expiryMonth = parseInt(month);
  
  return expiryYear > currentYear || 
        (expiryYear === currentYear && expiryMonth >= currentMonth);
}

function validateCVV(cvv) {
  return /^\d{3,4}$/.test(cvv);
}

function validateUPI(upiId) {
  // More flexible UPI validation
  const re = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
  return re.test(upiId);
}

// Enhanced processOrder function
function processOrder() {
  console.log('Processing order...');
  
  // Show payment processing modal
  showPaymentProcessing();
  
  // Simulate payment processing with a delay
  setTimeout(() => {
    try {
      // Get order details
      let cart = [];
      try {
        const cartData = localStorage.getItem('cart');
        cart = cartData ? JSON.parse(cartData) : [];
      } catch (e) {
        console.error('Error loading cart data:', e);
        cart = [];
      }
      
      const subtotal = cart.reduce((sum, item) => {
        const quantity = item.quantity || item.qty || 1;
        return sum + (item.price * quantity);
      }, 0);
      
      const shipping = 50;
      const tax = subtotal * 0.12;
      const discount = 100;
      const total = subtotal + shipping + tax - discount;
      
      // Generate order ID
      const orderId = 'ORD' + Date.now();
      
      // Create order data object
      const orderData = {
        orderId: orderId,
        items: [...cart], // Create a copy of cart items
        customerInfo: {
          firstName: document.getElementById('firstName').value.trim(),
          lastName: document.getElementById('lastName').value.trim(),
          email: document.getElementById('email').value.trim(),
          phone: document.getElementById('phone').value.trim(),
          address: document.getElementById('address').value.trim(),
          city: document.getElementById('city').value.trim(),
          state: document.getElementById('state').value.trim(),
          zipCode: document.getElementById('zipCode').value.trim(),
          country: document.getElementById('country').value
        },
        billingInfo: differentBilling.checked ? {
          firstName: document.getElementById('billingFirstName').value.trim(),
          lastName: document.getElementById('billingLastName').value.trim(),
          address: document.getElementById('billingAddress').value.trim(),
          city: document.getElementById('billingCity').value.trim(),
          state: document.getElementById('billingState').value.trim(),
          zipCode: document.getElementById('billingZipCode').value.trim(),
          country: document.getElementById('billingCountry').value
        } : null,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        paymentDetails: getPaymentDetails(),
        subtotal: parseFloat(subtotal.toFixed(2)),
        shipping: parseFloat(shipping.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        discount: parseFloat(discount.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        orderDate: new Date().toISOString(),
        status: 'processing'
      };
      
      console.log('Order data:', orderData);
      
      // Save order to orders history
      saveOrderToHistory(orderData);
      
      // Hide payment processing modal
      hidePaymentProcessing();
      
      // Show success modal
      showOrderSuccess(orderData);
      
      // Clear the cart
      localStorage.removeItem('cart');
      
      // Reset form
      checkoutForm.reset();
      
      // Reload cart items to update the order summary
      loadCartItems();
      
    } catch (error) {
      console.error('Error processing order:', error);
      hidePaymentProcessing();
      alert('There was an error processing your order. Please try again.');
    }
  }, 3000); // Simulate 3 seconds payment processing
}

// Enhanced saveOrderToHistory function
function saveOrderToHistory(orderData) {
  try {
    let orders = [];
    const ordersData = localStorage.getItem('orderHistory');
    
    if (ordersData) {
      orders = JSON.parse(ordersData);
      // Ensure it's an array
      if (!Array.isArray(orders)) {
        orders = [];
      }
    }
    
    // Add new order to the beginning of the array
    orders.unshift(orderData);
    
    // Save updated orders array
    localStorage.setItem('orderHistory', JSON.stringify(orders));
    console.log('Order saved successfully. Total orders:', orders.length);
    
  } catch (error) {
    console.error('Error saving order to history:', error);
    // Create new array if there's an error
    localStorage.setItem('orderHistory', JSON.stringify([orderData]));
  }
}
