import { SpriteSVG } from "../../assets/img/SpriteSVG";
import { MainWrapper } from "../../styles/Container";

import {
  StyledIcon,
  StyledIconList,
  StyledSubtitleTech,
  StyledTextTech,
} from "./TechStack.styled";

export const TechStack = () => {
  return (
    <MainWrapper>
      <StyledSubtitleTech>My Tech Stack</StyledSubtitleTech>
      <StyledTextTech>
        Technologies I&apos;ve been working with recently
      </StyledTextTech>
      <StyledIconList>
        <StyledIcon>
          <SpriteSVG name="css" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="html" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="js" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="react" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="redux" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="tailwind" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="sass" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="nextjs" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="github" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="framer-motion" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="vscode" />
        </StyledIcon>
        <StyledIcon>
          <SpriteSVG name="git-icon" />
        </StyledIcon>
      </StyledIconList>
    </MainWrapper>
  );
};
