import { useState } from "react"
import './elevator.css'

export const Elevator = ()=>{
    const [currentFloor,setCurrentFloor] = useState(1)
    const [targetFloor,setTargetFloor] = useState(null)
    const [isMoving,setIsMoving] = useState(false)

    const floors = [1,2,3,4,5]


    const moveToFloor=(floor)=>{
        setIsMoving(true)
        setTargetFloor(floor)

        const timeToMove= Math.abs(floor-currentFloor)*1000

        setTimeout(()=>{
            setCurrentFloor(floor)
            setIsMoving(false)

        },timeToMove)

    }

    return<>
    <h2>Elevator</h2>
    <div className="elevatorContainer">
        <div className="elevatorShaft">
            <div className="elevator"
            style={{bottom:`${(currentFloor-1)*20}%`}}
            >
                {isMoving?'Moving...':`Floor ${currentFloor}`}
            </div>

        </div>

        <div className="controls">
            {
                floors.map(floor=>(

                    <button onClick={()=>moveToFloor(floor)}>

                        {`Go to floor ${floor}`}

                    </button>
                ))
            }

        </div>


    </div>
    
    </>
}