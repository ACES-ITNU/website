import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

export default function Home(props) {
  const { active, setactive, menu, setmenu } = props
  useEffect(() => {
    setactive(3)
    setmenu(false)
  }, [])
  const [curr, setcurr] = useState(0)
  const [down, setdown] = useState(false)

  const next = () => {
    setcurr((curr + 1) % 8);
  }
  const prev = () => {
    if (curr == 0) {
      setcurr(7)
    }
    else {
      setcurr(curr - 1);
    }
  }

  const images = [
    '20191003_125435.jpg', 'IMG_0037.jpg', 'IMG_0040.jpg', 'IMG_0042.jpg', 'IMG_20180201_172619.jpg', 'IMG_20180201_172722.jpg', 'IMG_20191003_113836.jpg', 'IMG-20191003-WA0018.jpg'
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
          <p>Events</p>
          <FontAwesomeIcon className='icon' id="down" icon={down ? faArrowCircleUp : faArrowCircleDown} />
        </div>

        <div  style={{
          transform: down ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <EventList></EventList>
        </div>

      </main>
    </div>
  )
}


function EventList() {
  return (
    <div className='Events'>

      <Event></Event>
      <Event></Event>
      <Event></Event>
      <Event></Event>
      <Event></Event>
      <Event></Event>
      <Event></Event>

    </div>
  )
}

function Event() {
  return (
    <div className='item'>

      <div className='left_item'>
        <img src='https://images.unsplash.com/photo-1565898122623-be37b5f1e778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='^'></img>

          <h1>Among Us</h1>
        <div className='left-info'>
          <div> Thu,30-01-22</div>
          <div> 09:00 pm
          </div>
          <div> Online
          </div>


        </div>
          <div className='left-time'>
            <div className='day'>

              <div className='time-name'>
              days
              </div>
              
              <div className='time-box'>
                12
              </div>
              
              </div>
            <div className='hour'>

              <div className='time-name'>
              hours
              </div>
              
              <div className='time-box'>
                12
              </div>
              
              </div>
            <div className='minutes'>

              <div className='time-name'>
              minutes
              </div>
              
              <div className='time-box'>
                12
              </div>
              
              </div>
            <div className='seconds'>

              <div className='time-name'>
              seconds
              </div>
              
              <div className='time-box'>
                12
              </div>
              
              </div>
            
          </div>


      </div>
      <div className='right-item'>

        <h1>Among Us</h1>
        <div className='about'>
        Hello there, everyone!! Prepare for the action-packed Among Us competition! Surely you've all had some excellent brainstorming and ideation sessions. “You’ve got to stay focused without being boring - because all work and no play makes Jack a dull boy ”

It's now time to have some fun and play some games. If you haven't participated in website making competition still you can participate in this. In the Discord Among Us channel, we will share the Joining Code there.
        </div>


        <div className='right_icon'>

        <div>
          - by aces
          
          </div>

          <button >Join Event</button>

        </div>
        
      </div>

    </div>
  )
}


