import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

class App extends Component {
  handleInputChange = (event)=>{
    console.log('You typed ',event.target.value)
  }
  render() {
    var name = "Mr Kehinde";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <input onChange={this.handleInputChange}/>
        <p>We are at Active Edge {name}</p>
        <p>Today's Date is {new Date().toLocaleDateString()}</p>
        <Profile name="Farooq" age="21"/>
      </div>
    );
  }
}

export default App;
