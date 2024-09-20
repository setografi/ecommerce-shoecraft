import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();

  const [dataproduct, setDataproduct] = useState([]);

  useEffect(() => {
    async function getOne() {
      const respons = await fetch(
        `https://api-shoecraft.vercel.app/api/products/${id}`
      );
      const data = await respons.json();
      setDataproduct(data.data);
      console.log(data.data);
    }
    getOne();
  }, []);
  return (
    <div className="max-w-3xl flex flex-col md:flex-row justify-start items-start p-4 mx-auto my-16 border-[1px] border-black gap-4">
      <img
        className="w-96 h-96"
        src={dataproduct?.thumbnailUrl}
        alt=""
        loading="lazy"
      />
      <div className="flex flex-col items-start gap-2">
        <p className="text-3xl font-medium">{dataproduct?.name}</p>
        <p className="text-base">{dataproduct?.description}</p>
        <p className="text-lg font-medium">
          Price : <span>{dataproduct?.sell_price}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
