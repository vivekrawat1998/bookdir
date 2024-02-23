import {createSlice} from "@reduxjs/toolkit";
export const productslice = createSlice({
    name:"productslice",
    initialState:{
        products: [],
        loading: false,
        error: null,
    }
});




export default productslice.reducer;