import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mainLigth};
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
