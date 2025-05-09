import { useState } from "react"

export const Todo = ()=>{

    const [newTodo,setNewTodo] = useState('')
    const [todos,SetTodos] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [editIndex,setEditIndex] = useState(null)

    const handleAdd=()=>{
       if(newTodo.trim()){
        if(isEditing){
            const updatedTodos = [...todos]
            updatedTodos[editIndex] = newTodo
            SetTodos(updatedTodos)
            setIsEditing(false)
            setEditIndex(null)


        }else{
            SetTodos([...todos,newTodo])
            
        }
        setNewTodo('')

       }
    }

    const handleDelete=(index)=>{
        SetTodos(todos.filter((_,i)=>i!==index))


    }
    
    const handleEdit = (index)=>{
        setNewTodo(todos[index])
        setIsEditing(true)
        setEditIndex(index)


    }



    return <>
    <h1>Todo list</h1>
    <input type="text" 
    value={newTodo}
    onChange={(e)=>setNewTodo(e.target.value)}
    placeholder="enter the todo"

    />
    <button onClick={handleAdd}>Add</button>

    <ul>
        {
            todos.map((todo,index)=>(
                <li key={index}>
                    <span>{todo}</span>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
            ))
        }
    </ul>
    </>
}