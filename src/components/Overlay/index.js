import React from 'react';
import './index.scss'
import LogoTitle from '../../assets/images/laptop-png-8.png'
import lg from '../../assets/images/Expense.png'
import RT from '../RT';

const ImageOverlay = (props) => {
  return (
    <div className='outer-overlay'>

    <div className="image-container">
      <img src={LogoTitle} alt="Background" className="background-image" />
      <img src={props.img} alt="Overlay" className="overlay-image" />
    </div>
    <div className='rt'>
        <RT data = {props.data}/>
      </div>
    </div>
  );
}

export default ImageOverlay;
