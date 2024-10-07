import React from "react";

function FullscreenText() {
  return (
    <div
      className="w-full flex justify-between"
      style={{ fontSize: "calc(1rem + 10vw)" }}
    >
      {"ShoeCraft".split("").map((letter, index) => (
        <span key={index} className="text-neutralBlack font-medium uppercase">
          {letter}
        </span>
      ))}
    </div>
  );
}

export default FullscreenText;
