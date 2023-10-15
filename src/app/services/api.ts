import axios from "axios";

const api = axios.create({
  baseURL: "https://froesmhs.com/api-olx-hackathon-2023/api/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default api;
