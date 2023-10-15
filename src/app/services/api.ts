import axios from "axios";

const api = axios.create({
  // baseURL: "https://froesmhs.com/olx/public/api/",
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default api;
