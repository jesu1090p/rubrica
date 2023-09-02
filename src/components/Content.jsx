import { useState, useEffect } from 'react';
import '../styles/content.css'

function Content() {
  const [filteredSports, setFilteredSports] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const storedData = localStorage.getItem('sportsData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);

    if (selectedCategory === 'Todos') {
      setFilteredSports(parsedData);
    } else {
      const filtered = parsedData.filter((sport) => sport.category === selectedCategory);
      setFilteredSports(filtered);
    }
  }
}, [selectedCategory]);

  return (
    <div>
      <div className="selector">
        <h1 className='content'>Contenido de Deportes</h1>
        <label>Filtrar por categoría:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
          <option value="Todos">Todos</option>
          <option value="Deportes de motor">Deportes de motor</option>
          <option value="Deportes de mesa">Deportes de mesa</option>
          <option value="Deportes por equipo">Deportes por equipo</option>
        </select>
      </div>
      <div className="sports-cards">
        {filteredSports.map((sport) => (
          <div className="sport-card" key={sport.id}>
            <img src={sport.image} alt={sport.title} width={200} />
            <h2 style={{textAlign:"center"}}>{sport.title}</h2>
            <p>{sport.description}</p>
            <p>
              Equipo: <a href={sport.teamURL} target="_blank" rel="noopener noreferrer">{sport.name}</a>
              <br/>
              Categoria: <span>{sport.category}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
