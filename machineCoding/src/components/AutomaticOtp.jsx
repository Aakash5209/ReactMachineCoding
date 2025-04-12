import { useEffect, useState } from "react"

export const AutomaticOtp=()=>{

    const [otp,SetOtp] = useState('')
    const [counter,setCounter] = useState(20)

    const generatorOtp = ()=>{
        const newOtp = Math.floor(1000 + (Math.random() * 9000))
        SetOtp(newOtp)

    }

    useEffect(()=>{
        console.log("use effect is fire")
        generatorOtp()

         // for counter
        const timerCount= setInterval(()=>{
            setCounter((prevCounter)=>prevCounter>0? prevCounter-1:prevCounter)

        },1000)

       const timerotp = setInterval(()=>{
            generatorOtp()
            setCounter(20)

        },20000)

        // clean up
        return ()=>{
            console.log("i m going to clean up")
            clearInterval(timerCount)
            clearInterval(timerotp)

        }


    },[])



    return <>
    <h1>Automatic Otp generator</h1>
    <h2>your otp is {otp}</h2>
    <h3>Next Otp will be generate after {counter}</h3>
    </>
}