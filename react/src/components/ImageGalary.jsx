import { useState } from "react"

export const ImageGalary=()=>{

    const [currentIndex,setCurrentIndex] = useState(0)

    const images = [
       
        
        'https://picsum.photos/200/300',
        'https://picsum.photos/200',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/id/237/200/300'
    ]

    console.log(currentIndex)

    const nextImg = ()=>{
        setCurrentIndex((currentIndex+1)%images.length)

    }
    const prevImg = ()=>{
        setCurrentIndex((currentIndex-1 +images.length)%images.length)

    }


    return <>
    <h1>Image gallery</h1>
    <div>
        <img src={images[currentIndex]} alt="gallery" />
        <div>
            <button onClick={prevImg}>Prev</button>
            <button onClick={nextImg}>Next</button>
        </div>
    </div>

    </>
}