import { useEffect, useState } from "react"

export const AutomaticOtp = ()=>{
    const [otp,setOtp] = useState('')
    const [counter,setCounter] = useState(20)

    const generateOtp = ()=>{
        const newOtp = Math.floor((Math.random()*9000)+1000)
        setOtp(newOtp)

    }

    useEffect(()=>{
        generateOtp()

       const timer1 = setInterval(()=>{
            generateOtp()
            setCounter(20)

        },20000)

       const timer2 = setInterval(()=>{
            setCounter((prev)=>prev>0?prev-1:0)

        },1000)

        return ()=>{
            clearInterval(timer1)
            clearInterval(timer2)
        }

    },[])



    return<>
    <h2>Your Otp is {otp}</h2>
    <h3>Next Otp generate in {counter}</h3>
    </>
}