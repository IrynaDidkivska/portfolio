import { StyledSubtitle, StyledTitle, StyledText } from "../../styles/Title.js";
import { textFromLeft } from "../../styles/animations.js";

export const About = () => {
  return (
    <div>
      <StyledTitle>About Me</StyledTitle>
      <StyledText>
        I&apos;m a passionate software developer with a strong commitment to
        building exceptional web experiences. My journey in the tech world has
        been guided by a profound interest in creating user-friendly interfaces
        and seamless online interactions. With a background in cross-cultural
        communication, managing customer requirements, and time management,
        I&apos;ve cultivated a versatile skill set that sets me apart in the
        dynamic field of technology.
      </StyledText>
      <StyledText>
        I take pride in my meticulous attention to detail and my exceptional
        time management abilities, which have allowed me to lead successful team
        projects and deliver high-quality results.
      </StyledText>
      <StyledSubtitle
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textFromLeft}
      >
        Why me?
      </StyledSubtitle>
      <StyledText>
        I firmly believe that every challenge is an opportunity for growth, and
        this mindset drives me to continually expand my knowledge and stay
        up-to-date with the latest advancements in technology. With a focus on
        HTML5, CSS3, JavaScript, React, and English, I&apos;m dedicated to
        honing my skills and taking on exciting new projects.
      </StyledText>
      <StyledText>
        I welcome the opportunity to connect with fellow professionals and
        enthusiasts. Feel free to reach out to me on LinkedIn, where we can
        create a collaborations and share our insights in the tech industry.
      </StyledText>

      <StyledText>
        If you are looking for someone to build your personal portfolio or a
        business website, I can help you. Currently based in Alicante, Spain.
      </StyledText>
    </div>
  );
};
