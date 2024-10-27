import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import About1 from "../assets/images/Shoes5.jpg";

function AboutPage() {
  const textRef = useRef(null);

  useEffect(() => {
    // Infinite text animation
    gsap.to(textRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none",
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-neutralWhite">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-secondary border-b-8 border-neutralBlack">
        <h1 className="text-[20vw] font-black text-neutralBlack uppercase tracking-tighter transform -skew-x-12">
          About Us
        </h1>
      </section>

      {/* Mission Section */}
      <section className="px-4 md:px-12 py-16 border-b-8 border-neutralBlack">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-8 text-neutralBlack uppercase">
            Our Mission
          </h2>
          <p className="text-2xl leading-relaxed">
            At <span className="text-primary font-bold">ShoeCraft</span>, we
            believe that shoes are more than just footwear. They are an
            extension of your identity. Located in Jakarta's heart, we deliver
            premium footwear with unmatched design and craftsmanship.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent text-neutralWhite px-4 md:px-12 py-16 border-b-8 border-neutralBlack">
        <div className="overflow-hidden whitespace-nowrap">
          <div ref={textRef} className="inline-flex">
            {Array(3)
              .fill("STYLE • COMFORT • SUSTAINABILITY • INNOVATION • ")
              .map((text, index) => (
                <span key={index} className="text-4xl font-bold">
                  {text}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-12 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 text-neutralBlack uppercase">
            Crafted with Purpose
          </h2>
          <p className="text-xl leading-relaxed">
            Our design approach focuses on innovation without compromising
            quality. Every pair of shoes is crafted with precision and a
            commitment to reducing environmental impact. We work closely with
            artisans to bring you shoes that are not just unique but also
            crafted with heart.
          </p>
        </div>
        <div className="relative border-8 border-neutralBlack transform rotate-2">
          <img
            src={About1}
            alt="ShoeCraft craftsmanship"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-neutralWhite px-4 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "5K+", label: "Happy Customers" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "50+", label: "Unique Designs" },
          ].map((stat, index) => (
            <div
              key={index}
              className="border-4 border-neutralBlack p-8 transform hover:-rotate-2 transition-transform"
            >
              <h3 className="text-6xl font-black mb-2">{stat.number}</h3>
              <p className="text-xl font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
