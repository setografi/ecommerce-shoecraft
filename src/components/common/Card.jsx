import React from "react";

function Card({ image, name, description, price }) {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-4 border-[1px] border-black">
      <img className="w-64 h-64" src={image} alt="" loading="lazy" />
      <div className="flex flex-col items-start gap-2">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-base">{description}</p>
        <p className="text-base">
          Price : <span>{price}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
