import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Quiz from "./pages/Quiz";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/setting" component={Setting} />
          <Redirect to="/" />
        </Switch>
        Quiz app
      </div>
    </Router>
  );
}

export default App;
