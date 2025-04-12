import { useEffect, useState } from "react"
import './traffic.css'

export const Traffic = ()=>{

    const [trafficLight,setTrafficLight] = useState('red')

    useEffect(()=>{

     const intervalID =  setInterval(()=>{
            setTrafficLight((preLight)=>{
                if(preLight=='red') return 'yellow'
                if(preLight =='yellow') return 'green'
                // if(preLight =='green') return 'red'
                return 'red'

            })
            

        },2000)

        return ()=>clearInterval(intervalID)

    },[])


    return <>
    <h1>hi i m traffic light</h1>
    <div className="signal_light">
        <div className = { `circle ${trafficLight=='red'?'red':''} `}   ></div>
        <div className = { `circle ${trafficLight=='yellow'?'yellow':''} `}   ></div>
        <div className = { `circle ${trafficLight=='green'?'green':''} `}   ></div>
        
    </div>

    </>
}