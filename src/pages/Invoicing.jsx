import React from "react";
import SideBar from "../Components/SideBar";
import Content_Invoice from "../Components/Content_Invoice";
const Invoicing = () => {
  return (
    <div className="relative top-0 left-0 flex flex-row w-full h-screen bg-invoicing-light-bg">
      <SideBar />
      <Content_Invoice />
    </div>
  );
};

export default Invoicing;
