import axios from "axios";
import { getAuthToken } from "../auth/authService";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your Python backend API URL
});

// Set authorization header with the JWT token
api.interceptors.request.use((config: any) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
