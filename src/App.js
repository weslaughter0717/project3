import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          <Link to="/custom" >Custom</Link>
          <br />
          <Link to="/talk" > Talk</Link>
        </p>
      </div>
    );
  }
}

export default App;
