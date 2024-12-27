
const asyncHandler = require("../utils/asyncHandler");
const errorHandler = require("../utils/errorHandler");
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



exports.register = asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        throw new errorHandler(400,"all fields are required")
    }

    const ifAlreadyExist = await User.findOne({email})
    if(ifAlreadyExist){
        throw new errorHandler(401,"email already exist")
    }

    const hashedPassword = await bcrypt.hash(password ,10)
    console.log(hashedPassword);

    const newUser = await User.create({username,email,password:hashedPassword})

    if(newUser){
        res.status(201).json({_id:newUser.id , email:newUser.email})
    } else{
        throw new errorHandler(400, "user details are not valid")
        
    }
    
});

exports.login = asyncHandler(async(req,res)=>{

    const {email,password} = req.body;
    if(!email || !password){
        throw new errorHandler(400,"all fields are mandatory");
    }

    const user = await User.findOne({email})
    const comPassword = await bcrypt.compare(password, user.password);
    if(user && comPassword){
        const accessToken = jwt.sign({
            user:{
                email: user.email,
                password:user.password,
                id:user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:"1d"
            }

    )
    res.status(401).json(accessToken)
    } else{
        throw new errorHandler(401, "email or password are not valid")
    }
   
});


exports.currentUser = asyncHandler( async(req,res)=>{
    res.json(req.user)
})