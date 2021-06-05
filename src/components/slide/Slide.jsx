import React, { useEffect, useState } from 'react'
import img1 from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'

import './Slide.css'

const Slide = () => {
    const [counter, setCounter] = useState(0);
    const slides = [
        {
            image:
                img1,
            title: "testando1"
        },
        {
            image:
                img2,
            title: "testando2"
        },
        {
            image:
                img3,
            title: "testando3"
        },
        {
            image:
                img4,
            title: "testando1"
        }
    ];
    function nextSlide() {
        const newCounter = counter === slides.length - 1 ? 0 : counter + 1;
        setCounter(newCounter);
    }

    useEffect(() => {
        setTimeout(nextSlide, 2000);

        return () => clearTimeout(nextSlide);
    });

    return (
        <div className="Slideshow middle">
            <div className="Slides">
                <input type="radio" name="r" id="r1" checked />
                <input type="radio" name="r" id="r2" />
                <input type="radio" name="r" id="r3" />
               
            </div>
            <div className="SlideMap">
                {slides.map((item, index) => {
                    if (index === counter) {
                        return (
                            <div className="Slide">
                                <img src={item.image} alt="1" />
                            </div>

                        );
                    }
                })}
            </div>
            {/* <div className="navigation">
                <label For="radio1" className="bar"></label>
                <label For="radio2" className="bar"></label>
                <label For="radio3" className="bar"></label>
            </div> */}


        </div>

    )

}

export default Slide