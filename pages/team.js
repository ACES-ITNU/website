import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { TEAM_MEMBERS } from '../data/team'
import TeamCard from '../components/teamCard'
import Footer from '../components/Footer'
import Faculty from '../components/Faculty'
import janmejay from '../images/developer/Janmejay.jpg'
import krisha from '../images/developer/krisha.jpg'
import jatin from '../images/developer/jatin.jpeg'
import zeel from '../images/developer/zeel.jpg'
import barun from '../images/developer/Barun.jpg'
import dhruvil from '../images/developer/Dhruvil.png'

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
          <div className="developer-section">
            <div className="imagePart flex flex-col items-center">
              <div className="content">
                <h1>Developed By</h1>
              </div>
              <div className="flex flex-wrap -m-2 w-11/12">
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={janmejay.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Janmejay Shastri
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={krisha.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Krisha Vora
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={jatin.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Jatin Kashyap
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={zeel.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Zeel Prajapati
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={barun.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Barun Debnath
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/6 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-rose-600 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
                      src={dhruvil.src}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-800 title-font font-medium">
                        Dhruvil Shah
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
