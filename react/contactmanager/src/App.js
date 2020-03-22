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
          <Header branding ="Contact Manager"/>
          <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555"/>
          <Contact name="aj " email="ja@gmail.com" phone="555-545-5555"/>
      </div>
    );
  }
}

export default App;
