import {createContext, useContext} from "react"

//createContext has objects
export const TodoContext= createContext({

//making an array called todos
todos:[
   // this will be the tamplate
    {
        id:1,
        //this is the todo message
        todo:"Todo msg",

        //the task is not completed by default
        completed:false,

    }
],


//writing the functionalities
//addTodo is a function that takes in todo . the function will be defined in app.jsx
addTodo: (todo)=>{},

//updateTodo function takes int id and todo
updateTodo:(id, todo)=>{},

//delete todo takes in id
deleteTodo:(id)=>{},

//toggle function requires only id(tells is the task is completed)
toggleComplete: (id) =>{}






})


//exporting a hook directly
export const useTodo=()=>{
    //TodoContext is the context
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider