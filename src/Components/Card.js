import "../App.css";

function Card({ currentSign }) {
  return (
    <div className="Card">
      <p>You want to learn about {currentSign.sign}</p>
    </div>
  );
}

export default Card;
