import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Home = () => {
  return (
    
    <div className='home'>
      <TodoForm />
      <TodoList/>
    </div>
  );
};

export default Home;
