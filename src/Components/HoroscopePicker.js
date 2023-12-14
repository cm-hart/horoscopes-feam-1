// import DateComponent from "../Components/DateComponent";
import "../App.css";
import {  useState } from "react";
import Card from "../Components/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function HoroscopePicker(props) {
  
  const [showCard, setShowCard] = useState(false);
  const [currentData, setCurrentData] = useState(props.data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    let dataArray = [...props.data];
    dataArray.forEach((item) => {
      if (item.key === index) {
        setCurrentData(dataArray[index]);
      }
    });
    setShowCard(!showCard);
    setShow(true);
  }

  

  // const buttons = props.data.map((item, key) => {
  //   return (
  //     <li className="sign-buttons" key={key}>
  //       {item.sign}
  //     </li>
  //   );
  // });



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
      <p>hello</p>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <div className="buttons-wrapper">
        {props.data.map((item, key) => {
          
          return (
            <div
            className="button-wrapper"
              key={key}
              // onClick={handleShow(key)}
            >
              {item.sign}
              
            </div>
          );
        })}
      </div>
      {/* /* <img src={imageList[0]} alt="" /> */}
      <div className="card-wrapper">
        {showCard ? <div className="Card">
      <p>You want to learn about {currentData}</p>
    </div>  : null}
      </div> 
    </div>
  );
}

export default HoroscopePicker;
