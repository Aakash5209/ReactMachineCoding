import { useState,useEffect } from "react"

export const Otp =()=>{

    const [otp,setOtp] = useState('')
    const [counter,setCounter] = useState(0)

    const handleOtp=()=>{
        const newOtp  = Math.floor((Math.random() * 9000)+1000)
        setOtp(newOtp)

    }

    useEffect(()=>{
        console.log('useeffcet is runng')
        // handleOtp()


    },[])





    return <>
    hi i m Otp generator
    <h1>your counter {counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>add</button>
    <h1>your otp is {otp}</h1>
    <button onClick={handleOtp}>Generate Otp</button>
 
    </>
}