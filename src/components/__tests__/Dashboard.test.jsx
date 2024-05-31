// prueba para el componente `Dashboard` 
// para asegurarnos de que se renderiza correctamente con los datos esperados.
// src/components/__tests__/Dashboard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

test('renders Dashboard component', () => {
  render(
    <MemoryRouter>
      <Dashboard user={{ nombre: 'Test User', id: 1 }} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Bienvenid@, Test User/i)).toBeInTheDocument();
});


// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import axios from 'axios';
// import Dashboard from '../Dashboard'; // Asegúrate de que la ruta sea correcta

// jest.mock('axios');

// test('renders Dashboard component', () => {
//   render(
//     <MemoryRouter>
//       <Dashboard user={{ nombre: 'Test User', id: 1 }} />
//     </MemoryRouter>
//   );
//   expect(screen.getByText(/Bienvenid@, Test User/i)).toBeInTheDocument();
// });

// test('fetches and displays data', async () => {
//   const transaccionesData = [
//     { id: 1, usuario_id: 1, categoria_id: 1, monto: 100, tipo: 'Gasto' },
//   ];
//   const categoriasData = [
//     { id: 1, nombre: 'Comida' },
//   ];

//   axios.get.mockResolvedValueOnce({ data: transaccionesData });
//   axios.get.mockResolvedValueOnce({ data: categoriasData });

//   render(
//     <MemoryRouter>
//       <Dashboard user={{ nombre: 'Test User', id: 1 }} />
//     </MemoryRouter>
//   );

//   await waitFor(() => expect(screen.getByText(/Comida/i)).toBeInTheDocument());
// });
