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
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <StyledFormikInput
        type={type}
        name={name}
        placeholder={placeholder || ""}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      />
    </InputContainer>
  );
};

const StyledFormikInput = styled(Field)``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default Input;
