import { useState } from "react"


export const Accordion=()=>{

    const data = [
        {title:'section 1',description:'this is the section 1'},
        {title:'section 2',description:'this is the section 2'},
        {title:'section 3',description:'this is the section 3'},
        {title:'section 4',description:'this is the section 4'},
    ]

    const [activeIndex,setActiveindex] = useState(null)


    const ToggleIndex = (index)=>{
        setActiveindex(activeIndex===index?null:index)

    }



    return <>
    <h1>Accordion</h1>
    <div>
        {data.map((item,index)=>(
            <div>
               <button onClick={()=>ToggleIndex(index)}> {item.title}</button>
               {
                activeIndex ===index && <p>{item.description}</p>
               }
            </div>
        ))}
    </div>
    </>
}