const express=require("express")

const productController=require("../controller/productController")

const route=express.Router();
route.get("/",productController.getProduct)
route.get("/:id",productController.singleProduct)

route.post("/",productController.createProduct)
route.put("/:id",productController.updateProduct)
route.delete("/:id",productController.deleteProduct)

module.exports=route;