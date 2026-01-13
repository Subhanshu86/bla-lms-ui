import { useEffect } from "react";

const useInitTheme = () => {
  useEffect(() => {
    if (!localStorage.getItem("frenify_skin")) {
      localStorage.setItem("frenify_skin", "dark");
    }

    if (!localStorage.getItem("frenify_panel")) {
      localStorage.setItem("frenify_panel", "");
    }

    const skin = localStorage.getItem("frenify_skin");
    const panel = localStorage.getItem("frenify_panel");

    document.documentElement.setAttribute("data-techwave-skin", skin);

    if (panel) {
      document.documentElement.classList.add(panel);
    }
  }, []);
};

export default useInitTheme;
