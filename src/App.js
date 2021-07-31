import "./App.css";

import { useState, useEffect } from "react";

import Card from "./components/Card";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card-container">
          <FontAwesomeIcon
            onClick={slideLeft}
            className="leftBtn"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            onClick={slideRight}
            className="rightBtn"
            icon={faChevronRight}
          />
          {data.map((person, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Card {...person} cardStyle={position} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
