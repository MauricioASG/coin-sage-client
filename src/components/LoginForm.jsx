// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/LoginForm.css';
import logo from '../assets/MoneyWiseLogo.jpg';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      onLoginSuccess(userData.user);
      setError(null);
      navigate('/dashboard');
    } catch (error) {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="screen">
      <div className="container">
        <img src={logo} alt="MoneyWise Logo" className="image" />
        <h2 className="text">Inicio de sesión</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Usuario"
            className="textInput"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="textInput"
          />
          <button type="submit" className="botonIniciarSesion">Iniciar sesión</button>
        </form>
        <button className="botonCrearCuenta" onClick={() => navigate('/crear-cuenta')}>Crear cuenta</button>
      </div>
    </div>
  );
}

export default LoginForm;
