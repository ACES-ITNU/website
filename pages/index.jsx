import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import graphicImage from '../images/graphic1.png'
import Footer from '../components/Footer';

export default function Home(props) {
  const { active, setactive, menu, setmenu } = props
  useEffect(() => {
    setactive(0)
    setmenu(false)
  }, [])
  return (
    <div>
      <Head>
        <title>ACES</title>
        <meta name="description" content="Association of Computer Engineering Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main id="home" className={menu ? "diff" : "normal"} style={{
        transform: menu ? "translateX(10%) scale(0.7)" : "scale(1) translateX(0) translateY(0) scale(1)",
        zIndex: menu ? 12 : 1,
      }}>
        <div className='left'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: "-100%"
              },
              visible: {
                x: 0,
                transition: {
                  default: {
                    duration: 1
                  }
                }
              }
            }}
            className='leftElem'>
            <Tilt className='tilt'>
              <h1>ACES</h1>
              <p><span>A</span>ssociation of <span>C</span>omputer <span>E</span>ngineering <span>S</span>tudents</p>
            </Tilt>
            <div className='tags'>
              <ul>
                <li><span>
          
                  Technological Advancements
             
                  
                  </span></li>
                <li><span>Technical Workshops</span></li>
                <li><span>Informative Sessions</span></li>
                <li><span>Fun Events</span></li>
                <li><span>Overall Development of Students</span></li>
              </ul>
            </div>
          </motion.div>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: "100%"
              },
              visible: {
                x: 0,
                transition: {
                  default: {
                    duration: 1
                  }
                }
              }
            }}
            className="graphic" src={graphicImage.src} />
        </div>

        {/* <Footer /> */}

      </main>
      {/* <ul id="pageMenu">
          <li className={active==0 ? "active" : "normal"}><div></div></li>
          <li className={active==1 ? "active" : "normal"}><div></div></li>
          <li className={active==2 ? "active" : "normal"}><div></div></li>
          <li className={active==3 ? "active" : "normal"}><div></div></li>
          <li className={active==4 ? "active" : "normal"}><div></div></li>
      </ul> */}
    </div>
  )
}
