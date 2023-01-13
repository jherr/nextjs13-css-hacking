"use client";
import { useState } from "react";

function ModeToggle() {
  const [mode, setMode] = useState("light");
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById("theme");
        setMode((mode) => {
          if (mode === "light") {
            el?.setAttribute(
              "href",
              "https://unpkg.com/awsm.css/dist/awsm_theme_big-stone.min.css"
            );
            return "dark";
          } else {
            el?.setAttribute(
              "href",
              "https://unpkg.com/awsm.css/dist/awsm_theme_pearl-lusta.min.css"
            );
            return "light";
          }
        });
      }}
    >
      Toggle Mode
    </button>
  );
}

export default ModeToggle;
