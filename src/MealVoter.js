import React, { Component } from "react";

export default class MealVoter extends Component {
  constructor(props) {
    super(props);

    //object, and no setter for each piece of state in the component
    this.state = {
      count: 0,
      age: 26,
    };
  }
  //functions not variables
  increment = () => {
    //{} pass in object - refers to this instance of class we are defining
    //now we are returning an object
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  };

  render() {
    return (
      <div className="background-color">
        <p className="background-color">
          Vote on your favorite {this.props.meal}!
        </p>
        <p className="background-color-bold">
          Your total is: {this.state.count}{" "}
        </p>
        <p className="background-color-bold">Vote Up</p>
        <button className="background-color-buttons" onClick={this.increment}>
          +
        </button>
        <p className="background-color-bold">Vote Down</p>
        <button className="background-color-buttons" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
