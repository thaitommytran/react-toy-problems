import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  assignEvensAndOdds(userInput) {
    let arr = userInput.split(",");
    let evens = [];
    let odds = [];

    for (let number of arr) {
      if (number % 2 === 0) {
        evens.push(parseInt(number));
      } else {
        odds.push(parseInt(number));
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={(event) => this.assignEvensAndOdds(this.state.userInput)}
        ></button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
