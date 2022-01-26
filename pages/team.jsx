import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { TEAM_MEMBERS } from "../data/team";
import { DEVELOPER_MEMBERS } from "../data/devloper";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";
import Faculty from "../components/Faculty";

export default function Team(props) {
  const { active, setactive, menu, setmenu } = props;
  useEffect(() => {
    setactive(2);
    setmenu(false);
  }, []);
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
        className={menu ? "diff" : "normal"}
        style={{
          transform: menu
            ? "translateX(10%) scale(0.7)"
            : "scale(1) translateX(0) translateY(0) scale(1)",
          zIndex: menu ? 12 : 1,
        }}
      >
        <div className="team">
          <h1 className="heading">ACES and Nirma University</h1>
          <Faculty />
          <div className="all">
            <div className="teamSection">
              <div className="imagePart part1  flex flex-col items-center justify-center text-center">
                <div className="content"></div>
                <div className="team_mem flex flex-wrap -m-2 w-10/12">
                  <h1>Meet Our Creative Network</h1>
                  <div className="flex flex-row flex-wrap">
                    {TEAM_MEMBERS.map((member, index) => (
                      <TeamCard
                        key={index}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                        link={member.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="developer-section">
              <div className="imagePart part2 flex flex-col items-center">
                <div className="content"></div>
                <div className="dev1 flex flex-wrap justify-center items-center">
                  <h1>Website Developed By</h1>
                  <div className=" flex flex-row items-center justify-center flex-wrap">
                    {DEVELOPER_MEMBERS.map((member, index) => (
                      <TeamCard
                        key={index}
                        name={member.name}
                        image={member.image}
                        link={member.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
