import React from 'react'

function TodoForm() {
    
//defining the state for individual todo
  const [todo, setTodo]=useState("")
  const{addTodo}=useTodo()

//making the method for adding
const add =(e) =>{
    e.preventDefault()
    if(!todo)return


    //passing an object in add todo
    addTodo({todo, completed:false})


    //now todo has values and we need to clean it up
    setTodo("")

}


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"


                //wiring of input with state
                value={todo}

                //any changes we will put it to the stage
                onChange={(e)= setTodo(e.target.value)}




            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


