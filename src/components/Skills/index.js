import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills".split("")}
                        idx={15}
                    />
                </h1>
                <div className='containerr'>
      <div className='a'>
      <img src='portfolio/1/html.png' className='imp'/>
            </div>
      <div className='b'>
        <img src='portfolio/1/css.png' className='imp'/>
      </div>
      <div className='c'>
      <img src='portfolio/1/js.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/React.png' className='imp'/>
      </div>

      <div className='c'>
        <img src='portfolio/1/ts.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/docker.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/git.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/c++.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/python.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/nodejs.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/express.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/mysql.png' className='imp'/>
      </div>

      <div className='c'>
      <img src='portfolio/1/mongodb.png' className='imp'/>
      </div>
    </div>  

            </div>

    
      <Loader type="pacman" />
    </>
  )
}

export default Skills;







