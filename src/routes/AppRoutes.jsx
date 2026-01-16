import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/Layout/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import OfficialLogin from "../pages/auth/OfficialLogin";
import StudentLogin from "../pages/auth/StudentLogin";
import StudentRegister from "../pages/auth/StudentRegister";
import ProtectedRoute from "./ProtectedRoute";
import InstructorLayout from "../components/Layout/instructor/InstructorLayout";
import InstructorDashboard from "../pages/instructor/InstructorDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<OfficialLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />

        <Route element={<ProtectedRoute allowedRole="Admin" />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRole="Instructor" />}>
          <Route element={<InstructorLayout />}>
            <Route
              path="/Instructor/dashboard"
              element={<InstructorDashboard />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
