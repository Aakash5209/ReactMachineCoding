import { useState } from "react"


const ChildTemp = ({name, city})=>{

    const [count,setCount] = useState(0)



    console.log("child temp is rerender")

    const addHandle = ()=>{
        setCount(count+1)


    }

    return<>
    <h3>hi i m {name} from {city}</h3>
    <h3>here count is - {count}</h3>
    <button onClick={addHandle}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>


    </>

}

export default ChildTemp