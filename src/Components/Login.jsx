import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  Divider,
  CardFooter,
} from "@nextui-org/react";
import { EyeFilledIcon } from "../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon";
import { MailIcon } from "../Icons/MailIcon";
import { countries } from "./Countries";
import { FcGoogle } from "react-icons/fc";
import { SocialIcon } from "react-social-icons";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="bg-background min-w-[400px] ml-16 h-[80%] text-foreground self-center mb-10">
      <Card className="h-full">
        <CardHeader className="flex flex-col items-center mt-2 ">
          <h1 className="font-bold text-xl">Try SimpleBooks For Free</h1>
        </CardHeader>
        <CardBody className="flex items-center gap-4">
          <Input
            type="email"
            label="Email"
            variant="underlined"
            placeholder="Enter your email"
            isClearable
            className="w-[90%]"
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
            className="w-[90%]"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Input
            type="number"
            label="Number"
            variant="underlined"
            placeholder="Enter your Number"
            isClearable
            className="w-[90%]"
          />
          <Select
            label="Country"
            placeholder="Select an Country"
            className="w-[90%]"
          >
            {countries.map((country) => (
              <SelectItem key={country.key}>{country.label}</SelectItem>
            ))}
          </Select>
          <Checkbox className="mr-4">
            I agree to terms of services and policies{" "}
          </Checkbox>
          <Button
            className="w-[90%] h-12 font-semibold text-xl"
            color="primary"
          >
            Start a free trial
          </Button>
          <Divider className="" />
        </CardBody>
        <CardFooter className="flex h-[15%] items-center">
          <div className="flex h-full items-center mb-4 gap-6 w-full justify-center">
            <FcGoogle className=" bg-white hover:bg-white text-black size-12 p-2 rounded-full" />
            {/* <LinkedInIcon /> */}

            <SocialIcon network="twitter" />
            <SocialIcon network="facebook" />
            <SocialIcon network="instagram" className="size-10" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
