const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProducts,
  getProductsDetails,
} = require("../../../bookdir/backend/controllers/Productscontrollers");
const { isAuthenticationUser } = require("../middleware/auth");
const Router = express.Router();

Router.route("/products/new").post(isAuthenticationUser, createProduct);
Router.route("/products").get(
  getAllProducts
);


Router.route("/products/:id").put(updateProducts);
Router.route("/products/:id").delete(deleteProducts).get(getProductsDetails);

module.exports = Router;
