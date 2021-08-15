import React, { useEffect } from 'react';
import './App.css';
import { Public } from './router/Public';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {

  useEffect(() => {
      console.log("token",localStorage.getItem('userInfo'))
  }, [])

  return (
    <Router>
    <div className="App">
      <Public />
    </div>
    </Router>

  );
}

export default App;
