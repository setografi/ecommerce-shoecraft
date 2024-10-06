import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Category01 from "../../assets/images/HeroShoes1.jpg";
import Category02 from "../../assets/images/Shoes3.jpg";
import Category03 from "../../assets/images/Shoes4.jpg";
import Category04 from "../../assets/images/Shoes2.jpg";

const categories = [
  { id: 1, name: "Casual", image: Category01 },
  { id: 2, name: "Sports", image: Category02 },
  { id: 3, name: "Formal", image: Category03 },
  { id: 4, name: "Limited Edition", image: Category04 },
];

function ShopByCategory() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const categoryElements = categoryRefs.current;

    gsap.set(section, { opacity: 0 });
    gsap.set(title, { x: -100, opacity: 0 });
    gsap.set(categoryElements, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(section, { opacity: 1, duration: 0.5 })
      .to(title, { x: 0, opacity: 1, duration: 0.8 })
      .to(categoryElements, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
      });

    // Glitch effect on hover
    categoryElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          skewX: () => Math.random() * 10 - 5,
          skewY: () => Math.random() * 10 - 5,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-secondary px-4 md:px-12 pt-8 pb-16 relative overflow-hidden"
    >
      {/* Brutalist decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-primary"></div>
      <div className="absolute bottom-0 right-0 w-full h-4 bg-accent"></div>
      <div className="absolute top-1/2 left-0 w-4 h-1/2 bg-neutralBlack transform -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-8 h-1/4 bg-buttonGreen"></div>

      <h2
        ref={titleRef}
        className="text-8xl font-black text-neutralBlack mb-12 relative z-10 uppercase tracking-tighter"
      >
        Shop by
        <br />
        Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4 relative z-10">
        {categories.map((category, index) => (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[index] = el)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-6xl font-black text-neutralWhite uppercase bg-neutralBlack px-4 py-2 transform -skew-x-12">
                {category.name}
              </h3>
            </div>
            {/* Brutalist accent */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-accent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
