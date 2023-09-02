import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Content from './components/Content';
import Create from './components/Create';
import Footer from './components/Footer';
import sportsData from './components/data';
import './App.css'

function App() {
  const storedData = localStorage.getItem('sportsData');
  if (!storedData) {
    localStorage.setItem('sportsData', JSON.stringify(sportsData));
  }

  const addSport = (newSport) => {
    const storedData = localStorage.getItem('sportsData');
    const currentData = storedData ? JSON.parse(storedData) : [];
    const updatedData = [...currentData, newSport];
    localStorage.setItem('sportsData', JSON.stringify(updatedData));
  };
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
          <Route path="/create" element={<Create addSport={addSport}/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
