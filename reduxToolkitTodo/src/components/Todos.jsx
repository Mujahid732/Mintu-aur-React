import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div>todos</div>

            {todos.map((todos)=>(
                <li key={todos.id}
                className="mt-4 text-white font-bold text-xl flex justify-between items-center bg-zinc-800 px-4 rounded" 
                >
                    {todos.text}
                    
                    <button
                    className="p-3 rounded-lg m-4 bg-red-700 text-white"
                    onClick = {()=>dispatch(removeTodo(todos.id))}
                    >delete</button>
                </li>
            ))}
        </>
    )
}

export default Todos