// create route obj
const { request, response } = require("express")
const express = require("express")
const productApiObj = express.Router()
const expressAsyncHandler=require("express-async-handler")
const multerObj = require("./middleware/addImage")
const checkToken = require("./middleware/verifyToken")

productApiObj.use(express.json())
let productCollection
productApiObj.use((request,response,next)=>{
    productCollection = request.app.get("productCollection")
    next()
})
// add product
productApiObj.post("/addproduct",multerObj.single('photo'),expressAsyncHandler(async(request,response)=>{
    // get productObj
    const productObj = JSON.parse(request.body.productObj)
    //console.log(productObj)
    productObj.image = request.file.path
    //console.log(productObj)
    await productCollection.insertOne(productObj)
    response.send({message:"new product created"})
}))

//get products
productApiObj.get("/getproducts",checkToken,expressAsyncHandler(async(request,response)=>{
    let products = await productCollection.find().toArray()
    response.send({message:"products",payload:products})
}))

module.exports = productApiObj