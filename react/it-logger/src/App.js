import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/Searchbar';

import './App.css';

const App = () => {
  useEffect(() => {
    //Init materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
}

export default App;
