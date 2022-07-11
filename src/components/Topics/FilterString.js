import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "Ben",
        "Chris",
        "Freddy",
        "Jonathan",
        "Luis",
        "Marina",
        "Mason",
        "Nate",
        "Nhat",
        "Rob",
        "Satchel",
        "Thai"
      ],

      userInput: "",
      filteredArray: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filterArray(name) {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];

    if (unFilteredArray.includes(name)) {
      filteredArray.push(name);
    }

    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
