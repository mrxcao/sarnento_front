import axios from 'axios';

const apiSarnento = import.meta.env.VITE_API_SARNENTO;
const apiSarnentoProd = import.meta.env.VITE_API_SARNENTO_PROD;

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'production' ? apiSarnentoProd : apiSarnento,
  headers: {
    'Content-Type': 'application/json',
  },

});

export default axiosInstance;
