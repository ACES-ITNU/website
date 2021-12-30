import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import director from '../images/director.jpg'
import img1 from '../images/board/Aayush Shah - Graphic Designer.jpg'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Team(props) {
  const {active, setactive, menu, setmenu} = props
  useEffect(() => {
    setactive(2)
    setmenu(false)
  }, [])
  return (
    <div>
      <Head>
        <title>ACES | Team</title>
        <meta name="description" content="Association of Computer Engineering Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main id="team" className={menu ? "diff" : "normal"} style={{
        transform: menu ? "translateX(10%) scale(0.7)" : "scale(1) translateX(0) translateY(0) scale(1)",
        zIndex: menu ? 12 : 1,
      }}>
        <div className='team'>
            <h1 className='heading'>ACES and Nirma University</h1>
            <div className='faculty'>
                <div className='item'>
                    <img src={director.src} />
                    <h1>Rajesh N Patel</h1>
                    <h4>Director, Nirma University</h4>
                    <p>
                        Dr Rajesh Patel is working as Additional Director, School of Engineering, Institute of Technology. He has an experience of more than 27 years in the field of teaching, research and industry. He obtained his BE degree in Mechanical Engineering from REC, Surat in 1990
                    </p>
                </div>
                <div className='item'>
                    <img src={director.src} />
                    <h1>Rajesh N Patel</h1>
                    <h4>Director, Nirma University</h4>
                    <p>
                        Dr Rajesh Patel is working as Additional Director, School of Engineering, Institute of Technology. He has an experience of more than 27 years in the field of teaching, research and industry. He obtained his BE degree in Mechanical Engineering from REC, Surat in 1990
                    </p>
                </div>
                <div className='item'>
                    <img src={director.src} />
                    <h1>Rajesh N Patel</h1>
                    <h4>Director, Nirma University</h4>
                    <p>
                        Dr Rajesh Patel is working as Additional Director, School of Engineering, Institute of Technology. He has an experience of more than 27 years in the field of teaching, research and industry. He obtained his BE degree in Mechanical Engineering from REC, Surat in 1990
                    </p>
                </div>
            </div>
            <div className="teamSection">
                <div className="imagePart">
                    <div className='content'>
                    <h1>Meet Our Creative Network</h1>
                    </div>
                    <div className="grid-container">
                        <Carousel
                            className='carousel'
                            slidesToShow={3}
                            slidesToScroll={3}
                            transitionMode='scroll'
                            speed={1000}
                            renderCenterLeftControls={({ previousSlide }) => (
                                <FontAwesomeIcon className='icon' id="prev" icon={faArrowLeft} onClick={previousSlide}/>
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <FontAwesomeIcon className='icon' id="next" icon={faArrowRight} onClick={nextSlide}/>
                            )}
                        >
                            <div className="image image1">
                                <div className="details">
                                    <div className="left">
                                        <h1>Rohan Hadvani</h1>
                                        <h3>Founder, CEO</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image2">
                                <div className="details">
                                    <div className="left">
                                        <h1>Janmejay Shastri</h1>
                                        <h3>Full Stack Developer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/janmejay-shastri-7658a7193/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image3">
                                <div className="details">
                                    <div className="left">
                                        <h1>Aditya Sahoo</h1>
                                        <h3>UI/UX Designer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/aditya-sahoo12"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image4">
                                <div className="details">
                                    <div className="left">
                                        <h1>Devanshi Patel</h1>
                                        <h3>Full Stack Developer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/devanshi-patel-93a6641ba/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image5">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image6">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image7">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image8">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image9">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image10">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image11">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image12">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image13">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image14">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image15">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image16">
                                <div className="details">
                                    <div className="left">
                                        <h1>Parshva Shah 16</h1>
                                        <h3>Marketing Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}