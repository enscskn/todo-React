import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToDoById, updateTodo } from '../redux/todoSlice'

// React Icons
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

// CSS
import '../css/ToDo.css'
import { TodoType } from '../types/Types'

interface TodoProps {
  todoProps: TodoType
}


function Todo( {todoProps}:TodoProps ) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditable] = React.useState<boolean>(false);
  const [newTodo, setNewTodo] = React.useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeToDoById(id));
  }
  const handleUpdateTodo = () => {
    const payload = {
      id: id,
      content: newTodo
    }
    dispatch(updateTodo(payload));
    setEditable(false);
  }
  return (
    <div className='todo-list-container'>
        <div className='todo-list'>
          <div>
            {
              editable ? <input className='todo-list-change-input' type="text" value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/> : <div>{content}</div>
            }
          </div>
        </div>
        <div className='todo-list-edit-section'>
            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='todo-list-edit-section-icons'/>
            {editable ? <FaCheck onClick={handleUpdateTodo} className='todo-list-edit-section-icons'/> : <FaRegEdit onClick={() => setEditable(true)} className='todo-list-edit-section-icons'/>}
        </div>
    </div>
  )
}

export default Todo