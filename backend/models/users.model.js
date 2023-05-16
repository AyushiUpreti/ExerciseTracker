const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true, //white spaces
        minlength:3
    },
},{
    timestamps:true, //when it was created
});

const User= mongoose.model('User',userSchema);

module.exports=User;