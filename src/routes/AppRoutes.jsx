import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/Layout/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import OfficialLogin from "../pages/auth/OfficialLogin";
import StudentLogin from "../pages/auth/StudentLogin";
import StudentRegister from "../pages/auth/StudentRegister";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Default Routes */}

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/*Login Routes */}

        <Route path="/login" element={<OfficialLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />

        {/* <Route path="/" element={<Navigate to="/admin/dashboard" replace />} /> */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
