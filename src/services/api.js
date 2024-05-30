// src/services/api.js
import axios from 'axios';

const BASE_URL = '/api'; // Usar el proxy

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Credenciales inválidas. Inténtalo de nuevo.');
  }
};

export const crearCuenta = async (nombre, email, passw) => {
  try {
    const response = await axios.post(`${BASE_URL}/crear-cuenta`, { nombre, email, passw });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la cuenta. Inténtalo de nuevo.');
  }
};
