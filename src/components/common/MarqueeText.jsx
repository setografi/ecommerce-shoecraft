import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function MarqueeText() {
  const textRef = useRef(null);

  // Array of texts to loop
  const textArray = [
    "LATEST COLLECTIONS & OFFERS",
    "LATEST COLLECTIONS & OFFERS",
    "LATEST COLLECTIONS & OFFERS",
    "LATEST COLLECTIONS & OFFERS",
    "LATEST COLLECTIONS & OFFERS",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = textRef.current;
      gsap.to(element, {
        xPercent: -100, // Animasi bergerak ke kiri
        repeat: -1, // Infinite
        duration: 30,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="py-4 overflow-hidden whitespace-nowrap">
      <div ref={textRef} className="flex text-4xl md:text-8xl font-medium">
        {textArray.map((text, index) => (
          <h2 key={index} className="mx-4">
            {text} <span>&rarr;</span>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default MarqueeText;
