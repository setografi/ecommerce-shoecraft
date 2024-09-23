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
    <section className="w-full h-full bg-neutralWhite">
      <div className="mx-4 md:mx-12 py-5">
        <h2 className="text-6xl font-medium text-neutralBlack mb-12">
          New Arrivals
        </h2>

        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            className="absolute left-0 z-10 bg-black text-white px-4 py-2 hover:bg-gray-800"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#9664;
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
                  className="w-full flex-shrink-0 text-center p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[30rem] object-cover"
                  />
                  <h3 className="text-2xl font-medium text-white mt-4">
                    {product.name}
                  </h3>
                  <p className="text-xl text-white">{product.price}</p>
                  <button
                    className="mt-4 bg-buttonGreen text-black font-medium px-4 py-2 hover:bg-hoverGreen"
                    aria-label={`Shop now for ${product.name}`}
                  >
                    Shop Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 z-10 bg-black text-white px-4 py-2 hover:bg-gray-800"
            onClick={nextSlide}
            aria-label="Next"
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
