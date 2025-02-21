import React, { useState } from 'react';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const url = "https://todo-z8oz.onrender.com/add";

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title,
      priority,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
        
      })
      .then((data) => {
        console.log('Success:', data);
        onAddTodo(data);
        setTitle('');
        setPriority('low');
        //window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);

      });
     
  };

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit} >
        <p style={{ color: 'red' }}>Note:  
        Refresh the page after you submit the form.</p>
        <label htmlFor="">Add Title</label>
        <input type='text' placeholder='Add Title' onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="">Select Priority</label>
        <select name="" id="" onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" name="" id="" />
        <br />
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
