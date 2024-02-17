// app.js
const express = require("express");
const app = express();
const cors =require("cors")
app.use(express.json())
const productRoutes = require("../backend/routes/ProductsRoutes");
const userRoutes = require("../backend/routes/userroutes");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");


require('dotenv').config();
app.use(cookieParser())


app.use(cors())
app.use("/api/v1",productRoutes)
app.use("/api/v1",userRoutes)

module.exports = app;
