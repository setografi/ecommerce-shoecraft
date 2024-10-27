import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <a href="/about" className="hover:underline hover:text-primary">
                About
              </a>
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
            <a href="#" className="hover:underline hover:text-primary">
              Cart
            </a>
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
              <a
                href="/about"
                className="hover:underline hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </a>
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
