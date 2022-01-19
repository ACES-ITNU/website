import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import events from '../data/events'



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
        {/* <div id='roadmapLink' onClick={() => setdown(!down)} >
          <p>Events</p>
          <FontAwesomeIcon className='icon' id="down" icon={down ? faArrowCircleUp : faArrowCircleDown} />
        </div> */}

        <div style={{
          transform: down ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <EventList></EventList>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

function GetDate(arr) {

  return new Date(arr[0], arr[1], arr[2], arr[3], arr[4]);

}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function EventList() {


  const [data, setData] = useState(events.sort((a, b) => GetDate(b.time) - GetDate(a.time)));
  // const [data, setData] = useState(events.slice(1,2));
  const [live, setLive] = useState([]);
  const [past, setPast] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [change, setChange] = useState(true)

  useEffect(() => {

    getData();

  }, [])

  useEffect(() => {

    getData();

  }, [change])



  function getData() {

    let p = [], l = [], u = [];

    for (let i = 0; i < data.length; i++) {

      if (!data[i].duration) {
        data[i].duration = 2;
      }

      console.log(data[i])

      const value = GetDate(data[i].time) - new Date();

      if (value < 0) {
        const hour = Math.floor((-value / (1000 * 60 * 60)));

        console.log(hour);
        if (hour < data[i].duration) {
          
          l.push(data[i]);
          
        } else {
          p.push(data[i]);
        }
      } else {
        
        
        u.push(data[i]);

      }
    }

    setLive(l.sort((a, b) => GetDate(a.time) - GetDate(b.time)));
    setPast(p);
    setUpComing(u.sort((a, b) => GetDate(a.time) - GetDate(b.time)));

  }




  return (
    <div className='Events'>

      {
        live.length != 0

        &&
        <>
          <h1>Live</h1>
          {

            live.map((value, index) => {

              return <Event {...value} key={index} changeList={setChange} changeValue={change}  type="live"></Event>

            })
          }
        </>
      }        {
        upcoming.length != 0

        &&
        <>
          <h1>Up Coming</h1>
          {

            upcoming.map((value, index) => {

              return <Event {...value} key={index} changeList={setChange} changeValue={change}  type="upcoming"></Event>

            })
          }

        </>

      }{
        past.length != 0

        &&
        <>
          <h1>Past</h1>
          {

            past.map((value, index) => {

              return <Event {...value} key={index} changeList={setChange} changeValue={change} type="past"></Event>

            })
          }
        </>
      }

    </div>
  )
}

function Event({ title, about, time, join_link, is_online, by_who, duration, changeValue,changeList, type,location }) {

  const date = GetDate(time);

  const [DateItem, setDate] = useState(getDateValue());

  console.log(DateItem)



  function getDateValue(tem='') {

    if(type=='past') return;

    const value = GetDate(time) - new Date();


 
    // if(value<0 && type=='upcoming'){
    //   clearInterval(tem)
    //   changeList(!changeValue)
    //   return;
    // }
     if(value<0 && type=='upcoming'){
      window.location.reload()
      return;
    }
  

    if(value<0){

      value=-value;
    
    }


    var
      seconds = Math.floor((value / 1000) % 60),
      minutes = Math.floor((value / (1000 * 60)) % 60),
      hours = Math.floor((value / (1000 * 60 * 60)) % 24),
      days = Math.floor((value) / (1000 * 60 * 60 * 24));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    days = (days < 10) ? "0" + days : days;

    // if(hours>=duration){
    //   console.log('call')
    //   clearInterval(tem)
    //   changeList(!changeValue);
    //   return;
    // }
      if(hours>=duration && type=='live'){
      // console.log('call')
      // clearInterval(tem)
      // changeList(!changeValue);
      window.location.reload()
      return;
    }

    let ans=[]
    ans.push(days)
    ans.push(hours)
    ans.push(minutes)
    ans.push(seconds)

    return ans;



  }


  useEffect(() => {

    if(type!='past'){

      console.log('call me')

      const tem=setInterval(() => {
        setDate(getDateValue(tem));      
      }, 1000);
    }

    

  }
  , [])


  return (
    <div className='item'>

      <div className='left_item'>
        <img src='https://images.unsplash.com/photo-1565898122623-be37b5f1e778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='^'></img>

        <h1>{title}</h1>
        <div className='left-info'>
          <div> 🗓️ {date.toDateString()}</div>
          <div>⌚ {formatAMPM(date)}
          </div>

          <div>
          📋 {is_online ? 'Online' : 'Offline'}
          </div>

          <div>

          🧊 {duration} h

          </div>

          <div>

          {is_online ? '' : `⛺ ${location}`}

          </div>


        </div>

        {
           type == 'upcoming'
          &&

          <div className='left-time'>
            <div className='day'>

              <div className='time-name'>
                days
              </div>

              <div className='time-box'>
                {DateItem[0]}
              </div>

            </div>
            <div className='hour'>

              <div className='time-name'>
                hours
              </div>

              <div className='time-box'>
              {DateItem[1]}
              </div>

            </div>
            <div className='minutes'>

              <div className='time-name'>
                minutes
              </div>

              <div className='time-box'>
              {DateItem[2]}
              </div>

            </div>
            <div className='seconds'>

              <div className='time-name'>
                seconds
              </div>

              <div className='time-box'>
              {DateItem[3]}
              </div>

            </div>

          </div>
        }


      </div>
      <div className='right-item'>

        <h1>{title}</h1>
        <div className='about'>
          {
            about.map((p) => <div key={1}>{p}</div>)
          }
        </div>


        <div className='right_icon'>

          <div>
            - by {by_who}

          </div>

          {
            type != 'past'

            &&
            <a href={join_link} target='_blank' rel="noreferrer">



              Join Event


            </a>
          }

        </div>

      </div>

    </div>
  )
}


