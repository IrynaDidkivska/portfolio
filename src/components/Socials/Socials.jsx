import React from "react";
import { StyledLink, StyledSocials } from "./Socials.styled";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <StyledLink to="https://github.com/IrynaDidkivska">
          <TbBrandGithubFilled style={{ width: "26px", height: "26px" }} />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://twitter.com/Didkivska">
          <BsTwitter style={{ width: "24px", height: "24px" }} />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://www.linkedin.com/in/iryna-didkivska/">
          <FaLinkedinIn style={{ width: "23px", height: "23px" }} />
        </StyledLink>
      </li>
    </StyledSocials>
  );
};
