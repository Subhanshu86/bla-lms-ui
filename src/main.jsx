import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/plugins.css";
import "./assets/css/themestyle.css";

createRoot(document.getElementById("root")).render(<App />);
