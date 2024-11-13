import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addChannel } from '../services/api';  // Asegúrate de tener esta función para interactuar con tu API

const FormAddChannel = () => {
  // Estado para almacenar los datos del formulario
  const [channel, setChannel] = useState({
    url: "",
    name: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para manejar el estado de envío del formulario

  // Maneja el cambio de los inputs
  const handleChange = (e) => {
    setChannel({ ...channel, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de página

    if (!channel.url || !channel.name) {
      alert('Por favor complete todos los campos.');
      return;
    }

    setIsSubmitting(true); // Deshabilitar el botón y mostrar que se está enviando

    try {
      // Enviar los datos al backend (asegúrate de que esta función esté definida en `services/api.js`)
      const response = await addChannel(channel);
      console.log('Canal agregado:', response.data);
      setChannel({ url: '', name: '' }); // Limpiar los campos del formulario después de agregar el canal
    } catch (error) {
      console.error('Error al agregar el canal:', error);
    }

    setIsSubmitting(false); // Volver a habilitar el botón
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUrl">
        <Form.Label>Channel HLS URL</Form.Label>
        <Form.Control
          value={channel.url}
          onChange={handleChange}
          type="text"
          placeholder="Enter URL"
          name="url" // Asegúrate de que el nombre coincide con el estado
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Channel Name</Form.Label>
        <Form.Control
          value={channel.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Channel Name"
          name="name" // Asegúrate de que el nombre coincide con el estado
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default FormAddChannel;
