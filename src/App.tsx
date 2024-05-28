//App.tsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CrearCuentaForm from './components/CrearCuentaForm';

function App() {
  const [user, setUser] = useState(null);
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleCuentaCreada = (userData) => {
    setUser(userData);
    setCreatingAccount(false);
  };

  const handleChangeToCrearCuenta = () => {
    setCreatingAccount(true);
  };

  return (
    <div>
      <h1>Aplicación de Finanzas Personales</h1>
      {user ? (
        <div>
          <h2>Bienvenido, {user.nombre}</h2>
          <p>Este es tu panel de control.</p>
          {/* Aquí puedes agregar más contenido, como las transacciones del usuario, etc. */}
        </div>
      ) : creatingAccount ? (
        <CrearCuentaForm onCuentaCreada={handleCuentaCreada} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} onChangeToCrearCuenta={handleChangeToCrearCuenta} />
      )}
    </div>
  );
}

export default App;
