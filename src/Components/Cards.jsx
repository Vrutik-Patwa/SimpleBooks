import React from "react";
import { Card, CardBody, Divider, CardHeader, Image } from "@nextui-org/react";

const Cards = (props) => {
  return (
    <Card className="w-[270px] h-[270px] shadow-2xl ">
      {/* <CardHeader className="flex justify-center w-full">Hello</CardHeader> */}
      {/* <Divider /> */}

      <CardBody className="flex flex-col items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mt-2"
          src={props.prop.img}
          width={222}
        />
        <h4 className="font-semibold text-lg flex-1 flex items-center">
          {props.prop.text}
          {props.text}
        </h4>
      </CardBody>
    </Card>
  );
};

export default Cards;
