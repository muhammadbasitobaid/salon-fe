import { ErrorMessage, ErrorMessageProps } from "formik";
import styled from "styled-components";

const ValidationErrorMessage = ({ name, component }: ErrorMessageProps) => {
  return <StyledValidationErrorMessage name={name} component={component} />;
};

const StyledValidationErrorMessage = styled(ErrorMessage)``;

export default ValidationErrorMessage;
