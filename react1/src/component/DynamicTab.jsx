import { useState } from "react"

export const DynamicTab = ()=>{

    const [tabs,setTabs] = useState(['Tab 1'])
    const [activeTab,setActiveTab] = useState(0)



    const handleAdd = ()=>{
        setTabs([...tabs,`Tab ${tabs.length+1}`])



    }

    const handleRemove=()=>{
        //  setActiveTab(tabs.length-1)
        setTabs(tabs.filter((_,i)=>i!=activeTab))
        setActiveTab(tabs.length-2)

    }

    return <>
    <h1>Dynamic tabs</h1>
    <div>
        <button onClick={handleAdd}>Add</button>
        <div>
            {
                tabs.map((tab,index)=>(
                    <button onClick={()=>setActiveTab(index)}
                    style = {{background:index===activeTab?'gray':''}}
                    >
                        {tab}
                    </button>

                ))

            }
           
        </div>
         <button onClick={handleRemove}>Delete</button>
    </div>
    </>
}