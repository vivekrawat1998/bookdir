import {createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productReducer } from "../Redux/Reducer/Productreducers";


const reducer = combineReducers({
  product :productReducer
});
const initialState = {
   
  };


export const store = createStore(  reducer,initialState,composeWithDevTools(applyMiddleware(thunk)) )