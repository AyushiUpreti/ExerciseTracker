const express= require('express');
var cors= require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app= express();
const PORT= 3000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully');
})


const exerciseRouter= require('./routes/exercise');
const userRouter= require('./routes/user');

app.use('/exercise',exerciseRouter);
app.use('/user',userRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
