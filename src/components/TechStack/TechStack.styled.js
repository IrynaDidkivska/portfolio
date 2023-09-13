import styled from "styled-components";
import { StyledSubtitle, StyledText } from "../../styles/Title";

export const StyledIconList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 65px;
`;

export const StyledIcon = styled.li`
  width: 80px;
  height: 80px;
`;

export const StyledSubtitleTech = styled(StyledSubtitle)`
  margin-bottom: 50px;
`;

export const StyledTextTech = styled(StyledText)`
  text-align: center;
  margin-bottom: 100px;
`;
