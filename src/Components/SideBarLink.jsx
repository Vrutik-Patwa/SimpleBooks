import React from "react";

const SideBarLink = ({ children, name, page }) => {
  return (
    <a
      href={page}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400  hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 text-neutral-400 "
    >
      {children}
      <p className="text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  );
};

export default SideBarLink;
