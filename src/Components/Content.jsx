import React from "react";
import Cards from "./Cards";

const Content = () => {
  return (
    <div className="bg-back flex-1 flex flex-col mt-10 ml-36 gap-20">
      <div className="flex gap-20">
        <Cards />
        <Cards />
      </div>
      <div className="flex gap-20">
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Content;
