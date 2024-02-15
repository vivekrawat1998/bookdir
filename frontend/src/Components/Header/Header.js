import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import { getProducts } from "../../Redux/action/Productaction";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  
  // Destructure the state object and provide a default value for the entire state if it's undefined
  const { loading, error, products } = useSelector((state) => ({
    loading: state.products ? state.products.loading : false,
    error: state.products ? state.products.error : null,
    products: state.products ? state.products.products : [],
  }));
  
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="mx-14">
      <Navbar />
    </div>
  );
};

export default Header;
