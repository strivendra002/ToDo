import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
        <form>
            <label htmlFor="">Add Title</label>
            <input type='text' placeholder='Add Title' />
            <label htmlFor="">Select Priority</label>
            <select name="" id="">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <br />
            <br />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm
