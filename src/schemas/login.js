import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters,1 uppercase 1 lowercase,1numeric digit (regex)

export const loginSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  number: yup
    .number()
    .positive()
    .integer()
    .required("Required")
    .min(10)
    .max(10),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password " })
    .required("Required"),
});
