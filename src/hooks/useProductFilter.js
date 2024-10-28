import { useMemo } from "react";

function useProductFilter(products, searchTerm, filters) {
  // Filter dan cari produk
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Filter berdasarkan nama produk yang mengandung search term
        if (
          searchTerm &&
          !product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return false;
        }
        // Filter berdasarkan kategori, kecuali pilihannya adalah "all"
        if (
          filters.category !== "all" &&
          product.category !== filters.category
        ) {
          return false;
        }
        // Filter berdasarkan rentang harga
        const price = parseFloat(product.sell_price);
        if (filters.priceRange !== "all") {
          const [min, max] = filters.priceRange.split("-").map(Number);
          if (max && (price < min || price > max)) return false;
          if (!max && price < min) return false;
        }
        return true;
      })
      .sort((a, b) => {
        // Sorting berdasarkan opsi sortBy
        switch (filters.sortBy) {
          case "price-asc":
            return a.sell_price - b.sell_price;
          case "price-desc":
            return b.sell_price - a.sell_price;
          case "name-asc":
            return a.name.localeCompare(b.name);
          default: // "newest"
            return new Date(b.created_at) - new Date(a.created_at);
        }
      });
  }, [products, searchTerm, filters]);

  return filteredProducts;
}

export default useProductFilter;
