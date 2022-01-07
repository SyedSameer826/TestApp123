const express=require('express');
const connectDB = require('./config/db');
var app=express();
connectDB();
var PORT= process.env.PORT || 5000;
app.use(express.json({ extended: false }));
const userRoutes=require ('./routes/users.js');
app.use('/app/users',userRoutes)
app.listen(PORT,()=>{
    console.log('Server started at',PORT);
});