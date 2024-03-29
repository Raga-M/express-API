const productSchema = require("../model/productModel");
const mongoose = require("mongoose");
const productController = {
  createProduct: (req, res) => {
   
    const newProduct = new productSchema({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      website: req.body.website,
    });

    newProduct
      .save()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },

  getProduct: (req, res) => {
    productSchema
      .find()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },
  singleProduct: (req, res) => {
    const {id}=req.params;
    productSchema
      .findOne({_id:id})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct:(req,res)=>{
    const {id}=req.params;
    productSchema.deleteOne({_id:id})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
  },
  updateProduct:(req,res)=>{
    const {id}=req.params;
    const value=req.body;
  productSchema.updateOne({_id:id},{$set:value})
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err));
  }
};


module.exports=productController;