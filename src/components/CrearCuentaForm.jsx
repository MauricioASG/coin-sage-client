// src/components/CrearCuentaForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearCuenta } from '../services/api';
import '../styles/CrearCuentaForm.css';

function CrearCuentaForm({ onCuentaCreada }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCrearCuenta = async (e) => {
    e.preventDefault();
    try {
      const userData = await crearCuenta(nombre, email, passw);
      setError(null);
      navigate('/login'); // Redirigir a la página de inicio de sesión
    } catch (error) {
      setError('Error al crear la cuenta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="screen">
      <div className="container">
        <h2 className="text">Crear cuenta</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleCrearCuenta}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="textInput"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="textInput"
          />
          <input
            type="password"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            placeholder="Contraseña"
            className="textInput"
          />
          <button type="submit" className="button">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}

export default CrearCuentaForm;
