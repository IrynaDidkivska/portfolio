import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Link = styled(NavLink)`
  padding: 5px 15px;
  color: ${({ theme }) => theme.colors.mainLigth};
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  border: 3px solid transparent;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
    border: 3px solid #e70faa;
    border-radius: 5px;
    height: 100%;
  }
`;
