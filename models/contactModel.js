const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
    name:{
        type:'String',
        required:[true, 'name is mandatory']
    },
    email:{
        type:'String',
        required:[true, 'email is mandatory']
    },
    phone:{
        type:'String',
        required:[true, 'phone number is mandatory']
    }
} , {timestamps:true});

module.exports = mongoose.model('Contacts' , contactSchema)