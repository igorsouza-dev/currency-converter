import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
});

export default api;
