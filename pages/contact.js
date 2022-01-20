import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { data } from 'autoprefixer';
const axios = require('axios');




export default function Home(props) {
  const { active, setactive, menu, setmenu } = props
  useEffect(() => {
    setactive(4)
    setmenu(false)
  }, [])
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [LoadText, setLoadText] = useState('');

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const SendEmail = () => {

    setLoadText('Loading...');

    axios.post('/api/contact_mail', details)
      .then((data) => {

        setLoadText('Send');
        setDetails({
          name: '',
          email: '',
          message: '',
        })


        setTimeout(() => {

          setLoadText('');

        }, 3000)

      }).catch((data) => {

        setLoadText('Error');
        setDetails({
          name: '',
          email: '',
          message: '',
        })


        setTimeout(() => {

          setLoadText('');

        }, 3000)

      })

  }




  return (
    <div>
      <Head>
        <title>ACES | Contact</title>
        <meta
          name="description"
          content="Association of Computer Engineering Students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} menu={menu} setmenu={setmenu} />
      <main
        id="contact"
        className={menu ? 'diff' : 'normal'}
        style={{
          transform: menu
            ? 'translateX(10%) scale(0.7)'
            : 'scale(1) translateX(0) translateY(0) scale(1)',
          zIndex: menu ? 12 : 1,
        }}
      >
        {/* <div className=='form'>
          <h1>Contact Us!</h1>
          <input
            type="text"
            name="name"
            placeholder='Full Name'
            value={details.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Email Id'
            value={details.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder='Message'
            value={details.message}
            onChange={handleChange}
          ></textarea>
          <button>Submit</button> */}
        {/* </div> */}

        <section className="text-gray-400 bg-white body-font relative w-10/12 my-14">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.1247686028078!2d72.54228251477153!3d23.129114284899213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
            4f13.1!3m3!1m2!1s0x395e832f45125167%3A0x876cb1cb23c25bdb!2sNirma%20University!5e0!3m2!1sen!2sin!4v1640794093530!5m2!1sen!2sin"
              ></iframe>
              <div className="bg-slate-200 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-gray-800">
                    Nirma University,Sarkhej - Gandhinagar Hwy, Gota, Ahmedabad,
                    Gujarat 382481
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-orange-600 leading-relaxed">
                    xyz@nirmauni.ac.in
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-gray-800">
                    +91 7285080146
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-800">
                Provide your input!
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-200 rounded border border-orange-600 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                  onChange={(e) => handleChange(e)}
                  value={details.name}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 rounded border border-orange-600 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => handleChange(e)}
                  value={details.email}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-200 rounded border border-orange-600 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => handleChange(e)}
                  value={details.message}
                ></textarea>
              </div>
              <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"

                onClick={SendEmail}
              >

                {
                  LoadText
                    ?
                    LoadText
                    :
                    'SUBMIT'
                }
              </button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3"></p>
            </div>
          </div>
        </section>
        {/* <div className='socialMedia'>
          <ul>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
            <li><a href=""><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a></li>
          </ul>
        </div> */}
        {/* <img id="cont1" src={cont1.src} />
        <img id="cont2" src={cont2.src} /> */}
      </main>
    </div>
  )
}