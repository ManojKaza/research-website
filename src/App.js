import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>

  );
}

export default App;
