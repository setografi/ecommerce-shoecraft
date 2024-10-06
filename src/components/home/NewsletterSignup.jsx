import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function NewsletterSignup() {
  const scrollTextRef = useRef(null);

  useEffect(() => {
    const scrollText = scrollTextRef.current;
    const textWidth = scrollText.offsetWidth;
    const animation = gsap.to(scrollText, {
      x: -textWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-primary text-neutralWhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-accent"></div>
      <div className="absolute bottom-0 right-0 w-full h-4 bg-secondary"></div>

      <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter transform -skew-x-12">
        Stay Updated
      </h2>

      <div className="overflow-hidden whitespace-nowrap mb-12">
        <div ref={scrollTextRef} className="inline-block">
          <span className="text-2xl md:text-4xl font-bold">
            Subscribe for exclusive ShoeCraft news and offers • Get the latest
            drops • Be the first to know •&nbsp;
          </span>
        </div>
      </div>

      <form className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-3xl mx-auto">
        <input
          type="email"
          placeholder="YOUR EMAIL"
          className="px-4 py-4 w-full md:w-2/3 text-neutralBlack text-xl font-bold uppercase bg-neutralWhite border-4 border-neutralBlack"
          required
        />
        <button
          type="submit"
          className="px-8 py-4 bg-buttonGreen text-neutralBlack font-black text-xl uppercase hover:bg-hoverGreen transition-colors duration-300 border-4 border-neutralBlack transform hover:translate-x-1 hover:-translate-y-1"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
