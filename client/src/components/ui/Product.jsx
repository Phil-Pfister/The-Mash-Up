import React from 'react';

const ProductList = ({ name, image, category, seller }) => {
  if (!products.length) {
    return <h3>No items in this category</h3>;
  }

  return (
    <div>
      <h3>Products for you</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {product.name} <br />
             <div>
                <img href={product.image} />
             </div>
            </h4>
            <div className="card-body bg-light p-2">
              
              <p>{product.seller}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;