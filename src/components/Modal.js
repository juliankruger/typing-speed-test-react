import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "./Main";

export default function Modal() {
  const { score, handleRestart } = useContext(GameContext);
  const buttonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
      if (buttonRef.current && buttonRef.current !== document.activeElement) {
        buttonRef.current.focus();
      }
    }, 1000);
    return clearTimeout();
  }, []);

  return (
    <dialog className="modal__screen">
      <div className="modal">
        <p className="modal__text">You scored {score} words!</p>
        <button
          ref={buttonRef}
          className="modal__button"
          onClick={handleRestart}
        >
          Reset
        </button>
      </div>
    </dialog>
  );
}
