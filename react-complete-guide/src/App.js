import React, { Component } from 'react';

import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.randomAge = 0
  }

  componentDidMount() {
    console.log('randomAge::', this.randomAge)
  }

  // bind this for passing params
  increaseCounter = (value) => () => {
    const { counter } = this.state;
    this.setState({ counter: counter + value })
    this.randomAge = value;
    console.log('randomAge:::', this.randomAge)
  }

  render() {
    const { counter } = this.state;
    console.log('counter:::', counter);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h1>Hi, I'm a React Counter App</h1>
        <button className="btn-counter" onClick={this.increaseCounter(3)}>
          Increase
        </button>
        <p className="txt-counter">{counter}</p>
        {/* <Person name='minh' age={counter} birthday={}/>
        <Person name='thiem' age={this.randomAge}/> */}
        <Person name='john' age={21} birthday='5-8'/>
      </div>
    );
  }
}

export default App;
