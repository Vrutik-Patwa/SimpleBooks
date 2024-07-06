import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import SideBar from "../Components/SideBar";
import Content_Invoice from "../Components/Content_Invoice";
const Invoicing = () => {
  const [styles, setStyles] = useState(true);
  function changeTheme() {
    setStyles((prevState) => !prevState);
  }
  return (
    <div
      className={`flex flex-row w-screen text-foreground ${
        styles ? "bg-bg_invoice" : "bg-slate-100"
      }`}
    >
      <SideBar theme={changeTheme} mode={styles} />
      <div className="justify-center flex flex-auto">
        <Content_Invoice />
      </div>
      {/* <NavBar theme={changeTheme} mode={styles} /> */}
    </div>
  );
};

export default Invoicing;
