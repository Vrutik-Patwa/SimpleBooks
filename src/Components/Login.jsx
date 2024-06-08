import React, { useState } from "react";
import { loginSchema } from "../schemas/login";
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
import { useFormik } from "formik";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log("submitted");
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const Login = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      country: "",
      number: "",
      terms: false,
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  const [isVisible, setIsVisible] = React.useState(false);
  // const [email, setEmail] = useState(values.email);
  // console.log(errors);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="bg-background min-w-[400px] ml-16 min-h-[82%] text-foreground self-center mb-10">
      <Card className="h-full">
        <CardHeader className="flex flex-col items-center mt-2 ">
          <h1 className="font-bold text-xl">Try SimpleBooks For Free</h1>
        </CardHeader>
        <CardBody className="gap-2">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col items-center gap-4"
          >
            <Input
              type="email"
              label="Email"
              id="email"
              isRequired
              // The form needs an email id
              variant="underlined"
              placeholder="Enter your email"
              isClearable={true}
              className={errors.email ? "w-[90%]" : "w-[90%] "}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              endContent={
                <button>
                  <MailIcon className="text-2xl text-default-400 pointer-events-none " />
                </button>
              }
            />
            {errors.email && touched.email && (
              <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-16px] self-start ml-5">
                {errors.email}
              </p>
            )}
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              variant="underlined"
              id="password"
              className="w-[90%]"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              endContent={
                <button
                  className="focus:outline-none mr-1"
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
            {errors.password && touched.password && (
              <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-16px] self-start ml-5">
                {errors.password}
              </p>
            )}
            <Input
              isRequired
              type="number"
              label="Number"
              variant="underlined"
              placeholder="Enter your Number"
              isClearable
              className="w-[90%]"
              id="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.number && touched.number && (
              <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-10px] self-start ml-5">
                {errors.number}
              </p>
            )}

            <Select
              label="Country"
              placeholder="Select an Country"
              className="w-[90%]"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {countries.map((country) => (
                <SelectItem key={country.key}>{country.label}</SelectItem>
              ))}
            </Select>
            {errors.country && touched.country && (
              <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-12px] self-start ml-5">
                {errors.country}
              </p>
            )}
            <Checkbox
              className="mr-4"
              name="terms"
              value={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              I agree to terms of services and policies
            </Checkbox>
            {errors.terms && touched.terms && (
              <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-10px] self-start ml-5">
                {errors.terms}
              </p>
            )}
            <Button
              className={`w-[90%] h-12 font-semibold text-xl ${
                isSubmitting ? "opacity-0" : ""
              }`}
              color="primary"
              type="submit"
              // disabled={isSubmitting}
            >
              Start a free trial
            </Button>
            {/* {console.log(isSubmitting)} */}
          </form>
          <Divider className="mt-2" />
        </CardBody>
        <CardFooter className="flex h-[15%] items-center">
          <div className="flex h-full items-center mb-4 gap-6 w-full justify-center">
            <FcGoogle className=" bg-white hover:bg-white text-black size-12 p-2 rounded-full" />
            {/* <LinkedInIcon /> */}

            <SocialIcon network="twitter" />
            <SocialIcon network="facebook" />
            <SocialIcon network="instagram" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

// Not Responsive design make it responsive
