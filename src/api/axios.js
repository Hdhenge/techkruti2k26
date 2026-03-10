import axios from "axios";

const API = axios.create({
  baseURL: "https://techkruti-backend.onrender.com/api"
});

// token automatically add
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;