import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FaPlusCircle } from "react-icons/fa";
import Invoice from "./Invoice";
import { MdKeyboardArrowDown } from "react-icons/md";
const Content_Invoice = () => {
  const [invoices, setInvoice] = useState(0);
  return (
    <div className="mx-80 flex flex-1 flex-col gap-3">
      {/* Invoice Header */}
      <div className=" text-white flex flex-row w-full h-40 items-center ">
        <div className="text-3xl ml-2 font-semibold">
          <div>Invoices</div>
          <div className="text-sm">There are {invoices} total invoices</div>
        </div>
        <div className="ml-auto mr-10 flex flex-row gap-12 items-center">
          <div className="flex flex-row items-center gap-2">
            <div>Filter by status</div>
            <MdKeyboardArrowDown className="text-arrow" size={"17px"} />
          </div>
          <Button
            color="primary"
            className="border-none rounded-full font-medium flex flex-row items-center  p-4"
            startContent={<FaPlusCircle className="size-6" />}
            size="lg"
          >
            New Invoice
          </Button>
        </div>
      </div>
      {/* Invoices */}
      <div className="flex flex-col gap-5">
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
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
