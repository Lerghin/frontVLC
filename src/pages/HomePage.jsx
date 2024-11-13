import  { useEffect } from 'react'
import { useChannelContext } from '../context/ChannelContext';
import { getChannels } from '../services/api';
import ChannelList from '../components/ChannelList';
import AddChannelForm from '../components/FormAddChannel';


const HomePage = () => {
    const {channels, setChannels}= useChannelContext();
 
  useEffect(() =>{
   const fetchChannels= async() =>{
    try{
     const response= await getChannels();
     setChannels(response.data.response);
    }catch(err){
  console.log('Error to get channels',err);

   } 
}
fetchChannels()

  },[setChannels])
    
  
    return (
    <div className='container'>
        <AddChannelForm/>
        <h1>Fibex Play</h1>
      
        <ChannelList channels={channels}>

        </ChannelList>
    </div>
  )
}

export default HomePage