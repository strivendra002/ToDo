 const express=require('express');
 const Todo=require('./src/model/todo.model')

const app=express();
const cors=require('cors');
const connectDB = require('./src/config/db');


const router=require('./src/routes/todoRoute')
app.use(cors());
app.use(express.json());
app.use('/',router)

app.listen(8080,()=>{
    console.log('server started');
    connectDB();
    console.log('database connected');

})
