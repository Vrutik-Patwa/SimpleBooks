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
  HomeIcon,
} from "@heroicons/react/16/solid";
import { Divider } from "@nextui-org/react";
import ThemeIcon from "../UI/ThemeIcon";
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
    width: "13rem",
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
  const { theme } = useTheme();
  const ContainerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
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

  const [icon, setIcon] = useState("");

  const handleIcon = (icon) => {
    setIcon(icon);
  };

  return (
    <motion.nav
      variants={ContainerVariants}
      initial="open"
      animate={ContainerControls}
      className={`sticky top-0 left-0 z-10 flex flex-col h-full gap-20 p-5 shadow shadow-neutral-600 bg-sidebar-${theme}-bg`}
      onHoverStart={handleOpen}
      onHoverEnd={handleClose}
    >
      <div className="flex flex-row w-full justify-between place-items-center ">
        {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-700"></div> */}
        {/* <div className="flex w-full place-items-center gap-3 ml-1 mt-2">
          <User />
          <p className="overflow-hidden whitespace-nowrap text-white">
            Anthony Jacobs
          </p>
        </div> */}
        <div className=" w-full flex flex-row justify-center gap-2 place-items-center whitespace-nowrap ">
          <img src="src\assets\logo.png" alt="logo" className="size-10" />
          {/* <p className="overflow-hidden text-white">SimpleBooks</p> */}
        </div>
        {/* <Divider className=" absolute left-0  mt-20  w-[85%] ml-2 bg-background " /> */}
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
      <div className="flex flex-col gap-4">
        <SideBarLink name="Home" page="/">
          <HomeIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent  " />
        </SideBarLink>
        <SideBarLink name="Dashboard" page="\dashboard">
          <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent  " />
        </SideBarLink>
        <SideBarLink name="Invoices" page="/invoicing">
          <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent" />
        </SideBarLink>
        <SideBarLink name="Inventory" page="\inventory">
          <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent" />
        </SideBarLink>
        <SideBarLink name="Suppliers" page="\suppliers">
          <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent " />
        </SideBarLink>
        <SideBarLink name="Customers" page="/customers">
          <UsersIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6  text-transparent" />
        </SideBarLink>
        <div className="absolute bottom-0 mb-10 text-{theme}">
          <ThemeIcon />
        </div>
      </div>
    </motion.nav>
  );
};

export default SideBar;
