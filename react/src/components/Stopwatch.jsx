import { useEffect, useState } from "react"



export const Stopwatch = ()=>{

    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        let timer;
        if(isRunning){
          timer =  setInterval(()=>{
                setTime((prev)=>prev+10)
    
            },10)

            return ()=>clearInterval(timer)
        }

        


    },[isRunning])

    const formatTime=(time)=>{

        const ms = Math.floor(time%1000)
        const sec =Math.floor(( time/60)%60)
        const min =Math.floor((time/3600)%60)

        return `${min} : ${sec} : ${ms}`

    }



    return<>
    <h1>hi i m stopwatch</h1>
    <h2>current time is {formatTime(time)} </h2>
    <button onClick={()=>setIsRunning(true)}>Start</button>
    <button onClick={()=>setIsRunning(false)}>stop</button>
    </>
}