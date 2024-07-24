import React from "react";
import { useState } from "react";
import Customer from "./Customer";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@nextui-org/react";
import Invoice from "./Invoice";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import User from "../UI/User";
const Content_Invoice = () => {
  const [selectedOption, setSelectedOption] = useState(new Set(["status"]));

  const selectedOptionValue = Array.from(selectedOption)[0];
  const labelsMap = {
    status: "Filter By Status",
    time: "Filter By Date",
    amount: "Filter By Amount",
  };
  return (
    <div className="relative flex p-10 flex-col flex-1 gap-7 ">
      <div className="flex flex-row justify-end pr-10 gap-5 items-center">
        <Button isIconOnly className="rounded-full">
          <MagnifyingGlassIcon className="size-10 p-2 bg-opacity-70 bg-white rounded-full text-neutral-600 hover:bg-opacity-100 cursor-pointer" />
        </Button>
        <Button isIconOnly className="rounded-full">
          <BellIcon className="size-10 p-2 bg-opacity-70 bg-white rounded-full text-neutral-600 hover:bg-opacity-100 cursor-pointer" />
        </Button>
        <Button isIconOnly className="rounded-full">
          <EnvelopeIcon className="size-10 p-2 bg-opacity-70 bg-white rounded-full text-neutral-600 hover:bg-opacity-100 cursor-pointer" />
        </Button>
        <Divider orientation="vertical" className="h-5" />
        <User />
      </div>
      <h1 className="text-3xl font-bold font-spaceGrotesk text-invoicing-light-text_head">
        Customers
      </h1>
      <div className="flex flex-col gap-[2px] overflow-scroll">
        <div className="bg-white w-full h-fit p-3 px-5 drop-shadow-sm flex justify-between  items-center gap-[1px] ">
          <h1 className=" tracking-normal font-semibold flex-1">Name</h1>
          <h1 className=" tracking-normal font-semibold flex-1">
            Company Name
          </h1>

          <h1 className=" tracking-normal font-semibold flex-1">
            Total Purchases
          </h1>
          <h1 className=" tracking-normal font-semibold flex-1">
            Outstanding Balance
          </h1>
          <h1 className=" tracking-normal font-semibold flex-1">Contact No</h1>
        </div>
        <div className="flex flex-1  flex-col overflow-scroll gap-[2px] ">
          <Customer />
          <Customer />
          <Customer />
          <Customer />
          <Customer />
          <Customer />
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default Content_Invoice;
