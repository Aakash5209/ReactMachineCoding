import { useState } from "react"


export const Counter = ()=>{

    const [count,setCount] = useState(0)

    const obj = {
        count:10
    }

    console.log("i m rerender")

     console.log("object after fxn",obj.count)


    const hanldeAdd = ()=>{
        obj.count++

        console.log("object val",obj.count)//11-12

        setCount((prev)=>prev+1)

        // setCount((prev)=>prev+1)
        // setCount((prev)=>prev+1)
        // setCount((prev)=>prev+1)
        // setCount((prev)=>prev+1)
        // setCount(count+1)
        // setCount(count+1)
       

        
    }

    const handleSub = ()=>{


    }






    return<>
    <h2>obj value {obj.count}</h2>
    <h2>counter value {count}</h2>
    <button onClick={hanldeAdd}> +</button>
    <button onClick={handleSub}> -</button>
    </>
}