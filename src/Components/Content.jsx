import React from "react";
import Cards from "./Cards";

const Content = () => {
  return (
    <div className="bg-background flex-1 flex flex-col mt-6 ml-36 gap-10">
      <div className="flex gap-16">
        <Cards />
        <Cards />
      </div>
      <div className="flex gap-16">
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Content;
