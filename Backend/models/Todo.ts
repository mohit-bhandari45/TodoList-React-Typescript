import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    id: String,
    todo: String,
    isCompleted: Boolean
});


const Todo = mongoose.model('Todo', todoSchema);
export default Todo