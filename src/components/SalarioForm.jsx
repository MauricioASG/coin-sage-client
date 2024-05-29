// src/components/SalarioForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SalarioForm = ({ userId }) => {
  const [salario, setSalario] = useState('');

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
      />
      <button type="submit">Registrar Salario</button>
    </form>
  );
};

export default SalarioForm;
