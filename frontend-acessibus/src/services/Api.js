import axios from 'axios';

const API_URL = 'http://192.168.15.178'; 

const api = axios.create({
    baseURL: API_URL,
});

export default api;