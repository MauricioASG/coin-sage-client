// components/Dashboard.jsx
// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalarioForm from './SalarioForm';
import GastoForm from './GastoForm';
import PieChart from './PieChart';
import TransaccionesTable from './TransaccionesTable'; // Importamos el nuevo componente
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [transacciones, setTransacciones] = useState([]);
  const [gastos, setGastos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const response = await axios.get('/api/transacciones');
        if (Array.isArray(response.data)) {
          const userTransacciones = response.data.filter(transaccion => transaccion.usuario_id === user.id);
          setTransacciones(userTransacciones);
          const userGastos = userTransacciones.filter(transaccion => transaccion.tipo === 'Gasto');
          setGastos(userGastos);
        } else {
          console.error('La respuesta de la API no es un arreglo:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener las transacciones:', error);
        setTransacciones([]);
      }
    };

    fetchTransacciones();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <h2>Bienvenido, {user.nombre}</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <p>Este es tu panel de control.</p>
      <SalarioForm userId={user.id} />
      <GastoForm userId={user.id} />
      <PieChart data={gastos} />
      <TransaccionesTable transacciones={transacciones} />
    </div>
  );
};

export default Dashboard;
