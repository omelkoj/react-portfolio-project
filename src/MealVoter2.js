import React, { Component } from "react";

export default class MealVoter2 extends Component {
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
      <div>
        <p>Hello {this.props.name}, welcome to the MealVoter!</p>
        <p>Your total is: {this.state.count} </p>
        <p>Vote Up</p>
        <button onClick={this.increment}>+</button>
        <p>Vote Down</p>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
