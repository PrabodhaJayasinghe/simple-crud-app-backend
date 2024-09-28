const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //{} means there are no filters, so it retrieves all products.
    res.status(200).json(products); //response comming from node API
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params; //req.params is used to get the id from the URL
    const product = await Product.findById(id); //findById is a Mongoose method that finds a single document by its _id field.
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  // console.log(req.body); //request comming from client side
  // res.send(req.body); //response comming from node API
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product); //response comming from node API
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body); //findByIdAndUpdate is a Mongoose method that finds a single document by its _id field and updates it.

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    const updateProduct = await Product.findById(id); //recheck the updated product
    res.status(200).json(updateProduct); //response comming from node API
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id); //findByIdAndDelete is a Mongoose method that finds a single document by its _id field and deletes it.

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ message: "Product deleted successfully!" }); //response comming from node API
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
