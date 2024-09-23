import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutralWhite z-20 border-b-2 border-neutralBlack">
      <div className="flex justify-between items-center mx-4 md:mx-12 py-5">
        <div className="flex items-center justify-start">
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
              <a href="#" className="hover:underline hover:text-primary">
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

        <ul className="hidden lg:flex justify-end text-neutralBlack">
          <li>
            <a href="#" className="hover:underline hover:text-primary">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
