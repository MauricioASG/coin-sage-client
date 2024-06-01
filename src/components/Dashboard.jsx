// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalarioForm from './SalarioForm';
import GastoForm from './GastoForm';
import PieChart from './PieChart';
import TransaccionesTable from './TransaccionesTable';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = ({ user }) => {
  const [transacciones, setTransacciones] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [gastos, setGastos] = useState([]);
  const navigate = useNavigate();

  const fetchTransacciones = async () => {
    try {
      const transaccionesResponse = await axios.get('/api/transacciones');
      const categoriasResponse = await axios.get('/api/categorias');
      if (Array.isArray(transaccionesResponse.data) && Array.isArray(categoriasResponse.data)) {
        const userTransacciones = transaccionesResponse.data.filter(transaccion => transaccion.usuario_id === user.id);
        const userGastos = userTransacciones.filter(transaccion => transaccion.tipo === 'Gasto');
        const categoriasMap = categoriasResponse.data.reduce((map, categoria) => {
          map[categoria.id] = categoria.nombre;
          return map;
        }, {});

        // Agrupar y sumar los gastos por categoría
        const gastosAgrupados = userGastos.reduce((acc, gasto) => {
          const categoriaNombre = categoriasMap[gasto.categoria_id] || 'Desconocida';
          if (!acc[categoriaNombre]) {
            acc[categoriaNombre] = 0;
          }
          acc[categoriaNombre] += parseFloat(gasto.monto);
          return acc;
        }, {});

        // Convertir el objeto agrupado en un arreglo de objetos
        const gastosConCategorias = Object.entries(gastosAgrupados).map(([categoria, monto]) => ({
          categoria,
          monto
        }));

        setTransacciones(userTransacciones);
        setCategorias(categoriasResponse.data);
        setGastos(gastosConCategorias);
      } else {
        console.error('La respuesta de la API no es un arreglo:', transaccionesResponse.data, categoriasResponse.data);
      }
    } catch (error) {
      console.error('Error al obtener las transacciones o categorías:', error);
      setTransacciones([]);
      setCategorias([]);
    }
  };

  useEffect(() => {
    fetchTransacciones();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleGastoRegistrado = () => {
    fetchTransacciones(); // Actualizar los datos de transacciones y gastos
  };

  return (
    <div className="screen">
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Bienvenid@, {user.nombre}</h2>
          <SalarioForm userId={user.id} />
          <GastoForm userId={user.id} onGastoRegistrado={handleGastoRegistrado} />
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
