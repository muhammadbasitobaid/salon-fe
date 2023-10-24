
import Button from "../../components/Button";
import FormComp from "../../components/FormComp";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(8, 'Username must be at least 8 characters')
    .required('Username is required'),
  
  email: Yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)'
    )
    .required('Password is required'),

  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm password is required'),
});


const SignUp = () => {
  const initialValues = {
    username: "",
    confirmPassword: "",
    email: "",
    password: "",
  };
  return (
    <AuthLayout>
      <FormComp title="SignUp" initialValues={initialValues} onSubmit={() => {
        console.log('submitted')
      }}
     validationSchema={SignupSchema} 
      >

{({ errors, touched }) => (
    <>
        <Input type="email" name="email" label="Email" placeholder="Enter email" />
        <Input type="text" name="username" label="Username" placeholder="Enter username" />
        <Input type="password" name="password" label="Password" placeholder="Enter password" />
        <Input type="password" name="confirmPassword" label="Re-enter Password" placeholder="Enter password again" />
        <Button type="submit" name="SignUp" />

    </>
)}
      </FormComp>
    </AuthLayout>
  );
};

export default SignUp;
