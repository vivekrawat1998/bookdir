import axios from "axios";
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    // This should match the export name in your constants file
  } from "../Constants/Productconstant";



export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST }); // Changed to ALL_PRODUCT_REQUEST
    const { data } = await axios({
      method: "get",
      baseURL: "http://localhost:3000/api/v1", // Corrected baseURL
      url: "products",
    });
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: {products: data},
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// export const clearErrors = () => async (dispatch) => { // Added arrow function syntax
//     dispatch({type: CLEAR_ERRORS});
// };
