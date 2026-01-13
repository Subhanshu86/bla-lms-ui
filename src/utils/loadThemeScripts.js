export const loadThemeScripts = () => {
  const scripts = [
    "/assets/js/jQuery.js",
    "/assets/js/init.js",
    "/assets/js/plugins.js",
  ];

  scripts.forEach((src) => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    }
  });
};
