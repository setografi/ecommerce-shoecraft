import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import About1 from "../../assets/images/Shoes5.jpg";

function AboutSection() {
  const textRef = useRef(null);

  // Array of texts to loop
  const textArray = [
    "Step into the future with ShoeCraft — where style meets comfort, and sustainability drives innovation.",
    "Crafted with precision, built for those who walk their own path.",
    "Eco-friendly, bold, and timeless.",
    "Discover ShoeCraft, crafted for life.",
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
    <section className="w-full h-full px-4 md:px-12">
      <div>
        <hr className="absolute left-0 w-full border-t-4 border-dashed border-neutralBlack" />
      </div>

      <div className="text-2xl leading-relaxed text-zinc-800">
        <div className="w-full h-full grid grid-flow-col justify-start items-start gap-4">
          <div className="h-full bg-accent p-4 border-x-4 border-neutralBlack">
            <h2 className="text-neutralWhite text-6xl font-medium">About Us</h2>
          </div>

          <p className="py-4">
            At <span className="text-3xl font-bold">ShoeCraft</span>, we believe
            that shoes are more than just footwear. They are an extension of
            your identity. Our mission is to craft shoes that combine style,
            comfort, and sustainability, using eco-friendly materials and
            timeless craftsmanship.
          </p>
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-neutralBlack h-1 border-none" />
        </div>

        <div className="flex justify-between items-start py-4">
          <div className="flex flex-col overflow-hidden">
            <p>
              Our design approach focuses on innovation without compromising
              quality. Every pair of shoes is crafted with precision and a
              commitment to reducing environmental impact. We work closely with
              artisans to bring you shoes that are not just unique but also
              crafted with heart.
            </p>

            <div className="bg-accent py-1 mt-5 overflow-hidden whitespace-nowrap border-y-4 border-neutralBlack">
              <div
                ref={textRef}
                className="flex text-neutralWhite text-2xl font-medium"
              >
                {textArray.map((text, index) => (
                  <h2 key={index} className="mx-4">
                    {text} <span>•</span>
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <img
            src={About1}
            alt="tamas-pap-_PLpBPi6IB4-unsplash"
            loading="lazy"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>

      <div>
        <hr className="absolute left-0 w-full border-t-4 border-dashed border-neutralBlack" />
      </div>
    </section>
  );
}

export default AboutSection;
