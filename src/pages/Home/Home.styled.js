import { styled } from "styled-components";
import { motion } from "framer-motion";
export const MainWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHomeWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const StyledHomeText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 58px;
  font-size: 30px;
  line-height: 1.44;
`;
export const StyledHomeTitle = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 58px;
  font-weight: 700;
  line-height: 1.2;
`;
export const StyledText = styled(motion.p)`
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(#e70faa, #00c0fd);
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: 10px;
    object-fit: cover;
  }
`;
