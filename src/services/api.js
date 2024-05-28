import axios from 'axios';

const BASE_URL = 'http://localhost:3050';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Credenciales inválidas. Inténtalo de nuevo.');
  }
};
