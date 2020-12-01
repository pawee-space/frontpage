import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pawee-api.herokuapp.com',
});

export default api;
