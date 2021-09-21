const jwt = require("jsonwebtoken")
require("dotenv").config()
const checkToken = (request,response,next)=>{
    //get token
    let token = request.headers.authorization.split(" ")[1]

    // if token not existed
    if(token == "null"){
        response.send({message:"Unauthorized request. Please login to continue..."})
    }
    // if token available
    else{
        //validate the token
        jwt.verify(token,process.env.SECRET,(error,decodedToken)=>{
            //if token expired, it return error
            if(error){
                response.send({message:"Session expired. Login again..."})
            }
            else{
                next()
            }
        })
    }
}

module.exports = checkToken