import { styled } from "styled-components";

export const StyledHomeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const StyledHomeText = styled.p`
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 58px;
  font-size: 30px;
  line-height: 1.44;
`;
export const StyledHomeTitle = styled.h1`
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 58px;
  font-weight: 700;
  line-height: 1.2;
`;
export const StyledText = styled.p`
  font-size: 30px;
  line-height: 1.44;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const StyledImgWrapper = styled.div`
  width: 339px;
  height: 339px;
  border-radius: 50%;
`;
