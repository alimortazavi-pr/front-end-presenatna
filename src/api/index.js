import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: "https://presentana.herokuapp.com/api/v1",
  // timeout: 5000,
});

export default api;
