import { Socials } from "../Socials/Socials";
import { Navbar } from "../NavBar/Navbar";
import {
  StyledFooterAddressLink,
  StyledFooterAddressList,
  StyledFooterText,
  StyledFooterWrapper,
  StyledFooterWrapperSoc,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <footer>
      <StyledFooterWrapperSoc>
        <address>
          <StyledFooterAddressList>
            <li>
              <StyledFooterAddressLink href="tel:+37127266966">
                +37127266966
              </StyledFooterAddressLink>
            </li>
            <li>
              <StyledFooterAddressLink href="mailto:ididkivska@gmail.com">
                ididkivska@gmail.com
              </StyledFooterAddressLink>
            </li>
          </StyledFooterAddressList>
        </address>
        <Socials />
      </StyledFooterWrapperSoc>
      <StyledFooterWrapper>
        <Navbar />
        <StyledFooterText>
          Built by Iryna Didkivska with Love, Coffee &#38; React
        </StyledFooterText>
      </StyledFooterWrapper>
    </footer>
  );
};
