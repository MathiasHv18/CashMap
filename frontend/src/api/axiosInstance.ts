import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Base URL
  headers: {
    "Content-Type": "application/json", // Tipo de contenido
  },
});

export default axiosInstance;
