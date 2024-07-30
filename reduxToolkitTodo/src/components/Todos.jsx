import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  //in useSelector we have the state
  //using state we can get anything from store 
  const todos= useSelector(state=> state.todos)
  //making the dispatch
  const dispatch=useDispatch()

  return (
    <>
    <div>
      {/* making the map */}
     {todos.map((todo)=>(
      // key is the todo id
         <li key={todo.id}>
          {todo.text}
         {/* adding a delete button */}
         {/* we cannot use dispatch() as the function will  be called. only reference is allowed */}
          <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
         </li>

     ))}
    </div>
    </>
  )
}

export default Todos
