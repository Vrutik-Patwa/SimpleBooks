import React from "react";
import Cards from "./Cards";
import CardData from "./CardData";
import Login from "./Login";
import { nanoid } from "nanoid";

const Content = () => {
  const CardElements = CardData.map((card) => {
    return (
      <div key={nanoid()}>
        {" "}
        <Cards prop={card} />
      </div>
    );
  });
  return (
    <div className="flex flex-1 mt-4">
      <div className="">
        <div className="bg-background flex flex-row flex-wrap w-[800px] mt-6 ml-10 gap-10 items-center justify-center">
          {CardElements}
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Content;
