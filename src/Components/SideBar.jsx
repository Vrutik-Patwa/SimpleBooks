import React, { useEffect, useState } from "react";
import { easeInOut, motion, useAnimationControls } from "framer-motion";
import SideBarLink from "./SideBarLink";
// import { Dashboard } from "@mui/icons-material";
import { useTheme } from "../context/themeContext";
import User from "../UI/User";
import {
  ChartBarIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  ChartPieIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { Divider } from "@nextui-org/react";

const ContainerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  open: {
    rotate: 180,
  },
  close: {
    rotate: 360,
  },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode, changeTheme } = useTheme();
  const ContainerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      ContainerControls.start("open");
      svgControls.start("open");
    } else {
      ContainerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  return (
    <motion.nav
      variants={ContainerVariants}
      initial="close"
      animate={ContainerControls}
      className="fixed top-0 left-0 z-10 flex flex-col h-full gap-20 p-5 shadow shadow-neutral-600 "
      onHoverStart={handleOpenClose}
      onHoverEnd={handleOpenClose}
    >
      <div className="flex flex-row w-full justify-between place-items-center ">
        {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-700"></div> */}
        <div className="flex w-full place-items-center gap-3 ml-1 mt-2">
          <User />
          <p className="overflow-hidden whitespace-nowrap text-white">
            Anthony Jacobs
          </p>
        </div>
        <Divider className=" absolute left-0  mt-20  w-[85%] ml-2 " />
        {/* <button
          className="p-1 rounded-full flex"
          onClick={() => handleOpenClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              variants={svgVariants}
              animate={svgControls}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            />
          </svg>
        </button> */}
      </div>
      <div className="flex flex-col gap-3">
        <SideBarLink name="Dashboard" page="\dashboard">
          <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8  text-neutral-900  " />
        </SideBarLink>
        <SideBarLink name="Invoices" page="\invoicing">
          <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8  text-neutral-900" />
        </SideBarLink>
        <SideBarLink name="Inventory" page="\inventory">
          <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8  text-neutral-900" />
        </SideBarLink>
        <SideBarLink name="Suppliers" page="\suppliers">
          <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8  text-neutral-900 " />
        </SideBarLink>
        <SideBarLink name="Customers" page="\customers">
          <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8  text-neutral-900" />
        </SideBarLink>
      </div>
    </motion.nav>
  );
};

export default SideBar;
