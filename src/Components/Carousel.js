import React, { useState } from 'react'
import CarouselItem from './CarouselItem'

const images = [
    "/zen-dark.jpg", "/zenitsu.jpg", "/stand.jpg"
]

function Carousel() {

    const [current, setCurrent] = useState(0)

    const prev = () => {
        if (current <= 0) {
            setCurrent(images.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const next = () => {
        if (current >= images.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className='w-full h-full p-10' >
            <div>
                <button onClick={prev} >
                    prev
                </button>
            </div>
            <div className=' h-80 flex flex-nowrap overflow-hidden relative'>
                {
                    images.map((image, index) => (
                        <CarouselItem image={image} key={index} show={current === index} />
                    ))
                }
            </div>
            <div>
                <button onClick={next} >
                    next
                </button>
            </div>
            {current}
        </div>
    )
}

export default Carousel