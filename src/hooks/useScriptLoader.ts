import { useEffect, useState } from "react";

// Extend Window interface to include jQuery and WOW
declare global {
  interface Window {
    jQuery?: unknown;
    WOW?: new () => { init(): void };
  }
}

export function useScriptLoader() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Check if jQuery is loaded before initializing other scripts
    const checkScripts = () => {
      if (typeof window !== "undefined" && window.jQuery) {
        setScriptsLoaded(true);

        // Initialize WOW.js if available
        if (window.WOW) {
          new window.WOW().init();
        }

        // Initialize any other libraries here
        console.log("Scripts loaded and initialized");
      } else {
        // Retry after a short delay
        setTimeout(checkScripts, 100);
      }
    };

    // Start checking for scripts
    checkScripts();
  }, []);

  return scriptsLoaded;
}
