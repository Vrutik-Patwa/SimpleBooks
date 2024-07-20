import { Card, CardBody } from "@nextui-org/react";
import { FaCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
const Invoice = () => {
  return (
    <Card className="bg-invoice ">
      <CardBody className="h-[68px] border-none flex flex-row items-center text-white justify-around">
        {/* id */}
        <div className="text-medium">
          <span className="text-hashtag">#</span>RT3080
        </div>
        {/* Date */}
        <div>Due 19 Aug 2021</div>
        {/* Name */}
        <div>Jensen Huang</div>
        {/* Currency */}
        <div>1800</div>
        {/* Status */}
        <div className="flex flex-row items-center gap-2 px-10 py-2 font-bold rounded-md bg-status_paid text-status_text_paid">
          <div className="flex items-center justify-center flex-1">
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
