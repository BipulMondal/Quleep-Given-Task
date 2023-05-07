import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://quleep-0ky9.onrender.com/getproducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-6 gap-4 mt-[2rem]">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="bg-gray-100 flex flex-col items-center"
          >
            <p >
              {product.images.length > 0 && product.images[0].url && (
                <img
                  className="h-[14rem] w-[11rem]"
                 key={product.images.id}
                  src={product.images[0].url} 
                  alt="product" />
              )}
              {/* to show all images  */}
              {/* {product.images.map(image => {
                return (
                  <img src={image.url} alt="product" /> 
                )
              })} */}
            </p>
            <h2>
              {/* <span>Name : </span> */}
              {product.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default ViewProduct;
