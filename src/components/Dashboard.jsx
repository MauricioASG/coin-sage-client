// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalarioForm from './SalarioForm';
import GastoForm from './GastoForm';
import PieChart from './PieChart';
import TransaccionesTable from './TransaccionesTable';
import axios from 'axios';
import '../styles/Dashboard.css'; // Importar el archivo CSS

const Dashboard = ({ user }) => {
  const [transacciones, setTransacciones] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [gastos, setGastos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const transaccionesResponse = await axios.get('/api/transacciones');
        const categoriasResponse = await axios.get('/api/categorias');
        if (Array.isArray(transaccionesResponse.data) && Array.isArray(categoriasResponse.data)) {
          const userTransacciones = transaccionesResponse.data.filter(transaccion => transaccion.usuario_id === user.id);
          setTransacciones(userTransacciones);
          setCategorias(categoriasResponse.data);
          const userGastos = userTransacciones.filter(transaccion => transaccion.tipo === 'Gasto');
          setGastos(userGastos);
        } else {
          console.error('La respuesta de la API no es un arreglo:', transaccionesResponse.data, categoriasResponse.data);
        }
      } catch (error) {
        console.error('Error al obtener las transacciones o categorías:', error);
        setTransacciones([]);
        setCategorias([]);
      }
    };

    fetchTransacciones();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="screen" >
      <div className="dashboard-container">
        <div className="sidebar">
          <h3>Bienvenid@, {user.nombre}</h3>
          <SalarioForm userId={user.id} />
          <GastoForm userId={user.id} />
          <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
        <div className="chart">
          <PieChart data={gastos} />
        </div>
        <div className="table-container">
          <TransaccionesTable transacciones={transacciones} categorias={categorias} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
