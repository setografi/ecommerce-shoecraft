import React from "react";
import FullscreenText from "../common/FullscreenText";
import MarqueeText from "../common/MarqueeText";

import HeroShoes1 from "../../assets/images/HeroShoes1.jpg";
import HeroShoes2 from "../../assets/images/HeroShoes2.jpg";
import HeroShoes3 from "../../assets/images/HeroShoes3.jpg";

function HeroSection() {
  return (
    <section className="relative w-full h-full bg-neutralWhite mt-14 md:mt-10 lg:mt-2 px-4 md:px-12 py-8">
      <div className="grid grid-flow-row">
        <FullscreenText />

        <div className="hidden md:block absolute md:top-20 lg:top-32 right-12 -rotate-[15deg] bg-buttonGreen px-4">
          <h3 className="text-neutralBlack md:text-lg lg:text-2xl font-medium uppercase">
            Step Into Style!
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start pb-6 gap-6">
          <p className="text-xl md:text-4xl uppercase">
            Premium Quality Shoes for Every Style
          </p>

          <button
            className="bg-buttonGreen text-neutralBlack text-xl font-medium px-3 py-2 hover:bg-hoverGreen"
            aria-label="Shop now for premium quality shoes"
          >
            Shop Now
          </button>
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-neutralBlack h-1 border-none" />
        </div>

        <MarqueeText />

        <div>
          <hr className="absolute left-0 w-full bg-neutralBlack h-1 border-none" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4">
          <img
            src={HeroShoes1}
            width={3069}
            height={2258}
            loading="lazy"
            alt="domino-studio-164_6wVEHfI-unsplash"
            className="w-56 h-full object-cover mb-2 md:mb-0 md:mr-2"
          />

          <img
            src={HeroShoes3}
            width={1800}
            height={1200}
            loading="lazy"
            alt="lindsay-henwood-7_kRuX1hSXM-unsplash"
            className="w-56 md:w-36 h-full object-cover mb-4 md:mb-0 md:mr-4"
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-4 lg:gap-0">
            <h2 className="text-5xl font-medium">
              Kick Off Your Look with <span>Exclusive Shoe Offers!</span>
            </h2>

            <img
              src={HeroShoes2}
              width={3069}
              height={2258}
              loading="lazy"
              alt="imani-bahati-LxVxPA1LOVM-unsplash"
              className="w-56 h-full object-cover"
            />
          </div>
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-neutralBlack h-1 border-none" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
