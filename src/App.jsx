import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { darkTheme, ligthTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
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
      <button onClick={switchTheme}>
        <FaMoon style={{ width: "1.5em", height: "1.5em" }} />
        <FaSun style={{ width: "1.5em", height: "1.5em" }} />
      </button>
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
