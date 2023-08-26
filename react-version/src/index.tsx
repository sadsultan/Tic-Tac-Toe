import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const rootElement = document.getElementById("react-root");
const root = createRoot(rootElement!);

let ShowModal = false;

root.render(
  <StrictMode>
    <Main />
    {ShowModal && <Modal message="Congratulations to Player 1! You win!!" />}
    <Footer />
  </StrictMode>
);

