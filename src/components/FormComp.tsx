import { Form, Formik, FormikHelpers } from "formik";
import styled from "styled-components";

interface FormCompProps {
  title: string;
  children: ({ errors, touched }: { errors: any; touched: any }) => JSX.Element;
  initialValues: {};
  onSubmit: (values: {}, { setSubmitting }: FormikHelpers<{}>) => void;
  validationSchema: any;
}
const FormComp = ({
  title,
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: FormCompProps) => {
  return (
    <StyledFormContainer>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <StyledForm noValidate>{children({ errors, touched })}</StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default FormComp;
