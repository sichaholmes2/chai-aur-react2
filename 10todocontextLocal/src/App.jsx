import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'

function App() {
  //by default the state will have an empty array(not null)
  const [todos, setTodos]= useState([])

//defining the functions the addTodo and all

const addTodo=(todo)=>{
  //But setTodo deltes every other previous todo
  //so we need access to previous state(like we did in the counter project)
  //making a new array with previous and new element
  //spreading the previous one with new one

  setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
}

const updateTodo=(id, todo)=>{
  //checking if the given id is equal to prevTodo.id
  //if the id matches, insert new todo
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))

  
}

const deleteTodo =(id)=>{
 //we need access to the previous values
 setTodos((prev) => prev.filter((todo)=> todo.id==id))
}




//for the checkmark
const toggleComplete=(id)=>{
//we have to go into the object called todos and change the copleted:false to true/ vice versa(toggle)
//we get prev state access using setTodos
 //if it doesnt match then keep it as it is
 setTodos((prev)=>prev.map((prevTodo)=> prevTodo=== id? {...prevTodo, completed: ! prevTodo.completed} : prevTodo))


}


useEffect(()=>{
 //localstorage.getItem("todos") will give the values from local stprage but in strings
 //we need it in json so we parse it in json
 const todos=JSON.parse(localstorage.getItem("todos"))
 //checking if the todos is not empty and putting them in setTodos
 if(todos && todos.length>0){
  setTodos(todos)
 }

}, [])


//whenever there is a change in todos we need to store it again in array
//for that we use another useEffect
useEffect(()=>{
   localStorage.setItem("todos", JSON.stringify(todos))
},[todos])




  return (
    // TodoProvider will bring in  the different values and functions required
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
