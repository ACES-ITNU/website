import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className='leftSec'>
                <h1>ACES</h1>
                <div className='vertical'></div>
                <p>
                    <span>&copy; 2022</span>
                    {/* <span className="linehori"></span> */}
                    {/* <span className='small'>@aces</span> */}
                </p>
            </div>
            <div className='socialMedia2'>
                <ul>
                    <li><a href="https://www.linkedin.com/company/association-of-computer-engineering-students/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/aces_it_nu/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    <li><a href="https://www.facebook.com/aces.itnu/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
