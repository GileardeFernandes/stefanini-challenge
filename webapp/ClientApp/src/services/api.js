import axios from 'axios';

const api = axios.create({
   baseURL:'https://localhost:5001/',
  //baseURL:'https://api.github.com/',
});

export default api;