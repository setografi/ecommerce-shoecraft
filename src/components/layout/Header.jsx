import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);
    // Custom event for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutralWhite z-40 border-b-4 border-neutralBlack">
      <div className="flex justify-between items-center mx-4 md:mx-12 py-5">
        <div className="hidden lg:flex items-center justify-start">
          <Link
            to="/"
            className="text-xl font-medium text-neutralBlack uppercase"
          >
            ShoeCraft
          </Link>

          <ul className="hidden lg:flex items-center justify-start gap-20 text-neutralBlack">
            <a href="#"></a>
            <li>
              <Link to="/" className="hover:underline hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-primary">
                Support us
              </a>
            </li>
          </ul>
        </div>

        <ul className=" text-neutralBlack hidden lg:block">
          <li>
            <Link to="/cart" className="relative hover:text-primary">
              <ShoppingCart className="inline-block" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-neutralWhite w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Hambuger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-neutralBlack">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-neutralWhite border-t-2 border-neutralBlack">
          <ul className="flex flex-col items-center py-2">
            <li className="py-2">
              <Link
                to="/"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/shop"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/about"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                Support us
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
