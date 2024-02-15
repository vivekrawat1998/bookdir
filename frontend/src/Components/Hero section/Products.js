import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Products = () => {

  const options = {
    edit: false,
    activeColor: 'green',
    value: 2.5,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };

  return (
    <div className="grid grid-flow-cols grid-cols-5">
      <div className="w-full h-full max-w-[300px] pt-4 pb-5 px-5 space-y-2 border rounded-xl overflow-hidden object-cover">
        <div className="object-cover">
          <h1 className="text-xl font-semibold text-green-900 ">hwllo</h1>
          <ReactStars {...options} />
          <span>(256 Reviews)</span>
          <br />
          <span className="text-xl text-green-700 font-bold">jnjn</span>
        </div>
      </div>
    </div>
  );
};

export default Products;