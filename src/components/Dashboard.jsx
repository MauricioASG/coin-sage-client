// components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import SalarioForm from './SalarioForm';
import GastoForm from './GastoForm';
import PieChart from './PieChart';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
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
  }, [user]);

  return (
    <div>
      <h2>Bienvenido, {user.nombre}</h2>
      <p>Este es tu panel de control.</p>
      <SalarioForm userId={user.id} />
      <GastoForm userId={user.id} />
      <PieChart data={gastos} />
    </div>
  );
};

export default Dashboard;
