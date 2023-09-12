import { StyledSubtitle, StyledTitle } from "../../styles/Title";
import { textFromLeft } from "../../styles/animations";

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
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
