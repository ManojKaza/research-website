import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { Home, AboutUs, Services, Ai, Ml, Research, ContactUs} from './pages/serve';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className='app-content-container'>
          <Routes>
            <Route path= '/' element={<Home />} />
            <Route path= 'aboutus' element={<AboutUs />} />
            <Route path= 'services' element={<Services />} />
            <Route path= 'ai' element={<Ai />} />
            <Route path= 'ml' element={<Ml />} />
            <Route path= 'research' element={<Research />} />
            <Route path= 'contact' element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
