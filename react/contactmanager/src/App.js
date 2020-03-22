import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';


class App extends Component {
  render() {
    const name = "Rajadd";
    return (
      
      <div className="App">
        <h1>The App Component</h1>
          <h4>Hello {name.toUpperCase()}</h4>
          <Header/>
          <Contact/>
          <Contact/>
      </div>
    );
  }
}

export default App;
