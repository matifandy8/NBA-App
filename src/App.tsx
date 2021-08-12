import React from 'react';
import './App.css';
import { Public } from './router/Public';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {

  return (
    <Router>
    <div className="App">
      <Public />
    </div>
    </Router>

  );
}

export default App;
