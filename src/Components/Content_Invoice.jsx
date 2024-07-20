import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FaPlusCircle } from "react-icons/fa";
import Invoice from "./Invoice";
import { MdKeyboardArrowDown } from "react-icons/md";
const Content_Invoice = () => {
  const [invoices, setInvoice] = useState(0);
  return (
    <div className="flex flex-col flex-1 gap-3 mx-80">
      {/* Invoice Header */}
      <div className="flex flex-row items-center w-full h-40 ">
        <div className="ml-2 text-3xl font-semibold">
          <div>Invoices</div>
          <div className="text-sm">There are {invoices} total invoices</div>
        </div>
        <div className="flex flex-row items-center gap-12 ml-auto mr-10">
          <div className="flex flex-row items-center gap-2">
            <div>Filter by status</div>
            <MdKeyboardArrowDown className="text-arrow" size={"17px"} />
          </div>
          <Button
            color="primary"
            className="flex flex-row items-center p-4 font-medium border-none rounded-full"
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
