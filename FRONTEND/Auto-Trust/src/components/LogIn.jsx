import React, { useState } from 'react';
import '../styles/LogIn.css';

function App() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      correo,
      contrasena,
    };

    try {
      const response = await fetch('http://localhost:5173/api/registro/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Usuario registrado exitosamente');
      } else {
        const errorData = await response.json();
        alert('Error en el registro: ' + errorData.detail);
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="App">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;
