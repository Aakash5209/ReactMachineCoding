import { useState } from "react"

export const DynamicTab = ()=>{

    const [tabs,setTabs] = useState(['Tab 1'])
    const [activeTab,setActiveTab] = useState(0)

    const handleTab = ()=>{
        setTabs([...tabs,`Tab ${tabs.length+1}`])


    }

    const handleRemove = ()=>{
       if(tabs.length==1){
        alert('cant delete a sinlge tab')
       }else{
        setTabs(tabs.filter((_,i)=>i!==activeTab))
        setActiveTab(tabs.length-2)
       }

    }

    return<>
    <h1>Dynamic Tabs</h1>
    <div>
        <button onClick={handleTab}>Add Tab</button>
        <div>
            {
                tabs.map((tab,index)=>(
                    <button onClick={()=>setActiveTab(index)}
                    style={{background:index===activeTab?'grey':''}}
                    >{tab}</button>
                ))
            }
            <button onClick={handleRemove}>Remove</button>
        </div>
    </div>

    </>
}