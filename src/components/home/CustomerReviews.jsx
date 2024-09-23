import React from "react";

const reviews = [
  {
    id: 1,
    name: "John D.",
    text: "ShoeCraft's sneakers are a game changer! The comfort and style are unmatched.",
  },
  {
    id: 2,
    name: "Emily R.",
    text: "I love the fact that these shoes are eco-friendly. Plus, they look amazing!",
  },
  {
    id: 3,
    name: "Michael T.",
    text: "Best shoes I've ever owned. The craftsmanship is top-notch!",
  },
];

function CustomerReviews() {
  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-6xl font-bold text-white mb-8">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 bg-zinc-800 border-4 border-white"
          >
            <p className="text-2xl italic">"{review.text}"</p>
            <p className="text-xl font-bold mt-4">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
