import { createSlice,nanoid } from "@reduxjs/toolkit";
//in prev todo we used id like 123 but we need new ids. nano id generates unique id

//initial state means how the todo will look initially, emoty or whatnot
//can be arrays, objects etc
//here intital state will be object
const initialState ={
 //here it will  be arrays with objects
  todos: [{id: 1, text:"Hello World"}]



}

function sayHello(){

}



export const todoSlice = createSlice({
   //this methods will have objects
   name:'todo',
   //everystate has a n initial state
   initialState,
   //making reducers having properties and functions
   reducers:{
    //also defining the functions
    //state gives access to all the state values
    //actions: when some todos need to be removes the ids are gained through actions
    addTodo:(state, action)=>{
        //we will get todos from actions
        const todo={
            //using nano id to create new id
            id:nanoid(),
            //getting the text of the todo from payload

             text: action.payload
        }


     //updating the state
     //inside the todos with id=1 we are pushing the new todo
     state.todos.push(todo)




    },


    //this will also have access to state and action
    removeTodo:(state, action)=>{
         //filter is to accept eacha and evry value
         //other than one id, all other will bw sent to the updated state
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },
   }

})

//exporting reducer
//we also have to export the functionality as they will be used individually
export const{addTodo, removeTodo}=todoSlice.actions

//exporting all reducer
export default todoSlice.reducer