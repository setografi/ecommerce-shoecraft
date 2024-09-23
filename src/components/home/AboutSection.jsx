import React from "react";

function AboutSection() {
  return (
    <section className="py-16 px-8 bg-white border-t-4 border-black">
      <h2 className="text-6xl font-bold text-black mb-8">About Us</h2>
      <div className="text-2xl leading-relaxed text-zinc-800">
        <p>
          At <span className="font-bold">ShoeCraft</span>, we believe that shoes
          are more than just footwear. They are an extension of your identity.
          Our mission is to craft shoes that combine style, comfort, and
          sustainability, using eco-friendly materials and timeless
          craftsmanship.
        </p>
        <p className="mt-4">
          Our design approach focuses on innovation without compromising
          quality. Every pair of shoes is crafted with precision and a
          commitment to reducing environmental impact. We work closely with
          artisans to bring you shoes that are not just unique but also crafted
          with heart.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
