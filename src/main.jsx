import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Global } from "./styles/Global.js";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <Global />
      <ToastContainer autoClose={1800} />
    </ThemeProvider>
  </BrowserRouter>
);
