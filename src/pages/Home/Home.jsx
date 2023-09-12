import {
  MainWrapper,
  StyledHomeText,
  StyledHomeTitle,
  StyledHomeWrapper,
  StyledImgWrapper,
  StyledText,
} from "./Home.styled";
import photo from "../../assets/img/C32D7A0C-B2A2-46A7-8C4B-F65AB447D1AC_1_201_a.jpg";
import { TechStack } from "../TechStack/TechStack";
import { textFromBottom, textFromLeft } from "../../styles/animations";

export const Home = () => {
  return (
    <>
      <MainWrapper>
        <StyledHomeWrapper>
          <StyledHomeText
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={textFromBottom}
          >
            Hi all. I am
          </StyledHomeText>
          <StyledHomeTitle
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textFromLeft}
          >
            Iryna Didkivska
          </StyledHomeTitle>
          <StyledText
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textFromLeft}
          >
            &#62; Front-end developer
          </StyledText>
        </StyledHomeWrapper>
        <StyledImgWrapper>
          <img src={photo} alt="developer photo" />
        </StyledImgWrapper>
      </MainWrapper>
      <TechStack />
    </>
  );
};
