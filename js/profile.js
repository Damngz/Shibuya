document.addEventListener('DOMContentLoaded', function() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  function fillProfileFields() {
    document.getElementById('user-name').value = currentUser.nombre;
    document.getElementById('user-lastname').value = currentUser.apellidos;
    document.getElementById('user-phone').value = currentUser.telefono;
    document.getElementById('user-city').value = currentUser.ciudad;
    document.getElementById('user-address').value = currentUser.direccion;
    document.getElementById('user-email').value = currentUser.email;
  }

  function enableEdit() {
    document.querySelectorAll('.form-control').forEach(function(input) {
      input.removeAttribute('disabled');
    });
    document.getElementById('edit-button').classList.add('d-none');
    document.getElementById('save-button').classList.remove('d-none');
  }

  function saveChanges() {
    const updatedUser = {
      nombre: document.getElementById('user-name').value,
      apellidos: document.getElementById('user-lastname').value,
      telefono: document.getElementById('user-phone').value,
      ciudad: document.getElementById('user-city').value,
      direccion: document.getElementById('user-address').value,
      email: document.getElementById('user-email').value
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    window.location.reload();
  }

  if (currentUser) {
    fillProfileFields();
    document.getElementById('edit-button').addEventListener('click', enableEdit);
    document.getElementById('save-button').addEventListener('click', saveChanges);
  } else {
    window.location.href = 'login.html';
  }

  document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  });
});
