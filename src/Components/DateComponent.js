import "../App.css";

function DateComponent({ formattedDate, currentZodiacSign }) {
  return (
    <div className="DateComponent">
      <p>{formattedDate}</p>
      <p> The current Zodiac Sign is: {currentZodiacSign}</p>
    </div>
  );
}

export default DateComponent;
