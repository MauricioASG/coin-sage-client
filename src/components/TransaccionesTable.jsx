// src/components/TransaccionesTable.jsx
import React from 'react';
import '../styles/TransaccionesTable.css'; // Importa el archivo CSS

const TransaccionesTable = ({ transacciones }) => {
  return (
    <div className="table-container">
      <h3>Transacciones</h3>
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
                <td>{transaccion.categoria_id}</td>
                <td>{transaccion.monto}</td>
                <td>{transaccion.tipo}</td>
                <td>{new Date(transaccion.fecha).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransaccionesTable;
