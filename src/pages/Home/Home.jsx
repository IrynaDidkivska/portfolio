import {
  MainWrapper,
  StyledHomeText,
  StyledHomeTitle,
  StyledHomeWrapper,
  StyledImgWrapper,
  StyledText,
} from "./Home.styled";
import photo from "../../assets/img/photo.jpg";
import { TechStack } from "../../components/TechStack/TechStack";
import { textFromBottom, textFromLeft } from "../../styles/animations";

export const Home = () => {
  return (
    <>
      <MainWrapper>
        <StyledHomeWrapper>
          <StyledHomeText
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textFromLeft}
          >
            Hi all. I am
          </StyledHomeText>
          <StyledHomeTitle
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={textFromBottom}
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
