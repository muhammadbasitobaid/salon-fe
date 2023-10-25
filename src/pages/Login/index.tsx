import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FormComp from "../../components/FormComp";
import Input from "../../components/Input";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import AuthLayout from "../../layouts/AuthLayout";
import * as Yup from "yup";
import { StyledLink } from "../../common";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  useAuthRedirect();
  return (
    <AuthLayout>
      <FormComp
        title="Login"
        initialValues={initialValues}
        onSubmit={() => {
          console.log("submitted");
          localStorage.setItem("logged_user", "true");
          navigate("/");
        }}
        validationSchema={loginSchema}
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
              type="password"
              name="password"
              label="Password"
              placeholder="Enter password"
            />
            <Button
              type="submit"
              name="Login"
              onClick={(e: Event) => {
                e.preventDefault();
              }}
            />

            <StyledLink to={"/signup"}>Sign Up</StyledLink>
          </>
        )}
      </FormComp>
    </AuthLayout>
  );
};

export default Login;
