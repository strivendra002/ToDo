const express = require("express");
const app = express();
const Todo = require("../model/todo.model");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello Todo");
});
router.post("/add", async (req, rea) => {
  const { title, priority } = req.body;
  try {
    const todo = await Todo.create({ title, priority });
  } catch (error) {
    console.log(error);
  }
});
router.get("/get", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully", data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting todo" });
  }
});

router.put('/update/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Updated successfully", data: todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating todo" });
    }
});


module.exports = router;
