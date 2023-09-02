import { useState, useEffect } from 'react';
import '../styles/overview.css'

const Overview = () => {
    const [favoritos, setFavoritos] = useState({
    organization: false,
    partner: false,
    data: false,
    glossary: false,
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleFavoritoClick = (option) => {
    setFavoritos((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));

   
    setShowMessage(favoritos[option] ? 'anadido' : 'removido');
    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
  };

  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <div className="overview">
      <div className="card">
        <img src="https://img.icons8.com/?size=512&id=117506&format=png" alt="Organization" width={200}/>
        <h2>Add your organization</h2>
        <p>Un equipo dedicado con visión y pasión.</p>
        <button
          onClick={() => handleFavoritoClick('organization')}
          className={favoritos.organization ? 'favorito' : ''}
        >
          {favoritos.organization ? <img src="https://img.icons8.com/?size=512&id=DFU1kReSUccu&format=png" alt="favorito" width={18}/> : '💔'}
        </button>
      </div>

      <div className="card">
        <img src="https://img.icons8.com/?size=512&id=qRw39Ga7doP7&format=png" alt="Partner" width={200}/>
        <h2>Becoming a partner</h2>
        <p>Forjar alianzas estratégicas poderosas.</p>
        <button
          onClick={() => handleFavoritoClick('partner')}
          className={favoritos.partner ? 'favorito' : ''}
        >
          {favoritos.partner ? <img src="https://img.icons8.com/?size=512&id=DFU1kReSUccu&format=png" alt="favorito"  width={18}/> : '💔'}
        </button>
      </div>

      <div className="card">
        <img src="https://img.icons8.com/?size=512&id=439i3V9ejb2W&format=png" alt="Data" width={200}/>
        <h2>Where the data comes from</h2>
        <p>El secreto detrás de nuestros insights.</p>
        <button
          onClick={() => handleFavoritoClick('data')}
          className={favoritos.data ? 'favorito' : ''}
        >
          {favoritos.data ? <img src="https://img.icons8.com/?size=512&id=DFU1kReSUccu&format=png" alt="favorito" width={18}/> : '💔'}
        </button>
      </div>

      <div className="card">
        <img src="https://img.icons8.com/?size=512&id=Yc9EUUns9Lvo&format=png" alt="Glossary" width={200}/>
        <h2>Glossary & definitions</h2>
        <p>La clave de nuestro lenguaje.</p>
        <button
          onClick={() => handleFavoritoClick('glossary')}
          className={favoritos.glossary ? 'favorito' : ''}
        >
          {favoritos.glossary ? <img src="https://img.icons8.com/?size=512&id=DFU1kReSUccu&format=png" alt="favorito" width={18}/> : '💔'}
        </button>
      </div>

      <div className="message">
      {showMessage && (
          <div className="message-text">
            {showMessage === 'anadido' ? 'Añadido a favoritos' : 'Removido de favoritos'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
