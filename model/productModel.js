const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
name:{type:String},
email:{type:String},
website:{type:String}
})

module.exports=mongoose.model("products",productSchema)