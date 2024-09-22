import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-green-300 border-t-2 border-black">
      <div className="mx-4 md:mx-12 py-5">
        <p className="text-black text-sm max-w-lg">
          Located in the heart of Jakarta, ShoeCraft specializes in premium
          footwear design and craftsmanship. We offer a wide range of services
          including custom shoe designs, exclusive collections, and sustainable
          footwear solutions. Our commitment to quality ensures that every step
          you take is both stylish and comfortable. We also collaborate with
          designers to bring you limited edition releases and innovative styles,
          crafted for every walk of life.
        </p>

        <ul className="flex flex-col md:flex-row items-start md:items-center justify-between mt-16">
          <li>© ShoeCraft 2024</li>

          <li>
            <a href="#"></a>
            <a href="#" className="hover:underline">
              Shipping
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Credits
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
