// /components/LoginForm.jsx
// LoginForm.jsx
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
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
          <button type="submit" className="button">Iniciar sesión</button>
        </form>
        <button className="button" onClick={() => navigate('/crear-cuenta')}>Crear cuenta</button>
      </div>
    </div>
  );
}

export default LoginForm;
