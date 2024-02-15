// app.js
const express = require("express");
const app = express();
const cors =require("cors")
app.use(express.json())
const productRoutes = require("../backend/routes/ProductsRoutes");
const userRoutes = require("../backend/routes/userroutes")
const orderRoute = require("../backend/routes/orderRoute")


app.use(cors())
app.use("/api/v1",productRoutes)
app.use("/api/v1",userRoutes)
app.use("/api/v1",orderRoute)

module.exports = app;
