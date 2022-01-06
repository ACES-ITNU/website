import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import director from '../images/director.jpg'
import img1 from '../images/board/Aayush Shah - Graphic Designer.jpg'
import img2 from '../images/board/Akshat Shah - Organizing Secretary.jpg'
import img3 from '../images/board/Ansh Ray - Public Relations Officer.jpg'
import img4 from '../images/board/Gaurav Sakariya - Creative Head.jpg'
import img5 from '../images/board/Kalp Mepani - Treasurer.jpeg'
import img6 from '../images/board/Kanisha Shah - President.jpg'
import img7 from '../images/board/Kunj Thakkar-General Secretary.jpeg'
import img8 from '../images/board/Manan Patel - Join Secretary.jpg'
import img9 from '../images/board/Meet Vora - Vice President.jpg'
import img10 from '../images/board/Mrunal Shah - Director General.jpg'
import img11 from '../images/board/Naman Thaker - Managing director.jpg'
import img12 from '../images/board/Sachi_Chaudhary-Marketing_Director.jpg'
import img13 from '../images/board/Savan Vaghani -Membership Chair.png'
import img14 from '../images/board/Shivam Panchal - Technical Head.jpg'
import img15 from '../images/board/Yagnik Thummar - Technical Head.png'
import img16 from '../images/board/Yash Savani - Editor.jpg'


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
                                        <h1>Aayush Shah</h1>
                                        <h3>Graphic Designer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img1.src} />
                            </div>
                            <div className="image image2">
                                <div className="details">
                                    <div className="left">
                                        <h1>Akshat Shah</h1>
                                        <h3>Organizing Secretary</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/janmejay-shastri-7658a7193/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img2.src} />
                            </div>
                            <div className="image image3">
                                <div className="details">
                                    <div className="left">
                                        <h1>Ansh Ray</h1>
                                        <h3>Relations Officer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/aditya-sahoo12"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img3.src} />
                            </div>
                            <div className="image image4">
                                <div className="details">
                                    <div className="left">
                                        <h1>Gaurav Sakariya</h1>
                                        <h3>Creative Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/devanshi-patel-93a6641ba/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img4.src} />
                            </div>
                            <div className="image image5">
                                <div className="details">
                                    <div className="left">
                                        <h1>Kalp Mepani</h1>
                                        <h3>Treasurer</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img5.src} />
                            </div>
                            <div className="image image6">
                                <div className="details">
                                    <div className="left">
                                        <h1>Kanisha Shah</h1>
                                        <h3>President</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img6.src} />
                            </div>
                            <div className="image image7">
                                <div className="details">
                                    <div className="left">
                                        <h1>Kunj Thakkar</h1>
                                        <h3>General Secretary</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img7.src} />
                            </div>
                            <div className="image image8">
                                <div className="details">
                                    <div className="left">
                                        <h1>Manan Patel</h1>
                                        <h3>Joint Secretary</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img8.src} />
                            </div>
                            <div className="image image9">
                                <div className="details">
                                    <div className="left">
                                        <h1>Meet Vora</h1>
                                        <h3>Vice President</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img9.src} />
                            </div>
                            <div className="image image10">
                                <div className="details">
                                    <div className="left">
                                        <h1>Mrunal Shah</h1>
                                        <h3>Director General</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img10.src} />
                            </div>
                            <div className="image image11">
                                <div className="details">
                                    <div className="left">
                                        <h1>Naman Thaker</h1>
                                        <h3>Managing director</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img11.src} />
                            </div>
                            <div className="image image12">
                                <div className="details">
                                    <div className="left">
                                        <h1>Sachi Chaudhary</h1>
                                        <h3>Marketing Director</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img12.src} />
                            </div>
                            <div className="image image13">
                                <div className="details">
                                    <div className="left">
                                        <h1>Savan Vaghani</h1>
                                        <h3>Membership Chair</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img13.src} />
                            </div>
                            <div className="image image14">
                                <div className="details">
                                    <div className="left">
                                        <h1>Shivam Panchal</h1>
                                        <h3>Technical Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img14.src} />
                            </div>
                            <div className="image image15">
                                <div className="details">
                                    <div className="left">
                                        <h1>Yagnik Thummar</h1>
                                        <h3>Technical Head</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img15.src} />
                            </div>
                            <div className="image image16">
                                <div className="details">
                                    <div className="left">
                                        <h1>Yash Savani 16</h1>
                                        <h3>Editor</h3>
                                    </div>
                                    <a href="https://www.linkedin.com/in/parshva-shah-402940177"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                </div>
                                <img src={img16.src} />
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