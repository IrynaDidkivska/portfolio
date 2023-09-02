import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={1800} />
  </BrowserRouter>
);
