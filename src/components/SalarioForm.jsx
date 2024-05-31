// src/components/SalarioForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalarioForm = ({ userId }) => {
  const [salario, setSalario] = useState('');
  const [error, setError] = useState(null);
  const [isSalarioRegistrado, setIsSalarioRegistrado] = useState(false);

  useEffect(() => {
    const fetchSalario = async () => {
      try {
        const response = await axios.get(`http://localhost:3050/usuarios/${userId}`);
        if (response.data.salario > 0) {
          setIsSalarioRegistrado(true);
        }
      } catch (error) {
        console.error('Error al obtener el salario:', error);
      }
    };

    fetchSalario();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSalarioRegistrado) {
      alert('Su salario ya ha sido registrado.');
      return;
    }
    try {
      await axios.post(`http://localhost:3050/usuarios/${userId}/salario`, { salario });
      alert('Salario registrado exitosamente');
      setIsSalarioRegistrado(true);
    } catch (error) {
      setError('Error al registrar el salario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        placeholder="Ingresa tu salario mensual"
        disabled={isSalarioRegistrado}
      />
      <button type="submit" disabled={isSalarioRegistrado}>Registrar Salario</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SalarioForm;
