import { useEffect, useState } from 'react';
import ChannelProvider, { useChannelContext } from '../context/ChannelContext';
import { getChannels } from '../services/api';
import ChannelList from '../components/ChannelList';
import AddChannelForm from '../components/FormAddChannel';



const HomePage = () => {

    const { channels, setChannels } = useChannelContext();
    const [error, setError] = useState(null); // Estado para manejar el error

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await getChannels();
                setChannels(response.data.response);
            } catch (err) {
                console.log('Error to get channels', err);
                setError('Error fetching channels. Please try again later.'); // Mostrar error si hay problemas
            }
        };
        fetchChannels();
    }, [setChannels]);

    return (

        <div className='container'>
            <AddChannelForm />
            <div className='title'>
                <h1>Fibex Penta</h1>
                <h1>
                <a href="/astra">a</a>
                </h1>
            </div>
            
            {error && <div className="alert alert-danger">{error}</div>} 
            
            <ChannelList channels={channels} />
        </div>
        
    );
};

export default HomePage;
