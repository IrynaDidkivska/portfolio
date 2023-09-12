import { StyledSubtitle, StyledTitle } from "../../styles/Title";
import { textFromLeft } from "../../styles/animations";
import { StyledImg, StyledItems } from "./Project.styled.js";
import { HiLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import {
  StyledLink,
  StyledTech,
  StyledSpan,
  StyledSubtitlePr,
} from "./Project.styled.js";
import { StyledText } from "../../styles/Title.js";
import rentcar from "../../assets/img/rentcar.jpg";

export const Projects = () => {
  return (
    <div>
      <StyledTitle>Projects</StyledTitle>
      <StyledSubtitle
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textFromLeft}
      >
        Things I&apos;ve built so far
      </StyledSubtitle>
      <ul>
        <StyledItems>
          <StyledImg src={rentcar} alt="rentcar website" />
          <StyledSubtitlePr>CarRentals</StyledSubtitlePr>
          <StyledText>
            This web application is designed to help users easily find and rent
            cars of various configurations. It&apos;s built using Vite,
            providing a seamless experience for users looking to rent a car.
          </StyledText>
          <StyledTech>
            <StyledSpan> Tech stack: </StyledSpan>
            HTML, JavaScript, React
          </StyledTech>
          <StyledLink to="https://rent-car-project.vercel.app/">
            <HiLink />
            Live Preview
          </StyledLink>
          <StyledLink to="https://github.com/IrynaDidkivska/rent-car-project">
            <AiFillGithub style={{ width: "26px", height: "26px" }} />
            View Code
          </StyledLink>
        </StyledItems>
        <StyledItems></StyledItems>
        <StyledItems></StyledItems>
        <StyledItems></StyledItems>
      </ul>
    </div>
  );
};
