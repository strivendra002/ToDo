import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const url = "https://todo-z8oz.onrender.com";

  useEffect(() => {
    fetch(`${url}/get`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => setError(error.message));
  },[]);
  
  const handleDelete = (id) => {
    console.log(`Deleting todo with id: ${id}`);
    fetch(`${url}/delete/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => setError(error.message));
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    setCurrentTodo(todo);
    setNewTitle(todo.title);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    fetch(`${url}/update/${currentTodo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setTodos(todos.map((todo) => (todo._id === currentTodo._id ? updatedTodo : todo)));
        setIsEditing(false);
        setCurrentTodo(null);
        setNewTitle("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo-List</h1>
      {/* <TodoForm onAddTodo={handleAddTodo} /> */}
      
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="card">
            <span className="todo-text">{todo.title}</span>
            <span className="todo-priority">{todo.priority}</span>
            {/* <span className="todo-date">{new Date(todo.createdAt).toLocaleDateString()}</span> */}
            <span className="todo-status">{todo.isCompleted ? "Completed" : "Pending"}</span>

            <div className="todo-actions">
              <button className="delete-btn" onClick={() => handleDelete(todo._id)}>Delete</button>
              <button className="edit-btn" onClick={() => handleEdit(todo._id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Todo</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
