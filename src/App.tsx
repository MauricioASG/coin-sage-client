// App.tsx
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import CrearCuentaForm from './components/CrearCuentaForm';
import PieChart from './components/PieChart';
import SalarioForm from './components/SalarioForm';
import GastoForm from './components/GastoForm';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchGastos = async () => {
        try {
          const response = await axios.get(`/transacciones/${user.id}/gastos`);
          setGastos(response.data);
        } catch (error) {
          console.error('Error al obtener los gastos:', error);
          setGastos([]);
        }
      };

      fetchGastos();
    }
  }, [user]);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCreatingAccount(false); // Asegúrate de ocultar el formulario de crear cuenta si el usuario inicia sesión
  };

  const handleCrearCuenta = () => {
    setCreatingAccount(true);
  };

  return (
    <div>
      <h1>Aplicación de Finanzas Personales</h1>
      {user ? (
        <div>
          <h2>Bienvenido, {user.nombre}</h2>
          <p>Este es tu panel de control.</p>
          <SalarioForm userId={user.id} />
          <GastoForm userId={user.id} />
          <PieChart data={gastos} />
        </div>
      ) : (
        <div>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
          <button onClick={handleCrearCuenta}>Crear cuenta</button>
          {creatingAccount && <CrearCuentaForm onCuentaCreada={handleLoginSuccess} />}
        </div>
      )}
    </div>
  );
}

export default App;
