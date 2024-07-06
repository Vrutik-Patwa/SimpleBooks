import { Card, CardBody } from "@nextui-org/react";
import { FaCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
const Invoice = () => {
  return (
    <Card className="bg-invoice ">
      <CardBody className="h-[68px] border-none flex flex-row items-center text-white justify-around">
        {/* id */}
        <div className="text-medium">#RT3080</div>
        {/* Date */}
        <div>Due 19 Aug 2021</div>
        {/* Name */}
        <div>Jensen Huang</div>
        {/* Currency */}
        <div>1800</div>
        {/* Status */}
        <div className="bg-status_paid py-2 px-10 rounded-md text-status_text_paid flex flex-row font-bold items-center gap-2">
          <div className="items-center flex flex-1 justify-center">
            <FaCircle size={"9px"} />
          </div>
          <div>Paid</div>
        </div>
        {/* Arrow */}
        <div className="text-arrow ">
          <MdArrowForwardIos size={"14px"} />
        </div>
      </CardBody>
    </Card>
  );
};

export default Invoice;
