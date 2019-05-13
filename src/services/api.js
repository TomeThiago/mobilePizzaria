import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pizzaria-backend.herokuapp.com'
});

export default api;