import React from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Invoice from "./Invoice";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";
import { PlusIcon } from "@heroicons/react/16/solid";
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
      <h1 className="text-2xl font-bold font-spaceGrotesk text-invoicing-light-text_head">
        Invoice
      </h1>
      <div className="flex flex-col gap-[1.2px] ">
        <div className="bg-white w-full h-fit p-3 px-5 drop-shadow-sm flex justify-between  items-center gap-[1px]">
          <h1 className=" tracking-normal font-semibold">All Invoices</h1>
          <div className="flex flex-row justify-center items-center gap-20 font-semibold">
            <ButtonGroup
              variant="solid"
              color="primary"
              className="gap-[0.5px]"
            >
              <Button>{labelsMap[selectedOptionValue]}</Button>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly>
                    <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Merge options"
                  selectedKeys={selectedOption}
                  selectionMode="single"
                  onSelectionChange={setSelectedOption}
                  className="max-w-[300px]"
                >
                  <DropdownItem key="status">
                    {labelsMap["status"]}
                  </DropdownItem>
                  <DropdownItem key="time">{labelsMap["time"]}</DropdownItem>
                  <DropdownItem key="amount">
                    {labelsMap["amount"]}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            <Button color="secondary" className="rounded-md">
              <PlusIcon
                className="
          size-5 bg-white text-blue-900 rounded-full "
              />
              New
            </Button>
          </div>
        </div>
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
      </div>
    </div>
  );
};

export default Content_Invoice;
