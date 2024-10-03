import React from 'react'

// CSS
import '../css/ToDoCreate.css'

function ToDoCreate() {

    function createToDo() {
        const input = document.querySelector('.todo-create-input') as HTMLInputElement
        const value = input.value
        if (value.trim() === '') {
            alert('Lütfen geçerli bir görev giriniz.')
            return
        }
        input.value = ''
        alert('Görev başarıyla oluşturuldu.')
    }

  return (
    <div className='todo-create-container'>
        <input className='todo-create-input' type="text" placeholder='Sıradaki Görev Nedir?' />
        <button className='todo-create-btn' onClick={createToDo}>Oluştur</button>
    </div>
  )
}

export default ToDoCreate