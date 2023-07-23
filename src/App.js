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
        <div className='content-container'>
          <Routes>
            <Route path= '/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path= 'aboutus' element={<AboutUs />} />
          </Routes>
          <Routes>
            <Route path= 'services' element={<Services />} />
          </Routes>
          <Routes>
            <Route path= 'ai' element={<Ai />} />
          </Routes>
          <Routes>
            <Route path= 'ml' element={<Ml />} />
          </Routes>
          <Routes>
            <Route path= 'research' element={<Research />} />
          </Routes>
          <Routes>
            <Route path= 'contact' element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
