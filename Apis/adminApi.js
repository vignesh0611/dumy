const express = require("express")
const adminApiObj = express.Router()
const expressAsyncHandler=require("express-async-handler")
const jwt = require("jsonwebtoken")
adminApiObj.use(express.json())
let adminCollection
adminApiObj.use((request,response,next)=>{
    adminCollection = request.app.get("adminCollection")
    next()
})

//user login
adminApiObj.post('/login',expressAsyncHandler(async(request,response)=>{
    // get credential
    let adminCredentialObj = request.body
    //console.log(adminCredentialObj)
    // find user by username
    let user = await adminCollection.findOne({username: adminCredentialObj.username})
    // if user not exist
    if(user===undefined){
        response.send({message:"Invalid username"})
    }
    // if user found
    else {
        //compare password
        //let status = await bcryptjs.compare(userCredentialObj.password,user.password)
        let status = adminCredentialObj.password === user.password
        //if not equal
        if(status === false){
            response.send({message:"Invalid password"})
        }
        //if password match
        else{
            // create and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET,{expiresIn:10})
            // Send token in response
            response.send({message:"Success",token:signedToken,user:user})
        }
    }

}))

module.exports = adminApiObj