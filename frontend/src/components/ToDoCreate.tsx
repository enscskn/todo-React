import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types';

// CSS
import '../css/ToDoCreate.css'

function ToDoCreate() {

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert('Görev İsmi Boş Olamaz!');
      return;
    }

    const payload:TodoType = {
      id: Date.now(),
      content: newTodo
    }
    dispatch(createTodo(payload));
    setNewTodo('');
  }

  return (
    <div className='todo-create-container'>
        <input
        value={newTodo} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        className='todo-create-input' 
        type="text" 
        placeholder='Sıradaki Görev Nedir?' />
        <button className='todo-create-btn' onClick={handleCreateTodo}>Oluştur</button>
    </div>
  )
}

export default ToDoCreate