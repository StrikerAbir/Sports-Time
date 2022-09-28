import React, { useState } from "react";
import "./Side.css";
import pic from "../../images/pic5.png";
import BreakTime from "../BreakTime/BreakTime";

const Side = ({ adds }) => {
    const timeTotal = adds.reduce((prev, cur) => prev + cur.time, 0);
    const array = [
      { id: 1, min: 20 },
      { id: 2, min: 30 },
      { id: 3, min: 40 },
      { id: 4, min: 50 },
    ];
    const [ breakT, setBreakT ] = useState(0);
    
  const handleBreakTime = (min) => {
      setBreakT(0);
      setBreakT(min);
  };
  return (
    <div className="side-body">
      {/* my info */}
      <div className="side-header">
        <img src={pic} alt="" />
        <h2>Abir Hasan</h2>
      </div>
      <div className="my-info">
        <div>
          <h2>5.5</h2>
          <p>Height</p>
        </div>
        <div>
          <h2>
            24<small>years</small>
          </h2>
          <p>Age</p>
        </div>
        <div>
          <h2>
            55<small>kg</small>
          </h2>
          <p>Weight</p>
        </div>
      </div>

      {/* break time part */}
      <div className="bt-container">
        <h2>Break Time</h2>
        <div className="break-time">
          {array.map((min) => (
            <BreakTime
              handleBreakTime={handleBreakTime}
                  minutes={min}
                  key={min.id}
            ></BreakTime>
          ))}
        </div>
      </div>

      {/* Detais part */}
      <div className="details">
        <h2>Sports Time Details</h2>
        <div className="times">
          <p>Sports Time</p>
          <p>
            <span>{timeTotal}hr</span>
          </p>
        </div>
        <div className="times">
          <p>Break Time</p>
          <p>
                      <span>{breakT }min</span>
          </p>
        </div>
      </div>
      <button className="activity-btn">
        <p>Activity Complete</p>
      </button>
    </div>
  );
};

export default Side;
