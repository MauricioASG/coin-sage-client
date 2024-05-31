// src/components/SalarioForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalarioForm = ({ userId }) => {
  const [salario, setSalario] = useState('');
  const [salarioRegistrado, setSalarioRegistrado] = useState(false);

  useEffect(() => {
    const fetchSalario = async () => {
      try {
        const response = await axios.get(`http://localhost:3050/usuarios/${userId}`);
        if (response.data.salario && parseFloat(response.data.salario) > 0) {
          setSalario(response.data.salario);
          setSalarioRegistrado(true);
        }
      } catch (error) {
        console.error('Error al obtener el salario del usuario:', error);
      }
    };

    fetchSalario();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (salarioRegistrado) {
      alert('Su salario ya ha sido registrado');
      return;
    }
    try {
      await axios.post(`http://localhost:3050/usuarios/${userId}/salario`, { salario });
      alert('Salario registrado exitosamente');
      setSalarioRegistrado(true);
    } catch (error) {
      alert('Error al registrar el salario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        placeholder="Ingresa tu salario mensual"
      />
      <button type="submit">Registrar Salario</button>
    </form>
  );
};

export default SalarioForm;
