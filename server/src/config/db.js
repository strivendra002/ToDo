const mongoose=require('mongoose');

const connectDB=async()=>{
    mongoose.connect('mongodb+srv://TRivendraKumar:123%40Triv@masai.8rlri.mongodb.net/Todo')
}

module.exports=connectDB;