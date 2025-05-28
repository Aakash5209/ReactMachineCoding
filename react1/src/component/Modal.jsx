import { useState } from "react"
import './modal.css'
export const Modal = ()=>{
    const [isOpen,setIsOpen] = useState(false)


    return<>
    <div className="modalContainer">
        <button onClick={()=>setIsOpen(true)}>Open</button>

        {
            isOpen && (
                <div className="modalOverlay" onClick={()=>setIsOpen(false)}>
                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h2>thanks for opening modal</h2>
                        <h6>click on the close btn to close it</h6>
                        <button onClick={()=>setIsOpen(false)}>Close</button>

                    </div>


                </div>
            )
        }

    </div>

    </>
}