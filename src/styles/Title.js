import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTitle = styled.h2`
  margin-bottom: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.headingLigth};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.title.secondary};
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.4px;
`;

export const StyledSubtitle = styled(motion.h3)`
  margin-bottom: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.headingLigth};
  font-size: 30px;
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.4px;
`;

export const StyledText = styled.p`
  text-align: left;
  padding: 5px;
  font-size: 24px;
  line-height: 1.44;
`;
