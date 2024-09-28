import './css/TodoItems.css'
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png"
import cross from "./Assets/cross.png"

import React from 'react'

const TodoItems = ({ no, display, text, setTodos }) => {
    const deleteTodo = (no) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.no !== no));
    }

    const toggle = (no) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.no === no 
                    ? { ...todo, display: todo.display === "" ? "line-through" : "" } 
                    : todo
            )
        );
    }

    return (
        <div className="todoitems">
            <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
                <img src={display === "" ? not_tick : tick} alt="" />
                <div className="todoitems-text">
                    {text}
                </div>
            </div>
            <img className="todoitems-cross-icon" src={cross} alt="" onClick={() => deleteTodo(no)} />
        </div>
    )
}

export default TodoItems