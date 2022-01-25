import React from 'react'
import logo from "../images/Logo.png"
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    const { active, menu, setmenu } = props
    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    // x: "-300%",
                    y: "-500%"
                },
                visible: {
                    // x:0,
                    y: 0,
                    transition: {
                        delay: 0,
                        default: {
                            duration: 1
                        }
                    }
                }
            }}
        >
            <button style={{ display: menu ? "block" : "none" }} className="menubutton" onClick={() => setmenu(!menu)}><FontAwesomeIcon icon={faTimes} className='icon' /></button>
            <button style={{ display: menu ? "none" : "block" }} className="menubutton" onClick={() => setmenu(!menu)}><FontAwesomeIcon icon={faBars} className='icon' /></button>
            <div id="menu" style={{
                transform: menu ? "translateX(0%)" : "translateX(-100%)"
            }}>
                <ul>
                    <li className={active == 0 ? "active" : "normal"}><Link href="/">Home</Link></li>
                    <li className={active == 1 ? "active" : "normal"}><Link href="/about">About</Link></li>
                    <li className={active == 2 ? "active" : "normal"}><Link href="/team">Team</Link></li>
                    <li className={active == 3 ? "active" : "normal"}><Link href="/events">Events</Link></li>
                    <li className={active == 4 ? "active" : "normal"}><Link href="/contact">Contact</Link></li>
                </ul>
                <div className='logo'>
                    <Tilt>
                        <Link href="/"><img src={logo.src} /></Link>
                    </Tilt>
                </div>
            </div>
        </motion.nav>
    )
}
export default Navbar