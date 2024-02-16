// Redux/Actions/Productaction.js
import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS
} from "../Constants/Productconstant";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const response = await axios({
      method: "get",
      baseURL: "http://localhost 000/api/v1",
      url: "products",
    });

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: { products: response.data.products },
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
