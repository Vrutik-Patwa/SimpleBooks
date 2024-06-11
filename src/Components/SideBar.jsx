import React from "react";
import PieChart from "../UI/PieChart";
import User from "../UI/User";
import { Divider } from "@nextui-org/react";
import { MdDarkMode } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
const SideBar = (props) => {
  return (
    <div className="h-screen bg-sidebar w-24 flex flex-col items-center rounded-e-3xl text-white">
      <PieChart />
      <div className="mt-auto mb-5 w-full flex flex-col items-center justify-center">
        {props.mode ? (
          <MdDarkMode
            className="size-6 text-white mb-3"
            onClick={props.theme}
          />
        ) : (
          <PiSunLight
            onClick={props.theme}
            className="size-6 text-white mb-3"
          />
        )}
        <Divider className="mb-3" />
        <User />
      </div>
    </div>
  );
};

export default SideBar;
