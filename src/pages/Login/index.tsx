import Button from "../../components/Button";
import FormComp from "../../components/FormComp";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <AuthLayout>
      <FormComp title="Login" initialValues={initialValues} onSubmit={() => {
        console.log('submitted')
      }}
      validationSchema={loginSchema}
      >
{({ errors, touched }) => (
  <>
        <Input type="email" name="email" label="Email" placeholder="Enter email" />
        <Input type="password" name="password" label="Password" placeholder="Enter password" />
        <Button type="submit" name="Login" />
  </>

)}
      </FormComp>
    </AuthLayout>
  );
};

export default Login;
