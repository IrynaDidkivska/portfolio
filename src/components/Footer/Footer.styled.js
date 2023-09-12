import { styled } from "styled-components";

export const StyledFooterWrapperSoc = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 32px;
  border-bottom: 2px solid #666666;
`;

export const StyledFooterAddressList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const StyledFooterAddressLink = styled.a`
  font-family: inherit;
  font-style: normal;
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.headingLigth};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.background.accent};
  }
`;
export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 40px;
`;
export const StyledFooterText = styled.p`
  font-family: inherit;
  font-style: normal;
  font-size: 18px;
  line-height: 1.44;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
