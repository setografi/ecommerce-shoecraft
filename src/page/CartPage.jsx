import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, MinusCircle, PlusCircle } from "lucide-react";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const updateCart = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const removeItem = (itemId, size) => {
    const newItems = cartItems.filter(
      (item) => !(item.id === itemId && item.size === size)
    );
    updateCart(newItems);
  };

  const updateQuantity = (itemId, size, change) => {
    const newItems = cartItems.map((item) => {
      if (item.id === itemId && item.size === size) {
        const newQuantity = item.quantity + change;
        if (newQuantity < 1) return item;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCart(newItems);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-neutralWhite py-8 mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Navigation */}
        <button
          onClick={() => navigate("/shop")}
          className="group flex items-center gap-2 px-6 py-3 bg-neutralWhite border-4 border-neutralBlack font-grotesk font-bold hover:bg-secondary transition-colors mb-8"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Shop
        </button>

        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute -top-4 -left-4 w-full h-full bg-secondary border-4 border-neutralBlack" />

          {/* Main Content */}
          <div className="relative bg-neutralWhite border-4 border-neutralBlack p-8">
            <h1 className="font-grotesk text-4xl font-bold mb-8">
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-grotesk text-xl mb-4">Your cart is empty</p>
                <button
                  onClick={() => navigate("/shop")}
                  className="px-6 py-3 bg-primary text-neutralWhite border-4 border-neutralBlack font-grotesk font-bold hover:bg-hoverPrimary transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${index}`}
                    className="grid md:grid-cols-4 gap-4 items-center border-4 border-neutralBlack p-4"
                  >
                    <div className="md:col-span-2 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover border-2 border-neutralBlack"
                      />
                      <div>
                        <h3 className="font-grotesk font-bold">{item.name}</h3>
                        <p className="text-sm">Size: {item.size}</p>
                        <p className="font-bold">${item.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, -1)}
                        className="p-1 hover:text-primary"
                      >
                        <MinusCircle size={20} />
                      </button>
                      <span className="font-grotesk font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, 1)}
                        className="p-1 hover:text-primary"
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-grotesk font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="p-2 hover:text-primary"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t-4 border-neutralBlack pt-8">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-grotesk text-xl">Total</span>
                    <span className="font-grotesk text-2xl font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full py-4 bg-buttonGreen border-4 border-neutralBlack font-grotesk font-bold text-lg hover:bg-hoverGreen transition-all transform hover:-translate-y-1">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
