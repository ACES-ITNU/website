import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { TEAM_MEMBERS } from '../data/team'
import TeamCard from '../components/teamCard'
import Footer from '../components/Footer';
import Faculty from '../components/Faculty';

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
            <Faculty />
         
              <div className="teamSection">
            <div className="imagePart flex flex-col items-center">
              <div className="content">
                <h1>Meet Our Creative Network</h1>
              </div>
              <div className="flex flex-wrap -m-2 w-11/12">
                {TEAM_MEMBERS.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}