import React, { useEffect, useRef, useState } from 'react'
import './css/Todo.css'
import TodoItems from './TodoItems';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    const add = () => {
        if (inputRef.current.value.trim() !== "") {
            const newTodo = { no: count, text: inputRef.current.value, display: "" };
            setTodos([...todos, newTodo]);
            setCount(prevCount => prevCount + 1);
            inputRef.current.value = "";
        }
    }

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
        const storedCount = parseInt(localStorage.getItem("todos_count")) || 0;
        setCount(storedCount);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("todos_count", count.toString());
    }, [todos, count]);

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
                <div onClick={add} className="todo-add-btn">
                    Add
                </div>
            </div>
            
            <div className="todo-list">
                {todos.map((item) => (
                    <TodoItems 
                        key={item.no} 
                        setTodos={setTodos} 
                        no={item.no} 
                        display={item.display} 
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Todo