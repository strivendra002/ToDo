const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  priority: { type: String, enum: ["high", "medium", "low"], default: "low" },
//   timestamp: true,
});
const Todo=mongoose.model('Todo',TodoSchema);
module.exports=Todo;
