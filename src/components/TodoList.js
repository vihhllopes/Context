import React, { useContext } from "react";
import { TodoContex } from "../contexts/TodoContex";
import TodoListItem from "./TodoListItem";

const TodoList=()=>{
    const context = useContext(TodoContex);
    const data=  context.todos.map(todo=>(
     <TodoListItem key={todo.id} todo={todo}></TodoListItem>
    ))
    return(
        <div> 
            {data}
        </div>
    )
}

export default TodoList;