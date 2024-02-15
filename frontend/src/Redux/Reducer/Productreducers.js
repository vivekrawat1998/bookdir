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
        error: null // Clear error when requesting new data
      };

    case ALL_PRODUCT_SUCCESS:
      console.log("Action payload:", action.payload);
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        error: null // Clear error when data is successfully fetched
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
        error: null // Clear errors
      };

    default:
      return state;
  }
};
