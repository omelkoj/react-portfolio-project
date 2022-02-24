import React, { useState } from "react";
import "./App.css";

//practice with functional components
function WhatToEat() {
  //restructered code so we have a list of todos, list out each one as a p tag, using array in state
  const [togos, setTogos] = useState([]);
  //preparing state to keep track of user input in user field
  const [input, setInput] = useState("");
  const addTogo = (e) => {
    e.preventDefault();
    setTogos([...togos, input]);
    setInput("");
  };

  //reset button
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
  };

  return (
    <div>
      <form className="dinnerchoiceinput">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>

        <div className="dinnerchoiceinputtwo">
          <button className="dinnerchoiceinput" type="submit" onClick={addTogo}>
            ADD YOUR DINNER CHOICE
          </button>
        </div>

        <button
          className="dinnerchoiceinput"
          onClick={() => {
            handleReset();
            //ShowAndHide();
          }}
        >
          RESET
        </button>
      </form>

      {/*maps through and returns inputs*/}
      {togos.map((togo) => (
        <p>{togo}</p>
      ))}
    </div>
  );
}

export default WhatToEat;
