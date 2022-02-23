import React, { useState } from "react";
import MealVoterB from "./MealVoterB";

function MealVoter({ name }) {
  //object? variable itself
  const [count, setCount] = useState(0);

  //variables which are arrow functions inside our functional component, simply are nomrmal functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <MealVoterB name={name} />
      <p>Hello {name}, welcome to the MealVoter!</p>
      <p>Your total is: {count} </p>
      <p>Vote Up</p>
      <button onClick={increment}>+</button>
      <p>Vote Down</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default MealVoter;
