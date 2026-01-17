import React from "react";
import AppRoutes from "./routes/AppRoutes";
import useInitTheme from "./hooks/useInitTheme";

const App = () => {
  useInitTheme();
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
