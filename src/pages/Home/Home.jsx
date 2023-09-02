import {
  StyledHomeText,
  StyledHomeTitle,
  StyledHomeWrapper,
  StyledImgWrapper,
  StyledText,
} from "./Home.styled";
import photo from "../../assets/img/C32D7A0C-B2A2-46A7-8C4B-F65AB447D1AC_1_201_a.jpg";

export const Home = () => {
  return (
    <>
      <StyledHomeWrapper>
        <StyledHomeText>Hi all. I am</StyledHomeText>
        <StyledHomeTitle>Iryna Didkivska</StyledHomeTitle>
        <StyledText>&#62; Front-end developer</StyledText>
      </StyledHomeWrapper>
      <StyledImgWrapper>
        <img src={photo} alt="developer photo" />
      </StyledImgWrapper>
    </>
  );
};
