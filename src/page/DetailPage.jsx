import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Zap } from "lucide-react";

function DetailPage() {
  const { id } = useParams();
  const [dataproduct, setDataproduct] = useState([]);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const sizes = ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"];

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Create new cart item
    const newItem = {
      id: dataproduct.id,
      name: dataproduct.name,
      price: dataproduct.sell_price,
      size: selectedSize,
      image: dataproduct.thumbnailUrl,
      quantity: 1,
    };

    // Check if item already exists with same size
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push(newItem);
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setTimeout(() => {
      setIsAddingToCart(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }, 1000);
  };

  useEffect(() => {
    async function getOne() {
      const respons = await fetch(
        `https://api-shoecraft.vercel.app/api/products/${id}`
      );
      const data = await respons.json();
      setDataproduct(data.data);
      console.log(data.data);
    }
    getOne();
  }, []);

  return (
    <div className="min-h-screen bg-neutralWhite py-8 mt-14">
      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed top-20 right-4 z-50 animate-fade-in">
          <div className="bg-buttonGreen border-4 border-neutralBlack px-6 py-4 transform rotate-2 shadow-lg">
            <div className="transform -rotate-2">
              <p className="font-grotesk font-bold text-neutralBlack">
                Product added to cart! 🛍️
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <button
          onClick={() => navigate("/shop")}
          className="group flex items-center gap-2 px-6 py-3 bg-neutralWhite border-4 border-neutralBlack font-grotesk font-bold hover:bg-secondary transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Shop
        </button>
      </div>

      {dataproduct && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary border-4 border-neutralBlack" />

            {/* Main Content */}
            <div className="relative grid md:grid-cols-2 gap-12 bg-neutralWhite border-4 border-neutralBlack p-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="border-4 border-neutralBlack overflow-hidden">
                  <img
                    src={dataproduct?.thumbnailUrl}
                    alt={dataproduct?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="border-2 border-neutralBlack overflow-hidden cursor-pointer hover:border-primary"
                    >
                      <img
                        src={dataproduct?.thumbnailUrl}
                        alt={`${dataproduct?.name} view ${i + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="font-grotesk text-4xl font-bold text-neutralBlack mb-4">
                    {dataproduct?.name}
                  </h1>
                  <div className="inline-block bg-primary text-neutralWhite px-6 py-2 transform -rotate-2">
                    <span className="font-grotesk text-2xl font-bold">
                      ${dataproduct?.sell_price}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-grotesk text-xl font-bold">
                    Description
                  </h2>
                  <p className="font-grotesk leading-relaxed">
                    {dataproduct?.description}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-4">
                  <h2 className="font-grotesk text-xl font-bold">
                    Select Size
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                          px-4 py-3 border-2 border-neutralBlack font-grotesk font-bold
                          ${
                            selectedSize === size
                              ? "bg-accent text-neutralWhite"
                              : "bg-neutralWhite hover:bg-secondary"
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || isAddingToCart}
                  className={`
                    w-full py-4 border-4 border-neutralBlack font-grotesk font-bold text-lg
                    flex items-center justify-center gap-2
                    transition-all transform hover:-translate-y-1
                    ${
                      selectedSize
                        ? "bg-buttonGreen hover:bg-hoverGreen"
                        : "bg-neutralWhite cursor-not-allowed"
                    }
                  `}
                >
                  {isAddingToCart ? (
                    <Zap className="animate-spin" size={24} />
                  ) : (
                    <>
                      <ShoppingCart size={24} />
                      {selectedSize ? "Add to Cart" : "Select a Size"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <img
        className="w-96 h-96"
        src={dataproduct?.thumbnailUrl}
        alt=""
        loading="lazy"
      />
      <div className="flex flex-col items-start gap-2">
        <p className="text-3xl font-medium">{dataproduct?.name}</p>
        <p className="text-base">{dataproduct?.description}</p>
        <p className="text-lg font-medium">
          Price : <span>{dataproduct?.sell_price}</span>
        </p>
      </div> */}
    </div>
  );
}

export default DetailPage;
