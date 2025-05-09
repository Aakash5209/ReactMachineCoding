import { useState } from "react"
import axios from "axios"

// export const DummyDataFetch = ()=>{
//     const [data,setData] = useState([])

//     const handleData = async()=>{
//         const response = await fetch('https://dummyjson.com/products')
//         const jsonRes = await response.json()
//         console.log(jsonRes.products)
//         setData(jsonRes.products)
//     }



//     return<>
//     <div>
//         <h2>to get data click on the btn</h2>
//         <button onClick={handleData}>Click Me</button>
        
//         {data.map((item)=>(
//             <p>{item.title}</p>
//         ))}

        

//     </div>
//     </>
// }
// import { useState } from "react"



///By axios

export const DummyDataFetch = ()=>{
    const [data,setData] = useState([])

    const handleData = async()=>{
        const response = await axios.get('https://dummyjson.com/products')
        // const jsonRes = await response.json()
        console.log(response)
        setData(response.data.products)
    }



    return<>
    <div>
        <h2>to get data click on the btn</h2>
        <button onClick={handleData}>Click Me</button>
        
        {data.map((item)=>(
            <p>{item.title}</p>
        ))}

        

    </div>
    </>
}