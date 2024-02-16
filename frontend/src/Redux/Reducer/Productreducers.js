// Redux/Reducers/Productreducers.js
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS
} from "../Constants/Productconstant";

const initialState = {
  loading: false,
  error: null,
  products: [], // Initialize products as an empty array
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: Array.isArray(action.payload.products)
          ? action.payload.products
          : [action.payload.products], // Ensure products is always an array
        error: null
      };

    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
