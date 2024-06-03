const users = [
  {
    "nombre": "José Miguel",
    "apellidos": "Rojas Pérez",
    "telefono": "984948321",
    "ciudad": "Osorno",
    "direccion": "Av. providencia 9839",
    "email": "user1@gmail.com",
    "password": "Password1",
    "rol": "user"
  },
  {
    "nombre": "María Isabel",
    "apellidos": "López Sánchez",
    "telefono": "987654321",
    "ciudad": "Santiago",
    "direccion": "Calle San Martín 543",
    "email": "user2@gmail.com",
    "password": "Password2",
    "rol": "user"
  },
  {
    "nombre": "Daniel",
    "apellidos": "Muñoz",
    "telefono": "990894243",
    "ciudad": "Santiago",
    "direccion": "Calle mi casa 123",
    "email": "admin@shibuya.com",
    "password": "adminShibuya2024",
    "rol": "admin"
  }
]

function loginForm() {
  const loginForm = document.querySelector('form');

  if (!loginForm) return;
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;

    console.log(email, password);
    
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      window.location.href = 'index.html';
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  });
}

function loginIcon() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const loginIcon = document.getElementById("login-icon");

  if (!loginIcon) return;

  const loginButton = loginIcon.querySelector("button");
  const loginIconElement = loginButton.querySelector("i");

  if (user) {
    loginIconElement.className = "bi bi-box-arrow-right";

    loginButton.addEventListener('click', function() {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    });
  } else {
    loginIcon.href = "login.html";
    loginButton.className = "btn btn-outline-dark";
    loginIconElement.className = "bi bi-person-fill";
  }
}

function profileIcon() {
  const userIcon = document.getElementById('user-icon');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    userIcon.classList.remove('d-none');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loginForm();
  loginIcon();
  profileIcon();
});

