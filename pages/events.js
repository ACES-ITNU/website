import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

export default function Home(props) {
  const {active, setactive, menu, setmenu} = props
  useEffect(() => {
    setactive(3)
    setmenu(false)
  }, [])
  const [curr, setcurr] = useState(0)
  const [down, setdown] = useState(false)

  const next  = () => {
    setcurr((curr+1)%8);
  }
  const prev  = () => {
    if(curr==0) {
      setcurr(7)
    }
    else {
      setcurr(curr-1);
    }
  }

  const images = [
    '20191003_125435.jpg', 'IMG_0037.jpg','IMG_0040.jpg','IMG_0042.jpg','IMG_20180201_172619.jpg','IMG_20180201_172722.jpg','IMG_20191003_113836.jpg','IMG-20191003-WA0018.jpg'
  ]

  return (
    <div>
      <Head>
        <title>ACES</title>
        <meta name="description" content="Association of Computer Engineering Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head><Navbar active={active} menu={menu} setmenu={setmenu} />
      <main id="events" className={menu ? "diff" : "normal"} style={{
        transform: menu ? "translateX(10%) scale(0.7)" : "scale(1) translateX(0) translateY(0) scale(1)",
        zIndex: menu ? 12 : 1,
      }}>
        <div className='eventElem' style={{
          transform: down ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <h1>Events by <span>ACES</span></h1>
          <FontAwesomeIcon onClick={() => next()} id="left" className='icon' icon={faArrowLeft} />
          <FontAwesomeIcon onClick={() => prev()} id="right" className='icon' icon={faArrowRight} />
        </div>
        <div className='events' style={{
          transform: down ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <img src={`./${images[curr]}`} />
        </div>
        <div id='roadmapLink' onClick={() => setdown(!down)} >
          <p>ACES Roadmap</p>
          <FontAwesomeIcon className='icon' id="down" icon={down ? faArrowCircleUp : faArrowCircleDown}/>
        </div>

        <div className='roadmap' style={{
          transform: down ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <img src="./roadmap.png"/>
        </div>

      </main>
    </div>
  )
}
