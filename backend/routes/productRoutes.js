const express = require("express");

const {home, createproduct, getproduct, getproducts} = require("../controllers/productController");

const router = express.Router();

router.get("/", home);
router.post("/createproduct", createproduct);
router.get("/getproduct/:id", getproduct);
router.get("/getproducts", getproducts);


module.exports = router;