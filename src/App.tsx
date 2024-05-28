//App.tsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.nombre}</h2>
          <p>Este es tu panel de control.</p>
          {/* Aquí puedes agregar más contenido, como las transacciones del usuario, etc. */}
        </div>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
