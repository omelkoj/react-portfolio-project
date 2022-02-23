import React, { useState } from "react";
import App from "./App";
import hideComponent from "./App";
import "./App.css";

function PlacesToGo() {
  //restructered code so we have a list of todos, list out each one as a p tag, using array in state
  const [todos, setTodos] = useState([]);
  //preparing state to keep track of user input in user field
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
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

  //show and hide
  //  const ShowAndHide = () => {
  const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);

  // This function is triggered when the button is clicked
  const buttonHandler = () => {
    setIsBlueBoxShown(!iseBlueBoxShown);
  };

  //function to combine functions for adding to button
  const handleClick = (e) => {
    addTodo(e);
    buttonHandler();
  };

  //<MenuItem onClick={handleClick}>Add Album</MenuItem>

  /* // This function is triggered when the checkbox changes
  const checkboxHandler = () => {
    setIsYellowBoxShown(!isYellowBoxShown);
  };*/

  /*    return (
      <div className="container">
        <div>
          <button onClick={buttonHandler}>
            {iseBlueBoxShown ? "Hide Blue Box" : "Show Blue Box"}
          </button>
          {iseBlueBoxShown && <div className="blue-box"></div>}
        </div>
      </div>
    );
*/
  //  };

  return (
    <div>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>

        <div>
          <button type="submit" onClick={handleClick}>
            {iseBlueBoxShown ? "Hide Blue Box" : "Show Blue Box"}
          </button>
          {iseBlueBoxShown && <div className="blue-box"></div>}
        </div>

        <button
          onClick={() => {
            handleReset();
            //ShowAndHide();
          }}
        >
          RESET
        </button>
      </form>

      <h3 className="todo"></h3>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default PlacesToGo;
