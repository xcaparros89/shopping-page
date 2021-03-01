import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required(),
  surnames: yup.string().required(),
  email: yup.string().email("Invalid email").required("Required"),
  username: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.number().required(),
  password: yup.string().required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Password confirm is required"),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});
