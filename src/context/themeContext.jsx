import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function useTheme() {
  return useContext(themeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ changeTheme, theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
