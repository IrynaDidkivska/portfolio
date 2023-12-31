import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 428px) {
    width: 428px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media screen and (min-width: 1158px) {
    width: 1158px;
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;
