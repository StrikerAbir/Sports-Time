import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Side from "../Side/Side";
import "./Body.css";

const Body = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);
  return (
    <div className="body-container">
      <div>
        <Header></Header>
        <div className="sports-container">
          {sports.map((sport) => (
            <Card sport={sport} key={sport.idSport}></Card>
          ))}
        </div>
      </div>
      <div className="side-container">
        <Side></Side>
      </div>
    </div>
  );
};

export default Body;
