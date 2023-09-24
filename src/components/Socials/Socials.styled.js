import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledSocials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.iconColor};
  background-color: ${({ theme }) => theme.background.backgroundIcon};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.background.accentbgc};
  }
`;
