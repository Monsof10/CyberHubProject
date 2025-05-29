import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext";
import App from "./App.jsx";
import Layout from "./components/Layout/Layout";
import BootstrapClient from "./components/Client/BootstrapClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/fonts/phosphor/style.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <AuthProvider>
        <Layout>
        <App />
        <BootstrapClient />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);


