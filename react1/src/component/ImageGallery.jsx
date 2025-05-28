import { useState } from "react"



export const ImageGallery = ()=>{

    const [currentIndex,setCurrentIndex] = useState(0)

    const images = [
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/200',
        'https://picsum.photos/200/300'
    ]
    console.log(currentIndex)

    const handleNext = ()=>{
        setCurrentIndex((currentIndex+1)%images.length)
        
    }
    const handlePrev = ()=>{
        setCurrentIndex((currentIndex-1+images.length)%images.length)

    }

    return<>
    <div>
        <img src={images[currentIndex]} alt="random img" />

        <div>
            <button onClick={handlePrev}> Prev</button>
            <button onClick={handleNext}> Next</button>
        </div>

    </div>
    </>
}