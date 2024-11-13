import { useState } from 'react';
import { addChannel } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddChannelForm = () => {

  const [channel, setChannel] = useState({ url: '', name: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setChannel({ ...channel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newChannel = await addChannel(channel);
      console.log('Channel added:', newChannel);
      alert('Guardado Satisfactoriamente')
      
    } catch (err) {
      setError("Failed to add channel.");
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Channel URL:</label>
        <input
          type="text"
          name="url"
          value={channel.url}
          onChange={handleChange}
          placeholder="Enter Channel URL"
        />
      </div>
      <div>
        <label>Channel Name:</label>
        <input
          type="text"
          name="name"
          value={channel.name}
          onChange={handleChange}
          placeholder="Enter Channel Name"
        />
      </div>
      <button type="submit">Add Channel</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};
export default AddChannelForm