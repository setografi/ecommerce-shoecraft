import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-secondary text-neutralBlack border-t-8 border-neutralBlack relative">
      <div className="mx-4 md:mx-12 py-12">
        <div className="overflow-hidden mb-8">
          <h2 className="text-[18vw] font-black leading-none uppercase tracking-tighter whitespace-nowrap">
            {"ShoeCraft".split("").map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <p className="text-lg max-w-2xl font-bold">
            Located in Jakarta's heart, ShoeCraft delivers premium footwear with
            unmatched design and craftsmanship. From custom creations to
            sustainable solutions, we ensure every step is a statement. Join us
            in redefining style, one shoe at a time.
          </p>

          <nav className="flex-1">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl font-bold uppercase">
              {[
                "Shipping",
                "Privacy",
                "Newsletter",
                "Contact",
                "FAQ",
                "Credits",
              ].map((item) => (
                <li
                  key={item}
                  className="transform hover:skew-x-12 transition-transform"
                >
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-16 text-xl font-bold">© ShoeCraft 2024</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-4 bg-accent"></div>
    </footer>
  );
}

export default Footer;
