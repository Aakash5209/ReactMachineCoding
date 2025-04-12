import { useEffect, useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState(()=>{
        const savedTodos = localStorage.getItem('saved_todos')
        return savedTodos?JSON.parse(savedTodos):[]

    })
    const [newTodo, setNewTodo] = useState(()=>{
        const savedTodos = localStorage.getItem('new')
        return savedTodos?JSON.parse(savedTodos):''

    })
    const [isEditing,setIsEditing] = useState(false)
    const [editIndex,setEditIndex] = useState(null)

    useEffect(()=>{
        console.log("i m runng")
        localStorage.setItem('saved_todos',JSON.stringify(todos))
        localStorage.setItem('new',JSON.stringify(newTodo))

    },[todos,newTodo])


   
    const handleAdd = () => {
        // add ls

       if(isEditing){
        const updateTodos = [...todos]
        updateTodos[editIndex] = newTodo
        setTodos(updateTodos)
        setIsEditing(false)
        setEditIndex(null)
       

        
       }else{
        setTodos([...todos,newTodo])
       
       }
       setNewTodo('')



    }

    const handleDelete = (index)=>{
        
        setTodos(todos.filter((_,idx)=>idx!=index))

    }
    const handleEdit = (index)=>{
        setIsEditing(true)
        setNewTodo(todos[index])
        setEditIndex(index)


    }


    return <>
        <h1>hii i m todo</h1>

        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder={isEditing?'updtae Todo':"Enter todo"} />
        <button onClick={handleAdd}>{isEditing?'Update':"ADD"}</button>
        <ul>
            {
                todos.map((itr,index)=>(
                    <li key={index} >
                        <span>{itr}</span>
                        <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                       
                    </li>
                    
                ))
            }

        </ul>

    </>
}

export default Todo