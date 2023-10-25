import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: Event) => void;
  name: string;
}

const Button = ({ type, name }: ButtonProps) => {
  return <StyledButton type={type}>{name}</StyledButton>;
};

const StyledButton = styled.button``;

export default Button;
