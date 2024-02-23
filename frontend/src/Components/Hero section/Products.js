// components/Hero section/Products.js
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Products = () => {
  return (
    <div className="grid grid-flow-cols grid-cols-5">
        <div  className="w-full h-full max-w-[300px] pt-4 pb-5 px-5 space-y-2 border rounded-xl overflow-hidden object-cover">
          <div className="object-cover">
            <h1 className="text-xl font-semibold text-green-900 ">heeloo</h1>
            <ReactStars
              edit={false}
              activeColor="green"
           
              size={window.innerWidth < 600 ? 20 : 25}
              isHalf={true}
            />
            <span>( Reviews)</span>
            <br />
            <span className="text-xl text-green-700 font-bold">jnsn</span>
          </div>
        </div>
    </div>
  );
};

export default Products;
