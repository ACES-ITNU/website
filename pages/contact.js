import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import cont1 from '../images/cont1.png'
import cont2 from '../images/cont2.png'
import cont3 from '../images/cont3.png'
import Footer from '../components/Footer'

export default function Home(props) {
  const {active, setactive, menu, setmenu} = props
  useEffect(() => {
    setactive(4)
    setmenu(false)
  }, [])
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = e => {
    setDetails({...details, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <Head>
        <title>ACES | Contact</title>
        <meta name="description" content="Association of Computer Engineering Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main id="contact" className={menu ? "diff" : "normal"} style={{
        transform: menu ? "translateX(10%) scale(0.7)" : "scale(1) translateX(0) translateY(0) scale(1)",
        zIndex: menu ? 12 : 1,
      }}>
        <div className='form'>
          <h1>Contact Us!</h1>
          <input
            type="text"
            name="name"
            placeholder='Full Name'
            value={details.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Email Id'
            value={details.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder='Message'
            value={details.message}
            onChange={handleChange}
          ></textarea>
          <button>Submit</button>
        </div>
        <div className='socialMedia'>
          <ul>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a></li>
          </ul>
        </div>
        {/* <img id="cont1" src={cont1.src} />
        <img id="cont2" src={cont2.src} /> */}
        <Footer/>
      </main>
    </div>
  )
}
