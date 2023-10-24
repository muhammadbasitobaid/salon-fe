import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
}

const Input = ({ type, name, label, placeholder }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledFormikInput
        type={type}
        name={name}
        placeholder={placeholder || ""}
      />
      <ErrorMessage name={name}/>
    </div>
  );
};

const StyledFormikInput = styled(Field)``;

export default Input;
