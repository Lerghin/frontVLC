import { useState } from 'react';
import { addChannel } from '../services/api';
import './formAddChannel.css'; 

const AddChannelForm = () => {
  const [channel, setChannel] = useState({ url: '', name: '', pentaNummber: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setChannel({ ...channel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newChannel = await addChannel(channel);
      console.log('Channel added:', newChannel);
      setSuccess(true);
      setError(null);
      alert('Guardado satisfactoriamente');
    } catch (err) {
      setSuccess(false);
      setError("Failed to add channel.");
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-channel-form">
      <h2>Agregar Canal</h2>

      {/* Channel URL */}
      <div className="form-group">
        <label htmlFor="url">Channel URL:</label>
        <input
          type="text"
          name="url"
          id="url"
          value={channel.url}
          onChange={handleChange}
          placeholder="Enter Channel URL"
          required
        />
      </div>

      {/* Channel Name */}
      <div className="form-group">
        <label htmlFor="name">Channel Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={channel.name}
          onChange={handleChange}
          placeholder="Enter Channel Name"
          required
        />
      </div>

      {/* Penta Number */}
      <div className="form-group">
        <label htmlFor="pentaNummber">Penta Number:</label>
        <input
          type="text"
          name="pentaNummber"
          id="pentaNummber"
          value={channel.pentaNumber}
          onChange={handleChange}
          placeholder="Enter Penta Number"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">Add Channel</button>

      {/* Success or Error Messages */}
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Channel added successfully!</div>}
    </form>
  );
};

export default AddChannelForm;
