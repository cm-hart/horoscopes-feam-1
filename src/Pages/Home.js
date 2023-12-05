import "../App.css";
import { useState } from "react";
import HoroscopePicker from "../Components/HoroscopePicker";
import DateComponent from "../Components/DateComponent";
import horoscopeData from "../Data/Data";

function Home() {
  const [showStartButton, setShowStartButton] = useState(false);
  const data = horoscopeData.horoscopes.astroSigns;
  const [showDate, setShowDate] = useState(false);
  const [currentZodiacSign, setCurrentZodiacSign] = useState();
  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const [showHoroscopePicker, setShowHoroscopePicker] = useState(false);
  const [sorryToHearMessage, setSorryToHearMessage] = useState(false);

  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  function getCurrentZodiacSign(todayDate) {
    // Find the matching zodiac sign
    const currentZodiacSign = data.find((horoscope) => {
      const dateRange = horoscope.dateRange.split("-")
      console.log(dateRange, "dateRange");

      const currentDate = new Date(todayDate).toLocaleDateString('en-us');
      const startDate = new Date(dateRange[0]).toLocaleDateString('en-us');
      const endDate = new Date(dateRange[1]).toLocaleDateString('en-us');
      console.log(endDate, currentDate, startDate.split().pop().toString(), "endDate");
  
      if (currentDate >= startDate && currentDate <= endDate) {
        return true;
      }
  
      return false;
    });
  
    return currentZodiacSign ? currentZodiacSign.sign : "Unknown";
  }
  
  // Example usage with today's date from the horoscopeData
  const todayDate = horoscopeData.horoscopes.date;
  // const currentZodiacSign1 = getCurrentZodiacSign(todayDate);
  // console.log(currentZodiacSign1, "currentZodiacSign");
  

  function startClickHandler() {
    setShowStartButton(!showStartButton);
  }

  function showDateHandler() {
    setShowDate(!showDate);
    setCurrentZodiacSign(getCurrentZodiacSign(todayDate));
  }

  function showHoroscopeHandler() {
    setShowHoroscopePicker(!showHoroscopePicker);
    setSorryToHearMessage(false);
  }

  function noButtonHandler() {
    setShowHoroscopePicker(false);
    setSorryToHearMessage(true);
  }

  return (
    <div className="Home">
      
      <button onClick={startClickHandler}>
        {showStartButton ? "Hide" : "Start"}
      </button>
      {showStartButton ? (
        <div>
          <div>
            <h1 onClick={(index)=> showDateHandler(index)}>Learn about your horoscope!</h1>
            <div className="button" onClick={showDateHandler}>
              {showDate
                ? "Click here to hide today's date!"
                : "Click here to see today's date!"}
            </div>
            {showDate ? (
              <DateComponent
                formattedDate={formattedDate}
                currentZodiacSign={currentZodiacSign}
                data={data}
              />
            ) : null}
          </div>
          <div>
            <h3>Would you like to choose an astrological sign?</h3>
            <div className="yes-no-button-wrapper">
              <div className="button" onClick={showHoroscopeHandler}>
                {showDate ? "Click here to hide the buttons" : "Yes Please!"}
              </div>
              <div className="button" onClick={noButtonHandler}>
                No thank you!
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showStartButton ? (
        <div>
          <div>
            {sorryToHearMessage ? <p>Sorry to see you go!</p> : null}
            {showHoroscopePicker ? (
              <div>
                <HoroscopePicker data={data} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;

/**
import HoroscopePicker from "../Components/HoroscopePicker";
import DateComponent from "../Components/DateComponent";
import horoscopeData from "../Data/Data"; 


  const data = horoscopeData.horoscopes.astroSigns;
  const [showDate, setShowDate] = useState(false);
  const [currentZodiacSign, setCurrentZodiacSign] = useState();
  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const [showHoroscopePicker, setShowHoroscopePicker] = useState(false);
  const [sorryToHearMessage, setSorryToHearMessage] = useState(false);



  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  function getCurrentZodiacSign() {
    // Find the matching zodiac sign
    const currentZodiacSign = data.find((horoscope) => {
      console.log(horoscope, "horoscope");
      const startDateParts = horoscope.startDate.split("-");
      const endDateParts = horoscope.endDate.split("-");
      const startMonth = parseInt(startDateParts[0], 10);
      const startDay = parseInt(startDateParts[1], 10);
      const endMonth = parseInt(endDateParts[0], 10);
      const endDay = parseInt(endDateParts[1], 10);

      const currentDateParts = formattedDate.split("/");
      const currentMonth = parseInt(currentDateParts[0], 10);
      const currentDay = parseInt(currentDateParts[1], 10);

      if (
        (currentMonth === startMonth && currentDay >= startDay) ||
        (currentMonth === endMonth && currentDay <= endDay)
      ) {
        return true;
      }

      return false;
    });

    return currentZodiacSign ? currentZodiacSign.sign : "Unknown";
  }
  console.log(currentZodiacSign, "currentZodiacSign");

  function showDateHandler() {
    setShowDate(!showDate);
    setCurrentZodiacSign(getCurrentZodiacSign());
  }

  function showHoroscopeHandler() {
    setShowHoroscopePicker(!showHoroscopePicker);
  }

  function noButtonHandler() {
    setShowHoroscopePicker(false);
    setSorryToHearMessage(true);
  }
 
 
 
 * {showStartButton ? (
        <div>
          <div>
            <div>
              <h1>Learn about your horoscope!</h1>
              <div className="button" onClick={showDateHandler}>
                {showDate
                  ? "Click here to hide today's date!"
                  : "Click here to see today's date!"}
              </div>
              {showDate ? (
                <DateComponent
                  formattedDate={formattedDate}
                  currentZodiacSign={currentZodiacSign}
                  data={data}
                />
              ) : null}
            </div>
            <div>
              <h3>Would you like to choose an astrological sign?</h3>
              <div className="yes-no-button-wrapper">
                <div className="button" onClick={showHoroscopeHandler}>
                  {showDate ? "Click here to hide the buttons" : "Yes Please!"}
                </div>
                <div className="button" onClick={noButtonHandler}>
                  No thank you!
                </div>
              </div>
            </div>
          </div>
          <div>
            {sorryToHearMessage ? <p>Sorry to see you go!</p> : null}
            {showHoroscopePicker ? (
              <div>
                <HoroscopePicker data={data} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null} */
