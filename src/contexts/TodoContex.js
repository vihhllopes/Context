import React, { useState, createContext } from "react";

export const TodoContex = createContext();

const TodoProvider = ({children}) => {
 const [todos, setTodos]=useState([
    {id:1,  title: 'Boa Comunicação', done:false},
     {id:2,  title: 'Trabalho em equipe', done:false},
      {id:3,  title: 'Proativa', done:false},
       {id:4,  title: 'Resiliência', done:false}
]);

const saveTodo = todo =>{
    const newTodo={
        id: todos.length +1,
        title: todo.title,
        done: false,
    };
    setTodos([...todos,newTodo]);
}
return(
<TodoContex.Provider value={{todos, saveTodo}}>
{children}
</TodoContex.Provider>
);
}

export default TodoProvider;