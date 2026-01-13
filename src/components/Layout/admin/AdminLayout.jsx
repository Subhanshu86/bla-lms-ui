import React, { useEffect } from "react";
import { loadThemeScripts } from "../../../utils/loadThemeScripts";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  useEffect(() => {
    loadThemeScripts();
  }, []);

  return (
    <>
      <div class="techwave_fn_wrapper">
        <div class="techwave_fn_wrap">
          <AdminHeader />
          <AdminSidebar />
          <Outlet />
          <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
