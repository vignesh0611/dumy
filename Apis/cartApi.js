// create route obj
const { request, response } = require("express")
const express = require("express")
const cartApiObj = express.Router()
const expressAsyncHandler=require("express-async-handler")
const multerObj = require("./middleware/addImage")
const checkToken = require("./middleware/verifyToken")

cartApiObj.use(express.json())
let cartCollection
cartApiObj.use((request,response,next)=>{
    cartCollection = request.app.get("cartCollection")
    next()
})
// add product
cartApiObj.post("/addcart",expressAsyncHandler(async(request,response)=>{
    // get productObj
    const cartObj = request.body
    //console.log(productObj)
    //productObj.image = request.file.path
    //console.log(productObj)
    await cartCollection.insertOne(cartObj)
    response.send({message:"new product created"})
}))

//get products
cartApiObj.get("/getproducts",checkToken,expressAsyncHandler(async(request,response)=>{
    let products = await cartCollection.find().toArray()
    //let productCount = await cartCollection.count()
    //response.send({message:"count",payload:productCount})
    //console.log(productCount)
    response.send({message:"products",payload:products})

}))

cartApiObj.post("/deleteFromCart/:id",expressAsyncHandler(async(request,response)=>{
    // get productObj
    const cartObj = request.params.id
    //console.log(cartObj)
    //productObj.image = request.file.path
    //console.log(productObj)
     await cartCollection.deleteOne({productid: cartObj})
     response.send({message:"product deleted"})
}))

// cartApiObj.get("/getcount",checkToken,expressAsyncHandler(async(request,response)=>{
//     //let products = await cartCollection.find().toArray()
//     let productCount = await cartCollection.count()
//     response.send({message:"count",payload:productCount})
//     //console.log(productCount)
//     // response.send({message:"products",payload:products})

// }))

module.exports = cartApiObj