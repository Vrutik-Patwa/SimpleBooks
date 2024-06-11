import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import SideBar from "../Components/SideBar";
const Invoicing = () => {
  const [styles, setStyles] = useState(true);
  function changeTheme() {
    setStyles((prevState) => !prevState);
  }
  return (
    <div
      className={`flex flex-col h-screen  text-foreground ${
        styles ? "bg-bg_invoice" : "bg-slate-100"
      }`}
    >
      <SideBar theme={changeTheme} mode={styles} />
      {/* <NavBar theme={changeTheme} mode={styles} /> */}
    </div>
  );
};

export default Invoicing;
