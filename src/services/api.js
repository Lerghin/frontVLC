import axios from 'axios'


export const api = axios.create({

baseURL: 'http://localhost:5000/api',


})
export const getChannels=() =>api.get('/channels')
export const getAstraChannels=() =>api.get('/astra')
export const addChannel = async (newChannel) => {
    try {
      const response = await api.post('/channels', newChannel);
      return response.data;  // Return the created channel data
    } catch (error) {
      console.error("Error adding channel:", error);
      throw error;  // Optionally throw the error to be caught in the component
    }
  };