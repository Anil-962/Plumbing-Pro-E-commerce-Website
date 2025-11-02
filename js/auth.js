// Get elements
const modal = document.getElementById('authModal');
const openModalBtn = document.querySelector('.login-btn'); // Header login button
const closeBtn = document.querySelector('.close');
const switchLink = document.getElementById('switchLink');
const formTitle = document.getElementById('formTitle');
const authBtn = document.getElementById('authBtn');
const nameInput = document.getElementById('name');
const switchText = document.getElementById('switchText');
const authForm = document.getElementById('authForm');

// Open modal
openModalBtn.addEventListener('click', function(e){
  e.preventDefault();
  modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target == modal) modal.style.display = 'none'; });

// Switch between login and signup
switchText.addEventListener('click', function(e){
  if(e.target && e.target.id === 'switchLink'){
    e.preventDefault();
    if(formTitle.innerText === 'Login'){
      formTitle.innerText = 'Sign Up';
      authBtn.innerText = 'Sign Up';
      nameInput.style.display = 'block';
      switchText.innerHTML = 'Already have an account? <a href="#" id="switchLink">Login</a>';
    } else {
      formTitle.innerText = 'Login';
      authBtn.innerText = 'Login';
      nameInput.style.display = 'none';
      switchText.innerHTML = 'Don\'t have an account? <a href="#" id="switchLink">Sign Up</a>';
    }
  }
});

// Form submit (demo logic)
authForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(formTitle.innerText === 'Login'){
    if(email === "admin@plumbpro.com" && password === "123456"){
      alert("Login successful!");
      modal.style.display = 'none';
    } else {
      alert("Invalid email or password");
    }
  } else {
    const name = document.getElementById('name').value;
    alert("Account created!\nName: " + name + "\nEmail: " + email);
    // Switch back to login after signup
    formTitle.innerText = 'Login';
    authBtn.innerText = 'Login';
    nameInput.style.display = 'none';
    switchText.innerHTML = 'Don\'t have an account? <a href="#" id="switchLink">Sign Up</a>';
  }
});
