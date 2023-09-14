import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { darkTheme, ligthTheme } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Global } from "./styles/Global";
import { FaMoon, FaSun } from "react-icons/fa";
import { Container } from "./styles/Container";

function App() {
  const [toggleTheme, setToggleThem] = useState("light");
  const switchTheme = () => {
    toggleTheme === "light" ? setToggleThem("dark") : setToggleThem("light");
  };
  return (
    <ThemeProvider theme={toggleTheme === "light" ? ligthTheme : darkTheme}>
      <Toggle onClick={switchTheme}>
        {toggleTheme === "dark" ? (
          <FaMoon style={{ width: "1.8em", height: "1.8em" }} />
        ) : (
          <FaSun style={{ width: "1.8em", height: "1.8em" }} />
        )}
      </Toggle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Container>
        <Footer />
      </Container>

      <Global />
    </ThemeProvider>
  );
}

export default App;
export const Toggle = styled.button`
  position: absolute;
  right: 5%;
  top: 40px;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.background.backgroundIcon};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    color: #efea75;
  }
`;
