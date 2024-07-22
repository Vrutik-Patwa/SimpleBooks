import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function useTheme() {
  return useContext(themeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <themeContext.Provider value={{ changeTheme, darkMode, setDarkMode }}>
      {children}
    </themeContext.Provider>
  );
}
