import { useState } from "react"


export const Accordion = ()=>{

    const [activeIndex,setActiveIndex] = useState(null)

    const data = [
        {title:'section1',content:'this is the section 1'},
        {title:'section2',content:'this is the section 2'},
        {title:'section3',content:'this is the section 3'},
        {title:'section4',content:'this is the section 4'},
    ]

    const handleToggle=(index)=>{
        setActiveIndex(activeIndex===index?null:index)

    }



    // return<>
    // <div>
    //     {
    //         data.map((item,index)=>(
    //             <div>
    //                 <button onClick={()=>handleToggle(index)}>{item.title}</button>
    //                   {activeIndex===index && <p>{item.content}</p>}

    //             </div>
              
    //         ))
    //     }
    // </div>
    
    // </>

    return<>
    <div>
        {
            data.map((item,index)=>(
                <div>
    <button onClick={()=>handletoggle(index)}>{item.title}</button>
                      {curindex == index && <p>{item.desc}</p>}

                </div>
              
            ))
        }
    </div>
    
    </>


    // return (
    // <div className="App">
    //   {
    //     data.map((item,index)=>{
    //       return(
    //       <div>
    //         <button onClick={()=>handletoggle(index)}>{item.title}</button>
    //         {curindex == index && <p>{item.desc}}</p>
    //       </div>
    //       )
    //     }
    //       })
}

