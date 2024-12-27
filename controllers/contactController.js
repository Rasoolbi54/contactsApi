
const Contact = require("../models/contactModel");
const asyncHandler = require("../utils/asyncHandler");
const errorHandler = require("../utils/errorHandler");


//get all contacts
exports.allContacts = asyncHandler( async (req,res)=>{

    const contacts = await Contact.find({user_id:req.user.id})
    console.log(contacts)
    res.status(200).json(contacts);
    res.end()
});


// get single contact
exports.getContact = asyncHandler(async (req,res)=>{
    const {id} = req.params
    const singleontact = await Contact.findById(id)
    if(!singleontact){
        throw new errorHandler(404, 'contact not found')
    }
    res.status(200).json(singleontact);
   
} );


//delete contact
exports.deleteContact = asyncHandler( async(req,res)=>{

    const {id} = req.params
    const deleteContact = await Contact.findByIdAndDelete(id)
    if(!deleteContact){
        throw new errorHandler(500, "can't delete contact try again")
    }

    
    if(updateContact.user_id.toString() !== req.user.id){
        throw new errorHandler(403, "user don't have permission to delete others Contacts")
    }
    
    res.status(200).json(deleteContact)
});



//update contact
exports.updateContact = asyncHandler(async(req,res)=>{
   const {name , email, phone} = req.body
   const {id} = req.params
   const updateContact = await Contact.findByIdAndUpdate(id, {name , email, phone} , {new:true})
    if(!updateContact){
        throw new errorHandler(500, "contact not found")
    }

    if(updateContact.user_id.toString() !== req.user.id){
        throw new errorHandler(403, "user don't have permission to delete others Contacts")
    }

    res.status(200).json(updateContact)
});




//create contact
exports.createContact = asyncHandler( async (req,res)=>{
    console.log('the details of contact',req.body);
    const { name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.json({message:'All fields are mandatory'})
        throw new errorHandler(400,'All fields are required')
    }

   
    try {
        const contact = await Contact.create({name,email,phone , user_id:req.user.id})
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message }); 
    }
})