import React from "react";

function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10 border-b-2 border-black">
      <div className="flex justify-between items-center mx-12 py-5">
        <div className="flex items-center justify-start">
          <a href="/" className="text-xl font-medium text-black uppercase">
            ShoeCraft
          </a>

          <ul className="hidden md:flex items-center justify-start gap-20 text-black">
            <a href="#"></a>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support us
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex justify-end text-black">
          <li>
            <a href="#" className="hover:underline">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
