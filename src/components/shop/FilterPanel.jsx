import React, { useState } from "react";
import { X } from "lucide-react";

function FilterPanel({ isFilterOpen, setIsFilterOpen }) {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    sortBy: "",
  });

  return (
    <div
      className={`
    fixed inset-y-0 right-0 w-80 bg-neutralWhite border-l-4 border-neutralBlack 
    transform transition-transform duration-300 z-50
    ${isFilterOpen ? "translate-x-0" : "translate-x-full"}
  `}
    >
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-grotesk font-bold text-2xl">Filters</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-secondary transition-colors rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Filter Sections */}
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="space-y-3">
            <h3 className="font-grotesk font-bold text-lg">Category</h3>
            <div className="grid grid-cols-2 gap-2">
              {["All", "Sneakers", "Boots", "Sandals", "Sports"].map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      category: cat.toLowerCase(),
                    }))
                  }
                  className={`
                  px-4 py-2 border-2 border-neutralBlack font-grotesk font-medium
                  ${
                    filters.category === cat.toLowerCase()
                      ? "bg-primary text-neutralWhite"
                      : "bg-neutralWhite hover:bg-secondary"
                  }
                `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3">
            <h3 className="font-grotesk font-bold text-lg">Price Range</h3>
            <div className="space-y-2">
              {["All", "0-50", "51-100", "101-200", "200+"].map((range) => (
                <button
                  key={range}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: range.toLowerCase(),
                    }))
                  }
                  className={`
                  w-full px-4 py-2 border-2 border-neutralBlack font-grotesk font-medium text-left
                  ${
                    filters.priceRange === range.toLowerCase()
                      ? "bg-accent text-neutralWhite"
                      : "bg-neutralWhite hover:bg-secondary"
                  }
                `}
                >
                  {range === "All" ? "All Prices" : `$${range}`}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="space-y-3">
            <h3 className="font-grotesk font-bold text-lg">Sort By</h3>
            <div className="space-y-2">
              {[
                { value: "newest", label: "Newest First" },
                { value: "price-asc", label: "Price: Low to High" },
                { value: "price-desc", label: "Price: High to Low" },
                { value: "name-asc", label: "Name: A to Z" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, sortBy: option.value }))
                  }
                  className={`
                  w-full px-4 py-2 border-2 border-neutralBlack font-grotesk font-medium text-left
                  ${
                    filters.sortBy === option.value
                      ? "bg-buttonGreen"
                      : "bg-neutralWhite hover:bg-secondary"
                  }
                `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
