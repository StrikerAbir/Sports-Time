import React from 'react';
import './BreakTime.css'
const BreakTime = ({ handleBreakTime, minutes }) => {
    const { min } = minutes;
    return (
      <div>
        <p onClick={()=>handleBreakTime(min)}>
                {min}<small>min</small>
        </p>
      </div>
    );
};

export default BreakTime;