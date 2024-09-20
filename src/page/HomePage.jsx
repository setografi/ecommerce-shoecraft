import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function HomePage() {
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
    <div className="my-16">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-3xl font-medium">ShoeCraft</h1>
      </div>

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
    </div>
  );
}

export default HomePage;
