import React, { useState, useEffect } from 'react';
import { api } from '../services/api'; // Asumiendo que `api` está configurado correctamente
import Modal from './Modal';

import { MdEdit } from 'react-icons/md';

const FormEditChannel = ({ channel, onUpdate }) => {
  const [updatedChannel, setUpdatedChannel] = useState({
    name: channel.name,
    pentaNumber: channel.pentaNummber,
    url: channel.url,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Si el canal cambia, actualiza el formulario
    setUpdatedChannel({
      name: channel.name,
      pentaNumber: channel.pentaNummber,
      url: channel.url,
    });
  }, [channel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedChannel({ ...updatedChannel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Actualizamos el canal a través de la API
      await api.put(`channels/${channel._id}`, updatedChannel);
      setSuccess(true);
      setError(null);
      alert('Canal actualizado satisfactoriamente');
      setIsModalOpen(false);
      if (onUpdate) onUpdate(updatedChannel); // Llamamos al onUpdate para actualizar el estado en el componente padre
    } catch (err) {
      setSuccess(false);
      setError('Hubo un error al actualizar el canal');
      console.error(err);
    }
  };

  return (
    <div>

 <MdEdit className="m-2 text-primary" onClick={() => setIsModalOpen(true)} >  
    Editar Canal
 </MdEdit >

 <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="add-channel-form">
          <h2>Editar Canal</h2>

          {/* Channel URL */}
          <div className="form-group">
            <label htmlFor="url">URL del Canal:</label>
            <input
              type="text"
              name="url"
              id="url"
              value={updatedChannel.url}
              onChange={handleChange}
              placeholder="Ingrese la URL del canal"
              required
            />
          </div>

          {/* Channel Name */}
          <div className="form-group">
            <label htmlFor="name">Nombre del Canal:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={updatedChannel.name}
              onChange={handleChange}
              placeholder="Ingrese el nombre del canal"
              required
            />
          </div>

          {/* Penta Number */}
          <div className="form-group">
            <label htmlFor="pentaNumber">Número Penta:</label>
            <input
              type="text"
              name="pentaNumber"
              id="pentaNumber"
              value={updatedChannel.pentaNumber}
              onChange={handleChange}
              placeholder="Ingrese el número Penta"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Guardar Cambios</button>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Canal actualizado correctamente</div>}
        </form>
       
      </Modal>
    </div>
  );
};

export default FormEditChannel;
