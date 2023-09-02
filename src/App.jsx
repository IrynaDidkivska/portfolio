import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { TechStack } from "./pages/TechStack/TechStack";
import { Footer } from "./components/Footer/Footer";
import { darkTheme, ligthTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Global } from "./styles/Global";

function App() {
  const [toggleTheme, setToggleThem] = useState("light");
  const switchTheme = () => {
    toggleTheme === "light" ? setToggleThem("dark") : setToggleThem("light");
  };
  return (
    <ThemeProvider theme={toggleTheme === "light" ? ligthTheme : darkTheme}>
      <button onClick={switchTheme}>Toggle theme</button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tech" element={<TechStack />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> <Global />
    </ThemeProvider>
  );
}

export default App;
