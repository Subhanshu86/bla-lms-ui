import axios from "axios";

/* ---------- AUTH AXIOS (NO INTERCEPTORS) ---------- */
export const axiosAuth = axios.create({
  baseURL: "https://localhost:7175/api",
  headers: { "Content-Type": "application/json" },
});

/* ---------- MAIN AXIOS INSTANCE ---------- */
const axiosInstance = axios.create({
  baseURL: "https://localhost:7175/api",
  headers: { "Content-Type": "application/json" },
});

/* ---------- REQUEST INTERCEPTOR ---------- */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token && !config.url.includes("/auth/refresh-token")) {
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
    const userType = localStorage.getItem("userType"); // official | student

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/logout")
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken || !userType) {
        forceLogout();
        return Promise.reject(error);
      }

      try {
        const res = await axiosAuth.post(`/${userType}/auth/refresh-token`, {
          refreshToken,
        });

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

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
  const userType = localStorage.getItem("userType");

  localStorage.clear();

  if (userType === "student") {
    window.location.replace("/student-login");
  } else {
    window.location.replace("/login");
  }
};

export default axiosInstance;
