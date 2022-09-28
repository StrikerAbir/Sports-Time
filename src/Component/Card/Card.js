import React from "react";
import "./Card.css";
const Card = ({ sport }) => {
  const { strSport, strFormat, strSportThumb, strSportDescription, time } =
    sport;
  return (
    <div className="card-container">
      <img src={strSportThumb} alt="" />
      <div className='align'>
        <h3>{strSport}</h3>
        <p>Time : {time}hr</p>
      </div>
      <p>
        <small>Format : {strFormat}</small>
      </p>
      <p>{strSportDescription}</p>
      <button className='btn'>
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Card;
