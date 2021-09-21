// create express app
const express = require("express")
const app = express();
//configure dotenv
// provides all environment variables to process.env
require("dotenv").config()
// import path module
const path = require("path")

// connect build of react app with express
app.use(express.static(path.join(__dirname,'./week-8/build')))
//import api object
const userApiObj=require("./Apis/userApi")
const adminApiObj=require("./Apis/adminApi")
const productApiObj=require("./Apis/productsApi")
const cartApiObj=require("./Apis/cartApi")
app.use("/users",userApiObj)
app.use("/admin",adminApiObj)
app.use("/products",productApiObj)
app.use("/carts",cartApiObj)
// for page refresh (dealing with unmatched path)
app.get('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./week-8/build','index.html'))
})

// import mongodb module
const mongoClient=require("mongodb").MongoClient
//get database url
const dbUrl=process.env.DATABASE_URL
//connect 
mongoClient.connect(dbUrl,(error,client)=>{
    if(error){
        console.log("error",error)
    }
    else{
        //get obj of database
        let databaseObject=client.db('usersdata')
        //get object of collection
        let userCollection=databaseObject.collection("usercollection")
        let adminCollection=databaseObject.collection("admincollection")
        let cartCollection=databaseObject.collection("cartcollection")
        let productCollection=databaseObject.collection("productcollection")
        //get to app object
        app.set("userCollection",userCollection)
        app.set("adminCollection",adminCollection)
        app.set("cartCollection",cartCollection)
        app.set("productCollection",productCollection)

        console.log("connected to db...")
    }
})


// error handling middle ware
app.use((error,request,response,next)=>{
    response.send({message:"Error",reason:error.message})
})





//assign port number 
const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`))


