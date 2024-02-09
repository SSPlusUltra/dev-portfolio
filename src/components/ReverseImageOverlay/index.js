import React from 'react';
import './index.scss'
import LogoTitle from '../../assets/images/laptop-png-8.png'
import lg from '../../assets/images/Expense.png'
import RT from '../RT';
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'

const RevevrseImageOverlay = (props) => {
  return (
    <div className='revouter-overlay'>
        <div className='rare'>

    <div className="revimage-container">
      <img src={LogoTitle} alt="Background" className="revbackground-image" />
      <img src={props.img} alt="Overlay" className="revoverlay-image" />
    </div>
    <div className='rt'>
        <RT rev={true} data = {props.data}/>
      </div>
        </div>
    </div>
  );
}

export default RevevrseImageOverlay;
