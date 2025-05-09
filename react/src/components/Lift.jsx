import { useState } from "react"
import './lift.css'

export const Lift = ()=>{

    const [currentFloor,setCurrentFloor] = useState(1)
    const [targetFloor,setTargetFloor] = useState(null)
    const [isMoving,setIsMoving] = useState(false)

    const floors = [1,2,3,4,5]

    const moveToFloor = (floor)=>{
        if(currentFloor==floor) return
       
        setTargetFloor(floor)
        setIsMoving(true)

        const timeToMove = Math.abs((floor-currentFloor)*1000)

        setTimeout(()=>{
            setIsMoving(false)
            setCurrentFloor(floor)
           
        },timeToMove)


    }

    return<>
    <div className="elevatorContainer">
        <div className="elevatorShaft">
            <div className={`elevator ${isMoving?'isMoving':''}`}
            style={{bottom: `${(currentFloor-1)*20}%`}}
            >
                {isMoving?'Moving...':`Floor ${currentFloor}`}

            </div>


        </div>

       <div className="controls">
        {
            floors.map((floor=>(
                <button onClick={()=>moveToFloor(floor)}>{floor}</button>
            )))
        }

       </div>
        
    </div>
    </>
}