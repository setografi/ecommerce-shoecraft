import React, { useState } from "react";

import New1 from "../../assets/images/Shoes1.jpg";
import New2 from "../../assets/images/Shoes5.jpg";
import New3 from "../../assets/images/HeroShoes1.jpg";
import New4 from "../../assets/images/Shoes4.jpg";
import New5 from "../../assets/images/HeroShoes2.jpg";

const newArrivals = [
  {
    id: 1,
    name: "Urban High-Tops",
    image: New1,
    price: "$140",
  },
  {
    id: 2,
    name: "Modern Street Sneakers",
    image: New2,
    price: "$125",
  },
  {
    id: 3,
    name: "Sleek Sports Shoes",
    image: New3,
    price: "$130",
  },
  {
    id: 4,
    name: "Casual Everyday Shoes",
    image: New4,
    price: "$110",
  },
  {
    id: 5,
    name: "Minimalist Running Shoes",
    image: New5,
    price: "$150",
  },
];

function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newArrivals.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newArrivals.length) % newArrivals.length
    );
  };

  return (
    <section className="w-full h-full bg-neutralWhite px-4 md:px-12 py-8">
      <div className="">
        <h2 className="text-6xl font-medium text-neutralBlack mb-12">
          New Arrivals
        </h2>

        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            className="absolute top-0 left-0 z-10 h-[35rem] bg-neutralWhite text-neutralBlack text-2xl p-2 transition duration-300 hover:bg-hoverWhite border-4 border-neutralBlack"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <span className="inline-block -rotate-90">Prev</span>
          </button>

          {/* Carousel */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newArrivals.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-[30rem] object-cover border-4 border-neutralBlack"
                  />

                  <div className="flex justify-between border-x-4 border-b-4 border-neutralBlack px-[4.2rem]">
                    <div className="flex flex-col justify-center items-start px-4 py-2">
                      <h3 className="text-2xl font-medium text-neutralBlack">
                        {product.name}
                      </h3>
                      <p className="text-xl text-neutralBlack">
                        {product.price}
                      </p>
                    </div>

                    <button
                      className="bg-buttonGreen text-black font-medium text-2xl px-4 py-2 hover:bg-hoverGreen border-l-4 border-neutralBlack"
                      aria-label={`Shop now for ${product.name}`}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="absolute top-0 right-0 z-10 h-[35rem] bg-neutralWhite text-neutralBlack text-2xl p-2 transition duration-300 hover:bg-hoverWhite border-4 border-neutralBlack"
            onClick={nextSlide}
            aria-label="Next"
          >
            <span className="inline-block rotate-90">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
