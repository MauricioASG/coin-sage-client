// src/components/TransaccionesTable.jsx
import React from 'react';
import '../styles/Dashboard.css'; // Importa el archivo CSS consolidado

const TransaccionesTable = ({ transacciones, categorias }) => {
  const getCategoriaNombre = (categoriaId) => {
    const categoria = categorias.find(cat => cat.id === categoriaId);
    return categoria ? categoria.nombre : 'Desconocida';
  };

  return (
    <div className="table-container">
      <h3>Transacciones</h3>
      <div className="table-scroll">
        {transacciones.length === 0 ? (
          <p>No hay transacciones registradas.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoría</th>
                <th>Monto</th>
                <th>Tipo</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map((transaccion) => (
                <tr key={transaccion.id}>
                  <td>{transaccion.id}</td>
                  <td>{getCategoriaNombre(transaccion.categoria_id)}</td>
                  <td>{transaccion.monto}</td>
                  <td>{transaccion.tipo}</td>
                  <td>{new Date(transaccion.fecha).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransaccionesTable;
