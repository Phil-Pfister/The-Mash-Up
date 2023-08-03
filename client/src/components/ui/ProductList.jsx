import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";

const ProductList = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  if (!products.length) {
    return <h3>No items in this category</h3>;
  }

  return (
    <>
     
      {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
      <div className="box-content h-20">
        <h3 className="text-3xl text-center">Products for you</h3>
      </div>

      <div className="flex flex-row">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col box-content h-50 w-50 p-4 border-4"
            >
              <h4 className="box-header bg-primary text-light p-2 m-0">
                {product.name} <br />
                <div>
                  <img
                    className="object-contain h-48 w-96"
                    src={product.image}
                  />
                </div>
              </h4>
              <div className="card-body bg-light p-2">
                <p>Seller: {product.seller}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;
