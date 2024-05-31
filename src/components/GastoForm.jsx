// src/components/GastoForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css'; // Importar el archivo CSS

const GastoForm = ({ userId }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState('');
  const [monto, setMonto] = useState('');

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get('http://localhost:3050/categorias');
        if (Array.isArray(response.data)) {
          // Filtrar la categoría de salario si aún existe
          const filteredCategories = response.data.map(categoria => {
            if (categoria.nombre === 'Salario') {
              return { ...categoria, nombre: 'Otros' };
            }
            return categoria;
          });
          setCategorias(filteredCategories);
        } else {
          setCategorias([]);
        }
      } catch (error) {
        console.error('Error al obtener categorías:', error);
        setCategorias([]);
      }
    };

    fetchCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3050/transacciones/gasto', { usuario_id: userId, categoria_id: categoriaId, monto });
      alert('Gasto registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el gasto:', error);
      alert('Error al registrar el gasto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
        <option value="">Selecciona una categoría</option>
        {categorias.map(categoria => (
          <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
        ))}
      </select>
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto del gasto"
        className="textInput"
      />
      <button type="submit" className="submit-button">Registrar Gasto</button>
    </form>
  );
};

export default GastoForm;
