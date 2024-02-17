const express = require("express");
const { registerUser, forgotPassword, resetPassword,loginUser, logoutUser } = require("../../../Newlms/backend/controllers/usercontroller");


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").get(forgotPassword); 
router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
