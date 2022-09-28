import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Side from "../Side/Side";
import "./Body.css";

const Body = () => {
    const [sports, setSports] = useState([]);
    const [adds, setAdds] = useState([]);
  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);
    
    const clickHandler = (addedSport) => {
        let newAdd = [...adds, addedSport];
        setAdds(newAdd);
}
    
  return (
    <div className="body-container">
      <div className="head-sports">
        <Header></Header>
        <div className="sports-container">
          {sports.map((sport) => (
            <Card
              sport={sport}
              key={sport.idSport}
              clickHandler={clickHandler}
            ></Card>
          ))}
        </div>
      </div>
      <div className="side-container">
        <Side adds={adds}></Side>
      </div>
    </div>
  );
};

export default Body;
