import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Content from './components/Content';
import Create from './components/Create';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>R&uacute;brica Corte 1 - Jes&uacute;s Oviedo</h1>
      </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/content" element={<Content />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
