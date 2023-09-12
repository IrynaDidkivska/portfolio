import { Link } from "../../styles/Link";
import { StyledList } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </StyledList>
    </nav>
  );
};
