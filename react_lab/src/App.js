import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      array: "",
      selectIndex: 0,
      value: ""
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

  }

  handleSelectBox = (event) => {
    // console.log(event.target.selectedIndex);
    this.setState({
      selectIndex : event.target.selectedIndex
    })
    console.log(this.state.selectIndex)
  }

  doMath = (event) => {
    event.preventDefault();
    if(this.state.selectIndex === 0) {
      let sum = 0;
      for(let i of this.state.array) {
        sum += Number(i)
      }
      this.setState({
        value: sum
      })
    } else if(this.state.selectIndex === 1) {
      let average = 0;
      let sum = 0;
      for (let i of this.state.array) {
        sum += Number(i)
      }
      average = sum/this.state.array.length;
      this.setState({
        value: average
      })
    } else if(this.state.selectIndex === 2) {
      let obj = {};
      let mostFrequentNumber = 0;
      for(let i of this.state.array) {
        if(!obj[i]) {
          obj[i] = 1;
        } else {
          obj[i] += 1;
        }
      }
      for (let key in obj) {
          if (obj[key] > mostFrequentNumber) {
            mostFrequentNumber = key
          }
      }
      this.setState({
        value: mostFrequentNumber
      })
    }
  }

  handleTextbox = (event) => {
    // console.log("textBox handled")
    for(let i of event.target.value.split(",")) {
      if (isNaN(Number(i))) {
        this.setState({
          value:"Your entry needs to be numbers"
        })
      } else {
        this.setState({
          array: event.target.value.split(","),
          value: ""
        })
      }
    }
    
    console.log(this.state.array)
  }

  render () {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Enter each number in the array, separated by a comma</h3>
          <input type="text" placeholder="Enter numbers" value={this.state.array} onChange={this.handleTextbox}></input>
          <select onChange={this.handleSelectBox}>
            <option>Sum</option>
            <option>Average</option>
            <option>Mode</option>
          </select>
          <button onClick={this.doMath}>Calculate</button>
        </form>
        <h1>{this.state.value}</h1>
      </div>
    );
    }
}

export default App;
