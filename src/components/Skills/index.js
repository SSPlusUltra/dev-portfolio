import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {motion} from 'framer-motion';
import { faFileArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Document, Page,  } from 'react-pdf'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hoveredElement, setHoveredElement] = useState(null);
  const[preview, setPreview] = useState(false);
  const[popup,setpopup] = useState(false)
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const handleHoverStart = (name) => {
    setHoveredElement(name);
  };

  const handleHoverEnd = () => {
    setHoveredElement(null);
  };

  const resumeHandler=()=>{
    setPreview(!preview)
}


const popupHandler=()=>{
  setpopup(true);
  setTimeout(()=>{
    setpopup(false)
  },5000)
}

const handleDownload = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = '/portfolio/1/Anish_Resume.pdf'; 
  downloadLink.download = 'resume.pdf'; 
  downloadLink.click();
};

 

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
                <div className="icon-containerr">
               <span className='famag' onClick={()=>{resumeHandler(); popupHandler();}}><FontAwesomeIcon icon={faMagnifyingGlass} bounce size="2xl" style={{color: "#ffff00"}} /></span>
               <span className='fafile' onClick={handleDownload}><FontAwesomeIcon icon={faFileArrowDown} bounce size="2xl" style={{color: "#ffff00",}} /></span>
               {preview && (<div className='resume-container'>
               {popup && <div className='popup_'>click on Lens image again to close the resume</div>} 
    <iframe className='iframec'src="/portfolio/1/Anish_Resume.html" align="center" title="Resume" />
    </div>
)}

</div>

                <div className='containerr'>
                <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 1')}
          onMouseLeave={handleHoverEnd}
          className='a'
        >
          <img src='portfolio/1/html.png' className='imp' />
          {hoveredElement === 'Element 1' && (
            <span className='element-name'>HTML</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 2')}
          onMouseLeave={handleHoverEnd}
          className='b'
        >
          <img src='portfolio/1/css.png' className='imp' />
          {hoveredElement === 'Element 2' && (
            <span className='element-name'>CSS</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 3')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/js.png' className='imp' />
          {hoveredElement === 'Element 3' && (
            <span className='element-name'>JavaScript</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 4')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/React.png' className='imp' />
          {hoveredElement === 'Element 4' && (
            <span className='element-name'>React</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 5')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/ts.png' className='imp' />
          {hoveredElement === 'Element 5' && (
            <span className='element-name'>TypeScript</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 6')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/docker.png' className='imp' />
          {hoveredElement === 'Element 6' && (
            <span className='element-name'>Docker</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 7')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/git.png' className='imp' />
          {hoveredElement === 'Element 7' && (
            <span className='element-name'>Git</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 8')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/c++.png' className='imp' />
          {hoveredElement === 'Element 8' && (
            <span className='element-name'>C++</span>
          )}
        </motion.div>
        {/* Add more motion.div elements with respective hover effects and tooltips */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 9')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/python.png' className='imp' />
          {hoveredElement === 'Element 9' && (
            <span className='element-name'>Python</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 10')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/nodejs.png' className='imp' />
          {hoveredElement === 'Element 10' && (
            <span className='element-name'>Node.js</span>
          )}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 11')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/express.png' className='imp' />
          {hoveredElement === 'Element 11' && (
            <span className='element-name'>Express</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 12')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/mysql.png' className='imp' />
          {hoveredElement === 'Element 12' && (
            <span className='element-name'>MySQL</span>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onMouseEnter={() => handleHoverStart('Element 13')}
          onMouseLeave={handleHoverEnd}
          className='c'
        >
          <img src='portfolio/1/mongodb.png' className='imp' />
          {hoveredElement === 'Element 13' && (
            <span className='element-name'>MongoDB</span>
          )}
        </motion.div>
    </div>  

            </div>

    
      <Loader type="pacman" />
    </>
  )
}

export default Skills;







