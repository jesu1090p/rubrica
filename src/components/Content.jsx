import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  const [sportsData, setSportsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Cargar los datos de deportes desde localStorage o useContext
    // setSportsData([...]); // Aquí deberías cargar los datos
  }, []);

  const filteredSports = selectedCategory
    ? sportsData.filter((sport) => sport.category === selectedCategory)
    : sportsData;

  return (
    <div className="content">
      <h1>Deportes</h1>
      <div className="filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Motor">Deportes de motor</option>
          <option value="Mesa">Deportes de mesa</option>
          <option value="Equipo">Deportes por equipo</option>
        </select>
      </div>

      <div className="cards">
        {filteredSports.map((sport, index) => (
          <div key={index} className="card">
            <img src={sport.image} alt={sport.title} />
            <h2>{sport.title}</h2>
            <p>{sport.description}</p>
            <a href={sport.link} target="_blank" rel="noopener noreferrer">
              Equipo: {sport.team}
            </a>
          </div>
        ))}
      </div>

      <div className="create-link">
        <Link to="/create">Crear una nueva tarjeta</Link>
      </div>
    </div>
  );
};

export default Content;
