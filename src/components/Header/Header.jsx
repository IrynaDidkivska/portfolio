import { Socials } from "../Socials/Socials";
import { StyledHeader, StyledLogo } from "./Header.styled";
import { Navbar } from "../NavBar/Navbar";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>ID&#58;&#41;</StyledLogo>
      <Navbar />
      <Socials />
    </StyledHeader>
  );
};
