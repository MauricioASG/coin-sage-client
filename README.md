# Coin Sage Client
- Mauricio Alejandro Serrano García.
- I.S.C
- N.C: 20460545
- Este repositorio contiene la aplicación frontend de Coin Sage, una aplicación web para la gestión de finanzas personales.

## Tabla de contenido

- [Coin Sage Client](#coin-sage-client)
- [Descripción del proyecto](#descripción-del-proyecto)
- [Requisitos de instalación](#requisitos-de-instalación)
- [Instrucciones para la instalación](#instrucciones-para-la-instalación)
- [Prototipos de la vista y cómo utilizarlas](#prototipos-de-la-vista-y-cómo-utilizarlas)
- [Descripción de las pruebas y cómo ejecutarlas](#descripción-de-las-pruebas-y-cómo-ejecutarlas)
- [Enlaces externos](Enlaces-externos.)

## Descripción del proyecto

Coin Sage es una aplicación web diseñada para ayudar a los usuarios a gestionar sus finanzas personales. La aplicación permite registrar salario mensual y categorizar gastos, visualizar los datos en gráficos y tablas.


La estructura del proyecto está organizada de la siguiente manera:
- **src/components**: Contiene todos los componentes React utilizados en la aplicación.
- **src/styles**: Contiene los archivos CSS para el estilo de los componentes.
- **src/services**: Contiene los servicios de API para la comunicación con el backend.
- **public**: Contiene los archivos estáticos públicos.
- **jest.config.cjs**: Configuración de Jest para las pruebas.
- **vite.config.js**: Configuración de Vite para el servidor de desarrollo.

## Requisitos de instalación

Debes asegurarte de tener instalado y configurado lo siguiente antes de comenzar:

- [Node.js](https://nodejs.org/) (Versión recomendada: 18.2.0)
- [npm](https://www.npmjs.com/) (Versión recomendada: 8.11.0)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/MauricioASG/coin-sage-client.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd coin-sage-client
   ```

3. Instalar las dependencias del proyecto:
   
   ```sh
   npm install
   ```

4. Asegúrate de que el backend esté ejecutándose. Sigue las instrucciones para desplegar el backend disponibles en [Coin Sage API](https://github.com/MauricioASG/coin-sage.git).

5. Iniciar el servidor de desarrollo:

    ```sh
    npm run dev
    ```

6. Abrir el navegador y navegar a `http://localhost:5173` para ver la aplicación en funcionamiento.


## Prototipos de la vista y cómo utilizarlas

### Vista de Inicio de Sesión

- **URL**: `http://localhost:5173/login`
- **Descripción**: Permite a los usuarios iniciar sesión en la aplicación.
- **Campos**:
  - Email
  - Contraseña
- **Botones**:
  - **Iniciar Sesión**: Valida las credenciales y redirige al dashboard.
  - **Crear Cuenta**: Redirige a la vista de registro de usuario.

### Vista de Dashboard

- **URL**: `http://localhost:5173/dashboard`
- **Descripción**: Muestra un resumen de las finanzas del usuario.
- **Componentes**:
  - **Formulario de Registro de Salario**: Permite al usuario registrar su salario mensual.
  - **Formulario de Registro de Gasto**: Permite al usuario registrar un gasto.
  - **Gráfico de Gastos**: Muestra los gastos del usuario categorizados.
  - **Tabla de Transacciones**: Muestra las transacciones del usuario.

## Descripción de las pruebas y cómo ejecutarlas

### Pruebas con React Testing Library

#### Test de Renderizado de Componente

Este test verifica que el componente Dashboard se renderiza correctamente con los datos esperados.

**Código de la prueba:**

```jsx
// src/components/__tests__/Dashboard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

// Test para asegurar que el componente Dashboard se renderiza correctamente
test('renders Dashboard component', () => {
  render(
    <MemoryRouter>
      <Dashboard user={{ nombre: 'Test User', id: 1 }} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Bienvenid@, Test User/i)).toBeInTheDocument();
});
```
### Explicación

Importaciones: Importamos las librerías necesarias y el componente Dashboard.
Configuración del Router: Utilizamos MemoryRouter para envolver el componente y proporcionar el contexto del router necesario para useNavigate.
Renderizado y Aserción: Renderizamos el componente Dashboard con un usuario de prueba y verificamos que el texto "Bienvenid@, Test User" esté presente en el documento.
Ejecutar las pruebas
Asegúrate de tener Jest configurado en el proyecto.

Ejecutar las pruebas:
  ```sh
  npm test
   ```

## Enlaces externos.
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Coin Sage API] (https://github.com/MauricioASG/coin-sage.git).
