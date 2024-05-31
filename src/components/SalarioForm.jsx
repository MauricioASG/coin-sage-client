// src/components/SalarioForm.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalarioForm = ({ userId }) => {
  const [salario, setSalario] = useState('');

  useEffect(() => {
    const fetchSalario = async () => {
      try {
        const response = await axios.get(`http://localhost:3050/usuarios/${userId}/salario`);
        if (response.data && response.data.salario) {
          setSalario(response.data.salario);
        }
      } catch (error) {
        console.error('Error al obtener el salario:', error);
      }
    };

    fetchSalario();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3050/usuarios/${userId}/salario`, { salario });
      alert('Salario registrado exitosamente');
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
        className="textInput"
      />
      <button type="submit" className="submit-button">Registrar Salario</button>
    </form>
  );
};

export default SalarioForm;
