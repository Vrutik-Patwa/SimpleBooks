import React from "react";
import { useTheme } from "../context/themeContext";
import { MdDarkMode } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";

const ThemeIcon = () => {
  const { darkMode, changeTheme } = useTheme();
  return darkMode ? (
    <MdDarkMode className="size-6" onClick={changeTheme} />
  ) : (
    <PiSunLight onClick={changeTheme} className="size-6" />
  );
};

export default ThemeIcon;
