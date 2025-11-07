// src/services/AuthService.js
import axios from "axios";

const API_BASE = "http://192.168.18.198:8080/api";

// Get tokens from localStorage
export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

// Save tokens to localStorage
const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// Clear tokens and logout
export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE,
});

// Attach access token to each request
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors (token expiration)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Avoid infinite loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token");

        // Call refresh endpoint
        const res = await axios.post(`${API_BASE}/auth/refresh`, { refreshToken });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;

        // Save new tokens
        setTokens(newAccessToken, newRefreshToken);

        // Retry original request with new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        logout();
      }
    }

    return Promise.reject(error);
  }
);

// Export helper methods
export default api;
