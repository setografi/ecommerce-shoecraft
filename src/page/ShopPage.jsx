import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/common/Card";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function ShopPage() {
  const [dataproduct, setDataproduct] = useState([]);

  useEffect(() => {
    async function getAllproduct() {
      const respons = await fetch(
        "https://api-shoecraft.vercel.app/api/products"
      );
      const data = await respons.json();
      setDataproduct(data.data);
      console.log(data.data);
    }
    getAllproduct();
  }, []);

  return (
    <div>
      <Header />

      <div className="grid grid-cols-3">
        {dataproduct?.map((items, i) => (
          <Link to={`/product/${items._id}`} key={i}>
            <Card
              image={items?.thumbnailUrl}
              name={items?.name}
              price={items?.sell_price}
            />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ShopPage;
