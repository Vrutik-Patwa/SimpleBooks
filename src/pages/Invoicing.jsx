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
      className="flex flex-row  text-foreground dark bg-background"
    >
      <SideBar />
      <div
        className={`flex justify-center flex-auto ${
          styles ? "text-white" : "text-black"
        } `}
      >
        <Content_Invoice />
      </div>
      {/* <NavBar theme={changeTheme} mode={styles} /> */}
    </div>
  );
};

export default Invoicing;
