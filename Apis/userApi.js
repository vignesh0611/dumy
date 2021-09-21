// create mini exp app
const { request, response } = require("express")
const express=require("express")
const userApiObj=express.Router()
const expressAsyncHandler=require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multerObj = require("./middleware/addImage")
// body parser middleware
userApiObj.use(express.json())
//get usercollection
let userCollection
userApiObj.use((request,response,next)=>{
    userCollection = request.app.get("userCollection")
    next()
})

// user register
userApiObj.post("/register",multerObj.single("photo"),expressAsyncHandler(async(request,response)=>{
    let newUser = JSON.parse(request.body.userObj)
    //get user from req.body
    newUser.profileImage = request.file.path
    //console.log("new user",newUser)

    // check for duplicate user
    let user = await userCollection.findOne({username:newUser.username})
    //if user existed, send res as user existed
    if(user !== undefined){
        response.send({message:"user exist"})
    }
    //else hash password
    else{
        // hash password
        let hashedPassword = await bcryptjs.hash(newUser.password,6)
        //replace plain password with hash password
        newUser.password = hashedPassword
        //insert user obj to usercollection
        await userCollection.insertOne(newUser)
        //send response
        response.send({message:"Success"})
    }
}))


//user login
userApiObj.post('/login',expressAsyncHandler(async(request,response)=>{
    // get credential
    let userCredentialObj = request.body
    // find user by username
    let user = await userCollection.findOne({username: userCredentialObj.username})
    // if user not exist
    if(user===undefined){
        response.send({message:"Invalid username"})
    }
    // if user found
    else {
        //compare password
        let status = await bcryptjs.compare(userCredentialObj.password,user.password)
        //if not equal
        if(status === false){
            response.send({message:"Invalid password"})
        }
        //if password match
        else{
            // create and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET,{expiresIn:1000})
            // Send token in response
            response.send({message:"Success",token:signedToken,user:user})
        }
    }

}))


module.exports = userApiObj