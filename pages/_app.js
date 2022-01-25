import '../styles/logo_animation.scss'
import '../styles/main.scss'
import '../styles/nav.scss'
import '../styles/footer.scss'
import '../styles/home.scss'
import '../styles/about.scss'
import '../styles/team.scss'
import '../styles/events.scss'
import '../styles/contact.scss'
import '../styles/404.scss'
import { useState, useEffect } from 'react'
import Logo from '../components/Logo';

function MyApp({ Component, pageProps }) {
  const [active, setactive] = useState(0)
  const [menu, setmenu] = useState(false)
  const [isLogo, setIsLogo] = useState(true);

  function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }

  }

  useEffect(() => {

    setTextAnimation(0.7, 4.8, 1, 'linear', '#ffffff', false);
    setTimeout(() => {
      setIsLogo(false);
    }, 6000)

  }, []);

  var state = { active, setactive, menu, setmenu }

  return (
    <>
      {
        isLogo
          ?

          <Logo />

          :
          <Component {...pageProps} {...state} />
      }
    </>

  )
}

export default MyApp
