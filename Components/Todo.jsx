import React, { useEffect, useRef, useState } from 'react'
import './css/Todo.css'
import TodoItems from './TodoItems';

let count=0;
function Todo() {

    const [todos,setToDos]=useState([]);
    const inputRef =useRef(null);

    const add = () =>{
        setToDos([...todos,{no:count++,text:inputRef.current.value,display:" "}])
        inputRef.current.value="";
        localStorage.setItem("todos_count",count)


    }
    useEffect(()=>{
        setToDos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos))
        },100)
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
            </div>
            
            <div className="todo-list">
                {todos.map((items,index)=>{
                    return <TodoItems key={index} setToDos={setToDos}no={items.number} display={items.display} text={items.text}/>
                })}
            </div>
        </div>
   
  )
}

export default Todo