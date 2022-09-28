import React from 'react';
import Header from '../Header/Header';
import Side from '../Side/Side';
import './Body.css'

const Body = () => {
    return (
      <div className="body-container">
        <div className="sports-container">
          <Header></Header>
        </div>
        <div className='side-container'>
            <Side></Side>
        </div>
      </div>
    );
};

export default Body;