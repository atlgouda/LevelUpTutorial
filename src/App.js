import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Toggle>
          {({on, toggle})=> (
            <div>{on && <h1>Show Me</h1>}
            
            <button onClick={toggle}>Show / Hide</button>
            </div>
          )
          }
          </Toggle>

          
        </header>
      </div>
    );
  }
}

export default App;
