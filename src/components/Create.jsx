import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/create.css';

function Create() {
  const navigate = useNavigate();
  const [newSport, setNewSport] = useState({
    title: '',
    description: '',
    category: '',
    name: '',
    teamURL: '',
    image: '',
  });

  const [sportsData, setSportsData] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    title: '',
    description: '',
    category: '',
    name: '',
    teamURL: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('sportsData');
    if (storedData) {
      setSportsData(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSport({
      ...newSport,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      title: '',
      description: '',
      category: '',
      name: '',
      teamURL: '',
    };

    if (newSport.title.length < 3 || newSport.title.length > 20) {
      isValid = false;
      errors.title = 'El título debe tener entre 3 y 20 caracteres';
    }

    if (newSport.description.length < 50 || newSport.description.length > 200) {
      isValid = false;
      errors.description = 'La descripción debe tener entre 50 y 200 caracteres';
    }

    if (!newSport.category) {
      isValid = false;
      errors.category = 'Seleccione una categoría';
    }

    if (newSport.name.length < 3 || newSport.name.length > 15) {
      isValid = false;
      errors.name = 'El nombre del equipo debe tener entre 3 y 15 caracteres';
    }

    if (newSport.teamURL.length < 10 || newSport.teamURL.length > 50) {
      isValid = false;
      errors.teamURL = 'La URL del equipo debe tener entre 10 y 50 caracteres';
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSportsData([...sportsData, newSport]);

      setNewSport({
        title: '',
        description: '',
        category: '',
        name: '',
        teamURL: '',
        image: '',
      });

      setShowSuccessMessage(true);

      localStorage.setItem('sportsData', JSON.stringify([...sportsData, newSport]));
      setTimeout(() => {
        navigate('/content');
      }, 2000);
    }
  };

  return (
    <div className="create-container">
      <h1>Crear Nuevo Deporte</h1>
      {showSuccessMessage && <p className="success-message">Deporte creado con éxito.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Deporte"
            value={newSport.title}
            onChange={handleInputChange}
            required
          />
          {errorMessages.title && <p className="error-message">{errorMessages.title}</p>}
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Descripción"
            value={newSport.description}
            onChange={handleInputChange}
            required
          />
          {errorMessages.description && <p className="error-message">{errorMessages.description}</p>}
        </div>
        <div className="form-group">
          <select
            name="category"
            value={newSport.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Deportes de motor">Deportes de motor</option>
            <option value="Deportes de mesa">Deportes de mesa</option>
            <option value="Deportes por equipo">Deportes por equipo</option>
          </select>
          {errorMessages.category && <p className="error-message">{errorMessages.category}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Nombre del equipo"
            value={newSport.name}
            onChange={handleInputChange}
            required
          />
          {errorMessages.name && <p className="error-message">{errorMessages.name}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="teamURL"
            placeholder="Pagina web"
            value={newSport.teamURL}
            onChange={handleInputChange}
            required
          />
          {errorMessages.teamURL && <p className="error-message">{errorMessages.teamURL}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            placeholder="URL de la imagen"
            value={newSport.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Guardar Deporte</button>
      </form>
    </div>
  );
}

export default Create;
