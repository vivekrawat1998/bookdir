// components/Header.js
import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import { getProducts } from "../../Redux/action/Productaction";
import { useSelector, useDispatch } from "react-redux";
import Products from "../Hero section/Products"

const Header = () => {
  const dispatch = useDispatch();

  // Use useSelector to access the state
  const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    // Dispatch the getProducts action when the component mounts
    dispatch(getProducts());
  }, [dispatch]);

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render products and pass each product to Navbar
  return (
    <div className="mx-14">
        <Navbar  />
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <Products key={product._id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
