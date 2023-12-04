// import DateComponent from "../Components/DateComponent";
import "../App.css";
import {  useState } from "react";
import Card from "../Components/Card";

function HoroscopePicker(props) {
  
  const [showCard, setShowCard] = useState(false);
  const [currentData, setCurrentData] = useState(props.data);

  

  const buttons = props.data.map((item, key) => {
    return (
      <li className="sign-buttons" key={key}>
        {item.sign}
      </li>
    );
  });



  function showCardHandler(index) {
    let dataArray = [...props.data];
    dataArray.forEach((item) => {
      if (item.key === index) {
        setCurrentData(dataArray[index]);
      }
    });
    setShowCard(!showCard);
  }

  return (
    <div className="HoroscopePicker">
      
      <div className="buttons-wrapper">
        {buttons.map((item, key) => {
          return (
            <div
            className="button-wrapper"
              key={key}
              onClick={() => showCardHandler(key)}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* <img src={imageList[0]} alt="" /> */}
      <div className="card-wrapper">
        {showCard ? <Card currentSign={currentData} /> : null}
      </div>
    </div>
  );
}

export default HoroscopePicker;
