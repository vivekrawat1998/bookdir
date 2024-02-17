// components/Hero section/Products.js
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useProduct } from "../../../../../Newlms/frontend/src/Components/Context/Context";

const Products = () => {
  // Check if 'products' is defined
  const { products, loading } = useProduct();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-flow-cols grid-cols-5">
      {products.map((product) => (
        <div key={product._id} className="w-full h-full max-w-[300px] pt-4 pb-5 px-5 space-y-2 border rounded-xl overflow-hidden object-cover">
          <div className="object-cover">
            <h1 className="text-xl font-semibold text-green-900 ">{product.name}</h1>
            <ReactStars
              edit={false}
              activeColor="green"
              value={product.ratings}
              size={window.innerWidth < 600 ? 20 : 25}
              isHalf={true}
            />
            <span>({product.reviews.length} Reviews)</span>
            <br />
            <span className="text-xl text-green-700 font-bold">{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
