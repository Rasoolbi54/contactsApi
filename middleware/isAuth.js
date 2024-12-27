const asyncHandler = require("../utils/asyncHandler");
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler')




const isAuthorized = asyncHandler(async(req,res,next)=> {
    let token 
   
    const authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(' ')[1]
        jwt.verify(token , process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
            if(err){
                throw new errorHandler(401, 'user is not authorized')
            }
            console.log(decoded); 
            req.user = decoded.user
            next()
        });

        if(!token){
            throw new errorHandler(401,"user is not authorized or toke is missing")
        }
    } else {
        throw new errorHandler(401,"user is not authorized or toke is missing")
    }
       
});


module.exports = isAuthorized

