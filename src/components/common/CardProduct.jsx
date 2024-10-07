import React from "react";

const CardProduct = React.memo(({ id, image, name, price, label }) => {
  return (
    <div
      key={id}
      className="relative bg-neutralWhite flex flex-col border-4 border-neutralBlack"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-64 object-cover"
      />
      <div className="bg-neutralWhite flex flex-col flex-grow justify-between p-4  border-t-4 border-neutralBlack border-dotted">
        <h3 className="text-2xl font-medium text-neutralBlack">{name}</h3>
        <p className="text-xl text-neutralBlack">{price}</p>
      </div>

      {label && (
        <span className="absolute top-2 left-2 bg-neutralBlack text-neutralWhite px-2 py-1 text-xs uppercase">
          {label}
        </span>
      )}
    </div>
  );
});

export default CardProduct;
