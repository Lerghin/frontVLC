import { useEffect, useState } from 'react';
import { useChannelContext } from '../context/ChannelContext';
import { getChannels } from '../services/api';
import ChannelList from '../components/ChannelList';
import AddChannelForm from '../components/FormAddChannel';

const HomePage = () => {
    const { channels, setChannels } = useChannelContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [sortedDoctors, setSortedDoctors] = useState([]);



    
    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await getChannels();
                if (response.data && response.data.response) {
                    setChannels(response.data.response);
                } else {
                    throw new Error('Datos no válidos');
                }
            } catch (err) {
                console.log('Error to get channels', err);
                setError('Error fetching channels. Please try again later.');
            } finally {
                setLoading(false); // Cambio en el estado de carga
            }
        };
        fetchChannels();
    }, [setChannels]);


    return (
        <div className='container'>
            <div className='title'>
                <h1 className='btn-astra'>Fibex Penta</h1>
                <div>
             
                </div>
             
                <AddChannelForm className='btn-astra add-channel' />
            </div>

            {loading && <div className="spinner">Loading...</div>}  {/* Indicador de carga */}
            {error && <div className="alert alert-danger">{error}</div>}
            <ChannelList channels={channels} />
        </div>
    );
};

export default HomePage;
