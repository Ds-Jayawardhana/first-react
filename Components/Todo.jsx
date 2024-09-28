import React, { useEffect, useRef, useState } from 'react'
import './css/Todo.css'

let count=0;
function Todo() {

    const [todos,setToDos]=useState([]);
    const inputRef =useRef(null);

    const add = () =>{
        setToDos([...todos,{no:count++,text:inputRef.current.value,display:" "}])
        inputRef.current.value="";


    }

    useEffect(()=>{
        console.log(todos);
    },[todos])

  return (
    <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
            <div onClick={()=>{
                add()
            }}className="todo-add-btn">
                Add
            </div>
            <div className="todo-list">

            </div>
        </div>
    </div>
  )
}

export default Todo