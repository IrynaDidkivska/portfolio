import { Socials } from "../Socials/Socials";
import { StyledHeader } from "./Header.styled";
import { Navbar } from "../NavBar/Navbar";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <Socials />
    </StyledHeader>
  );
};
