import React from "react";
import Highscore from "./Highscore";
import Timer from "./Timer";

export default function DataSection() {
  return (
    <div className="data-section">
      <Timer />
      <Highscore />
    </div>
  );
}
