const Product = require("../models/productModel");
const { clouduploads } = require("../cloudinary");
const upload = require("../multer");

exports.home = (req, res) => {
  res.send("Welcome to dashboard");
};

exports.createproduct = async (req, res) => {
    try {
      const files = req.files.images;
      console.log(files);

      if (!files || files.length === 0) {
        res.status(400).json("no image in the request");
      }
      else{
      const images = await clouduploads(files, "Images");

      const { name, description, price, currency, color } = req.body;

      if (!name || !description || !price || !currency || !color) {
        res.status(401).json({
          message: "All fields are required",
        });
      } else {
        let product = new Product({
          name: req.body.name,
          description: req.body.description,
          color: req.body.color,
          price: req.body.price,
          currency: req.body.currency,
          images: images,
        });
        product = await product.save();

        if (!product) {
          res.status(500).send("The product can not be created");
        }

        res.status(201).json({
          message: "product created successfully",
          product,
        });
      }
    }
    } catch (error) {
      console.log(error.message);
    }
};

exports.getproduct = async (req, res) => {
  const product = await Product.findById("req.params.id");

  if (!product) {
    res.status(500).json({
      success: false,
      message: "Can not find product",
    });
  }

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getproducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      res.status(500).json({
        success: false,
        message: "Can not find product",
      });
    }

    const allproducts = products.map((product) => {
      const images = product.images.map((image) => {
        return {
          url: image.url,
          id: image.id,
        };
      });
      return {
        _id: product._id,
        name: product.name,
        description: product.description,
        color: product.color,
        price: product.price,
        currency: product.currency,
        images: images,
      };
    });

    res.status(201).json(allproducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
