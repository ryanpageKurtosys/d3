import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="indigo darken-1 section">
            <h2 class="center white-text">D3 Example 1</h2>
            <p class="flow-text grey-text center text-lighten-2"></p>
       </header>
        <svg width="600" height="600">
          <rect x="300" y="100" fill="blue" width="100" height="200"></rect>
          <circle cx='200' cy='200' r='50' fill='pink' stroke="red" stroke-width="2"></circle>
          <line x1="100" y1="100" x2="120" y2="300" stroke="grey" stroke-width="3"></line>
        </svg>
      </div>
    );
  }
}

export default App;
