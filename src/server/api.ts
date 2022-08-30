import axios from "axios"

const api = axios.create({
  baseURL: 'https://projetom3grupo5.herokuapp.com/',
  timeout: 5000,
});

export default api;