import React from 'react'

// React Icons
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

// CSS
import '../css/ToDoList.css'

function ToDoList() {
  return (
    <div className='todo-list-container'>
        <div className='todo-list'>
            ilk todo
        </div>
        <div className='todo-list-edit-section'>
            <IoMdRemoveCircleOutline className='todo-list-edit-section-icons'/>
            <FaRegEdit className='todo-list-edit-section-icons'/>

        </div>
    </div>
  )
}

export default ToDoList