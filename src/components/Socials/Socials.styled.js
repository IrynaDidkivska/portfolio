import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledSocials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.background.backgroundIcon};
  border-radius: 50%;
  width: 33px;
  height: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.background.accentbgc};
  }
`;
