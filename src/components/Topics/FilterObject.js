import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Thai",
          title: "CTO",
          age: 28
        },
        {
          name: "Tommy",
          age: 25,
          hairColor: "black"
        },
        {
          name: "Tran",
          title: "Spy",
          hairColor: "white"
        }
      ],

      userInput: "",
      filteredArray: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filterArray(prop) {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];

    for (let person of unFilteredArray) {
      if (person.hasOwnProperty(prop)) {
        filteredArray.push(person);
      }
    }

    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
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
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
