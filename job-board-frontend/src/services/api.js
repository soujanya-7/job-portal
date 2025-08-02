// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // ✅ adjust if needed
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // ✅ attach token
  }
  return config;
});

export default API;
