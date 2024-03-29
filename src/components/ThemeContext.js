import React from "react";

import { COLORS, COLOR_MODE_KEY } from "../constants";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    // const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const currentColorMode = localStorage.getItem(COLOR_MODE_KEY);

    if (!currentColorMode) localStorage.setItem(COLOR_MODE_KEY, "dark");

    const initialColorValue =
      localStorage.getItem(COLOR_MODE_KEY) === "dark" ? "dark" : "light";

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    const setColorMode = (newValue) => {
      const root = window.document.documentElement;
      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS[newValue]).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        root.style.setProperty(cssVarName, colorByTheme);
      });

      rawSetColorMode(newValue);
    };

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
