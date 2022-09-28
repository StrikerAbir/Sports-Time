import React from "react";
import "./Side.css";
import pic from "../../images/pic5.png";

const Side = () => {
  return (
    <div className="side-body">
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
      <div className="bt-container">
        <h2>Break Time</h2>
        <div className="break-time">
          <div>
            <p>
              20<small>min</small>
            </p>
          </div>
          <div>
            <p>
              30<small>min</small>
            </p>
          </div>
          <div>
            <p>
              40<small>min</small>
            </p>
          </div>
          <div>
            <p>
              50<small>min</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
