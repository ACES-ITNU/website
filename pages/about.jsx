import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nirmaLogo from "../images/Logo_NirmaUniversity_Transparent.png";
import acesLogo from "../images/Logo_Tranparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function About(props) {
  const { active, setactive, menu, setmenu } = props;
  const [downPos, setdownPos] = useState(false);
  useEffect(() => {
    setactive(1);
    setmenu(false);
  }, []);
  return (
    <div>
      <Head>
        <title>ACES | About</title>
        <meta
          name="description"
          content="Association of Computer Engineering Students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main
        id="about"
        className={menu ? "diff" : "normal"}
        style={{
          transform: menu
            ? "translateX(10%) scale(0.7)"
            : "scale(1) translateX(0) translateY(0) scale(1)",
          zIndex: menu ? 12 : 1,
        }}
      >
        <section
          className="section bluebg"
          style={{
            transform: downPos ? "translateY(-100vh)" : "translateY(0)",
          }}
        >
          <div className="bg"></div>
          <h1>Nirma University</h1>
          <div>
            <img src={nirmaLogo.src} />
            <p>
              Established in the year 2003, the Nirma University, Ahmedabad is a
              research-oriented, student-centric, multidisciplinary,
              not-for-profit state private university. Within a short period of
              its existence, it has emerged as a nationally renowned higher
              education institution. The University and its constituent
              institutes are highly ranked by different ranking agencies
            </p>
          </div>
        </section>

        <section
          className="orangebg section"
          style={{
            transform: downPos ? "translateY(-100vh)" : "translateY(0)",
          }}
        >
          <div className="bg"></div>
          <h1>Vision and Mission</h1>
          <div>
            <img src={acesLogo.src} />
            <p>
              The Vision of ACES is to promote innovation and enhance knowledge
              in the field of computing amongst the Association’s members while
              making them more aware of the dynamic changes that are
              transforming the IT industry. The Mission of ACES is to provide
              ample opportunities for its members to indulge in networking,
              mentoring and bonding by establishing a nourishing platform for
              the exchange of ideas among students, alumni and working
              professionals in the field of computing.
            </p>
          </div>
          {/* <Footer /> */}
        </section>

        {/* Button to change the view */}
        <FontAwesomeIcon
          onClick={() => setdownPos(!downPos)}
          className={!downPos ? "arrowicon orange" : "arrowicon blue"}
          icon={!downPos ? faArrowDown : faArrowUp}
        />
      </main>
    </div>
  );
}
