import axios from "axios";

/* ---------- AUTH AXIOS (NO INTERCEPTORS) ---------- */
export const axiosAuth = axios.create({
  baseURL: "https://localhost:7175/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------- MAIN AXIOS INSTANCE ---------- */
const axiosInstance = axios.create({
  baseURL: "https://localhost:7175/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------- REQUEST INTERCEPTOR ---------- */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    // ❌ DO NOT attach token to refresh endpoint
    if (
      token &&
      !config.url.includes("/official/auth/refresh-token")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ---------- RESPONSE INTERCEPTOR ---------- */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/official/auth/logout")
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        forceLogout();
        return Promise.reject(error);
      }

      try {
        const res = await axiosAuth.post(
          "/official/auth/refresh-token",
          { refreshToken }
        );

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        originalRequest.headers.Authorization =
          `Bearer ${res.data.accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        forceLogout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

/* ---------- LOGOUT HELPER ---------- */
const forceLogout = () => {
  localStorage.clear();
  window.location.replace("/login");
};

export default axiosInstance;
