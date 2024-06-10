import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
const Invoicing = () => {
  const [styles, setStyles] = useState(true);
  function changeTheme() {
    setStyles((prevState) => !prevState);
  }
  return (
    <div
      className={`flex flex-col h-screen bg-background text-foreground ${
        styles ? "dark" : ""
      }`}
    >
      {/* <NavBar theme={changeTheme} mode={styles} /> */}
    </div>
  );
};

export default Invoicing;
