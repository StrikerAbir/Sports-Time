import React from 'react';
import './Side.css';
import pic from '../../images/pic5.png'

const Side = () => {
    return (
        <div className='side-body'>
        <div className="side-header">
          <img src={pic} alt="" />
          <h2>Abir Hasan</h2>
        </div>
      </div>
    );
};

export default Side;