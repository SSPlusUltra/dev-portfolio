import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import ReactGA from "react-ga"

const Home = () => {


  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  },[]);
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'i', 's', 'h',' ']
  const jobArray = [
    'I',
' ',
'o',
'b',
's',
'e',
's',
's',
' ',
'o',
'v',
'e',
'r',
' ',
't',
'e',
'c',
'h',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 style={{wordBreak:'break-word'}}>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>CS Grad Student at BostonU | Tech Enthusiast | Ex-SWE@Cognizant </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
