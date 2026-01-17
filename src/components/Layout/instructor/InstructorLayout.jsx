import React, { useEffect } from "react";
import { loadThemeScripts } from "../../../utils/loadThemeScripts";
import InstructorHeader from "./InstructorHeader";
import InstructorSidebar from "./InstructorSidebar";
import InstructorFooter from "./InstructorFooter";
import { Outlet } from "react-router-dom";

const InstructorLayout = () => {
  useEffect(() => {
    loadThemeScripts();
  }, []);

  return (
    <>
      <div class="techwave_fn_wrapper">
        <div class="techwave_fn_wrap">
          <InstructorHeader />
          <InstructorSidebar />
          <Outlet />
          <InstructorFooter />
        </div>
      </div>
    </>
  );
};

export default InstructorLayout;
