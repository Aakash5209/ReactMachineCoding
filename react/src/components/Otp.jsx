import { useEffect, useState } from "react"

 export const Otp = ()=>{

    const [otp,setOtp] = useState('')

    const handleSubmit = ()=>{
        const newOtp =  Math.floor((Math.random()*9000)+1000)
        setOtp(newOtp)
    }

    useEffect(()=>{
        handleSubmit()

    },[])



    return<>
    <h1>Your otp is  {otp}</h1>
    <button onClick={handleSubmit}>Generate Otp</button>
    </>
}
