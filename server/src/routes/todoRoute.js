const express = require('express');
const app = express();
const Todo=require('../model/todo.model')
const cors = require('cors');
app.use(cors());
app.use(express.json());


const router=express.Router();
router.get('/',(req,res)=>{
    res.send('Hello Todo')
})
router.post('/add',async(req,rea)=>{
    const {title,priority}=req.body;
    try {
        const todo=await Todo.create({title,priority});
    } catch (error) {
        console.log(error);
       
    }
})
router.get('/get',async(req,res)=>{
    try{
        const todo=await Todo.find();
        res.json(todo);
    }catch(err){
        console.log(err);
        
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
        res.send({status:201,
            message:"deleted",
            data:todo
        })
    } catch (error) {
        console.log(error);
        
    }
})
router.put('/update/:id',async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndUpdate
        (req.params.id,req.body,{new:true});
        res.json(todo);
        res.send({status:201,
            message:"updated",
            data:todo
        })
    } catch (error) {
        console.log(error);
        
    }

})


module.exports=router;