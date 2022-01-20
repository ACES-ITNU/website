import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

export default function Faculty() {
    const [index,setIndex] = useState(0)
    const [prevSlide, setprevSlide] = useState({
        x: "-30vw",
        y: "-6vw",
        z: "-20vw",
        scale: "0.8",
        opacity: "0.3",
        zInd: "2",
        filter: "blur(0.1vw)"
    })
    const [nextSlide, setnextSlide] = useState({
        x: "25vw",
        y: "6vw",
        z: "-20vw",
        scale: "0.8",
        opacity: "0.3",
        zInd: "1",
        filter: "blur(0.1vw)"
    })
    const [currSlide, setcurrSlide] = useState({
        x: "0",
        y: "0",
        z: "0",
        scale: "1",
        opacity: "1",
        zInd: "20",
        filter: "blur(0)"
    })

    const [prevSlide1, setprevSlide1] = useState({
        x: "-10vw",
        y: "0",
        scale: "0.85",
        opacity: "0.6",
        zIndex: "5"
    })
    const [nextSlide1, setnextSlide1] = useState({
        x: "10vw",
        y: "0",
        scale: "0.85",
        opacity: "0.6",
        zIndex: "5"
    })
    const [currSlide1, setcurrSlide1] = useState({
        x: "0",
        y: "0",
        scale: "1",
        opacity: "1",
        zIndex: "7"
    })
    const [array,setArray] = useState([nextSlide,currSlide,prevSlide])
    const [array1,setArray1] = useState([nextSlide1,currSlide1,prevSlide1])
    const details = [
        {
            name: "Lily Singh1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            image: "/director.jpg"
        },
        {
            name: "Lily Singh2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            image: "/director.jpg"
        },
        {
            name: "Lily Singh3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            image: "/director.jpg"
        }
    ]
    var xDown = null
    var yDown = null

    const getTouches = e => {
        return e.touches || e.originalEvent.touches
    }
    const handleTouchStart = e => {
        const first = getTouches(e)[0]
        xDown = first.clientX
        yDown = first.clientY
    }
    const handleTouchMove = e => {
        if ( ! xDown || ! yDown ) {
            return;
        }
        var xUp = e.touches[0].clientX;                                    
        var yUp = e.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;                                                                         
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                prev()
            } else {
                next()
            }                       
        }
        xDown = null;
        yDown = null;      
    }
    const next = () => {
        const temp = array
        let last = temp.pop()
        temp.unshift(last)
        setArray(temp)
        setprevSlide(array[2])
        setcurrSlide(array[1])
        setnextSlide(array[0])
    }
    const prev = () => {
        const temp = array
        let last = temp.shift()
        temp.push(last)
        setArray(temp)
        setprevSlide(array[2])
        setcurrSlide(array[1])
        setnextSlide(array[0])
    }
    const handleTouchStart1 = e => {
        const first = getTouches(e)[0]
        xDown = first.clientX
        yDown = first.clientY
    }
    const handleTouchMove1 = e => {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = e.touches[0].clientX;                                    
        var yUp = e.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                             
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                prev1()
            } else {
                next1()
            }                       
        }
        xDown = null;
        yDown = null;      
    }
    const next1 = () => {        
        const temp1 = array1
        let last1 = temp1.pop()
        temp1.unshift(last1)
        setArray(temp1)
        setprevSlide1(array1[2])
        setcurrSlide1(array1[1])
        setnextSlide1(array1[0])
    }
    const prev1 = () => {
        const temp1 = array1
        let last1 = temp1.shift()
        temp1.push(last1)
        setArray1(temp1)
        setprevSlide1(array1[2])
        setcurrSlide1(array1[1])
        setnextSlide1(array1[0])
    }
    return (
        <div className="facultyteam">
            <div className="absbutton">
                <div className="left center">
                    {/* <img onClick={prev} src="/left.png" /> */}
                    <FontAwesomeIcon className="imgicon" onClick={prev} icon={faChevronCircleLeft} />
                </div>
                <div className="right center">
                    {/* <img onClick={next} src="/right.png" /> */}
                    <FontAwesomeIcon className="imgicon" onClick={next} icon={faChevronCircleRight} />
                </div>
            </div>
            <div className="slider" id="desktop" 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {/* First Element */}
                <div
                    className="item"
                    id="prev"
                    style = {{
                        transform: `scale(${prevSlide.scale})
                                    translateX(${prevSlide.x}) translateY(${prevSlide.y}) translateZ(${prevSlide.z})`,
                        opacity: `${prevSlide.opacity}`,
                        zIndex: `${prevSlide.zInd}`,
                        filter: `${prevSlide.filter}`
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[1].image}/>
                        </div>
                        <h3>{details[1].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>

                {/* Current Element */}
                <div
                    className="item" id="active"
                    style = {{
                        transform: `scale(${currSlide.scale})
                                    translateX(${currSlide.x}) translateY(${currSlide.y}) translateZ(${currSlide.z})`,
                        opacity: `${currSlide.opacity}`,
                        zIndex: `${currSlide.zInd}`,
                        filter: `${currSlide.filter}`
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[0].image} />
                        </div>
                        <h3>{details[0].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>

                {/* Last Element */}
                <div
                    className="item" id="next"
                    style = {{
                        transform: `scale(${nextSlide.scale})
                                    translateX(${nextSlide.x}) translateY(${nextSlide.y}) translateZ(${nextSlide.z})`,
                        opacity: `${nextSlide.opacity}`,
                        zIndex: `${nextSlide.zInd}`,
                        filter: `${nextSlide.filter}`
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[2].image} />
                        </div>
                        <h3>{details[2].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>
            </div>

            <div className="slider" id="mobile" 
                onTouchStart={handleTouchStart1}
                onTouchMove={handleTouchMove1}
            >
                {/* First Element */}
                <div
                    className="item"
                    id="prev"
                    style = {{
                        transform: prevSlide1 ? `scale(${prevSlide1.scale}) translateX(${prevSlide1.x}) translateY(${prevSlide1.y}) ` : "",
                        opacity: prevSlide1 ? `${prevSlide1.opacity}` : "",
                        zIndex: prevSlide1 ? `${prevSlide1.zIndex}` : ""
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[2].image}/>
                        </div>
                        <h3>{details[2].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>

                {/* Current Element */}
                <div
                    className="item" id="active"
                    style = {{
                        transform: `scale(${currSlide1.scale}) translateX(${currSlide1.x}) translateY(${currSlide1.y}) `,
                        opacity: `${currSlide1.opacity}`,
                        zIndex: `${currSlide1.zIndex}`
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[0].image} />
                        </div>
                        <h3>{details[0].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>

                {/* Last Element */}
                <div
                    className="item" id="next"
                    style = {{
                        transform: `scale(${nextSlide1.scale}) translateX(${nextSlide1.x}) translateY(${nextSlide1.y}) `,
                        opacity: `${nextSlide1.opacity}`,
                        zIndex: `${nextSlide1.zIndex}`
                    }}
                >
                    <div className="left">
                        <div className="image">
                            <img src={details[1].image} />
                        </div>
                        <h3>{details[1].name}</h3>
                    </div>
                    <div className="right">
                        <p className="lq">&ldquo;</p>
                        <p>{details[index].text}</p>
                        <p className="rq">&rdquo;</p>
                    </div>
                </div>
            </div>
                    
        </div>
    )
  }
  