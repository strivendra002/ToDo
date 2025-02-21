import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Home = () => {
  const url="https://todo-z8oz.onrender.com/"
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); 
  };
  return (
    
    <div className='home'>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList/>
    </div>
  );
};

export default Home;
