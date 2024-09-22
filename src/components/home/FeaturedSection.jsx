import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Classic Leather Sneakers",
    image: "/path/to/image1.jpg",
    price: "$120",
    label: "Best Seller",
  },
  {
    id: 2,
    name: "Retro Running Shoes",
    image: "/path/to/image2.jpg",
    price: "$110",
    label: "New Arrival",
  },
  {
    id: 3,
    name: "High-Top Trainers",
    image: "/path/to/image3.jpg",
    price: "$130",
    label: "Best Seller",
  },
  {
    id: 4,
    name: "Minimalist Casual Shoes",
    image: "/path/to/image4.jpg",
    price: "$100",
    label: "New Arrival",
  },
];

function FeaturedSection() {
  const wrapperRef1 = useRef(null);
  const wrapperRef2 = useRef(null);

  useEffect(() => {
    const boxWidth = 300;
    const totalWidth = boxWidth * 7 + 10 * 6; // 7 boxes

    gsap.set(wrapperRef1.current, { xPercent: -50, yPercent: -50 });
    gsap.set(wrapperRef2.current, { y: 50 });

    const no01 = wrapperRef1.current.querySelectorAll(".box");
    const no02 = wrapperRef2.current.querySelectorAll(".box");

    const dirFromLeft = `+=${totalWidth}`;
    const dirFromRight = `-=${totalWidth}`;

    const mod = gsap.utils.wrap(0, totalWidth);

    function marquee(which, time, direction) {
      gsap.set(which, {
        x: (i) => i * boxWidth,
      });
      return gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => `${mod(parseFloat(x))}px`,
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
    }

    const master = gsap
      .timeline({ paused: true })
      .add(marquee(no01, 25, dirFromLeft))
      .add(marquee(no02, 20, dirFromRight), 0);

    const action = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: wrapperRef1.current,
        start: "top 80%",
        end: "top 30%",
        onEnter: () => master.pause(),
        onLeave: () => master.play(),
        onLeaveBack: () => master.play(),
        onEnterBack: () => master.pause(),
        markers: true, // remove or comment this line in production
      },
    });
  }, []);

  return (
    <section className="relative w-full h-full bg-neutralWhite">
      <div className="mx-4 md:mx-12 py-5">
        <h2 className="text-6xl font-bold text-neutralBlack mb-12">
          Featured Products
        </h2>

        <div className="absolute left-0 top-10 w-full h-full flex items-center justify-center overflow-hidden">
          <div
            ref={wrapperRef1}
            className="absolute w-[150%] h-16 md:h-20 left-1/2 bg-primary flex items-center rotate-[10deg]"
          >
            <div className="relative -left-[250px] h-12">
              {[
                "Best Seller",
                "New Arrival",
                "Iconic",
                "Revolutionary",
                "Radical",
                "Unconventional",
                "Edgy",
              ].map((text, index) => (
                <div
                  key={index}
                  className="box absolute w-64 h-12 text-neutralBlack text-5xl font-semibold leading-10 text-center"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={wrapperRef2}
            className="absolute w-[160%] h-16 md:h-20 -left-1/2 bg-secondary flex items-center -rotate-[15deg]"
          >
            <div className="relative -left-[250px] md:left-[250px] h-12">
              {[
                "Best Seller",
                "New Arrival",
                "Iconic",
                "Revolutionary",
                "Radical",
                "Unconventional",
                "Edgy",
              ].map((text, index) => (
                <div
                  key={index}
                  className="box absolute w-64 h-12 text-neutralBlack text-5xl font-semibold leading-10 text-center"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-neutralWhite flex flex-col border-4 border-neutralBlack"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="bg-neutralWhite flex flex-col flex-grow justify-between p-4 mt-4 border-t-4 border-neutralBlack border-dotted">
                <h3 className="text-2xl font-medium text-neutralBlack">
                  {product.name}
                </h3>
                <p className="text-xl text-neutralBlack">{product.price}</p>
              </div>

              {product.label && (
                <span className="absolute top-2 left-2 bg-neutralBlack text-neutralWhite px-2 py-1 text-xs uppercase">
                  {product.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div>
          <hr className="absolute left-0 w-full bg-neutralBlack h-1 border-none" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
