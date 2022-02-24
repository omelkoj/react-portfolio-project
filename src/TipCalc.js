import React from "react";

class TipCalc extends React.Component {
  //values, put in state so they can be updated/stored
  state = {
    total: "",
    service: "",
    partySize: "",
    totalTip: "",
    tipPP: "",
  };

  //events
  handleTotal = (event) => {
    this.setState({
      total: event.target.value,
    });
  };

  handleService = (event) => {
    this.setState({
      service: event.target.value,
    });
  };

  handleParty = (event) => {
    this.setState({
      partySize: event.target.value,
    });
  };

  getTip = (event) => {
    event.preventDefault(); //prevents page reload upon state change
    let tip = parseFloat(this.state.service * this.state.total).toFixed(2);
    let personalTipPP = parseFloat(tip / this.state.partySize).toFixed(2);
    this.setState({
      totalTip: tip,
      tipPP: personalTipPP,
    });
  };

  //controlled form - we set values equal to something in state
  render() {
    return (
      <div className="calc">
        <h1 className="calc-header">DON'T FORGET TO TIP!</h1>
        <form onSubmit={this.getTip}>
          <label className="calc-two">
            What is your total?
            <input
              type="text"
              value={this.state.total}
              onChange={this.handleTotal}
            ></input>
          </label>
          <label className="calc-two">
            What would you like to tip? (use decimals)
            <input
              type="text"
              value={this.state.service}
              onChange={this.handleService}
            ></input>
          </label>
          <label className="calc-two">
            What is your party size?
            <input
              type="text"
              value={this.state.partySize}
              onChange={this.handleParty}
            ></input>
          </label>
          <input className="calc-two" type="submit"></input>
        </form>
        <p>tip: ${this.state.totalTip}</p>
        <p>tip for each person: ${this.state.tipPP}</p>
      </div>
    );
  }
}

export default TipCalc;
