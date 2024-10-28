import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";

import Card from "../components/common/Card";
import FilterPanel from "../components/shop/FilterPanel";

import useProductFilter from "../hooks/useProductFilter";

function ShopPage() {
  const [dataproduct, setDataproduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "newest",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // async function getAllproduct() {
    //   const respons = await fetch(
    //     "https://api-shoecraft.vercel.app/api/products"
    //   );
    //   const data = await respons.json();
    //   setDataproduct(data.data);
    //   console.log(data.data);
    // }
    async function getAllproduct() {
      try {
        const respons = await fetch(
          "https://api-shoecraft.vercel.app/api/products"
        );
        if (!respons.ok) throw new Error("Failed to fetch products");
        const data = await respons.json();
        setDataproduct(data.data);
        console.log(data.data);
      } catch (error) {
        console.error(error);
        setDataproduct([]);
      }
    }
    if (dataproduct.length === 0) {
      getAllproduct();
    }
  }, [dataproduct]);

  const filteredProducts = useProductFilter(dataproduct, searchTerm, filters);

  return (
    <div className="min-h-screen bg-neutralWhite">
      {/* Header Search Bar */}
      <div className="sticky top-[4.5rem] bg-neutralWhite border-b-4 border-neutralBlack z-20 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutralBlack" />
              <input
                type="text"
                placeholder="Search for shoes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-neutralWhite border-4 border-neutralBlack font-grotesk text-lg focus:outline-none focus:border-primary"
              />
            </div>

            <button
              onClick={() => setIsFilterOpen(true)}
              className="px-6 py-3 bg-secondary border-4 border-neutralBlack font-grotesk font-bold hover:bg-buttonGreen transition-colors flex items-center gap-2"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        {/* Active Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {Object.entries(filters).map(
            ([key, value]) =>
              value !== "all" && (
                <div
                  key={key}
                  className="bg-neutralWhite border-2 border-neutralBlack px-3 py-1 font-grotesk flex items-center gap-2"
                >
                  <span>{value}</span>
                  <button
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, [key]: "all" }))
                    }
                    className="hover:text-primary"
                  >
                    <X size={16} />
                  </button>
                </div>
              )
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts?.map((items, i) => (
            <Link to={`/product/${items._id}`} key={i}>
              <Card
                image={items?.thumbnailUrl}
                name={items?.name}
                price={items?.sell_price}
              />
            </Link>
          ))}
          {/* {dataproduct?.map((items, i) => (
            <Link to={`/product/${items._id}`} key={i}>
              <Card
                image={items?.thumbnailUrl}
                name={items?.name}
                price={items?.sell_price}
              />
            </Link>
          ))} */}
        </div>
      </div>

      {/* Filter Panel */}
      <FilterPanel
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />
    </div>
  );
}

export default ShopPage;
