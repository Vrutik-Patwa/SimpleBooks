import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const numberRules = /^[0-9]{10}$/;
// min 5 characters,1 uppercase 1 lowercase,1numeric digit (regex)

export const loginSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  number: yup
    .string()
    .required("Required")
    .matches(numberRules, { message: "Number should be 10 digits" }),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password " })
    .required("Required"),
  country: yup.string().required("Required"),
  terms: yup
    .boolean()
    .oneOf([true], "The checkbox must be checked")
    .required("The checkbox is required"),
});

// number rules are not right need to fix that and add terms errors that it is required with country
