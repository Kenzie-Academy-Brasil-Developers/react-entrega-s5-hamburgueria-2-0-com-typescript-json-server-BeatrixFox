import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-hamburgueria-2.herokuapp.com/",
});

export default api;
