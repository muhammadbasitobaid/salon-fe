import styled from "styled-components";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 60%;
  max-width: 400px;
  padding: 20px;
  border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default AuthLayout;
