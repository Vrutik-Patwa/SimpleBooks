import React from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { MailIcon } from "../Icons/MailIcon";
import { EyeFilledIcon } from "../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon";

const Signin = () => {
  const { values, errors, handleBlur, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const [isVisible, setIsVisible] = React.useState(false);
  // const [email, setEmail] = useState(values.email);
  // console.log(errors);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="dark bg-background h-screen">
      <form className="h-full w-full flex justify-center items-center">
        <Card className="h-[70%] w-[420px] py-8">
          <CardBody className="">
            <div className="text-center font-bold text-2xl">Login</div>
            <div className="flex flex-col gap-2 justify-center mt-5">
              <Input
                type="email"
                label="Username"
                id="username"
                isRequired
                // variant="underlined"
                placeholder=""
                isClearable={true}
                className={errors.email ? "w-[90%]" : "w-[90%] "}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                labelPlacement="outside"
                endContent={
                  <button>
                    <MailIcon className="text-2xl text-default-400 pointer-events-none " />
                  </button>
                }
              />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                // variant="underlined"
                labelPlacement="outside"
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
              {/* {errors.password && touched.password && (
                <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-16px] self-start ml-5">
                  {errors.password}
                </p>
              )} */}

              {/* {errors.email && touched.email && (
                <p className="bg-red text-red-700 text-sm mt-[-12px] mb-[-16px] self-start ml-5">
                  {errors.email}
                </p>
              )} */}
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default Signin;
