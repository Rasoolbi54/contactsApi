const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{

        const connectionDB = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('mongodb connected',  connectionDB.connection.host)

    }catch(error){
        console.log('MONGODB connection error' , error);
        process.exit(1)
        
    }
}

module.exports = connectDB