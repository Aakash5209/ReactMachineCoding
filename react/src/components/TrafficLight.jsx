import { useEffect, useState } from "react"
import './traffic.css'


export const TrafficLight = ()=>{

    const [currentLight,setCurrentLight] = useState('red')

    useEffect(()=>{

        const timer = setInterval(()=>{
            setCurrentLight((prevLight)=>{
                if(prevLight=='red') return 'yellow'
                if(prevLight=='yellow') return 'green'
                return 'red'
            })

        },2000)

        return ()=>clearInterval(timer)

    },[])




    return <>
    <h1>hi this is traffic light</h1>
    <div className="signalLight">
        <div className={`circle ${currentLight==='red'?'red':''}`}></div>
        <div className={`circle ${currentLight==='yellow'?'yellow':''}`}></div>
        <div className={`circle ${currentLight==='green'?'green':''}`}></div>
       

    </div>

    </>
}









