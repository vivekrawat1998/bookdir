import { configureStore } from "@reduxjs/toolkit";

import registeruser from "./Slices/registerslice";
import loginuser from "./Slices/loginslice"



export const store = configureStore({
    reducer:
    {
        app:registeruser,
        login:loginuser,

    }
})