import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = "Rajadd";
    return (
      
      <div className="App">
        <h1>The App Component</h1>
          <h4>Hello {name.toUpperCase()}</h4>
      </div>
    );
  }
}

export default App;
