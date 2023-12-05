import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.omdbapi.com/?t='
});

export default api;