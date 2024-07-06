import { Card, CardBody } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
const Invoice = () => {
  return (
    <Card className="bg-invoice">
      <CardBody className="h-[68px] border-none flex flex-row items-center text-white justify-evenly">
        {/* id */}
        <div className="text-medium">#RT3080</div>
        {/* Date */}
        <div>Due 19 Aug 2021</div>
        {/* Name */}
        <div>Jensen Huang</div>
        {/* Currency */}
        <div>1800</div>
        {/* Status */}
        <Card className="bg-white px-3 " radius="none">
          <CardBody className="">Paid</CardBody>
        </Card>
        {/* Arrow */}
        <div>></div>
      </CardBody>
    </Card>
  );
};

export default Invoice;
