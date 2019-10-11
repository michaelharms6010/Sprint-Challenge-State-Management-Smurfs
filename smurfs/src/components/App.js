import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index'
import Smurfs from "./Smurfs"
import AddSmurfForm from "./AddSmurfForm";

class App extends Component {
  state = {
    name: '',
    age: '',
    height:''
  }
  
  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <p>If the word "Smurf" is starting to look weird to you, you're not the only one.</p>
        <Smurfs />
        <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}
export default connect (
  mapStateToProps,
  {fetchSmurfs}
)(App)
