import '../styles/main.scss'
import '../styles/nav.scss'
import '../styles/home.scss'
import '../styles/about.scss'
import '../styles/team.scss'
import '../styles/events.scss'
import '../styles/contact.scss'
import '../styles/404.scss'
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [active,setactive] = useState(0)
  const [menu,setmenu] = useState(false)
  var state = {active, setactive, menu, setmenu}
  return <Component {...pageProps} {...state} />
}

export default MyApp
