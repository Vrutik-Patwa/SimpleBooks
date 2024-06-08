import React from "react";
import {
  Card,
  CardBody,
  Divider,
  CardHeader,
  Image,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { FaExternalLinkAlt } from "react-icons/fa";
const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Card className="w-[290px] h-[290px] shadow-2xl ">
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
        </div>
        <div className="card-back">
          <Card className="w-[290px] h-[290px] shadow-2xl">
            <CardHeader className="flex ml-2 w-full font-semibold text-xl mt-2">
              {props.prop.text}
            </CardHeader>

            <Divider />
            <CardBody className="ml-2 text-justify flex">
              <div className="mr-2">{props.prop.body}</div>
            </CardBody>
            <Divider className="w-full" />
            <CardFooter className="w-full flex justify-center">
              <Link className="font-bold" href="/signin">
                Sign In now
                <FaExternalLinkAlt className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
