import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import nirmaLogo from '../images/Logo_NirmaUniversity_Transparent.png'
import acesLogo from '../images/Logo_Tranparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'


export default function About(props) {
  const { active, setactive, menu, setmenu } = props
  const [downPos, setdownPos] = useState(false)
  useEffect(() => {
    setactive(1)
    setmenu(false)
  }, [])
  return (
    <div>
      <Head>
        <title>ACES | About</title>
        <meta name="description" content="Association of Computer Engineering Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main id="about" className={menu ? "diff" : "normal"} style={{
        transform: menu ? "translateX(10%) scale(0.7)" : "scale(1) translateX(0) translateY(0) scale(1)",
        zIndex: menu ? 12 : 1,
      }}>
        <section className='section bluebg'
          style={{
            transform: downPos ? "translateY(-100vh)" : "translateY(0)"
          }}
        >
          <div className='bg'></div>
          <h1>Nirma University</h1>
          <div>
            <img src={nirmaLogo.src} />
            <p>
              Nirma University is not only a great place for academic activities and intellectual development, but it is also a vibrant and lively place for personal and social development. The campus is abuzz with numerous curricular, co-curricular, and extra-curricular activities in the fields of sports, adventure and culture.
            </p>
          </div>
        </section>

        <section className='orangebg section' style={{
          transform: downPos ? "translateY(-100vh)" : "translateY(0)"
        }}>
          <div className='bg'></div>
          <h1>Vision and Mission</h1>
          <div>
            <img src={acesLogo.src} />
            <p>
              ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.
            </p>
          </div>
          <Footer />
        </section>

        {/* Button to change the view */}
        <FontAwesomeIcon onClick={() => setdownPos(!downPos)} className={!downPos ? 'arrowicon orange' : 'arrowicon blue'} icon={!downPos ? faArrowDown : faArrowUp} />

      </main>
    </div>
  )
}
