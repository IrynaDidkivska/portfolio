import styled from "styled-components";
import { Link } from "../../styles/Link.js";
import { StyledSubtitle } from "../../styles/Title.js";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 373px 373px;
`;
export const StyledItems = styled.li`
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
export const StyledThumb = styled.div`
  padding: 0 25px 25px 25px;
`;
export const StyledTech = styled.p`
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.63;
`;
export const StyledSpan = styled.span`
  font-weight: 400;
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration-line: underline;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.background.accentbgc};
    border: none;
  }
`;
export const StyledSubtitlePr = styled(StyledSubtitle)`
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;
export const StyledImg = styled.img`
  width: 375px;
  height: 260px;
  border-radius: 20px;
`;
export const StyledWrapperLink = styled.div`
  display: flex;
  justify-content: center;
`;
