import { useState } from "react"
import  './modal.css'

export const Modal = () =>{

    const [isOpen,setIsOpen] = useState(false)


    return<>
    <div className="modalContainer">
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        {
            isOpen && (
                <div className="modalOverlay" onClick={()=>setIsOpen(false)}>
                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h2> Modal Title</h2>
                        <p>Thanks for opening modal u can close it now</p>
                        <button onClick={()=>setIsOpen(false)}>Close</button>

                    </div>

                </div>
            )
        }


    </div>
    </>


}