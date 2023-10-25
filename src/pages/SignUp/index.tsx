import Button from "../../components/Button";
import FormComp from "../../components/FormComp";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { StyledLink } from "../../common";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Username must be at least 8 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const initialValues = {
    username: "",
    confirmPassword: "",
    email: "",
    password: "",
  };

  useAuthRedirect();
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <FormComp
        title="SignUp"
        initialValues={initialValues}
        onSubmit={() => {
          console.log("submitted");
          localStorage.setItem("logged_user", "true");
          navigate("/");
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter email"
            />
            <Input
              type="text"
              name="username"
              label="Username"
              placeholder="Enter username"
            />
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter password"
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Re-enter Password"
              placeholder="Enter password again"
            />
            <Button
              type="submit"
              name="SignUp"
              onClick={(e: Event) => {
                e.preventDefault();
              }}
            />
            <StyledLink to={"/login"}>Log In</StyledLink>
          </>
        )}
      </FormComp>
    </AuthLayout>
  );
};

export default SignUp;
