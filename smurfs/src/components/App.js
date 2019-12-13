import React, { Component } from "react";
import { connect } from 'react-redux';

import "./App.css";
import { getData } from '../actions/index';

import SmurfData from './SmurfsData'

const App = (props) => {
  // console.log(props)
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <button onClick={() => props.getData()}>Get Smurfs</button>
      <SmurfData data={props.smurfs} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  { getData }
)(App)

// export default App;
