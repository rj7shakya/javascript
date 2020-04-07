import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/Searchbar';
import Logs from './components/logs/Logs'

import './App.css';

const App = () => {
  useEffect(() => {
    //Init materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
