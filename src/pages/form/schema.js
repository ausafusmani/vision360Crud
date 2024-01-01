import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(3).max(25),
  gender: yup
    .string()
    .required()
    .oneOf(
      ["Male", "Female", "Other"],
      "Invalid input"
    ),
  height: yup.number("Height must be a number").positive("Invalid Value"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one small letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*()_+]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Please Confirm Password")
    .oneOf([yup.ref("password")], "Password not matching"),
  email: yup.string().email().required("Enter Email Id"),
  state: yup.string().required(),
  favouriteFood: yup.array().required(),
});

export default schema;
