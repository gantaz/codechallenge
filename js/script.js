document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const formData = {
      nombre,
      apellido,
      fechaNacimiento
    };
  
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(data => console.log('Respuesta del servidor:', data))
      .catch(error => console.error('Error:', error));
  });
  