import React, { Fragment } from "react";
import './App.css';


//components

import InputUsername from "./components/InputUsernames";
import ListUsernames from "./components/ListUsernames";

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputUsername />
      <ListUsernames />
    </div>
    </Fragment>
  );
}

export default App;