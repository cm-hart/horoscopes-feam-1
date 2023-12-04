import "../App.css";

function DateComponent({ formattedDate, currentZodiacSign }) {
  return (
    <div className="DateComponent">
      <p>{formattedDate}</p>
      <img alt="" src={currentZodiacSign} />
    </div>
  );
}

export default DateComponent;
