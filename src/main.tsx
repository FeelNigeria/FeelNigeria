declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
import $ from "jquery";
window.$ = $;
window.jQuery = $;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "../src/index.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import "../lib/lightbox/css/lightbox.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
