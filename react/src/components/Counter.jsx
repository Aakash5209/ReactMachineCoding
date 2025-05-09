import { useEffect, useState } from "react"

export const Counter=()=>{

    const [count,setCount] = useState(()=>{
        const saveVal =localStorage.getItem('countSV')
        return saveVal?parseInt(saveVal):0
    })


    console.log("fxn is rerender")

    useEffect(()=>{
        localStorage.setItem('countSV',count)
 

    },[count])

    const handleAdd=()=>{
       

        setCount(count+1)


    }
    // console.log("after handle",count)


    return <>
   <h1> Current S count is {count}</h1>

    <button onClick={handleAdd}>Add</button>
    <button onClick={()=>setCount(count-1)}>sub</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
}