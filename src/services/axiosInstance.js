import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7175/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: attach JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 (token expired)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const res = await axiosInstance.post("/official/auth/refresh-token", {
            refreshToken,
          });

          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);

          // Retry original request
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`;
          return axiosInstance(originalRequest);
        } catch (err) {
          // Refresh token invalid → logout
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("role");
          localStorage.removeItem("fullName");
          window.location.href = "/login";
          return Promise.reject(err);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
