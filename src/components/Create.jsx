import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ addSport }) => {
  const history = useNavigate();

  const initialFormData = {
    title: '',
    description: '',
    category: '',
    team: '',
    link: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const categories = ['Motor', 'Mesa', 'Equipo'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title || formData.title.length < 3 || formData.title.length > 20) {
      errors.title = 'El título debe tener entre 3 y 20 caracteres.';
    }
    if (!formData.description || formData.description.length < 50 || formData.description.length > 200) {
      errors.description = 'La descripción debe tener entre 50 y 200 caracteres.';
    }
    if (!formData.category) {
      errors.category = 'Por favor, seleccione una categoría.';
    }
    if (!formData.team || formData.team.length < 3 || formData.team.length > 15) {
      errors.team = 'El nombre del equipo debe tener entre 3 y 15 caracteres.';
    }
    if (!formData.link || formData.link.length < 10 || formData.link.length > 50) {
      errors.link = 'El enlace debe tener entre 10 y 50 caracteres.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Los datos son válidos, se pueden agregar
      addSport(formData);
      setFormData(initialFormData);
      history.push('/content'); // Redirige a la vista Content
    } else {
      // Hay errores en el formulario
      setFormErrors(errors);
    }
  };

  return (
    <div className="create">
      <h1>Crear una nueva tarjeta de deporte</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {formErrors.title && <span className="error">{formErrors.title}</span>}
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {formErrors.description && <span className="error">{formErrors.description}</span>}
        </div>

        <div className="form-group">
          <label>Categoría:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {formErrors.category && <span className="error">{formErrors.category}</span>}
        </div>

        <div className="form-group">
          <label>Equipo:</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
          {formErrors.team && <span className="error">{formErrors.team}</span>}
        </div>

        <div className="form-group">
          <label>Enlace:</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
          {formErrors.link && <span className="error">{formErrors.link}</span>}
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Create;
