const express = require('express');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db/dbConnection');

connectDB();
const app = express();
const PORT = process.env.PORt || 2000

app.use(express.json())
app.use('/api', contactRoutes);
app.use('/api/users' , userRoutes )

app.listen(PORT , ()=>{
    console.log(`app is running on port : ${PORT}`);
    
})

