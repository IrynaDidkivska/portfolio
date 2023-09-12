import styled from "styled-components";
import { Link } from "../../styles/Link.js";
import { StyledSubtitle } from "../../styles/Title.js";

export const StyledList = styled.ul``;
export const StyledItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 373px;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  color: ${({ theme }) => theme.colors.headingLigth};
  text-decoration-line: underline;
`;
export const StyledSubtitlePr = styled(StyledSubtitle)`
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;
export const StyledImg = styled.img`
  width: 375px;
  height: 260px;
`;
