import React from "react";
import SideBar from "../Components/SideBar";
import Content_Customers from "../Components/Content_Customers";
import { useTheme } from "../context/themeContext";
const Customers = () => {
  const { theme } = useTheme();
  return (
    <main className="h-screen bg-invoicing-light-bg text-foreground {theme} w-full relative flex">
      <SideBar />
      <Content_Customers />
    </main>
  );
};

export default Customers;
