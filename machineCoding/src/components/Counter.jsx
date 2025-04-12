import { useEffect, useState } from "react"


export const Counter = ()=>{

    const [counter,setCounter] = useState(()=>{
      const saveCount =  localStorage.getItem('count')
    //   return saveCount?saveCount:0;
      return saveCount?parseInt(saveCount):0;
    })

    const handleAdd = ()=>{
        setCounter(counter+1)
        // add val in LS
       
    }

    useEffect(()=>{
        console.log("user effect is run")

        localStorage.setItem('count',JSON.stringify(counter))
    },[counter])

    return<>
    <h1>hi i m counter</h1>
    <h2>count value is - {counter}</h2>
    <button onClick={handleAdd}>Increment</button>
    <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    <button onClick={()=>setCounter(0)}>Reset</button>
    
    </>

}