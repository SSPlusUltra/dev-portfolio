import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RT = (props) => {
  return (
    <>
      {props.rev ? 
        props.data.map((item, index) => (
          <div key={index} className="revouter-text">
            <div className='revtitle-links'>
              <div className="revproject-title">
                <h1>{item.title}</h1>
              </div>

              <div className="revgh-lw-links">
                <Link to={item.gh}><FontAwesomeIcon color='red' size='xl' icon={faGithub} /></Link>
                <Link to={item.lw}><FontAwesomeIcon color='red' size='xl' icon={faArrowUpRightFromSquare} /></Link>
              </div>
            </div>

            <div className="revtech-stack">
                {item.techStack.map((ele)=>(
                   <img style={{width:'30px'}} src={ele}></img>
                ))}
            </div>

            <div className="revdescription">
              {item.description}
            </div>
          </div>
        )) :
        props.data.map((item, index) => (
            <div key={index} className="outer-text">
              <div className='title-links'>
                <div className="project-title">
                  <h1>{item.title}</h1>
                </div>
  
                <div className="gh-lw-links">
                  <Link to={item.gh}><FontAwesomeIcon color='red'  size='xl' icon={faGithub} /></Link>
                 <Link to={item.lw}><FontAwesomeIcon color='red' size='xl' icon={faArrowUpRightFromSquare} /></Link>
                </div>
              </div>
  
              <div className="tech-stack">
                  {item.techStack.map((ele)=>(
                     <img style={{width:'30px'}} src={ele}></img>
                  ))}
              </div>
  
              <div className="description">
                {item.description}
              </div>
            </div>
          ))
      }
    </>
  );
}

export default RT;
