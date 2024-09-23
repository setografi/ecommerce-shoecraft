import React from "react";

const categories = [
  { id: 1, name: "Casual", image: "/path/to/casual.jpg" },
  { id: 2, name: "Sports", image: "/path/to/sports.jpg" },
  { id: 3, name: "Formal", image: "/path/to/formal.jpg" },
  { id: 4, name: "Limited Edition", image: "/path/to/limited-edition.jpg" },
];

function ShopByCategory() {
  return (
    <section className="py-16 px-8 bg-zinc-900">
      <h2 className="text-6xl font-bold text-white mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="relative group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover border-4 border-white"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-3xl font-bold text-white uppercase">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
