document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');

  form.addEventListener('submit', function(event) {
    if (!form.checkValidity() || !customValidation()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const newUser = {
        nombre: document.getElementById('name').value.trim(),
        apellidos: document.getElementById('lastname').value.trim(),
        telefono: document.getElementById('phone').value.trim(),
        ciudad: document.getElementById('city').value.trim(),
        direccion: document.getElementById('address').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim(),
        rol: 'user'
      };

      localStorage.setItem('currentUser', JSON.stringify(newUser));

      alert('Registro exitoso');

      window.location.href = 'index.html';
    }

    form.classList.add('was-validated');
  }, false);

  function customValidation() {
    let isValid = true;

    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!validatePhone(phone)) {
      isValid = false;
      document.getElementById('phone').classList.add('is-invalid');
      document.getElementById('phone').classList.remove('is-valid');
    } else {
      document.getElementById('phone').classList.remove('is-invalid');
      document.getElementById('phone').classList.add('is-valid');
    }

    if (!validatePassword(password)) {
      isValid = false;
      document.getElementById('password').classList.add('is-invalid');
    } else {
      document.getElementById('password').classList.remove('is-invalid');
      document.getElementById('password').classList.add('is-valid');
    }

    return isValid;
  }

  function validatePhone(phone) {
    const re = /^\d{9}$/;
    return re.test(phone);
  }

  function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    console.log(password)
    return re.test(password);
  }
});
