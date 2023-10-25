import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff; /* You can customize the link color */
  cursor: pointer;
  font-size: 14px;

  /* Additional styling, e.g., hover effect */
  &:hover {
    text-decoration: underline;
  }
`;
