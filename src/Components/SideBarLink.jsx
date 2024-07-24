import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBarLink = ({ children, name, page }) => {
  return (
    <NavLink
      to={page}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400  hover:text-neutral-100 place-items-center gap-3 hover:bg-sidebar-light-select transition-colors duration-100 text-neutral-400  "
    >
      {children}
      <p className="text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide">
        {name}
      </p>
    </NavLink>
  );
};

export default SideBarLink;
