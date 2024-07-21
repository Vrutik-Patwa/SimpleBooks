import React from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
const ProjectLink = ({ children, name }) => {
  return (
    <a
      href="#"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit truncate whitespace-nowrap tracking-wide">
        {name}
      </p>
      <ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
    </a>
  );
};

export default ProjectLink;
