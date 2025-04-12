import { useEffect, useState } from "react"

export const StopWatch = ()=>{

    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)



    useEffect(()=>{
        console.log("i m fire")
        let timerID
       if(isRunning){
        timerID = setInterval(()=>{
            setTime((prev)=>prev+10)

        },10)
       }

       return ()=>clearInterval(timerID)


    },[isRunning])

    const handleStop=()=>{
        setIsRunning(false)
    }

    const formatTime=(time)=>{
        const ms = (Math.floor( time%1000))/10
        const sec =Math.floor(( time/1000)%60)
        const min =Math.floor((time/60000)%60)

        return `${min} : ${sec} : ${ms}`

    }

    return <>
    <h1>hi im stop watch</h1>
    <h2>Current time is {formatTime(time)}</h2>
    <button onClick={()=>setIsRunning(true)}>Start</button>
    <button onClick={handleStop}>Stop</button>

    
    </>

}