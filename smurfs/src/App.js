import React, {useState} from 'react';
import './App.css';
import {SmurfContext} from "./contexts/SmurfContext"
import SmurfList from "./components/SmurfList"
import AddSmurfForm from "./components/AddSmurfForm"

function App() {
  const [smurfs, setSmurfs] = useState([]);

  return (
    <SmurfContext.Provider value={{smurfs, setSmurfs}}>
      <div className="App">
        <SmurfList />
        <AddSmurfForm />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
