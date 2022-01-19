import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { TEAM_MEMBERS } from '../constants/team'
import TeamCard from '../components/teamCard'
import director from '../images/director.jpg'

export default function Team(props) {
  const { active, setactive, menu, setmenu } = props
  useEffect(() => {
    setactive(2)
    setmenu(false)
  }, [])
  return (
    <div>
      <Head>
        <title>ACES | Team</title>
        <meta
          name="description"
          content="Association of Computer Engineering Students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main
        id="team"
        className={menu ? 'diff' : 'normal'}
        style={{
          transform: menu
            ? 'translateX(10%) scale(0.7)'
            : 'scale(1) translateX(0) translateY(0) scale(1)',
          zIndex: menu ? 12 : 1,
        }}
      >
        <div className="team">
          <h1 className="heading">ACES and Nirma University</h1>
          <div className="faculty">
            <div className="item">
              <img src={director.src} />
              <h1>Rajesh N Patel</h1>
              <h4>Director, Nirma University</h4>
              <p>
                Dr Rajesh Patel is working as Additional Director, School of
                Engineering, Institute of Technology. He has an experience of
                more than 27 years in the field of teaching, research and
                industry. He obtained his BE degree in Mechanical Engineering
                from REC, Surat in 1990
              </p>
            </div>
            <div className="item">
              <img src={director.src} />
              <h1>Rajesh N Patel</h1>
              <h4>Director, Nirma University</h4>
              <p>
                Dr Rajesh Patel is working as Additional Director, School of
                Engineering, Institute of Technology. He has an experience of
                more than 27 years in the field of teaching, research and
                industry. He obtained his BE degree in Mechanical Engineering
                from REC, Surat in 1990
              </p>
            </div>
            <div className="item">
              <img src={director.src} />
              <h1>Rajesh N Patel</h1>
              <h4>Director, Nirma University</h4>
              <p>
                Dr Rajesh Patel is working as Additional Director, School of
                Engineering, Institute of Technology. He has an experience of
                more than 27 years in the field of teaching, research and
                industry. He obtained his BE degree in Mechanical Engineering
                from REC, Surat in 1990
              </p>
            </div>
          </div>
          <div className="teamSection">
            <div className="imagePart flex flex-col items-center">
              <div className="content">
                <h1>Meet Our Creative Network</h1>
              </div>
              <div class="flex flex-wrap -m-2 w-11/12">
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
      </main>
    </div>
  )
}
