import React from "react";

import { StyledList } from "./Navbar.styled";
import { Link } from "../../styles/Link";

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
          <Link to="/tech">Tech Stack</Link>
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
