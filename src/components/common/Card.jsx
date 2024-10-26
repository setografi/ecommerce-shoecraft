import React, { useState } from "react";

function Card({ image, name, description, price }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <div className="absolute -top-2 -left-2 w-full h-full bg-secondary border-4 border-neutralBlack transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />

      <div className="relative bg-neutralWhite border-4 border-neutralBlack p-4">
        {/* Price Tag */}
        <div className="absolute -right-2 -top-2 bg-primary text-neutralWhite px-4 py-1 transform rotate-3 border-2 border-neutralBlack z-10">
          <span className="font-grotesk font-bold">${price}</span>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden border-2 border-neutralBlack">
          <img
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt={name}
            loading="lazy"
          />
          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-accent bg-opacity-90 flex items-center justify-center">
              <span className="font-grotesk font-bold text-neutralWhite text-lg px-4 py-2 border-2 border-neutralWhite transform -rotate-3">
                View Details
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          <h2 className="font-grotesk text-xl font-bold text-neutralBlack leading-tight">
            {name}
          </h2>
          {description && (
            <p className="font-grotesk text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
