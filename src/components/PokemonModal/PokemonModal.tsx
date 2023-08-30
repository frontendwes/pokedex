"use client";
import { createPortal } from "react-dom";
import { Overlay } from "./components/Overlay";

const PokemonModal = () => {
  return createPortal(
    <Overlay>
      <h1>Hello, World</h1>
    </Overlay>,
    document.getElementById("modalRoot")!
  );
};

export default PokemonModal;
