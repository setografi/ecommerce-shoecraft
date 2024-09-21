import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import HeroShoes1 from "../../assets/images/HeroShoes1.jpg";
import HeroShoes2 from "../../assets/images/HeroShoes2.jpg";
import HeroShoes3 from "../../assets/images/HeroShoes3.jpg";

function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 30,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-full bg-white mt-16 md:mt-2">
      <div className="grid grid-flow-row mx-12 py-5">
        <div
          className="w-full flex justify-between"
          style={{ fontSize: "calc(1rem + 10vw)" }}
        >
          {"ShoeCraft".split("").map((letter, index) => (
            <span key={index} className="text-black font-medium uppercase">
              {letter}
            </span>
          ))}
        </div>

        <div className="hidden md:block absolute top-32 right-12 -rotate-[15deg] bg-green-400 px-4">
          <h3 className="text-black text-2xl font-medium uppercase">
            Step Into Style!
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start pb-6 gap-8">
          <p className="text-xl md:text-4xl uppercase">
            Premium Quality Shoes for Every Style
          </p>

          <button
            className="bg-green-400 text-black text-lg font-medium px-3 py-2 hover:bg-green-500"
            aria-label="Shop now for premium quality shoes"
          >
            Shop Now
          </button>
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-black h-1 border-none" />
        </div>

        <div className="py-4 overflow-hidden whitespace-nowrap">
          <h2 ref={textRef} className="text-4xl md:text-8xl font-medium">
            LATEST COLLECTIONS & OFFERS <span>&rarr;</span>
          </h2>
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-black h-1 border-none" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4">
          <img
            src={HeroShoes1}
            width={3069}
            height={2258}
            alt="domino-studio-164_6wVEHfI-unsplash"
            className="w-56 h-full object-cover mb-2 md:mb-0 md:mr-2"
          />

          <img
            src={HeroShoes3}
            width={1800}
            height={1200}
            alt="lindsay-henwood-7_kRuX1hSXM-unsplash"
            className="w-56 md:w-36 h-full object-cover mb-4 md:mb-0 md:mr-4"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 md:gap-0">
            <h2 className="text-5xl font-medium">
              Kick Off Your Look with <span>Exclusive Shoe Offers!</span>
            </h2>

            <img
              src={HeroShoes2}
              width={3069}
              height={2258}
              alt="imani-bahati-LxVxPA1LOVM-unsplash"
              className="w-56 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
